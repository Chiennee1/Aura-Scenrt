
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../App';
import { PRODUCTS } from '../constants';

const HomePage: React.FC = () => {
    const { user, products, wishlist, toggleWishlist } = useApp();
    const navigate = useNavigate();
    const trendingProducts = products.filter(p => p.isTrending);

    return (
        <div className="pb-8">
            {/* Header */}
            <div className="flex items-center p-4 justify-between sticky top-0 z-30 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-cover bg-center border-2 border-white dark:border-white/10 shadow-sm" style={{ backgroundImage: `url(${user.avatar})` }}></div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Xin chào,</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{user.name.split(' ').pop()}!</p>
                    </div>
                </div>
                <button onClick={() => navigate('/notifications')} className="size-10 flex items-center justify-center rounded-xl bg-white dark:bg-card-dark border border-gray-100 dark:border-white/5 shadow-sm active:scale-95 transition-transform relative">
                    <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">notifications</span>
                    <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white dark:border-card-dark"></span>
                </button>
            </div>

            {/* Search Bar Dummy */}
            <div className="px-4 mb-6">
                <div 
                    onClick={() => navigate('/search')}
                    className="flex items-center h-12 w-full bg-white dark:bg-card-dark rounded-xl px-4 shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5 cursor-pointer group hover:border-primary/50 transition-colors"
                >
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors mr-3">search</span>
                    <span className="text-gray-400 text-sm font-medium">Tìm kiếm nước hoa...</span>
                </div>
            </div>

            {/* Hero Banners */}
            <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 pb-6 snap-x">
                <div className="min-w-[85vw] h-48 rounded-2xl bg-cover bg-center snap-center relative overflow-hidden group shadow-lg" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrab4Id5Z1CbvxxSLdYZ-TbZ6jVtjejnn4PRqD6Wrnt-IXiQdiKAKQZSH0OgCZ88CB_GTDGSZ0MH9h03VcbsAS1G2KtkLqi2XfQXsQPDNPwsjkeWwo8kY6Y2EBCSuQXRnfux_cn-9t5ASD7N_dbBLwyy6QId3NYLdKqjpZSBZ4ciR-Vry_se_MXfk5qvKFhP7YjJ46MHMiSp9VZ0l1y3QIYKHIjfPgXdKqc8DGWxg73w-oBN4tmIO31XR-mX_CjP3JwPAi_j1HSMo')` }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent p-6 flex flex-col justify-center">
                        <span className="text-primary-dark bg-white/90 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2 w-fit shadow-sm">Mới ra mắt</span>
                        <h3 className="text-white text-2xl font-extrabold mb-1 max-w-[70%] leading-tight drop-shadow-md">Bộ sưu tập<br/>Mùa Hè</h3>
                        <p className="text-gray-200 text-xs mb-4 font-medium">Khám phá hương thơm tươi mát</p>
                        <button onClick={() => navigate('/search')} className="w-fit bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg text-xs font-bold shadow-lg shadow-primary/30 transition-colors">Mua ngay</button>
                    </div>
                </div>
                <div className="min-w-[85vw] h-48 rounded-2xl bg-cover bg-center snap-center relative overflow-hidden shadow-lg" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBipxvJQPNYAP9V4BXdR3EbVzpi6XkmbX_i2fqda-RT0HU1hHCA-Fh-Azs58kvcIEbxAzeBupfd_F7b9u2AFn_sw0TpzWoMw1-kdQTBz-4O5KKg3GyvncxbjX7UnIulBaE4B21omhlKqY6yBP0FDvaFp0ONSD-VsQRr3F0r_EQM86rUEhpJMLxHrzYw0ngNxX5t08KcrXORxyRkQXjjAdYQNg6xtlpGnJ2r5_TjlCWAfe6mlLOx3ORSez3sooi69I474WdHWNCkXAo')` }}>
                     <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent p-6 flex flex-col justify-center">
                        <span className="text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2 w-fit">Ưu đãi</span>
                        <h3 className="text-white text-2xl font-extrabold mb-2 max-w-[70%] drop-shadow-md">Giảm đến 30%</h3>
                        <button onClick={() => navigate('/search')} className="w-fit bg-white text-gray-900 px-5 py-2 rounded-lg text-xs font-bold mt-2 shadow-lg">Xem ngay</button>
                    </div>
                </div>
            </div>

            {/* Personalized Section */}
            <div className="px-4 py-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Dành riêng cho bạn</h2>
                    <button onClick={() => navigate('/search')} className="text-primary text-xs font-bold hover:underline">Xem tất cả</button>
                </div>
                <div className="flex overflow-x-auto no-scrollbar gap-4 pb-2">
                    {PRODUCTS.slice(0, 5).map(product => {
                        const isFavorite = wishlist.includes(product.id);
                        return (
                            <div key={product.id} className="min-w-[140px] space-y-2 group relative">
                                <div onClick={() => navigate(`/product/${product.id}`)} className="aspect-square rounded-2xl bg-white dark:bg-card-dark overflow-hidden relative shadow-sm border border-gray-100 dark:border-white/5 cursor-pointer">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
                                    className="absolute top-2 right-2 size-8 rounded-full bg-black/20 hover:bg-white/90 hover:text-red-500 backdrop-blur-md flex items-center justify-center text-white transition-colors"
                                >
                                    <span className={`material-symbols-outlined text-lg ${isFavorite ? 'fill-1 text-red-500' : ''}`}>favorite</span>
                                </button>
                                <div onClick={() => navigate(`/product/${product.id}`)} className="px-1 cursor-pointer">
                                    <h3 className="font-bold text-sm text-gray-900 dark:text-white truncate">{product.name}</h3>
                                    <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide">{product.brand}</p>
                                    <p className="text-primary font-bold text-sm mt-1">{product.price.toLocaleString('vi-VN')}₫</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Trending Section */}
             <div className="px-4 py-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">Xu hướng</h2>
                    <button onClick={() => navigate('/search')} className="text-primary text-xs font-bold hover:underline">Xem tất cả</button>
                </div>
                <div className="flex overflow-x-auto no-scrollbar gap-4">
                    {trendingProducts.map(product => (
                        <div key={product.id} onClick={() => navigate(`/product/${product.id}`)} className="min-w-[160px] bg-white dark:bg-card-dark p-3 rounded-2xl shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5 cursor-pointer hover:border-primary/20 transition-colors">
                             <div className="aspect-square rounded-xl bg-gray-50 dark:bg-black/20 overflow-hidden mb-3 relative">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-bold text-sm text-gray-900 dark:text-white truncate">{product.name}</h3>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-2 uppercase">{product.brand}</p>
                             <div className="flex justify-between items-center">
                                <p className="text-primary font-bold text-sm">{product.price.toLocaleString('vi-VN')}₫</p>
                                <div className="flex items-center text-[10px] text-gray-500 font-medium">
                                    <span className="material-symbols-outlined text-[14px] text-yellow-400 mr-0.5 fill-1">star</span>
                                    {product.rating}
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
             {/* CTA Quiz */}
            <div className="px-4 py-6">
                <div 
                    onClick={() => navigate('/quiz')}
                    className="w-full bg-gradient-to-br from-primary to-orange-600 rounded-2xl p-6 text-center shadow-glow cursor-pointer relative overflow-hidden group"
                >
                    <div className="relative z-10">
                        <div className="size-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-2xl text-white">diamond</span>
                        </div>
                        <h3 className="text-white text-lg font-bold mb-1">Tìm mùi hương của bạn?</h3>
                        <p className="text-white/90 text-xs font-medium mb-4 max-w-[200px] mx-auto">Làm bài trắc nghiệm nhanh để nhận gợi ý phù hợp nhất.</p>
                        <span className="bg-white text-primary px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md group-hover:scale-105 transition-transform inline-block">Bắt đầu ngay</span>
                    </div>
                     <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                     <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
