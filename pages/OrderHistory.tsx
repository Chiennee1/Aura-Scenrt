
import React, { useState } from 'react';
import { Header } from '../components/Layout';
import { MOCK_ORDERS } from '../constants';
import { Order, OrderStatus } from '../types';
import { useNavigate } from 'react-router-dom';

const OrderHistoryPage: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<string>('all');

    const tabs = [
        { id: 'all', label: 'Tất cả' },
        { id: 'shipping', label: 'Đang giao' },
        { id: 'delivered', label: 'Hoàn thành' },
        { id: 'cancelled', label: 'Đã hủy' },
    ];

    const getStatusColor = (status: OrderStatus) => {
        switch (status) {
            case 'delivered': return 'text-green-500 bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/20';
            case 'shipping': return 'text-blue-500 bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20';
            case 'cancelled': return 'text-red-500 bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/20';
            default: return 'text-orange-500 bg-orange-50 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/20';
        }
    };

    const getStatusText = (status: OrderStatus) => {
        switch (status) {
            case 'delivered': return 'Giao thành công';
            case 'shipping': return 'Đang vận chuyển';
            case 'cancelled': return 'Đã hủy';
            case 'pending': return 'Đang xử lý';
        }
    };

    const filteredOrders = activeTab === 'all' 
        ? MOCK_ORDERS 
        : MOCK_ORDERS.filter(order => order.status === activeTab);

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark animate-fade-in flex flex-col">
            <Header title="Lịch sử đơn hàng" showBack />
            
            {/* Tabs */}
            <div className="flex bg-white dark:bg-card-dark border-b border-gray-100 dark:border-white/5 sticky top-[64px] z-10 overflow-x-auto no-scrollbar">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 min-w-[100px] py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-gray-500 dark:text-gray-400'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* List */}
            <div className="flex-1 p-4 space-y-4">
                {filteredOrders.length === 0 ? (
                    <div className="flex flex-col items-center justify-center pt-20 text-gray-400">
                        <span className="material-symbols-outlined text-6xl mb-4">receipt_long</span>
                        <p className="font-medium">Chưa có đơn hàng nào</p>
                    </div>
                ) : (
                    filteredOrders.map(order => (
                        <div key={order.id} className="bg-white dark:bg-card-dark rounded-2xl p-4 shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5 space-y-4">
                            <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-white/5">
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{order.date}</span>
                                    <span className="text-sm font-bold text-gray-900 dark:text-white">{order.id}</span>
                                </div>
                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${getStatusColor(order.status)}`}>
                                    {getStatusText(order.status)}
                                </span>
                            </div>

                            {order.items.map(item => (
                                <div key={item.id} className="flex gap-3">
                                    <div className="size-16 rounded-lg bg-gray-50 dark:bg-white/5 overflow-hidden shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-1">{item.name}</h4>
                                        <p className="text-xs text-gray-500 mt-0.5">{item.brand}</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-xs text-gray-500">x{item.quantity}</span>
                                            <span className="text-sm font-bold text-gray-900 dark:text-white">{item.price.toLocaleString('vi-VN')}₫</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="pt-3 border-t border-gray-100 dark:border-white/5 flex justify-between items-center">
                                <span className="text-sm text-gray-500">Thành tiền:</span>
                                <span className="text-base font-extrabold text-primary">{order.total.toLocaleString('vi-VN')}₫</span>
                            </div>

                            <div className="flex gap-3 pt-1">
                                {order.status === 'delivered' && (
                                    <button 
                                        onClick={() => navigate(`/review/${order.items[0].id}`)} // Simple mock navigation to review first item
                                        className="flex-1 py-2.5 rounded-xl border border-primary text-primary text-sm font-bold hover:bg-primary/5 transition-colors"
                                    >
                                        Đánh giá
                                    </button>
                                )}
                                <button className="flex-1 py-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white text-sm font-bold hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
                                    Mua lại
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default OrderHistoryPage;
