
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Portfolio from './pages/Portfolio';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import About from './pages/About';
import { Product } from './types';
import LiveConsultation from './components/LiveConsultation';
import logo from './assets/logo.png';

interface CartItem extends Product {
    quantity: number;
}

import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginModal from './components/LoginModal';

const Layout: React.FC<{ children: React.ReactNode, cart: CartItem[], setCart: React.Dispatch<React.SetStateAction<CartItem[]>> }> = ({ children, cart, setCart }) => {
    const { pathname } = useLocation();
    const { user, logout, isAuthenticated } = useAuth();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isConsultOpen, setIsConsultOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const removeFromCart = (id: string) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const isActive = (path: string) => pathname === path ? 'bg-primary text-white shadow-md' : 'text-primary/70 hover:text-primary hover:bg-white/60';

    return (
        <div className="min-h-screen flex flex-col relative overflow-x-hidden">
            <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />

            {/* Background decoration */}
            <div className="fixed inset-0 w-full h-full -z-20 bg-background-soft"></div>
            <div className="fixed inset-0 w-full h-full -z-10 bg-resin-swirl opacity-80"></div>

            <header className="sticky top-6 z-50 w-[94%] max-w-[1280px] mx-auto transition-all duration-300">
                <div className="glass-panel !rounded-full p-2 pr-4 flex items-center justify-between !bg-white/60 border-white/80 shadow-lg min-h-[5rem]">
                    <div className="flex items-center gap-4 pl-2">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/40 text-primary hover:bg-white/80 transition-colors"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>

                        <Link className="flex items-center gap-3 group" to="/">
                            <div className="relative h-16 md:h-20 flex items-center">
                                <img
                                    src={logo}
                                    alt="Art Tales Logo"
                                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-1 bg-white/40 px-1.5 py-1.5 rounded-full shadow-inner border border-white/50 backdrop-blur-xl">
                        <Link className={`text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 ${isActive('/')}`} to="/">Home</Link>
                        <Link className={`text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 ${isActive('/shop')}`} to="/shop">Shop</Link>
                        <Link className={`text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 ${isActive('/portfolio')}`} to="/portfolio">Portfolio</Link>
                        <Link className={`text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 ${isActive('/about')}`} to="/about">About Us</Link>
                        <Link className={`text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 ${isActive('/contact')}`} to="/contact">Contact</Link>
                    </nav>

                    <div className="flex items-center gap-2">
                        <button className="hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-white/80 hover:bg-white text-primary shadow-gem transition-all border border-white/60">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </button>

                        {/* Auth Button */}
                        {isAuthenticated && user ? (
                            <div className="relative group">
                                <Link to="/profile" className="flex items-center gap-2 pl-1 pr-4 h-11 rounded-full bg-white/80 hover:bg-white text-primary shadow-gem transition-all border border-white/60">
                                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-primary/20" />
                                    <span className="text-xs font-bold max-w-[80px] truncate">{user.name}</span>
                                </Link>
                                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hidden group-hover:block animate-fadeIn p-1">
                                    <Link to="/profile" className="w-full text-left px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-xl flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">person</span> Profile
                                    </Link>
                                    <button className="w-full text-left px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-xl flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">favorite</span> Favorites
                                    </button>
                                    <button onClick={logout} className="w-full text-left px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">logout</span> Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button
                                onClick={() => setIsLoginModalOpen(true)}
                                className="flex items-center gap-2 px-6 h-11 rounded-full bg-primary text-white font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                            >
                                Login
                            </button>
                        )}

                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/80 hover:bg-white text-primary shadow-gem transition-all border border-white/60 relative group"
                        >
                            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                            {cart.length > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary-dark rounded-full border border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold">
                                    {cart.reduce((a, b) => a + b.quantity, 0)}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {children}
            </main>

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <>
                    <div className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-[60]" onClick={() => setIsMobileMenuOpen(false)}></div>
                    <div className="fixed left-0 top-0 h-full w-[80%] max-w-sm bg-white/90 backdrop-blur-2xl z-[70] shadow-2xl flex flex-col p-8 border-r border-white/40">
                        <div className="flex items-center justify-between mb-8">
                            <img src={logo} alt="Logo" className="h-14 w-auto" />
                            <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors text-primary">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Mobile User Info */}
                        <div className="mb-8 p-4 bg-primary/5 rounded-2xl flex items-center gap-3">
                            {isAuthenticated && user ? (
                                <>
                                    <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                                    <div>
                                        <p className="font-bold text-primary">{user.name}</p>
                                        <p className="text-xs text-primary/60">{user.email || user.phone || 'Guest'}</p>
                                        <button onClick={logout} className="text-xs font-bold text-secondary-dark mt-1">Logout</button>
                                    </div>
                                </>
                            ) : (
                                <button onClick={() => { setIsMobileMenuOpen(false); setIsLoginModalOpen(true); }} className="w-full py-3 bg-primary text-white rounded-xl font-bold uppercase tracking-widest text-xs shadow-md">
                                    Login / Sign Up
                                </button>
                            )}
                        </div>

                        <nav className="flex flex-col gap-2">
                            {['/', '/shop', '/portfolio', '/about', '/contact'].map(path => {
                                const labels: Record<string, string> = { '/': 'Home', '/shop': 'Shop', '/portfolio': 'Portfolio', '/about': 'About Us', '/contact': 'Contact' };
                                return (
                                    <Link
                                        key={path}
                                        to={path}
                                        className={`p-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${pathname === path ? 'bg-primary text-white shadow-lg' : 'text-primary hover:bg-white/50'}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {labels[path]}
                                    </Link>
                                );
                            })}
                        </nav>
                        <div className="mt-auto p-6 bg-primary/5 rounded-3xl border border-primary/10">
                            <p className="text-primary/60 text-xs font-bold uppercase tracking-widest mb-2">Need Inspiration?</p>
                            <button onClick={() => { setIsMobileMenuOpen(false); setIsConsultOpen(true); }} className="w-full h-12 btn-resin rounded-xl flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest">
                                <span className="material-symbols-outlined">auto_awesome</span>
                                Ask AI Assistant
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* Cart Drawer */}
            {isCartOpen && (
                <>
                    <div className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-[60]" onClick={() => setIsCartOpen(false)}></div>
                    <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white/80 backdrop-blur-2xl z-[70] shadow-2xl flex flex-col p-8 border-l border-white/40">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-primary tracking-tight">Your Collection</h2>
                            <button onClick={() => setIsCartOpen(false)} className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2 space-y-6 hide-scrollbar">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center gap-4 text-slate-400">
                                    <span className="material-symbols-outlined text-6xl">shopping_cart_off</span>
                                    <p className="font-medium">Your tray is empty.</p>
                                </div>
                            ) : (
                                cart.map(item => (
                                    <div key={item.id} className="flex gap-4 p-4 rounded-3xl glass-panel !bg-white/40 border-white/60">
                                        <img src={item.image} className="w-20 h-20 rounded-2xl object-cover shadow-sm" alt={item.name} />
                                        <div className="flex-1 flex flex-col">
                                            <div className="flex justify-between">
                                                <h3 className="font-bold text-primary text-sm line-clamp-1">{item.name}</h3>
                                                <button onClick={() => removeFromCart(item.id)} className="text-slate-400 hover:text-secondary-dark transition-colors">
                                                    <span className="material-symbols-outlined text-sm">delete</span>
                                                </button>
                                            </div>
                                            <p className="text-sm font-black text-primary mt-auto">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        {cart.length > 0 && (
                            <div className="pt-6 border-t border-primary/10">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-slate-500 font-bold">Total</span>
                                    <span className="text-2xl font-black text-primary">${cartTotal.toFixed(2)}</span>
                                </div>
                                <button className="w-full h-14 btn-resin rounded-full font-black uppercase tracking-widest rounded-2xl">Checkout</button>
                            </div>
                        )}
                    </div>
                </>
            )}

            {/* Floating AI Bubble */}
            <button onClick={() => setIsConsultOpen(true)} className="fixed bottom-8 right-8 z-[50] w-16 h-16 rounded-full btn-resin flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">auto_awesome</span>
            </button>
            {isConsultOpen && <LiveConsultation onClose={() => setIsConsultOpen(false)} />}

            <footer className="bg-primary pt-24 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")` }}></div>
                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-20">
                        <div className="col-span-1 md:col-span-1 flex flex-col items-start gap-8">
                            <div className="h-24 flex items-center">
                                <img src={logo} alt="Art Tales Logo" className="h-full w-auto object-contain" />
                            </div>
                            <p className="text-sm text-white/60 leading-relaxed font-medium max-w-xs">
                                Capturing fluid stories in resin and light. Handcrafted boutique art studio based in Mumbai.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-black mb-8 text-[10px] uppercase tracking-[0.3em] text-white/40">Shop</h4>
                            <ul className="space-y-4 text-sm text-white/70 font-bold">
                                <li><Link className="hover:text-secondary transition-colors" to="/shop">All Works</Link></li>
                                <li><Link className="hover:text-secondary transition-colors" to="/shop">Resin Art</Link></li>
                                <li><Link className="hover:text-secondary transition-colors" to="/contact">Custom Orders</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-black mb-8 text-[10px] uppercase tracking-[0.3em] text-white/40">Company</h4>
                            <ul className="space-y-4 text-sm text-white/70 font-bold">
                                <li><Link className="hover:text-secondary transition-colors" to="/about">About Us</Link></li>
                                <li><Link className="hover:text-secondary transition-colors" to="/portfolio">Portfolio</Link></li>
                                <li><Link className="hover:text-secondary transition-colors" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-black mb-8 text-[10px] uppercase tracking-[0.3em] text-white/40">Social</h4>
                            <ul className="space-y-4 text-sm text-white/70 font-bold">
                                <li><a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">Instagram</a></li>
                                <li><a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">Pinterest</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/30 font-black tracking-[0.25em] uppercase">
                        <p>© 2024 Art Tales by Aashwi Maheshwari</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const App: React.FC = () => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const addToCart = (product: Product, quantity: number = 1) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
            }
            return [...prev, { ...product, quantity }];
        });
    };
    return (
        <AuthProvider>
            <Router>
                <Layout cart={cart} setCart={setCart}>
                    <Routes>
                        <Route path="/" element={<Home addToCart={addToCart} />} />
                        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
                        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Layout>
            </Router>
        </AuthProvider>
    );
};

export default App;
