
import React from 'react';
import { Header } from '../components/Layout';

const NotificationsPage: React.FC = () => {
    const notifications = [
        {
            id: 1,
            type: 'promo',
            title: 'Ưu đãi độc quyền!',
            message: 'Giảm giá 20% cho tất cả sản phẩm Chanel. Chỉ trong hôm nay.',
            time: '15 phút trước',
            icon: 'local_offer',
            color: 'bg-orange-500',
            isRead: false,
        },
        {
            id: 2,
            type: 'order',
            title: 'Đơn hàng đang vận chuyển',
            message: 'Đơn hàng #8923745 của bạn đã được giao cho đơn vị vận chuyển.',
            time: '2 giờ trước',
            icon: 'local_shipping',
            color: 'bg-blue-500',
            isRead: true,
        },
        {
            id: 3,
            type: 'system',
            title: 'Chào mừng bạn mới',
            message: 'Cảm ơn bạn đã tham gia Aura Scents. Hãy cập nhật hồ sơ để nhận quà nhé!',
            time: '1 ngày trước',
            icon: 'waving_hand',
            color: 'bg-green-500',
            isRead: true,
        }
    ];

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark animate-fade-in">
            <Header title="Thông báo" showBack />
            
            <div className="p-4 space-y-4">
                {notifications.map(item => (
                    <div key={item.id} className={`flex gap-4 p-4 bg-white dark:bg-card-dark rounded-2xl border ${item.isRead ? 'border-gray-100 dark:border-white/5' : 'border-primary/20 bg-primary/5 dark:bg-primary/5'}`}>
                        <div className={`size-12 rounded-full flex items-center justify-center shrink-0 text-white shadow-md ${item.color}`}>
                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className={`text-sm font-bold ${item.isRead ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>{item.title}</h4>
                                <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap ml-2">{item.time}</span>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">{item.message}</p>
                        </div>
                        {!item.isRead && (
                            <div className="size-2.5 bg-primary rounded-full shrink-0 mt-1.5"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationsPage;
