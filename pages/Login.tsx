
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col p-6 animate-fade-in">
            <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
                <div className="text-center mb-10">
                    <div className="size-20 bg-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-4xl text-white">diamond</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Chào mừng trở lại!</h1>
                    <p className="text-gray-500 dark:text-gray-400">Đăng nhập để tiếp tục khám phá thế giới mùi hương.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email hoặc Số điện thoại</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]">person</span>
                            <input 
                                type="text" 
                                placeholder="Nhập thông tin" 
                                className="w-full pl-11 pr-4 py-3.5 bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 rounded-xl focus:ring-primary focus:border-primary font-medium dark:text-white"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Mật khẩu</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]">lock</span>
                            <input 
                                type="password" 
                                placeholder="••••••••" 
                                className="w-full pl-11 pr-4 py-3.5 bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 rounded-xl focus:ring-primary focus:border-primary font-medium dark:text-white"
                            />
                            <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-primary">Quên?</button>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                        Đăng Nhập
                    </button>
                </form>

                <div className="mt-8">
                    <div className="relative flex justify-center text-xs text-gray-500 dark:text-gray-400 mb-6">
                        <span className="bg-background-light dark:bg-background-dark px-4 z-10">Hoặc tiếp tục với</span>
                        <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200 dark:bg-white/10 -z-0"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 py-3 bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                            <span className="font-bold text-sm text-gray-700 dark:text-white">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 py-3 bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5" alt="Facebook" />
                            <span className="font-bold text-sm text-gray-700 dark:text-white">Facebook</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="text-center mt-6">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Chưa có tài khoản? <button onClick={() => navigate('/register')} className="text-primary font-bold hover:underline">Đăng ký ngay</button>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
