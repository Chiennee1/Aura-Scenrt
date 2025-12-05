import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../App';
import { Header } from '../components/Layout';

const CartPage: React.FC = () => {
    const { cart, updateQuantity, removeFromCart, clearCart } = useApp();
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark pb-40 animate-fade-in">
            <Header showBack title="Giỏ hàng của bạn" rightAction={
                 cart.length > 0 && (
                    <button onClick={clearCart} className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined text-xl">delete_sweep</span>
                    </button>
                )
            }/>

            <div className="px-4 flex flex-col gap-4 mt-2">
                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center pt-24 text-center px-6">
                        <div className="size-32 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 animate-bounce">
                            <span className="material-symbols-outlined text-5xl text-gray-300 dark:text-gray-600">production_quantity_limits</span>
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Giỏ hàng đang trống</h3>
                        <p className="text-gray-500 mb-8 max-w-xs">Có vẻ như bạn chưa chọn được mùi hương ưng ý nào.</p>
                        <button onClick={() => navigate('/search')} className="px-8 py-3.5 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors">Khám phá ngay</button>
                    </div>
                ) : (
                    cart.map(item => (
                        <div key={item.id} className="flex gap-4 p-3 bg-white dark:bg-card-dark rounded-2xl shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5 items-center animate-slide-up">
                            <div className="size-24 shrink-0 bg-gray-50 dark:bg-white/5 rounded-xl overflow-hidden relative">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col h-24 justify-between py-1">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-gray-900 dark:text-white line-clamp-1 text-base">{item.name}</h4>
                                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 -mt-1 -mr-1 p-1">
                                            <span className="material-symbols-outlined text-lg">close</span>
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-500 font-medium">{item.brand} • {item.concentration}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-primary font-bold">{item.price.toLocaleString('vi-VN')}₫</p>
                                    <div className="flex items-center gap-3 bg-gray-50 dark:bg-white/5 rounded-lg p-1 border border-gray-100 dark:border-white/5">
                                        <button onClick={() => updateQuantity(item.id, -1)} className="size-7 flex items-center justify-center bg-white dark:bg-white/10 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-white/20 transition-colors">
                                            <span className="material-symbols-outlined text-sm">{item.quantity === 1 ? 'delete' : 'remove'}</span>
                                        </button>
                                        <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)} className="size-7 flex items-center justify-center bg-white dark:bg-white/10 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-white/20 transition-colors">
                                            <span className="material-symbols-outlined text-sm">add</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {cart.length > 0 && (
                <div className="fixed bottom-[80px] left-0 right-0 p-5 bg-white dark:bg-background-dark border-t border-gray-200 dark:border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] pb-safe">
                    <div className="relative mb-4">
                        <input type="text" placeholder="Nhập mã giảm giá" className="w-full pl-4 pr-24 py-3.5 rounded-xl bg-gray-50 dark:bg-card-dark border border-gray-200 dark:border-white/10 text-sm font-medium focus:ring-primary focus:border-primary" />
                        <button className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 rounded-lg text-xs font-bold text-gray-700 dark:text-white transition-colors">Áp dụng</button>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-500 font-medium">Tổng cộng ({cart.length} món)</span>
                        <span className="text-2xl font-extrabold text-gray-900 dark:text-white">{total.toLocaleString('vi-VN')}₫</span>
                    </div>
                    <button onClick={() => navigate('/checkout')} className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-colors active:scale-[0.99]">
                        Tiến hành thanh toán
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;