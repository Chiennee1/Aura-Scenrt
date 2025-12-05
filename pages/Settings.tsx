
import React, { useState } from 'react';
import { Header } from '../components/Layout';
import { useApp } from '../App';

const SettingsPage: React.FC = () => {
    const { isDarkMode, toggleTheme } = useApp();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const settingSections = [
        {
            title: "Tài khoản",
            items: [
                { icon: 'manage_accounts', label: 'Thông tin cá nhân', type: 'link', path: '/profile' },
                { icon: 'lock', label: 'Bảo mật & Mật khẩu', type: 'link', path: '#' },
                { icon: 'location_on', label: 'Sổ địa chỉ', type: 'link', path: '#' },
            ]
        },
        {
            title: "Cài đặt chung",
            items: [
                { 
                    icon: 'notifications', 
                    label: 'Thông báo', 
                    type: 'toggle', 
                    value: notificationsEnabled, 
                    action: () => setNotificationsEnabled(!notificationsEnabled) 
                },
                { 
                    icon: 'dark_mode', 
                    label: 'Chế độ tối', 
                    type: 'toggle', 
                    value: isDarkMode, 
                    action: toggleTheme 
                },
                { icon: 'language', label: 'Ngôn ngữ', type: 'value', valueDisplay: 'Tiếng Việt' },
            ]
        },
        {
            title: "Hỗ trợ",
            items: [
                { icon: 'help', label: 'Trung tâm trợ giúp', type: 'link', path: '/help' },
                { icon: 'info', label: 'Về ứng dụng', type: 'link', path: '/about' },
                { icon: 'gavel', label: 'Điều khoản dịch vụ', type: 'link', path: '#' },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark animate-fade-in flex flex-col">
            <Header title="Cài đặt" showBack />
            
            <div className="flex-1 p-4 space-y-6">
                {settingSections.map((section, idx) => (
                    <div key={idx}>
                        <h3 className="font-bold text-base text-gray-900 dark:text-white mb-3 px-1">{section.title}</h3>
                        <div className="bg-white dark:bg-card-dark rounded-2xl overflow-hidden shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5">
                            {section.items.map((item, itemIdx) => (
                                <div 
                                    key={itemIdx} 
                                    className={`flex items-center gap-4 p-4 ${itemIdx !== section.items.length - 1 ? 'border-b border-gray-100 dark:border-white/5' : ''} ${item.type === 'link' ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5' : ''}`}
                                >
                                    <div className="size-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <div className="flex-1 font-semibold text-sm text-gray-700 dark:text-gray-200">
                                        {item.label}
                                    </div>
                                    
                                    {item.type === 'link' && (
                                        <span className="material-symbols-outlined text-gray-400 text-lg">chevron_right</span>
                                    )}

                                    {item.type === 'value' && (
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{(item as any).valueDisplay}</span>
                                            <span className="material-symbols-outlined text-gray-400 text-lg">chevron_right</span>
                                        </div>
                                    )}

                                    {item.type === 'toggle' && (
                                        <button 
                                            onClick={(item as any).action}
                                            className={`w-11 h-6 rounded-full relative transition-colors duration-200 ease-in-out ${(item as any).value ? 'bg-primary' : 'bg-gray-200 dark:bg-white/10'}`}
                                        >
                                            <span 
                                                className={`absolute top-1 left-1 bg-white rounded-full size-4 shadow transition-transform duration-200 ease-in-out transform ${(item as any).value ? 'translate-x-5' : 'translate-x-0'}`}
                                            />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="pt-4 pb-8">
                    <button className="w-full py-4 text-red-500 font-bold bg-white dark:bg-card-dark rounded-2xl hover:bg-red-50 dark:hover:bg-white/5 transition-colors border border-gray-100 dark:border-white/5 shadow-soft dark:shadow-none">
                        Xóa tài khoản
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
