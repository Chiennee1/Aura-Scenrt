
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../App';
import { Header } from '../components/Layout';

const ProductDetailPage: React.FC = () => {
    const { id } = useParams();
    const { products, addToCart, wishlist, toggleWishlist } = useApp();
    const navigate = useNavigate();
    
    const product = products.find(p => p.id === id);

    if (!product) return <div className="text-center pt-20">Không tìm thấy sản phẩm</div>;

    const handleAddToCart = () => {
        addToCart(product);
        navigate('/cart');
    };

    const isFavorite = wishlist.includes(product.id);

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pb-28 animate-fade-in">
            <Header showBack rightAction={
                <button className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" onClick={() => navigate('/cart')}>
                    <span className="material-symbols-outlined">shopping_bag</span>
                </button>
            } transparent />
            
            {/* Image Gallery */}
            <div className="px-4">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-card-dark relative group">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                     <button 
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute bottom-4 right-4 size-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all active:scale-95 hover:bg-white/30"
                    >
                        <span className={`material-symbols-outlined text-2xl ${isFavorite ? 'fill-1 text-red-500' : ''}`}>favorite</span>
                    </button>
                </div>
            </div>

            {/* Info */}
            <div className="px-5 pt-8">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1 pr-4">
                        <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1.5">{product.brand}</p>
                        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 leading-tight">{product.name}</h1>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{product.concentration} • {product.gender}</p>
                    </div>
                    <div className="flex flex-col items-end bg-white dark:bg-white/5 px-3 py-2 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm">
                         <div className="flex items-center gap-1 mb-0.5">
                            <span className="material-symbols-outlined text-yellow-400 fill-1 text-lg">star</span>
                            <span className="font-bold text-lg">{product.rating}</span>
                         </div>
                         <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">{product.reviews} đánh giá</p>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                    <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Mô tả mùi hương</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                        {product.description}
                    </p>
                    
                    <div className="bg-white dark:bg-card-dark rounded-2xl p-5 shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5">
                        <h4 className="font-bold text-sm mb-4 uppercase tracking-wide text-gray-400">Các tầng hương</h4>
                        <div className="space-y-4 text-sm relative">
                            <div className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-gray-100 dark:bg-white/10"></div>
                            <div className="flex gap-4 items-start relative">
                                <div className="size-3 rounded-full bg-primary ring-4 ring-white dark:ring-card-dark relative z-10"></div>
                                <div>
                                    <span className="block text-xs font-bold text-gray-400 uppercase mb-0.5">Hương đầu</span>
                                    <span className="text-gray-900 dark:text-white font-semibold">{product.notes.top}</span>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start relative">
                                <div className="size-3 rounded-full bg-orange-400 ring-4 ring-white dark:ring-card-dark relative z-10"></div>
                                <div>
                                    <span className="block text-xs font-bold text-gray-400 uppercase mb-0.5">Hương giữa</span>
                                    <span className="text-gray-900 dark:text-white font-semibold">{product.notes.middle}</span>
                                </div>
                            </div>
                             <div className="flex gap-4 items-start relative">
                                <div className="size-3 rounded-full bg-gray-800 dark:bg-gray-500 ring-4 ring-white dark:ring-card-dark relative z-10"></div>
                                <div>
                                    <span className="block text-xs font-bold text-gray-400 uppercase mb-0.5">Hương cuối</span>
                                    <span className="text-gray-900 dark:text-white font-semibold">{product.notes.base}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Action */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl p-4 px-6 border-t border-gray-200 dark:border-white/5 z-50 pb-safe">
                <div className="flex items-center justify-between max-w-md mx-auto gap-4">
                    <div className="flex flex-col">
                        <p className="text-xs font-medium text-gray-500">Tổng cộng</p>
                        <p className="text-2xl font-extrabold text-primary">{product.price.toLocaleString('vi-VN')}₫</p>
                    </div>
                    <button 
                        onClick={handleAddToCart}
                        className="flex-1 h-14 px-6 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                    >
                        <span className="material-symbols-outlined text-xl">add_shopping_cart</span>
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
