
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Layout';
import { useApp } from '../App';

const WishlistPage: React.FC = () => {
    const { products, wishlist, toggleWishlist, addToCart } = useApp();
    const navigate = useNavigate();

    const wishlistProducts = products.filter(p => wishlist.includes(p.id));

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark animate-fade-in flex flex-col">
            <Header title="Sản phẩm yêu thích" showBack />

            <div className="flex-1 p-4">
                {wishlistProducts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-6">
                        <div className="size-32 bg-red-50 dark:bg-red-900/10 rounded-full flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-5xl text-red-300 dark:text-red-500">favorite_border</span>
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Danh sách trống</h3>
                        <p className="text-gray-500 mb-8 max-w-xs">Hãy thả tim cho những mùi hương bạn yêu thích để lưu lại đây nhé.</p>
                        <button onClick={() => navigate('/search')} className="px-8 py-3.5 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors">
                            Khám phá ngay
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4">
                        {wishlistProducts.map(product => (
                            <div key={product.id} className="bg-white dark:bg-card-dark rounded-xl overflow-hidden shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5 group active:scale-[0.98] transition-transform relative">
                                <div onClick={() => navigate(`/product/${product.id}`)} className="aspect-square relative overflow-hidden bg-gray-50 dark:bg-black/20 cursor-pointer">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                </div>
                                <button 
                                    onClick={() => toggleWishlist(product.id)}
                                    className="absolute top-2 right-2 size-8 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center text-red-500 shadow-sm"
                                >
                                    <span className="material-symbols-outlined text-lg fill-1">favorite</span>
                                </button>
                                
                                <div className="p-3">
                                    <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase mb-0.5 tracking-wide">{product.brand}</p>
                                    <h3 onClick={() => navigate(`/product/${product.id}`)} className="font-bold text-sm text-gray-900 dark:text-white truncate mb-2 cursor-pointer">{product.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <p className="text-primary font-bold text-sm">{product.price.toLocaleString('vi-VN')}₫</p>
                                        <button 
                                            onClick={() => addToCart(product)}
                                            className="size-8 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white flex items-center justify-center transition-colors text-gray-600 dark:text-gray-300"
                                        >
                                            <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistPage;
