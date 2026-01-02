
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface Props {
  addToCart: (product: Product, quantity?: number) => void;
}

const Shop: React.FC<Props> = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('newest');

  const categories = ['All', 'Resin Art', 'Candles', 'Trays', 'Coasters'];

  const filteredProducts = PRODUCTS.filter(p => activeCategory === 'All' || p.category === activeCategory);

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-12 pb-24">
      <div className="flex flex-col gap-12 text-center items-center relative mb-20">
        <span className="inline-flex items-center gap-2 text-primary-dark uppercase tracking-[0.2em] text-xs font-black bg-white/40 px-6 py-2.5 rounded-full backdrop-blur-md border border-white/60 shadow-resin-block">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Resin & Soul Collection
        </span>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-primary-dark via-primary to-secondary-dark text-5xl lg:text-7xl font-black leading-tight tracking-[-0.03em] drop-shadow-sm pb-2">
          Curated Masterpieces
        </h1>
        <p className="text-slate-600 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl backdrop-blur-sm rounded-2xl p-4">
          Immerse yourself in handcrafted resin art, bespoke jewelry, and aromatic candles—each piece a solidified moment of beauty.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-6">
          <div className="flex items-center justify-between pb-2 px-2">
            <h3 className="font-bold text-primary text-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">tune</span>
              Filter By
            </h3>
            <button onClick={() => setActiveCategory('All')} className="text-primary hover:text-white hover:bg-primary transition-all text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/40 shadow-sm border border-white/40">Reset</button>
          </div>
          
          <div className="flex flex-col gap-6 sticky top-28">
            <div className="rounded-[2rem] border border-white/60 bg-white/40 backdrop-blur-xl shadow-resin-block overflow-hidden p-6">
              <h4 className="text-primary text-base font-bold mb-4">Categories</h4>
              <div className="flex flex-col gap-3">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group hover:translate-x-1 transition-transform p-1">
                    <input 
                      type="checkbox" 
                      checked={activeCategory === cat}
                      onChange={() => setActiveCategory(cat)}
                      className="peer h-5 w-5 rounded-lg border-0 bg-white/50 checked:bg-primary focus:ring-offset-0 focus:ring-0 transition-all appearance-none shadow-inner" 
                    />
                    <span className={`text-sm font-semibold transition-colors ${activeCategory === cat ? 'text-primary' : 'text-slate-500 group-hover:text-primary'}`}>{cat}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/40 p-2 pl-6 pr-2 rounded-full border border-white/60 backdrop-blur-xl shadow-resin-block">
            <p className="text-slate-700 text-sm font-medium">Showing <span className="font-bold text-primary">{filteredProducts.length}</span> items</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="group flex flex-col gap-4 bg-white/40 p-5 rounded-[2.5rem] border border-white/60 hover:border-white/90 transition-all duration-500 shadow-resin-block hover:shadow-xl backdrop-blur-2xl relative overflow-hidden transform hover:-translate-y-2">
                <Link to={`/product/${product.id}`} className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-white/60 shadow-inner group-hover:shadow-inner transition-all duration-500">
                  <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={product.image} alt={product.name} />
                  {product.isNew && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-white/80 backdrop-blur-md shadow-lg text-primary text-[10px] uppercase tracking-widest font-black px-4 py-2 rounded-full border border-white/40">New</span>
                    </div>
                  )}
                </Link>
                <div className="flex flex-col gap-2 px-2 pb-1 pt-2">
                  <div className="flex justify-between items-start gap-4">
                    <Link to={`/product/${product.id}`} className="text-primary font-black text-xl hover:text-primary-light transition-colors line-clamp-1 tracking-tight">{product.name}</Link>
                    <span className="text-primary font-black text-xl drop-shadow-sm bg-white/30 px-3 py-1 rounded-lg border border-white/40">${product.price}</span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium line-clamp-1">{product.description}</p>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="h-12 w-full btn-resin mt-2 rounded-full font-bold flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
