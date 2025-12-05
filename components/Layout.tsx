
import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export const BottomNav: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { path: '/', label: 'Trang chủ', icon: 'home' },
        { path: '/search', label: 'Khám phá', icon: 'explore' },
        { path: '/cart', label: 'Giỏ hàng', icon: 'shopping_bag' },
        { path: '/profile', label: 'Hồ sơ', icon: 'person' },
    ];

    // Hide bottom nav on specific pages
    const hiddenPaths = [
        '/quiz', 
        '/login', 
        '/register', 
        '/checkout', 
        '/success',
        '/notifications',
        '/help',
        '/about',
        '/orders',
        '/vouchers',
        '/review',
        '/settings',
        '/wishlist'
    ];

    if (hiddenPaths.some(path => currentPath.startsWith(path))) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 h-[80px] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-200 dark:border-white/5 z-50 pb-safe shadow-lg">
            <div className="flex justify-around items-center h-full max-w-md mx-auto">
                {navItems.map((item) => {
                    const isActive = currentPath === item.path;
                    return (
                        <Link key={item.path} to={item.path} className={`flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all duration-300 ${isActive ? 'text-primary' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>
                            <span className={`material-symbols-outlined text-2xl transition-transform ${isActive ? 'fill-1 scale-110' : ''}`}>{item.icon}</span>
                            <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

interface HeaderProps {
    title?: string;
    showBack?: boolean;
    rightAction?: React.ReactNode;
    transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, showBack, rightAction, transparent }) => {
    const navigate = useNavigate();

    const handleBack = () => {
        // Check if there is a history stack to go back to (using state.idx as a proxy for history depth in typical React Router usage)
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            // Fallback to home if opened directly or no history
            navigate('/', { replace: true });
        }
    };

    return (
        <div className={`flex items-center px-4 py-3 sticky top-0 z-40 transition-colors duration-300 ${transparent ? 'bg-transparent' : 'bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-white/5'}`}>
            <div className="flex size-10 items-center justify-start">
                {showBack && (
                    <button 
                        onClick={handleBack} 
                        className="flex items-center justify-center rounded-full size-10 hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-gray-900 dark:text-white">arrow_back</span>
                    </button>
                )}
            </div>
            <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white truncate px-2">
                {title}
            </h1>
            <div className="flex size-10 items-center justify-end">
                {rightAction}
            </div>
        </div>
    );
};
