
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Furniture', 'Trays', 'Botanical', 'Clocks', 'Candles'];

  const filteredPortfolio = filter === 'All' ? PORTFOLIO : PORTFOLIO.filter(item => item.category === filter);

  // Helper for varied organic border radii based on index to create that custom "blob" look
  const getOrganicShape = (index: number) => {
    const shapes = [
      'rounded-[40%_60%_70%_30%/40%_50%_60%_50%]',
      'rounded-[60%_40%_30%_70%/60%_30%_70%_40%]',
      'rounded-[30%_70%_50%_50%/50%_30%_70%_50%]',
      'rounded-[50%_50%_20%_80%/25%_80%_20%_67%]',
      'rounded-[45%_55%_70%_30%/30%_30%_70%_70%]',
      'rounded-[70%_30%_30%_70%/60%_40%_60%_40%]'
    ];
    return shapes[index % shapes.length];
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 flex flex-col gap-12 md:gap-20 relative">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none animate-blob animation-delay-4000"></div>

      {/* Header section */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/40 text-primary text-[10px] font-black tracking-widest uppercase shadow-glass-inset">Artist Portfolio</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-primary leading-[1.05] drop-shadow-sm">
          Resin Art That <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-secondary-dark drop-shadow-sm">Flows With Life</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-medium leading-relaxed mt-2 text-shadow-sm">
          A curated gallery of fluid resin compositions, preserved memories, and handcrafted decor where every piece tells a unique story.
        </p>
      </div>

      {/* Filters */}
      <div className="sticky top-28 z-40 py-2 flex justify-center gap-2 md:gap-4 overflow-x-auto no-scrollbar mask-gradient-x">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`h-11 px-8 rounded-full text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap shadow-sm border ${
              filter === cat 
              ? 'bg-primary text-white border-primary shadow-xl scale-105' 
              : 'bg-white/40 border-white/60 text-primary hover:bg-white/60 hover:border-primary/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-like Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-12 p-4">
        {filteredPortfolio.map((item, idx) => (
          <div 
            key={item.id} 
            className={`break-inside-avoid group relative p-4 glass-panel hover:shadow-resin-hover transition-all duration-700 hover:scale-[1.03] hover:z-10 isolate cursor-pointer ring-1 ring-white/60 ${getOrganicShape(idx)}`}
          >
            <div className={`relative w-full h-full overflow-hidden isolate shadow-inner ${getOrganicShape(idx)}`}>
              <img 
                className="w-full h-auto object-cover transform transition-transform duration-[2s] group-hover:scale-110" 
                src={item.image} 
                alt={item.title} 
              />
              {/* Shine effect */}
              <div className="absolute inset-0 bg-resin-shine opacity-60 pointer-events-none z-10 mix-blend-soft-light transition-opacity group-hover:opacity-80"></div>
              {/* Depth gradient */}
              <div className="absolute inset-0 bg-resin-depth pointer-events-none z-10"></div>
              
              {/* Overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 backdrop-blur-[2px] z-20">
                <span className="text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-2 drop-shadow-md">{item.category}</span>
                <h3 className="text-white text-2xl font-black leading-tight tracking-tight drop-shadow-md">{item.title}</h3>
                <p className="text-white/70 text-sm font-medium mt-3 line-clamp-3 leading-relaxed drop-shadow-sm">{item.description}</p>
                <div className="mt-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all shadow-lg backdrop-blur-md">
                   <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </div>

              {/* Top right icon */}
              <div className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-white/20 backdrop-blur-md rounded-full p-2.5 text-white shadow-xl border border-white/30">
                  <span className="material-symbols-outlined text-[20px]">fullscreen</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Commission CTA with high-end typography */}
      <section className="mt-20 relative group">
        <div className="glass-panel !p-12 md:!p-24 !rounded-[4rem] text-center flex flex-col items-center gap-10 shadow-2xl relative overflow-hidden bg-gradient-to-br from-white/60 to-white/30">
          <div className="absolute inset-0 bg-resin-swirl opacity-30 -z-10 group-hover:scale-110 transition-transform duration-[10s]"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center text-primary shadow-gem border border-white/60 animate-bounce">
              <span className="material-symbols-outlined text-4xl">auto_awesome</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tight max-w-2xl leading-[1.1] drop-shadow-sm">
              Have a vision? Let's create something <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-dark to-primary-light relative">
                beautiful together.
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-secondary-dark/40" preserveAspectRatio="none" viewBox="0 0 200 9">
                  <path d="M2 2C2 2 45 8.5 100 5C155 1.5 198 2 198 2" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            
            <p className="text-slate-600 text-lg md:text-xl font-medium max-w-xl leading-relaxed text-shadow-sm">
              Whether it's preserving your wedding bouquet or designing a coffee table that matches your living room perfectly, commission a custom piece that tells your story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center pt-4">
              <Link to="/contact" className="h-16 px-12 btn-resin rounded-full font-black text-sm uppercase tracking-widest flex items-center justify-center shadow-xl shadow-primary/20 hover:scale-105 transition-transform group/btn">
                Request Commission
                <span className="material-symbols-outlined ml-2 group-hover/btn:translate-x-1 transition-transform">brush</span>
              </Link>
              <a href="#" className="text-primary font-black text-xs uppercase tracking-widest border-b-2 border-primary/20 pb-1 hover:border-primary transition-all flex items-center gap-2">
                View Pricing Guide <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
