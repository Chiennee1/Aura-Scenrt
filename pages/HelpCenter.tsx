
import React, { useState } from 'react';
import { Header } from '../components/Layout';

const HelpCenterPage: React.FC = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const faqs = [
        { id: 1, q: "Làm thế nào để theo dõi đơn hàng?", a: "Bạn có thể vào mục 'Lịch sử đơn hàng' trong trang cá nhân để xem trạng thái chi tiết của từng đơn hàng." },
        { id: 2, q: "Chính sách đổi trả như thế nào?", a: "Chúng tôi hỗ trợ đổi trả trong vòng 7 ngày nếu sản phẩm còn nguyên seal và có lỗi từ nhà sản xuất." },
        { id: 3, q: "Phí vận chuyển được tính ra sao?", a: "Phí vận chuyển cố định 25.000đ cho đơn hàng dưới 1 triệu. Miễn phí vận chuyển cho đơn hàng từ 1 triệu trở lên." },
        { id: 4, q: "Sản phẩm có chính hãng không?", a: "Cam kết 100% sản phẩm chính hãng, có đầy đủ tem nhãn và hóa đơn chứng minh nguồn gốc." }
    ];

    const contactMethods = [
        { icon: 'support_agent', label: 'Chat trực tiếp', sub: 'Phản hồi ngay lập tức' },
        { icon: 'mail', label: 'Gửi Email', sub: 'support@aurascents.vn' },
        { icon: 'call', label: 'Hotline', sub: '1900 1234' },
    ];

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark animate-fade-in pb-10">
            <Header title="Trung tâm trợ giúp" showBack />

            <div className="px-4 py-6">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Liên hệ hỗ trợ</h3>
                <div className="grid gap-3">
                    {contactMethods.map((method, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 bg-white dark:bg-card-dark rounded-2xl shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5 cursor-pointer hover:border-primary/30 transition-colors">
                            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">{method.icon}</span>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 dark:text-white text-sm">{method.label}</p>
                                <p className="text-xs text-gray-500">{method.sub}</p>
                            </div>
                            <span className="material-symbols-outlined ml-auto text-gray-400">chevron_right</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-4">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Câu hỏi thường gặp</h3>
                <div className="space-y-3">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="bg-white dark:bg-card-dark rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden">
                            <button 
                                onClick={() => setOpenItem(openItem === faq.id ? null : faq.id)}
                                className="w-full flex items-center justify-between p-4 text-left"
                            >
                                <span className="font-bold text-sm text-gray-800 dark:text-gray-200">{faq.q}</span>
                                <span className={`material-symbols-outlined text-gray-400 transition-transform duration-300 ${openItem === faq.id ? 'rotate-180' : ''}`}>expand_more</span>
                            </button>
                            <div className={`px-4 text-sm text-gray-500 dark:text-gray-400 overflow-hidden transition-all duration-300 ${openItem === faq.id ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HelpCenterPage;
