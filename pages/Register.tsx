
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Layout';

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col animate-fade-in">
            <Header showBack transparent />
            <div className="flex-1 flex flex-col p-6 max-w-sm mx-auto w-full">
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Tạo tài khoản</h1>
                    <p className="text-gray-500 dark:text-gray-400">Bắt đầu hành trình mùi hương của riêng bạn.</p>
                </div>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Họ và tên</label>
                        <input 
                            type="text" 
                            placeholder="VD: Nguyễn Văn A" 
                            className="w-full px-4 py-3.5 bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 rounded-xl focus:ring-primary focus:border-primary font-medium dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                        <input 
                            type="email" 
                            placeholder="email@example.com" 
                            className="w-full px-4 py-3.5 bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 rounded-xl focus:ring-primary focus:border-primary font-medium dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Mật khẩu</label>
                        <input 
                            type="password" 
                            placeholder="Tạo mật khẩu" 
                            className="w-full px-4 py-3.5 bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 rounded-xl focus:ring-primary focus:border-primary font-medium dark:text-white"
                        />
                    </div>
                    
                    <div className="pt-2">
                        <button type="button" onClick={() => navigate('/')} className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                            Đăng Ký
                        </button>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4 px-4 leading-relaxed">
                            Bằng việc đăng ký, bạn đồng ý với <span className="text-primary font-bold cursor-pointer">Điều khoản dịch vụ</span> & <span className="text-primary font-bold cursor-pointer">Chính sách bảo mật</span> của chúng tôi.
                        </p>
                    </div>
                </form>

                <div className="mt-auto pt-6 text-center">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Đã có tài khoản? <button onClick={() => navigate('/login')} className="text-primary font-bold hover:underline">Đăng nhập</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
