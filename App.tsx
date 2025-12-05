
import React, { useState, createContext, useContext, useEffect, useMemo } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { PRODUCTS, MOCK_USER } from './constants';
import { Product, CartItem, UserProfile } from './types';
import { BottomNav } from './components/Layout';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import ProductDetailPage from './pages/ProductDetail';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';
import ProfilePage from './pages/Profile';
import QuizPage from './pages/Quiz';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import AboutAppPage from './pages/AboutApp';
import HelpCenterPage from './pages/HelpCenter';
import NotificationsPage from './pages/Notifications';
import OrderHistoryPage from './pages/OrderHistory';
import VouchersPage from './pages/Vouchers';
import ProductReviewPage from './pages/ProductReview';
import SettingsPage from './pages/Settings';
import WishlistPage from './pages/Wishlist';

// --- Context ---
interface AppContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, delta: number) => void;
    clearCart: () => void;
    user: UserProfile;
    products: Product[];
    wishlist: string[];
    toggleWishlist: (productId: string) => void;
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useApp must be used within AppProvider");
    return context;
};

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [user] = useState<UserProfile>(MOCK_USER);
    const [wishlist, setWishlist] = useState<string[]>([]);
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode based on HTML class

    // Initialize Theme
    useEffect(() => {
        if (document.documentElement.classList.contains('dark')) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(prev => {
            const newMode = !prev;
            if (newMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return newMode;
        });
    };

    const addToCart = (product: Product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId: string, delta: number) => {
        setCart(prev => prev.map(item => {
            if (item.id === productId) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const clearCart = () => setCart([]);

    const toggleWishlist = (productId: string) => {
        setWishlist(prev => 
            prev.includes(productId) 
                ? prev.filter(id => id !== productId) 
                : [...prev, productId]
        );
    };

    return (
        <AppContext.Provider value={{ 
            cart, 
            addToCart, 
            removeFromCart, 
            updateQuantity, 
            clearCart, 
            user, 
            products: PRODUCTS,
            wishlist,
            toggleWishlist,
            isDarkMode,
            toggleTheme
        }}>
            {children}
        </AppContext.Provider>
    );
};

// --- Scroll to Top ---
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

// --- Main Layout ---
const LayoutWithNav = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen pb-20 animate-fade-in">
            {children}
            <BottomNav />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <AppProvider>
            <HashRouter>
                <ScrollToTop />
                <div className="bg-background-light dark:bg-background-dark min-h-screen text-gray-900 dark:text-text-primary-dark font-display selection:bg-primary selection:text-white transition-colors duration-300">
                    <Routes>
                        <Route path="/" element={<LayoutWithNav><HomePage /></LayoutWithNav>} />
                        <Route path="/search" element={<LayoutWithNav><SearchPage /></LayoutWithNav>} />
                        <Route path="/cart" element={<LayoutWithNav><CartPage /></LayoutWithNav>} />
                        <Route path="/profile" element={<LayoutWithNav><ProfilePage /></LayoutWithNav>} />
                        <Route path="/product/:id" element={<ProductDetailPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/quiz" element={<QuizPage />} />
                        
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/about" element={<AboutAppPage />} />
                        <Route path="/help" element={<HelpCenterPage />} />
                        <Route path="/notifications" element={<NotificationsPage />} />
                        <Route path="/orders" element={<OrderHistoryPage />} />
                        <Route path="/vouchers" element={<VouchersPage />} />
                        <Route path="/review/:id" element={<ProductReviewPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/wishlist" element={<WishlistPage />} />

                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>
            </HashRouter>
        </AppProvider>
    );
};

export default App;
