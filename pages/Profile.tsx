
import React from 'react';
import { useApp } from '../App';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
    const { user } = useApp();
    const navigate = useNavigate();

    const menuItems = [
        { icon: 'location_on', label: 'Địa chỉ giao hàng', path: '#' },
        { icon: 'history', label: 'Lịch sử đơn hàng', path: '/orders' },
        { icon: 'favorite', label: 'Sản phẩm yêu thích', path: '/wishlist' },
        { icon: 'local_offer', label: 'Voucher của tôi', path: '/vouchers' },
    ];

    const settingsItems = [
        { icon: 'notifications', label: 'Thông báo', path: '/notifications' },
        { icon: 'lock', label: 'Bảo mật', path: '#' },
        { icon: 'language', label: 'Ngôn ngữ', path: '#' },
        { icon: 'help', label: 'Trung tâm trợ giúp', path: '/help' },
        { icon: 'info', label: 'Về ứng dụng', path: '/about' },
    ];

    const handleLogout = () => {
        // Clear auth logic here if needed
        navigate('/login');
    };

    return (
        <div className="min-h-screen pb-28 animate-fade-in bg-background-light dark:bg-background-dark">
            {/* Header / Avatar */}
            <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center blur-sm scale-110" style={{ backgroundImage: `url(${user.avatar})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light/80 dark:via-background-dark/80 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 px-4">
                    <div className="size-24 rounded-full border-4 border-white dark:border-background-dark shadow-xl mb-3 bg-cover bg-center" style={{ backgroundImage: `url(${user.avatar})` }}></div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{user.name}</h1>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{user.email}</p>
                    <button className="mt-4 px-6 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 hover:bg-white/30 transition-colors">
                        <span className="material-symbols-outlined text-base">edit</span>
                        Chỉnh sửa hồ sơ
                    </button>
                </div>
                
                <div className="absolute top-4 right-4">
                    <button onClick={() => navigate('/settings')} className="size-10 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/20 transition-colors">
                        <span className="material-symbols-outlined">settings</span>
                    </button>
                </div>
            </div>

            <div className="px-4 mt-2 space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                     <div className="bg-white dark:bg-card-dark p-4 rounded-2xl text-center shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5">
                         <span className="block text-xl font-extrabold text-gray-900 dark:text-white mb-1">12</span>
                         <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Đơn hàng</span>
                     </div>
                     <div className="bg-white dark:bg-card-dark p-4 rounded-2xl text-center shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5">
                         <span className="block text-xl font-extrabold text-gray-900 dark:text-white mb-1">5</span>
                         <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Đánh giá</span>
                     </div>
                     <div className="bg-white dark:bg-card-dark p-4 rounded-2xl text-center shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5">
                         <span className="block text-xl font-extrabold text-gray-900 dark:text-white mb-1">Gold</span>
                         <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Thành viên</span>
                     </div>
                </div>

                {/* Account Section */}
                <div>
                    <h3 className="font-bold text-base mb-3 text-gray-900 dark:text-white uppercase tracking-wide px-1">Tài khoản</h3>
                    <div className="bg-white dark:bg-card-dark rounded-2xl overflow-hidden shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5">
                        {menuItems.map((item, idx) => (
                            <div key={item.label} onClick={() => navigate(item.path)} className={`flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors ${idx !== menuItems.length -1 ? 'border-b border-gray-100 dark:border-white/5' : ''}`}>
                                <div className="size-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <span className="flex-1 font-semibold text-sm text-gray-700 dark:text-gray-200">{item.label}</span>
                                <span className="material-symbols-outlined text-gray-400 text-lg">chevron_right</span>
                            </div>
                        ))}
                    </div>
                </div>

                 {/* Settings Section */}
                <div>
                    <h3 className="font-bold text-base mb-3 text-gray-900 dark:text-white uppercase tracking-wide px-1">Cài đặt & Khác</h3>
                    <div className="bg-white dark:bg-card-dark rounded-2xl overflow-hidden shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5">
                        {settingsItems.map((item, idx) => (
                            <div key={item.label} onClick={() => navigate(item.path)} className={`flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors ${idx !== settingsItems.length -1 ? 'border-b border-gray-100 dark:border-white/5' : ''}`}>
                                <div className="size-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <span className="flex-1 font-semibold text-sm text-gray-700 dark:text-gray-200">{item.label}</span>
                                <span className="material-symbols-outlined text-gray-400 text-lg">chevron_right</span>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={handleLogout} className="w-full py-4 text-red-500 font-bold bg-red-50 dark:bg-red-900/10 rounded-2xl hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors border border-red-100 dark:border-red-900/30">
                    Đăng xuất
                </button>
                <p className="text-center text-xs text-gray-400 py-2">Phiên bản 1.0.0</p>
            </div>
        </div>
    );
};

export default ProfilePage;
