import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../App';
import { Header } from '../components/Layout';

const CheckoutPage: React.FC = () => {
    const { cart, user, clearCart } = useApp();
    const navigate = useNavigate();
    const [isSuccess, setIsSuccess] = useState(false);

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 25000;
    const discount = 50000;
    const total = subtotal + shipping - discount;

    const handleOrder = () => {
        // Simulate API call and success
        setTimeout(() => {
             setIsSuccess(true);
             clearCart();
        }, 800);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                <div className="size-28 bg-green-500/10 rounded-full flex items-center justify-center mb-8 animate-bounce">
                    <div className="size-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                        <span className="material-symbols-outlined text-white text-5xl">check</span>
                    </div>
                </div>
                <h1 className="text-3xl font-extrabold mb-3 text-gray-900 dark:text-white">Đặt Hàng Thành Công!</h1>
                <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-xs mx-auto leading-relaxed">Cảm ơn bạn đã tin tưởng và mua sắm tại Aura Scents.</p>
                
                <div className="w-full bg-white dark:bg-card-dark rounded-2xl p-5 mb-8 shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5">
                    <div className="flex justify-between py-3 border-b border-gray-100 dark:border-white/5">
                        <span className="text-gray-500 text-sm font-medium">Mã đơn hàng</span>
                        <span className="font-bold text-gray-900 dark:text-white">#8923745</span>
                    </div>
                    <div className="flex justify-between py-3">
                         <span className="text-gray-500 text-sm font-medium">Giao hàng dự kiến</span>
                         <span className="font-bold text-gray-900 dark:text-white">Thứ Sáu, 24/10</span>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-3">
                    <button onClick={() => navigate('/profile')} className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20">Xem đơn hàng</button>
                    <button onClick={() => navigate('/')} className="w-full bg-transparent text-gray-600 dark:text-gray-300 py-4 rounded-xl font-bold hover:bg-gray-100 dark:hover:bg-white/5">Về trang chủ</button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark pb-32 animate-fade-in">
            <Header showBack title="Thanh toán" />
            
            <div className="flex gap-2 justify-center py-6 mb-2">
                <div className="h-1.5 w-10 rounded-full bg-primary"></div>
                <div className="h-1.5 w-10 rounded-full bg-gray-200 dark:bg-white/10"></div>
                <div className="h-1.5 w-10 rounded-full bg-gray-200 dark:bg-white/10"></div>
            </div>

            <div className="px-4 space-y-6">
                {/* Address */}
                <div>
                    <h3 className="font-bold text-base mb-3 text-gray-900 dark:text-white uppercase tracking-wide">Thông tin giao hàng</h3>
                    <div className="bg-white dark:bg-card-dark p-4 rounded-2xl shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5 flex items-start gap-4">
                        <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <span className="material-symbols-outlined">location_on</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-gray-900 dark:text-white text-sm">{user.addresses[0].name} <span className="text-gray-400 font-normal">| {user.addresses[0].phone}</span></p>
                            <p className="text-sm text-gray-500 mt-1 leading-snug">{user.addresses[0].details}</p>
                        </div>
                        <button className="text-primary font-bold text-xs self-center">Sửa</button>
                    </div>
                </div>

                {/* Shipping */}
                <div>
                    <h3 className="font-bold text-base mb-3 text-gray-900 dark:text-white uppercase tracking-wide">Vận chuyển</h3>
                    <div className="space-y-3">
                        <label className="flex items-center gap-4 bg-white dark:bg-card-dark p-4 rounded-2xl shadow-soft dark:shadow-none border-2 border-primary relative cursor-pointer transition-all">
                            <div className="size-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined">local_shipping</span>
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-900 dark:text-white text-sm">Giao hàng tiêu chuẩn</p>
                                <p className="text-xs text-gray-500 mt-0.5">Dự kiến 2-3 ngày</p>
                            </div>
                            <p className="font-bold text-sm">25.000đ</p>
                            <div className="size-5 rounded-full border-2 border-primary flex items-center justify-center">
                                <div className="size-2.5 bg-primary rounded-full"></div>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Items Summary */}
                <div>
                    <h3 className="font-bold text-base mb-3 text-gray-900 dark:text-white uppercase tracking-wide">Chi tiết đơn hàng</h3>
                    <div className="bg-white dark:bg-card-dark p-5 rounded-2xl shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5 space-y-4">
                        {cart.map(item => (
                            <div key={item.id} className="flex gap-4">
                                <img src={item.image} className="size-12 rounded-lg object-cover bg-gray-50" alt="" />
                                <div className="flex-1">
                                    <p className="font-bold text-sm text-gray-900 dark:text-white line-clamp-1">{item.name}</p>
                                    <p className="text-xs text-gray-500">x{item.quantity}</p>
                                </div>
                                <p className="font-bold text-sm text-gray-900 dark:text-white">{(item.price * item.quantity).toLocaleString('vi-VN')}₫</p>
                            </div>
                        ))}
                        <div className="border-t border-dashed border-gray-200 dark:border-white/10 pt-4 space-y-3">
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Tạm tính</span>
                                <span>{subtotal.toLocaleString('vi-VN')}₫</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Phí vận chuyển</span>
                                <span>{shipping.toLocaleString('vi-VN')}₫</span>
                            </div>
                             <div className="flex justify-between text-sm text-green-500 font-medium">
                                <span>Giảm giá</span>
                                <span>-{discount.toLocaleString('vi-VN')}₫</span>
                            </div>
                             <div className="flex justify-between text-lg font-bold pt-2 text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/5">
                                <span>Tổng cộng</span>
                                <span className="text-primary">{total.toLocaleString('vi-VN')}₫</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-gray-200 dark:border-white/10 pb-safe">
                <button onClick={handleOrder} className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-[0.98]">
                    XÁC NHẬN ĐẶT HÀNG
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;