import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizStep } from '../types';

const QuizPage: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState<QuizStep>(QuizStep.SCENT);
    
    // Quiz State
    const [selections, setSelections] = useState({
        scent: '',
        occasion: '',
        style: [] as string[]
    });

    const handleNext = () => {
        if (step === QuizStep.SCENT && selections.scent) setStep(QuizStep.OCCASION);
        else if (step === QuizStep.OCCASION && selections.occasion) setStep(QuizStep.STYLE);
        else if (step === QuizStep.STYLE && selections.style.length > 0) setStep(QuizStep.RESULT);
        else if (step === QuizStep.RESULT) navigate('/search'); 
    };

    const toggleStyle = (style: string) => {
        setSelections(prev => {
            if (prev.style.includes(style)) return { ...prev, style: prev.style.filter(s => s !== style) };
            if (prev.style.length < 3) return { ...prev, style: [...prev.style, style] };
            return prev;
        });
    };

    const renderHeader = (title: string, subtitle: string) => (
        <div className="text-center px-6 mt-6 mb-8 animate-slide-up">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white leading-tight">{title}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{subtitle}</p>
        </div>
    );

    const ProgressBar = () => (
        <div className="flex justify-center gap-2 mb-6">
            {[0, 1, 2, 3].map(i => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-primary' : i < step ? 'w-2 bg-primary/40' : 'w-2 bg-gray-200 dark:bg-white/10'}`} />
            ))}
        </div>
    );

    const renderStepContent = () => {
        switch (step) {
            case QuizStep.SCENT:
                const scentOptions = [
                    { id: 'floral', label: 'Hoa Cỏ', img: 'https://images.unsplash.com/photo-1490750967868-58cb75069ed6?auto=format&fit=crop&q=80&w=300' },
                    { id: 'fruity', label: 'Trái Cây', img: 'https://images.unsplash.com/photo-1615485925763-867862f80a3a?auto=format&fit=crop&q=80&w=300' },
                    { id: 'woody', label: 'Hương Gỗ', img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=300' },
                    { id: 'fresh', label: 'Tươi Mát', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=300' },
                ];
                return (
                    <div className="grid grid-cols-2 gap-4 px-4 animate-fade-in">
                        {scentOptions.map(opt => (
                            <div 
                                key={opt.id} 
                                onClick={() => setSelections({...selections, scent: opt.id})}
                                className={`relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-200 shadow-sm ${selections.scent === opt.id ? 'border-primary ring-2 ring-primary/30 scale-105' : 'border-transparent hover:border-gray-200 dark:hover:border-white/20'}`}
                            >
                                <img src={opt.img} alt={opt.label} className="w-full h-full object-cover" />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                                    <p className="text-white font-bold text-lg text-center">{opt.label}</p>
                                </div>
                                {selections.scent === opt.id && (
                                    <div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1 shadow-lg">
                                        <span className="material-symbols-outlined text-sm font-bold block">check</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                );
            case QuizStep.OCCASION:
                const occasions = [
                    { id: 'work', label: 'Đi làm', icon: 'work' },
                    { id: 'date', label: 'Hẹn hò', icon: 'favorite' },
                    { id: 'party', label: 'Tiệc tùng', icon: 'celebration' },
                    { id: 'daily', label: 'Hàng ngày', icon: 'wb_sunny' },
                ];
                return (
                    <div className="flex flex-col gap-3 px-4 animate-fade-in">
                        {occasions.map(opt => (
                            <button
                                key={opt.id}
                                onClick={() => setSelections({...selections, occasion: opt.id})}
                                className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${selections.occasion === opt.id ? 'border-primary bg-primary/5 shadow-md scale-[1.02]' : 'border-gray-100 dark:border-white/5 bg-white dark:bg-card-dark hover:border-primary/30'}`}
                            >
                                <div className={`size-12 rounded-full flex items-center justify-center ${selections.occasion === opt.id ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-500'}`}>
                                    <span className="material-symbols-outlined">{opt.icon}</span>
                                </div>
                                <span className={`flex-1 font-bold text-lg ${selections.occasion === opt.id ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}`}>{opt.label}</span>
                                {selections.occasion === opt.id && <span className="material-symbols-outlined text-primary">check_circle</span>}
                            </button>
                        ))}
                    </div>
                );
            case QuizStep.STYLE:
                 const styles = ['Thanh lịch', 'Năng động', 'Quyến rũ', 'Tối giản', 'Cổ điển', 'Tự nhiên', 'Lãng mạn', 'Mạnh mẽ'];
                 return (
                    <div className="px-6 animate-fade-in">
                        <div className="flex flex-wrap justify-center gap-3">
                            {styles.map(s => (
                                <button
                                    key={s}
                                    onClick={() => toggleStyle(s)}
                                    className={`px-6 py-3 rounded-full border-2 font-bold transition-all ${selections.style.includes(s) ? 'border-primary bg-primary text-white shadow-lg transform scale-105' : 'border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:border-primary/50'}`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                 );
            case QuizStep.RESULT:
                return (
                    <div className="flex flex-col items-center justify-center h-full px-6 text-center animate-slide-up">
                         <div className="size-28 bg-primary/10 rounded-full flex items-center justify-center mb-8 animate-bounce">
                            <div className="size-20 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-primary/40">
                                <span className="material-symbols-outlined text-5xl text-white">auto_awesome</span>
                            </div>
                         </div>
                         <h2 className="text-3xl font-extrabold mb-3 text-gray-900 dark:text-white">Tuyệt vời!</h2>
                         <p className="text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">Chúng tôi đã phân tích sở thích của bạn và tìm thấy những mùi hương hoàn hảo.</p>
                         
                         <div className="w-full bg-white dark:bg-card-dark rounded-3xl p-6 mb-8 text-left shadow-soft dark:shadow-none border border-gray-100 dark:border-white/5">
                            <h3 className="font-bold mb-4 text-sm uppercase tracking-wide text-gray-400">Hồ sơ hương thơm</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-white/5 rounded-xl">
                                    <span className="text-gray-500 text-sm font-medium">Nhóm hương</span>
                                    <span className="font-bold text-gray-900 dark:text-white capitalize">{selections.scent}</span>
                                </div>
                                 <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-white/5 rounded-xl">
                                    <span className="text-gray-500 text-sm font-medium">Dịp sử dụng</span>
                                    <span className="font-bold text-gray-900 dark:text-white capitalize">{selections.occasion}</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-white/5 rounded-xl">
                                    <span className="text-gray-500 text-sm font-medium">Phong cách</span>
                                    <span className="font-bold text-gray-900 dark:text-white">{selections.style.join(', ')}</span>
                                </div>
                            </div>
                         </div>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
            <div className="flex items-center p-4">
                <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                     <span className="material-symbols-outlined">arrow_back</span>
                </button>
                 <div className="flex-1"></div>
                 <button onClick={() => navigate('/')} className="text-sm font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">Bỏ qua</button>
            </div>
            
            {step !== QuizStep.RESULT && <ProgressBar />}
            
            {step === QuizStep.SCENT && renderHeader("Nhóm hương yêu thích?", "Chọn một nhóm hương bạn cảm thấy bị thu hút nhất.")}
            {step === QuizStep.OCCASION && renderHeader("Dịp sử dụng chính?", "Bạn thường dùng nước hoa vào lúc nào.")}
            {step === QuizStep.STYLE && renderHeader("Phong cách của bạn?", "Chọn tối đa 3 từ miêu tả bạn.")}

            <div className="flex-1 overflow-y-auto pb-32">
                {renderStepContent()}
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-5 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-gray-200 dark:border-white/5">
                <button 
                    onClick={handleNext}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all active:scale-[0.98]"
                >
                    {step === QuizStep.RESULT ? "Xem kết quả gợi ý" : "Tiếp theo"}
                </button>
            </div>
        </div>
    );
};

export default QuizPage;