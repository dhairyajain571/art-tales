
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import { Product } from './types';
import LiveConsultation from './components/LiveConsultation';

interface CartItem extends Product {
  quantity: number;
}

const Layout: React.FC<{ children: React.ReactNode, cart: CartItem[], setCart: React.Dispatch<React.SetStateAction<CartItem[]>> }> = ({ children, cart, setCart }) => {
  const { pathname } = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 w-full h-full -z-20 bg-background-soft"></div>
      <div className="fixed inset-0 w-full h-full -z-10 bg-resin-swirl opacity-80"></div>
      
      <header className="sticky top-6 z-50 w-[94%] max-w-[1280px] mx-auto">
        <div className="glass-panel !rounded-full p-2 pr-4 flex items-center justify-between !bg-white/60 border-white/80 shadow-lg">
          <Link className="flex items-center gap-3 group pl-2" to="/">
            <div className="relative h-12 md:h-14 flex items-center">
              <img 
                src="input_file_0.png" 
                alt="Art Tales Logo" 
                className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP_o9HAXqjX_COb1OEsv99YgnHhWrgcQoA264hBa4rkvQMjY7xYEQwkvRdgnglolaKPLMbX-sCQjw86ILDNvmO--0wsx7vjdKxlbO-MvW5_KQF8E948mTKSbEQ9yDcwXpT4mtY-IWFMsRQuoIAFC_gL_hrVVNCe5DwUUdzjHNR4p2QmOhSIkSoUjIpUKm7-1btRFHn2RX05Fz8l77nmRJg4KrxKnhQLJW1dptaes-xzcV2yS0G3ZXkA7utyX25kt2o0QO2vmCmg-9d';
                }}
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 bg-white/40 px-1.5 py-1.5 rounded-full shadow-inner border border-white/50 backdrop-blur-xl">
            <Link className={`text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 ${pathname === '/' ? 'bg-primary text-white shadow-md' : 'text-primary/70 hover:text-primary hover:bg-white/60'}`} to="/">Home</Link>
            <Link className={`text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 ${pathname === '/shop' ? 'bg-primary text-white shadow-md' : 'text-primary/70 hover:text-primary hover:bg-white/60'}`} to="/shop">Shop</Link>
            <Link className={`text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 ${pathname === '/about' ? 'bg-primary text-white shadow-md' : 'text-primary/70 hover:text-primary hover:bg-white/60'}`} to="/about">About Us</Link>
            <Link className={`text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 ${pathname === '/contact' ? 'bg-primary text-white shadow-md' : 'text-primary/70 hover:text-primary hover:bg-white/60'}`} to="/contact">Contact</Link>
          </nav>

          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center w-11 h-11 rounded-full bg-white/80 hover:bg-white text-primary shadow-gem transition-all border border-white/60">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
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

      {/* Cart Drawer & AI Consultation - Logic remains same */}
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
          </div>
        </>
      )}

      {/* Floating AI Bubble */}
      <button onClick={() => setIsConsultOpen(true)} className="fixed bottom-8 right-8 z-[50] w-16 h-16 rounded-full btn-resin flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-3xl">auto_awesome</span>
      </button>
      {isConsultOpen && <LiveConsultation onClose={() => setIsConsultOpen(false)} />}

      <footer className="bg-primary pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`}}></div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-20">
            <div className="col-span-1 md:col-span-1 flex flex-col items-start gap-8">
              <div className="h-16 flex items-center">
                <img src="input_file_7.png" alt="Art Tales Logo" className="h-full w-auto object-contain" />
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
    <Router>
      <Layout cart={cart} setCart={setCart}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
