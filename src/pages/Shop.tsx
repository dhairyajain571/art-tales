
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { Product } from '../types';

interface Props {
    addToCart: (product: Product, quantity?: number) => void;
}

const Shop: React.FC<Props> = ({ addToCart }) => {
    const { products, siteContent, formatPrice } = useData();
    // Basic filtering logic for demonstration
    const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
    const [priceSort, setPriceSort] = useState<string>('newest');

    const handleCategoryChange = (category: string) => {
        setCategoryFilter(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const filteredProducts = products.filter(p =>
        categoryFilter.length === 0 || categoryFilter.includes(p.category)
    ).sort((a, b) => {
        if (priceSort === 'price-asc') return a.price - b.price;
        if (priceSort === 'price-desc') return b.price - a.price;
        return 0; // Default or newest
    });

    return (
        <div className="w-full px-4 lg:px-20 xl:px-32 py-12 lg:py-16">

            {/* Header Section */}
            <div className="flex flex-col gap-8 text-center items-center relative mb-16">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-secondary/20 rounded-full blur-[100px] -z-10"></div>
                <span className="inline-flex items-center gap-2 text-primary-dark uppercase tracking-[0.2em] text-xs font-black bg-white/40 px-6 py-2.5 rounded-full backdrop-blur-md border border-white/60 shadow-resin-card transform hover:scale-105 transition-transform duration-300">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Resin & Soul Collection
                </span>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-text-main via-primary to-secondary text-5xl lg:text-7xl font-black leading-tight tracking-[-0.03em] drop-shadow-sm pb-2">
                    Curated Masterpieces
                </h1>
                <p className="text-text-muted dark:text-gray-300 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl text-shadow-sm backdrop-blur-sm rounded-2xl p-4">
                    Immerse yourself in handcrafted resin art, bespoke jewelry, and aromatic candles—each piece a solidified moment of beauty encased in glass-like eternity.
                </p>
            </div>

            <div className="mx-auto max-w-[1440px] flex flex-col lg:flex-row gap-12">
                {/* Sidebar Filter */}
                <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-6">
                    <div className="flex items-center justify-between lg:hidden pb-4 border-b border-border-subtle">
                        <span className="font-bold text-lg text-text-main">Filters</span>
                        <button onClick={() => setCategoryFilter([])} className="text-primary font-bold text-xs uppercase tracking-wider bg-white/40 px-3 py-1 rounded-full shadow-sm border border-white/30">Clear All</button>
                    </div>

                    <div className="hidden lg:flex items-center justify-between pb-2 px-2">
                        <h3 className="font-bold text-text-main dark:text-white text-lg flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">tune</span>
                            Filter By
                        </h3>
                        <button onClick={() => setCategoryFilter([])} className="text-primary hover:text-white hover:bg-btn-gem hover:shadow-resin-btn transition-all text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/40 shadow-sm border border-white/40">Reset</button>
                    </div>

                    <div className="flex flex-col gap-6 sticky top-28">
                        <details className="group rounded-[2rem] border border-white/60 bg-white/40 dark:bg-surface-dark backdrop-blur-xl shadow-resin-card overflow-hidden transition-all duration-300" open>
                            <summary className="flex cursor-pointer items-center justify-between px-6 py-4 select-none bg-white/20 hover:bg-white/40 transition-colors">
                                <span className="text-text-main dark:text-white text-base font-bold">Categories</span>
                                <span className="material-symbols-outlined text-text-main dark:text-gray-400 group-open:rotate-180 transition-transform text-[20px]">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 pt-4 flex flex-col gap-3 relative">
                                <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>
                                {(siteContent.shop?.categories && siteContent.shop.categories.length > 0 ? siteContent.shop.categories : ['Resin Art', 'Homeware', 'Jewelry', 'Candles']).map(cat => (
                                    <label key={cat} className="flex items-center gap-3 cursor-pointer group/item hover:translate-x-1 transition-transform p-1">
                                        <div className="relative flex items-center">
                                            <input
                                                type="checkbox"
                                                className="peer h-5 w-5 rounded-lg border-0 bg-white/50 checked:bg-primary focus:ring-offset-0 focus:ring-0 transition-all appearance-none shadow-embedded"
                                                checked={categoryFilter.includes(cat)}
                                                onChange={() => handleCategoryChange(cat)}
                                            />
                                            <span className="absolute inset-0 hidden peer-checked:flex items-center justify-center text-white material-symbols-outlined text-[14px] pointer-events-none">check</span>
                                        </div>
                                        <span className="text-text-main dark:text-gray-200 text-sm font-semibold group-hover/item:text-primary transition-colors">{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </details>

                        <details className="group rounded-[2rem] border border-white/60 bg-white/40 dark:bg-surface-dark backdrop-blur-xl shadow-resin-card overflow-hidden transition-all duration-300">
                            <summary className="flex cursor-pointer items-center justify-between px-6 py-4 select-none bg-white/20 hover:bg-white/40 transition-colors">
                                <span className="text-text-main dark:text-white text-base font-bold">Price Range</span>
                                <span className="material-symbols-outlined text-text-main dark:text-gray-400 group-open:rotate-180 transition-transform text-[20px]">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 pt-4 flex flex-col gap-6">
                                <div className="relative pt-2">
                                    <input type="range" min="0" max="1000" className="w-full h-3 bg-white/50 rounded-full appearance-none cursor-pointer accent-primary shadow-embedded" />
                                </div>
                                <div className="flex gap-3">
                                    <div className="relative flex-1 group">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-xs font-bold">{siteContent.global?.currency}</span>
                                        <input type="number" placeholder="Min" className="w-full rounded-xl border-0 bg-white/50 text-sm pl-9 pr-3 py-2.5 focus:ring-2 focus:ring-primary shadow-embedded transition-all" />
                                    </div>
                                    <div className="relative flex-1 group">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-xs font-bold">{siteContent.global?.currency}</span>
                                        <input type="number" placeholder="Max" className="w-full rounded-xl border-0 bg-white/50 text-sm pl-9 pr-3 py-2.5 focus:ring-2 focus:ring-primary shadow-embedded transition-all" />
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1 flex flex-col gap-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/40 dark:bg-surface-dark p-2 pl-6 pr-2 rounded-full border border-white/60 backdrop-blur-xl shadow-resin-card">
                        <p className="text-text-main dark:text-white text-sm font-medium">Showing <span className="font-bold text-primary">{filteredProducts.length}</span> of <span className="font-bold">{products.length}</span> handcrafted items</p>
                        <div className="flex items-center gap-3 bg-white/40 rounded-full pl-4 pr-1 py-1 shadow-embedded">
                            <label htmlFor="sort" className="text-xs text-text-muted dark:text-gray-300 font-bold uppercase tracking-wide">Sort</label>
                            <div className="relative">
                                <select
                                    id="sort"
                                    className="appearance-none bg-transparent border-none text-text-main dark:text-white text-sm font-bold focus:ring-0 block w-40 p-2 pr-8 cursor-pointer"
                                    value={priceSort}
                                    onChange={(e) => setPriceSort(e.target.value)}
                                >
                                    <option value="newest">Newest First</option>
                                    <option value="price-asc">Price: Low to High</option>
                                    <option value="price-desc">Price: High to Low</option>
                                    <option value="popular">Best Sellers</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary">
                                    <span className="material-symbols-outlined text-[20px]">expand_more</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="group flex flex-col gap-4 bg-glass-gradient p-5 rounded-fluid border border-white/60 hover:border-white/90 transition-all duration-500 shadow-resin-card hover:shadow-resin-card-hover backdrop-blur-2xl relative overflow-hidden transform hover:-translate-y-2">
                                <div className="absolute inset-0 bg-card-gloss pointer-events-none rounded-[inherit] z-10 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute inset-0 bg-card-shine opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>

                                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-white/60 shadow-embedded group-hover:shadow-inner transition-all duration-500">
                                    <Link to={`/product/${product.id}`} className="absolute inset-0 z-20"></Link>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-overlay opacity-20 absolute inset-0 z-0"
                                    />
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="relative h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                                    />
                                    {/* New Badge (Logic could be added) */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-white/80 dark:bg-black/60 backdrop-blur-md shadow-lg text-primary text-[10px] uppercase tracking-widest font-black px-4 py-2 rounded-full border border-white/40 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> New
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="absolute bottom-4 right-4 z-30 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-xl bg-btn-gem text-white rounded-full p-4 flex items-center justify-center hover:scale-110 shadow-resin-btn border border-white/20"
                                    >
                                        <span className="material-symbols-outlined">add_shopping_cart</span>
                                    </button>
                                </div>

                                <div className="flex flex-col gap-2 px-2 pb-1 pt-2 z-20 relative">
                                    <div className="flex justify-between items-start gap-4">
                                        <Link to={`/product/${product.id}`} className="text-text-main dark:text-white font-black text-xl hover:text-primary transition-colors line-clamp-1 tracking-tight">
                                            {product.name}
                                        </Link>
                                        <span className="text-primary font-black text-xl drop-shadow-sm bg-white/30 px-3 py-1 rounded-lg border border-white/40 shadow-sm">
                                            {formatPrice(product.price)}
                                        </span>
                                    </div>
                                    <p className="text-text-muted dark:text-gray-300 text-sm font-medium line-clamp-1 opacity-80">{product.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
