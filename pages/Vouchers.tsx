
import React from 'react';
import { Header } from '../components/Layout';
import { MOCK_VOUCHERS } from '../constants';

const VouchersPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark animate-fade-in flex flex-col">
            <Header title="Kho Voucher" showBack />

            <div className="p-4 space-y-4">
                {/* Promo Code Input */}
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        placeholder="Nhập mã voucher" 
                        className="flex-1 px-4 py-3 bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 rounded-xl focus:ring-primary focus:border-primary text-gray-900 dark:text-white"
                    />
                    <button className="px-6 font-bold text-gray-500 bg-gray-200 dark:bg-white/10 dark:text-gray-300 rounded-xl">Áp dụng</button>
                </div>

                <div className="h-px bg-gray-200 dark:bg-white/10 my-2"></div>

                {/* List */}
                <div className="space-y-4">
                    {MOCK_VOUCHERS.map(voucher => (
                        <div key={voucher.id} className="relative bg-white dark:bg-card-dark rounded-xl shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5 overflow-hidden flex">
                            {/* Left Side Design */}
                            <div className="w-3 bg-primary"></div>
                            
                            <div className="flex-1 p-4 flex gap-4 items-center">
                                <div className="size-16 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 text-primary">
                                    <span className="material-symbols-outlined text-3xl">
                                        {voucher.type === 'shipping' ? 'local_shipping' : 'local_activity'}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-gray-900 dark:text-white truncate mb-1">{voucher.code}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight mb-2 line-clamp-2">{voucher.description}</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded">HSD: {voucher.expiryDate}</span>
                                    </div>
                                </div>
                                <button className="text-primary text-xs font-bold px-3 py-1.5 border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                                    Lưu
                                </button>
                            </div>

                            {/* Decorative Circles */}
                            <div className="absolute top-1/2 -left-1.5 size-3 bg-background-light dark:bg-background-dark rounded-full -translate-y-1/2"></div>
                            <div className="absolute top-1/2 -right-1.5 size-3 bg-background-light dark:bg-background-dark rounded-full -translate-y-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VouchersPage;
