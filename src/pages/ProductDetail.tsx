
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface Props {
    addToCart: (product: Product, quantity?: number) => void;
}

const ProductDetail: React.FC<Props> = ({ addToCart }) => {
    const { id } = useParams<{ id: string }>();
    const product = PRODUCTS.find(p => p.id === id);
    const [quantity, setQuantity] = useState(1);
    const [selectedFinish, setSelectedFinish] = useState('Gold Flakes');
    const [openAccordion, setOpenAccordion] = useState<string | null>('desc');

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-bold text-primary">Product Not Found</h2>
                <Link to="/shop" className="btn-resin-secondary px-6 py-2 rounded-full">Back to Shop</Link>
            </div>
        );
    }

    // Use all products except current for the "Complete the Look" section
    const completeTheLookItems = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

    return (
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-10 flex flex-col gap-16 md:gap-24">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="material-symbols-outlined text-[10px] pointer-events-none">chevron_right</span>
                <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
                <span className="material-symbols-outlined text-[10px] pointer-events-none">chevron_right</span>
                <span className="hover:text-primary transition-colors">Resin Trays</span>
                <span className="material-symbols-outlined text-[10px] pointer-events-none">chevron_right</span>
                <span className="text-primary/70">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Gallery Section */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-white shadow-lg border border-slate-100 group">
                        <div className="absolute top-6 left-6 z-10">
                            <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-primary shadow-sm border border-slate-100">Signature Item</span>
                        </div>
                        <img
                            src={product.image}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            alt={product.name}
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 cursor-pointer shadow-sm hover:border-primary transition-all">
                            <img src={product.image} className="w-full h-full object-cover" />
                        </div>
                        {/* Duplicating image for gallery illusion as per reference logic which uses placeholder URLs */}
                        {[1, 2].map((_, i) => (
                            <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-slate-100 cursor-pointer shadow-sm hover:border-primary transition-all">
                                <img src={product.image} className="w-full h-full object-cover" />
                            </div>
                        ))}
                        <div className="aspect-square rounded-2xl overflow-hidden border border-slate-100 cursor-pointer shadow-sm hover:border-primary transition-all flex items-center justify-center bg-secondary/5 group">
                            <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">play_circle</span>
                        </div>
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    <div className="bg-white/30 backdrop-blur-xl border border-white/60 p-8 md:p-10 rounded-[2.5rem] shadow-xl">
                        <h1 className="text-3xl md:text-4xl font-black text-primary leading-tight mb-2 tracking-tight">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-3xl font-black text-primary tracking-tight">${product.price.toFixed(2)}</span>
                            <div className="flex items-center gap-0.5 text-yellow-400">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <span key={star} className="material-symbols-outlined text-[18px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                ))}
                                <button className="text-[10px] font-black uppercase tracking-widest text-primary/40 underline ml-2 hover:text-primary transition-colors">(124 reviews)</button>
                            </div>
                        </div>

                        <p className="text-sm text-slate-600 font-medium leading-relaxed mb-10 pr-4">
                            {product.description}
                        </p>

                        <div className="space-y-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">Add Personalization (+$5.00)</label>
                                <input
                                    type="text"
                                    placeholder="Enter name or short quote..."
                                    className="w-full h-12 bg-white/50 border border-slate-100 rounded-xl px-5 text-sm font-medium focus:ring-1 focus:ring-primary/20 outline-none placeholder:text-slate-300"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">Finish Type</label>
                                <div className="flex flex-wrap gap-2">
                                    {['Gold Flakes', 'Silver Flakes', 'Clear Finish'].map(finish => (
                                        <button
                                            key={finish}
                                            onClick={() => setSelectedFinish(finish)}
                                            className={`h-10 px-6 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${selectedFinish === finish ? 'bg-primary text-white shadow-lg' : 'border border-primary/20 text-primary hover:border-primary'}`}
                                        >
                                            {finish}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3 items-center pt-2">
                                <div className="flex items-center h-12 border border-slate-100 bg-white/50 rounded-xl overflow-hidden shadow-sm w-28">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex-1 text-primary hover:bg-primary/5 font-bold transition-colors">-</button>
                                    <span className="w-8 text-center text-sm font-black text-primary">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="flex-1 text-primary hover:bg-primary/5 font-bold transition-colors">+</button>
                                </div>
                                <button
                                    onClick={() => addToCart(product, quantity)}
                                    className="flex-1 h-12 btn-resin rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-primary/10"
                                >
                                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Add to Cart
                                </button>
                                <button className="h-12 w-12 flex items-center justify-center border border-slate-100 bg-white/50 rounded-xl text-primary/30 hover:text-secondary-dark transition-colors">
                                    <span className="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-5 rounded-2xl bg-white/40 border border-white/60 shadow-sm">
                            <span className="material-symbols-outlined text-primary text-xl">favorite</span>
                            <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest leading-tight">Handmade with Love</span>
                        </div>
                        <div className="flex items-center gap-3 p-5 rounded-2xl bg-white/40 border border-white/60 shadow-sm">
                            <span className="material-symbols-outlined text-primary text-xl">local_shipping</span>
                            <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest leading-tight">Free Shipping &gt;$100</span>
                        </div>
                        <div className="flex items-center gap-3 p-5 rounded-2xl bg-white/40 border border-white/60 shadow-sm">
                            <span className="material-symbols-outlined text-primary text-xl">shield</span>
                            <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest leading-tight">Non-Toxic Resin</span>
                        </div>
                        <div className="flex items-center gap-3 p-5 rounded-2xl bg-white/40 border border-white/60 shadow-sm">
                            <span className="material-symbols-outlined text-primary text-xl">recycling</span>
                            <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest leading-tight">Eco-Friendly Pack</span>
                        </div>
                    </div>

                    {/* Accordions */}
                    <div className="space-y-2">
                        {[
                            { id: 'desc', label: 'Description & Dimensions', text: 'Crafted with premium heat-resistant resin, real beach sand, and layered turquoise pigments to create depth. Dimensions: 14" x 9" x 0.5".' },
                            { id: 'ship', label: 'Shipping & Returns', text: 'Free standard shipping on orders over $100. Delivered in sustainable, protective packaging within 5-7 business days.' }
                        ].map(sec => (
                            <div key={sec.id} className="bg-white/40 border border-white/60 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => setOpenAccordion(openAccordion === sec.id ? null : sec.id)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left group"
                                >
                                    <span className="text-[11px] font-black uppercase tracking-widest text-primary/80">{sec.label}</span>
                                    <span className={`material-symbols-outlined text-primary/40 transition-transform duration-300 ${openAccordion === sec.id ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                {openAccordion === sec.id && (
                                    <div className="px-6 pb-4 text-xs font-medium text-slate-500 leading-relaxed">
                                        {sec.text}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Behind the Art Video Section */}
            <section className="relative h-[500px] md:h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-primary group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent opacity-90 z-10"></div>
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPA4C8S9aYLbcCcrz9ot0V4rU8EQUtchnJCa8jXJWuUbHY1NbQEs2YGec4pZbIzvwVuJ3_KgamMS7DYooyKjO-d46w3GHzkvDai3tE-hP3iyS1ZHRv3bmXD0mJwKMzHoAPnYfuO8E66995nl3R4G4Uglvx-IKn66qveP9FamcEgdYx63XJl4ovkgQn7CTOwNPEZa5FuzsETX_Ryv1N9jKjEKYAUNbFFTTvDal22wRMBi3wAl5YbQ9yPm_ccx1dm_U-keIFqPZlRSSz"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] contrast-125"
                />
                <div className="relative z-20 h-full w-full max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col justify-center gap-6 md:gap-8">
                    <div className="w-12 h-0.5 bg-white/30"></div>
                    <div>
                        <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] block mb-3 md:mb-4">The Craft</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 md:mb-8">Behind the Art</h2>
                        <p className="text-white/80 text-sm md:text-lg font-medium leading-relaxed max-w-xs md:max-w-lg mb-8 md:mb-12">
                            Watch how Aashwi brings the "Ocean Breeze" collection to life. Every wave is poured by hand, manipulated with heat and air to create organic cells and lacing that mimics the real ocean foam. No two waves are ever the same.
                        </p>
                        <button className="text-white text-[10px] md:text-[11px] font-black uppercase tracking-widest border-b-2 border-white/20 pb-1 hover:border-white transition-all">Read the Artist's Story</button>
                    </div>
                </div>
                <div className="absolute bottom-6 right-6 md:top-1/2 md:right-32 md:-translate-y-1/2 z-30">
                    <button className="w-16 h-16 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:scale-110 transition-transform shadow-2xl group">
                        <span className="material-symbols-outlined text-white text-3xl md:text-6xl group-hover:scale-110 transition-transform">play_arrow</span>
                    </button>
                </div>
            </section>

            {/* Complete the Look Section */}
            <section className="flex flex-col gap-12">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-black text-primary tracking-tight">Complete the Look</h2>
                    <Link to="/shop" className="text-[10px] font-black uppercase tracking-widest text-primary hover:gap-3 transition-all flex items-center gap-2">
                        View Collection <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {completeTheLookItems.map(item => (
                        <Link key={item.id} to={`/product/${item.id}`} className="flex flex-col gap-4 group">
                            <div className="aspect-square bg-white border border-slate-50 rounded-[2.5rem] overflow-hidden shadow-sm relative group-hover:shadow-md transition-all">
                                <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.name} />
                                {item.oldPrice && (
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-secondary-dark text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Sale</span>
                                    </div>
                                )}
                            </div>
                            <div className="px-2">
                                <h3 className="text-sm font-bold text-primary group-hover:text-primary-light transition-colors">{item.name}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-sm font-black text-primary/60">${item.price.toFixed(2)}</span>
                                    {item.oldPrice && <span className="text-[10px] font-bold text-primary/20 line-through">${item.oldPrice.toFixed(2)}</span>}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
