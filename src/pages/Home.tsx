
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import logoHero from '../assets/logo_hero.png';
// Using a placeholder for the hero image if external link fails, or keeping external link.
// Reference used: https://lh3.googleusercontent.com/aida-public/AB6AXuBnfpnl8rnPT5eT5ClGG4m3IVGZwCW1fSFa3SzI3di1rCinY4i0B_gbBURMpa3KpA1_E-NYGrZlAvBmumCFjDH9TkcTJtK0_1Nu2mG93Qzh4FkSVxWRXp3HX7LBMdRmnPJQYn53srdhBZqwBr-Gfjdf11cc4n1Yf0lbhrVOzTPgYqvxSVGxlYOWnTAsykpmL77Ey8H6lR3blCGzVQBhnstN55Rnw7VKvTF4DzCLa-IJsEbC31Y8bYDVKcH6afO3S16N3NXoJb-RdjZP
// I will keep it for now.

interface Props {
    addToCart: (product: Product, quantity?: number) => void;
}

const Home: React.FC<Props> = ({ addToCart }) => {
    const featured = PRODUCTS.slice(0, 4);

    return (
        <div className="flex flex-col gap-16 md:gap-32 pb-24 mt-8">
            {/* Hero Section */}
            <section className="relative w-full px-4 md:px-8">
                <div className="max-w-[1280px] mx-auto glass-panel !bg-white/50 rounded-[3rem] overflow-hidden min-h-[680px] flex shadow-2xl shadow-primary/10 border-t border-white/80 relative">

                    <div className="relative z-20 flex flex-col-reverse lg:flex-row items-center w-full p-8 lg:p-20 gap-16 lg:gap-24">
                        <div className="flex flex-col gap-10 flex-1 text-center lg:text-left items-center lg:items-start">
                            <div className="flex flex-col gap-8">
                                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/80 border border-white/60 shadow-sm backdrop-blur-md w-fit mx-auto lg:mx-0">
                                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-dark animate-pulse"></span>
                                    <span className="text-[10px] font-black text-primary tracking-[0.25em] uppercase">The Artisan Collective</span>
                                </div>

                                {/* Brand Logo in Hero */}
                                <div className="h-32 md:h-48 w-auto mb-4 flex justify-center lg:justify-start">
                                    <img src={logoHero} alt="Art Tales Logo" className="h-full w-auto object-contain drop-shadow-md" />
                                </div>

                                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight text-primary">
                                    <span className="block">Flowing</span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-secondary-dark drop-shadow-sm">
                                        With Life
                                    </span>
                                </h1>
                            </div>

                            <p className="text-xl text-slate-600 max-w-lg font-medium leading-relaxed">
                                Experience fluid resin art, botanical preservations, and handcrafted decor where every pour tells a unique story.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 mt-4 w-full sm:w-auto">
                                <Link to="/shop" className="h-16 px-12 rounded-full btn-resin flex items-center justify-center gap-3 group text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20">
                                    Explore Shop <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                                <Link to="/portfolio" className="h-16 px-12 rounded-full btn-resin-secondary flex items-center justify-center text-xs font-black uppercase tracking-[0.2em]">
                                    Portfolio
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-secondary/40 via-primary/10 to-transparent rounded-full blur-3xl opacity-60"></div>
                            <div className="relative w-full max-w-[500px] aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl border-[14px] border-white/80 group isolate">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnfpnl8rnPT5eT5ClGG4m3IVGZwCW1fSFa3SzI3di1rCinY4i0B_gbBURMpa3KpA1_E-NYGrZlAvBmumCFjDH9TkcTJtK0_1Nu2mG93Qzh4FkSVxWRXp3HX7LBMdRmnPJQYn53srdhBZqwBr-Gfjdf11cc4n1Yf0lbhrVOzTPgYqvxSVGxlYOWnTAsykpmL77Ey8H6lR3blCGzVQBhnstN55Rnw7VKvTF4DzCLa-IJsEbC31Y8bYDVKcH6afO3S16N3NXoJb-RdjZP"
                                    alt="Featured Resin Work"
                                />
                                <div className="absolute inset-0 bg-resin-shine opacity-40 group-hover:opacity-60 transition-opacity"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Items Grid */}
            <section className="w-full px-4 md:px-8">
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex flex-col sm:flex-row items-end justify-between gap-6 mb-16 px-4">
                        <div className="space-y-4">
                            <span className="text-secondary-dark font-black tracking-[0.4em] uppercase text-[10px]">Curated Creations</span>
                            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">Handmade with Heart</h2>
                            <div className="h-1.5 w-24 bg-secondary/50 rounded-full blur-[1px]"></div>
                        </div>
                        <Link to="/shop" className="group h-12 px-8 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center gap-3 btn-resin-secondary shadow-lg">
                            Explore All <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {featured.map((product, idx) => (
                            <div key={product.id} className={`group ${idx % 2 === 1 ? 'lg:mt-16' : ''} flex flex-col gap-6`}>
                                <div className="glass-panel !p-0 !rounded-[3rem] aspect-[4/5] transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-resin-hover border-white/80 overflow-hidden relative isolate">
                                    <Link to={`/product/${product.id}`} className="absolute inset-0 z-10"></Link>
                                    <img src={product.image} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt={product.name} />
                                    <div className="absolute inset-0 bg-resin-shine opacity-30 pointer-events-none"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-10">
                                        <span className="text-secondary text-[9px] font-black uppercase tracking-widest mb-1">{product.category}</span>
                                        <h3 className="text-xl font-black text-white leading-tight">{product.name}</h3>
                                        <div className="flex justify-between items-center mt-6">
                                            <p className="text-lg font-black text-white">${product.price}</p>
                                            <button
                                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product); }}
                                                className="pointer-events-auto w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all shadow-lg border border-white/30"
                                            >
                                                <span className="material-symbols-outlined text-xl">add</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
