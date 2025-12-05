
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../App';
import { FilterState } from '../types';
import { BRANDS, CATEGORIES, GENDERS } from '../constants';

const SearchPage: React.FC = () => {
    const { products, wishlist, toggleWishlist } = useApp();
    const navigate = useNavigate();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    
    // Filter State
    const [filters, setFilters] = useState<FilterState>({
        query: '',
        minPrice: 0,
        maxPrice: 10000000,
        brands: [],
        categories: [],
        genders: [],
        sort: 'popular'
    });

    const activeFilterCount = filters.brands.length + filters.categories.length + filters.genders.length + (filters.minPrice > 0 || filters.maxPrice < 10000000 ? 1 : 0);

    // Optimized Filter Logic
    const filteredProducts = useMemo(() => {
        let result = products;

        if (filters.query) {
            const q = filters.query.toLowerCase();
            result = result.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
        }

        if (filters.brands.length > 0) {
            result = result.filter(p => filters.brands.includes(p.brand));
        }
        
        if (filters.categories.length > 0) {
            result = result.filter(p => filters.categories.includes(p.category));
        }

        if (filters.genders.length > 0) {
            result = result.filter(p => filters.genders.includes(p.gender));
        }

        result = result.filter(p => p.price >= filters.minPrice && p.price <= filters.maxPrice);

        // Sorting
        switch (filters.sort) {
            case 'price_asc':
                result = [...result].sort((a, b) => a.price - b.price);
                break;
            case 'price_desc':
                result = [...result].sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                // Assuming newer items are at the end of the array or have an isNew flag
                result = [...result].reverse(); 
                break;
            case 'popular':
            default:
                result = [...result].sort((a, b) => b.reviews - a.reviews);
                break;
        }

        return result;
    }, [products, filters]);

    const toggleFilter = (type: 'brands' | 'categories' | 'genders', value: string) => {
        setFilters(prev => {
            const current = prev[type];
            const updated = current.includes(value) 
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [type]: updated };
        });
    };

    const clearAllFilters = () => {
        setFilters(prev => ({
            ...prev,
            minPrice: 0,
            maxPrice: 10000000,
            brands: [],
            categories: [],
            genders: []
        }));
    };

    return (
        <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark">
            {/* Header & Search Bar */}
            <div className="px-4 pt-4 pb-2 bg-background-light dark:bg-background-dark sticky top-0 z-20 shadow-sm border-b border-gray-100 dark:border-white/5">
                <div className="flex items-center gap-3 mb-3">
                     <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10">
                        <span className="material-symbols-outlined">arrow_back_ios_new</span>
                    </button>
                    <div className="flex-1 h-11 bg-white dark:bg-card-dark rounded-xl flex items-center px-4 shadow-sm border border-gray-100 dark:border-white/5 transition-colors focus-within:border-primary/50">
                        <span className="material-symbols-outlined text-gray-400 text-xl">search</span>
                        <input 
                            type="text" 
                            className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-2 text-gray-900 dark:text-white placeholder:text-gray-400 font-medium"
                            placeholder="Tìm thương hiệu, tên nước hoa..."
                            value={filters.query}
                            onChange={(e) => setFilters(prev => ({...prev, query: e.target.value}))}
                        />
                         {filters.query && (
                            <button onClick={() => setFilters(prev => ({...prev, query: ''}))}>
                                <span className="material-symbols-outlined text-gray-400 text-lg">cancel</span>
                            </button>
                        )}
                    </div>
                     <button 
                        onClick={() => setIsFilterOpen(true)}
                        className={`size-11 rounded-xl flex items-center justify-center shadow-sm border transition-colors relative ${activeFilterCount > 0 ? 'bg-primary border-primary text-white' : 'bg-white dark:bg-card-dark border-gray-200 dark:border-white/10 text-gray-700 dark:text-white'}`}
                    >
                        <span className="material-symbols-outlined text-xl">tune</span>
                        {activeFilterCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-white text-primary text-[10px] font-bold size-4 rounded-full flex items-center justify-center border border-primary">
                                {activeFilterCount}
                            </span>
                        )}
                    </button>
                </div>
                
                {/* Quick Filters / Sorting Tabs */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                     <button 
                        onClick={() => setFilters(prev => ({...prev, sort: 'popular'}))}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors border ${filters.sort === 'popular' ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-transparent' : 'bg-transparent border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400'}`}
                    >
                        Phổ biến
                    </button>
                    <button 
                        onClick={() => setFilters(prev => ({...prev, sort: prev.sort === 'price_asc' ? 'price_desc' : 'price_asc'}))}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap flex items-center gap-1 transition-colors border ${filters.sort.includes('price') ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-transparent' : 'bg-transparent border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400'}`}
                    >
                        Giá
                        <span className="material-symbols-outlined text-sm">{filters.sort === 'price_asc' ? 'arrow_upward' : filters.sort === 'price_desc' ? 'arrow_downward' : 'swap_vert'}</span>
                    </button>
                     {CATEGORIES.slice(0, 3).map(cat => (
                         <button 
                            key={cat}
                            onClick={() => toggleFilter('categories', cat)}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors border ${filters.categories.includes(cat) ? 'bg-primary text-white border-primary' : 'bg-transparent border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300'}`}
                        >
                            {cat}
                        </button>
                     ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-24">
                <div className="flex justify-between items-baseline mb-4">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Kết quả ({filteredProducts.length})</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    {filteredProducts.map(product => {
                        const isFavorite = wishlist.includes(product.id);
                        return (
                            <div key={product.id} className="bg-white dark:bg-card-dark rounded-xl overflow-hidden shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5 cursor-pointer group active:scale-[0.98] transition-transform relative">
                                <div onClick={() => navigate(`/product/${product.id}`)} className="aspect-square relative overflow-hidden bg-gray-50 dark:bg-black/20">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    {product.isTrending && <span className="absolute top-2 left-2 bg-primary text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">HOT</span>}
                                </div>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
                                    className={`absolute top-2 right-2 size-7 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all ${isFavorite ? 'opacity-100 text-red-500' : 'opacity-0 group-hover:opacity-100 text-gray-600 dark:text-white'}`}
                                >
                                    <span className={`material-symbols-outlined text-base ${isFavorite ? 'fill-1' : ''}`}>favorite</span>
                                </button>
                                <div onClick={() => navigate(`/product/${product.id}`)} className="p-3">
                                    <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase mb-0.5 tracking-wide">{product.brand}</p>
                                    <h3 className="font-bold text-sm text-gray-900 dark:text-white truncate mb-2">{product.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <p className="text-primary font-bold text-sm">{product.price.toLocaleString('vi-VN')}₫</p>
                                        <div className="flex items-center gap-0.5">
                                            <span className="material-symbols-outlined text-[14px] text-yellow-400 fill-1">star</span>
                                            <span className="text-[10px] font-medium text-gray-500">{product.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {filteredProducts.length === 0 && (
                    <div className="flex flex-col items-center justify-center pt-20 text-gray-500">
                        <span className="material-symbols-outlined text-6xl mb-4 text-gray-300 dark:text-gray-600">search_off</span>
                        <p className="font-medium">Không tìm thấy sản phẩm phù hợp</p>
                        <button onClick={clearAllFilters} className="mt-4 text-primary font-bold text-sm">Xóa bộ lọc</button>
                    </div>
                )}
            </div>

            {/* Advanced Filter Drawer */}
            {isFilterOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setIsFilterOpen(false)}></div>
                    <div className="relative w-[85%] max-w-md bg-white dark:bg-background-dark h-full flex flex-col shadow-2xl animate-slide-in-right">
                        {/* Drawer Header */}
                        <div className="flex justify-between items-center p-5 border-b border-gray-100 dark:border-white/5">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Bộ lọc</h2>
                            <div className="flex items-center gap-4">
                                <button onClick={clearAllFilters} className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">Thiết lập lại</button>
                                <button onClick={() => setIsFilterOpen(false)} className="size-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10">
                                    <span className="material-symbols-outlined text-lg">close</span>
                                </button>
                            </div>
                        </div>

                        {/* Drawer Content */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-8">
                            
                            {/* Price Range */}
                            <div>
                                <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-4 uppercase tracking-wide">Khoảng giá</h3>
                                <div className="flex gap-3 items-center">
                                    <div className="flex-1 relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">đ</span>
                                        <input 
                                            type="number" 
                                            value={filters.minPrice} 
                                            onChange={(e) => setFilters(prev => ({...prev, minPrice: Number(e.target.value)}))}
                                            className="w-full bg-gray-50 dark:bg-card-dark border border-gray-200 dark:border-white/10 rounded-lg py-2.5 pl-6 pr-3 text-sm font-medium focus:ring-primary focus:border-primary"
                                            placeholder="0"
                                        />
                                    </div>
                                    <span className="text-gray-400 font-bold">-</span>
                                    <div className="flex-1 relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">đ</span>
                                        <input 
                                            type="number" 
                                            value={filters.maxPrice} 
                                            onChange={(e) => setFilters(prev => ({...prev, maxPrice: Number(e.target.value)}))}
                                            className="w-full bg-gray-50 dark:bg-card-dark border border-gray-200 dark:border-white/10 rounded-lg py-2.5 pl-6 pr-3 text-sm font-medium focus:ring-primary focus:border-primary"
                                            placeholder="Max"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Gender */}
                            <div>
                                <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-4 uppercase tracking-wide">Giới tính</h3>
                                <div className="flex flex-wrap gap-2">
                                    {GENDERS.map(gender => (
                                        <button 
                                            key={gender}
                                            onClick={() => toggleFilter('genders', gender)}
                                            className={`px-5 py-2.5 rounded-lg text-sm font-bold border transition-all ${filters.genders.includes(gender) ? 'border-primary bg-primary text-white shadow-md' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-card-dark text-gray-600 dark:text-gray-300'}`}
                                        >
                                            {gender === 'Male' ? 'Nam' : gender === 'Female' ? 'Nữ' : 'Unisex'}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Categories */}
                             <div>
                                <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-4 uppercase tracking-wide">Nhóm hương</h3>
                                <div className="flex flex-wrap gap-2">
                                    {CATEGORIES.map(cat => (
                                        <button 
                                            key={cat}
                                            onClick={() => toggleFilter('categories', cat)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${filters.categories.includes(cat) ? 'border-primary bg-primary/10 text-primary' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-card-dark text-gray-600 dark:text-gray-300 hover:border-gray-300'}`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Brands */}
                            <div>
                                <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-4 uppercase tracking-wide">Thương hiệu</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {BRANDS.map(brand => (
                                        <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`size-5 rounded border flex items-center justify-center transition-colors ${filters.brands.includes(brand) ? 'bg-primary border-primary' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-white/5 group-hover:border-primary'}`}>
                                                {filters.brands.includes(brand) && <span className="material-symbols-outlined text-white text-sm font-bold">check</span>}
                                            </div>
                                            <input 
                                                type="checkbox" 
                                                className="hidden" 
                                                checked={filters.brands.includes(brand)}
                                                onChange={() => toggleFilter('brands', brand)}
                                            />
                                            <span className={`text-sm ${filters.brands.includes(brand) ? 'text-primary font-bold' : 'text-gray-600 dark:text-gray-300 font-medium'}`}>{brand}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Drawer Footer */}
                         <div className="p-5 border-t border-gray-100 dark:border-white/5 bg-white dark:bg-background-dark">
                            <button 
                                onClick={() => { setIsFilterOpen(false); }}
                                className="w-full bg-primary text-white py-3.5 rounded-xl font-bold shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
                            >
                                Áp dụng ({filteredProducts.length} kết quả)
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchPage;
