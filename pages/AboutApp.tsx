
import React from 'react';
import { Header } from '../components/Layout';

const AboutAppPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark animate-fade-in flex flex-col">
            <Header title="Về ứng dụng" showBack />
            
            <div className="flex-1 flex flex-col items-center pt-12 px-6">
                <div className="size-24 bg-gradient-to-br from-primary to-rose-600 rounded-3xl shadow-xl shadow-primary/30 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-5xl text-white">diamond</span>
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1">Aura Scents</h2>
                <p className="text-gray-500 font-medium mb-12">Phiên bản 1.0.0</p>

                <div className="w-full space-y-px bg-gray-200 dark:bg-white/10 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5">
                    <div className="bg-white dark:bg-card-dark p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <span className="text-sm font-bold text-gray-800 dark:text-white">Điều khoản dịch vụ</span>
                        <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                    </div>
                    <div className="bg-white dark:bg-card-dark p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <span className="text-sm font-bold text-gray-800 dark:text-white">Chính sách bảo mật</span>
                        <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                    </div>
                    <div className="bg-white dark:bg-card-dark p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <span className="text-sm font-bold text-gray-800 dark:text-white">Đánh giá ứng dụng</span>
                        <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                    </div>
                </div>
                
                <p className="mt-auto mb-8 text-xs text-gray-400 text-center max-w-[200px]">
                    © 2024 Aura Scents Inc.<br/>All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default AboutAppPage;
