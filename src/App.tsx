
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
import logoHeader from './assets/logo_header.png';
import logoFooter from './assets/logo_footer.png';

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
            <div className="fixed inset-0 w-full h-full -z-20 bg-[#Fdfbfc]"></div>
            <div className="fixed inset-0 w-full h-full -z-10 bg-resin-swirl opacity-80"></div>
            <div className="fixed inset-0 w-full h-full -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
            <div className="fixed top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-secondary/20 blur-[100px] -z-10 mix-blend-multiply"></div>
            <div className="fixed bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px] -z-10 mix-blend-multiply"></div>

            <header className="sticky top-6 z-50 w-[92%] max-w-[1280px] mx-auto transition-all duration-300">
                <div className="glass-panel !rounded-full p-2 pr-3 flex items-center justify-between !bg-white/40">
                    <Link className="flex items-center gap-3 group pl-1" to="/">
                        <Link className="flex items-center gap-3 group pl-1" to="/">
                            <img src={logoHeader} alt="Art Tales" className="h-[4.5rem] w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-primary/70 font-semibold mt-0.5">Aashwi Maheshwari</span>
                            </div>
                        </Link>
                    </Link>

                    <nav className="hidden md:flex items-center gap-1 bg-white/20 px-1.5 py-1.5 rounded-full shadow-inner border border-white/30 backdrop-blur-md">
                        <Link className={`text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 ${isActive('/shop')}`} to="/shop">Shop</Link>
                        <Link className={`text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 ${isActive('/portfolio')}`} to="/portfolio">Portfolio</Link>
                        <Link className={`text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 ${isActive('/about')}`} to="/about">About Us</Link>
                        <Link className={`text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 ${isActive('/contact')}`} to="/contact">Contact</Link>
                    </nav>

                    <div className="flex items-center gap-2">
                        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/50 hover:bg-white text-primary shadow-gem transition-all border border-white/60 hover:-translate-y-0.5">
                            <span className="material-symbols-outlined text-[18px]">search</span>
                        </button>

                        {/* Auth Button */}
                        {isAuthenticated && user ? (
                            <div className="relative group">
                                <Link to="/profile" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/50 hover:bg-white text-primary shadow-gem transition-all border border-white/60 hover:-translate-y-0.5 overflow-hidden">
                                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                </Link>
                                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hidden group-hover:block animate-fadeIn p-1">
                                    <Link to="/profile" className="w-full text-left px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-xl flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">person</span> Profile
                                    </Link>
                                    <button onClick={logout} className="w-full text-left px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">logout</span> Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button onClick={() => setIsLoginModalOpen(true)} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/50 hover:bg-white text-primary shadow-gem transition-all border border-white/60 hover:-translate-y-0.5">
                                <span className="material-symbols-outlined text-[18px]">person</span>
                            </button>
                        )}

                        <button onClick={() => setIsCartOpen(true)} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/50 hover:bg-white text-primary shadow-gem transition-all border border-white/60 relative group hover:-translate-y-0.5">
                            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-secondary-dark rounded-full border border-white shadow-sm scale-0 group-hover:scale-100 transition-transform flex items-center justify-center text-[7px] text-white">
                                {cart.length > 0 ? cart.length : ''}
                            </span>
                        </button>
                        <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/50 hover:bg-white text-primary shadow-gem transition-all border border-white/60 hover:-translate-y-0.5">
                            <span className="material-symbols-outlined text-[18px]">menu</span>
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
                            <img src={logoHeader} alt="Logo" className="h-20 w-auto" />
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

            <footer className="footer-glass relative overflow-hidden mt-12 border-t border-white/60">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/40 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
                <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-3 mb-6">
                                <img src={logoHeader} alt="Art Tales" className="h-28 w-auto object-contain" />
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium pr-4">
                                Handcrafted resin art and candles, designed to illuminate your world with creativity and elegance.
                            </p>
                            <div className="flex gap-3">
                                <a className="w-10 h-10 flex items-center justify-center rounded-full btn-resin-secondary text-primary transition-all" href="#"><span className="material-symbols-outlined text-lg">photo_camera</span></a>
                                <a className="w-10 h-10 flex items-center justify-center rounded-full btn-resin-secondary text-primary transition-all" href="#"><span className="material-symbols-outlined text-lg">alternate_email</span></a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-primary/80">Shop</h4>
                            <ul className="space-y-3 text-sm text-slate-600 font-medium">
                                <li><Link className="hover:text-primary transition-colors flex items-center gap-1 group" to="/shop"><span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span> All Products</Link></li>
                                <li><Link className="hover:text-primary transition-colors flex items-center gap-1 group" to="/shop"><span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span> Resin Art</Link></li>
                                <li><Link className="hover:text-primary transition-colors flex items-center gap-1 group" to="/shop"><span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span> Candles</Link></li>
                                <li><Link className="hover:text-primary transition-colors flex items-center gap-1 group" to="/shop"><span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span> Gift Cards</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-primary/80">Support</h4>
                            <ul className="space-y-3 text-sm text-slate-600 font-medium">
                                <li><Link className="hover:text-primary transition-colors flex items-center gap-1 group" to="/contact"><span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span> Contact Us</Link></li>
                                <li><Link className="hover:text-primary transition-colors flex items-center gap-1 group" to="/contact"><span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span> Shipping Policy</Link></li>
                                <li><Link className="hover:text-primary transition-colors flex items-center gap-1 group" to="/contact"><span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span> Returns</Link></li>
                                <li><Link className="hover:text-primary transition-colors flex items-center gap-1 group" to="/about"><span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span> Care Instructions</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-primary/80">Contact</h4>
                            <ul className="space-y-4 text-sm text-slate-600 font-medium">
                                <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/40 border border-white/50 shadow-sm">
                                    <span className="material-symbols-outlined text-lg mt-0.5 text-primary">location_on</span>
                                    <span>Mumbai, India</span>
                                </li>
                                <li className="flex items-center gap-3 p-3 rounded-2xl bg-white/40 border border-white/50 shadow-sm">
                                    <span className="material-symbols-outlined text-lg text-primary">mail</span>
                                    <span>hello@arttales.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-bold tracking-wide">
                        <p>© 2023 Art Tales by Aashwi Maheshwari. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                        </div>
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
