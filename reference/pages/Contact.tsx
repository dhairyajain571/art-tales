
import React, { useState } from 'react';
import { getDesignAdvice } from '../services/geminiService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', vision: '', category: '' });
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAiAdvice = async () => {
    if (!formData.vision) return alert('Please describe your vision first.');
    setIsLoading(true);
    const result = await getDesignAdvice(formData.vision);
    setAdvice(result || '');
    setIsLoading(false);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-16 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-white/60 shadow-sm w-fit">
              <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
              <span className="text-primary text-xs font-extrabold uppercase tracking-wide">Open for Commissions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-primary">
              Let's Pour Your Vision
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Bring your ideas to life with custom resin art. From bespoke coasters to grand wall installations, every piece is hand-poured with passion.
            </p>
          </div>

          <div className="p-8 rounded-[2rem] glass-panel flex flex-col gap-6">
            <h3 className="text-xl font-bold text-primary">Contact Directly</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary shadow-gem border border-white/50">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="font-bold text-primary">Email Us</p>
                <p className="text-slate-500 font-medium">hello@arttales.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary shadow-gem border border-white/50">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="font-bold text-primary">Studio Location</p>
                <p className="text-slate-500 font-medium">Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form className="glass-panel p-8 md:p-12 !rounded-[3rem] shadow-2xl flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-primary text-xs font-bold uppercase tracking-wider ml-2">Your Name</span>
                <input className="h-14 px-6 rounded-2xl border-none shadow-inner bg-white/40 focus:ring-2 focus:ring-primary/20 text-primary font-medium" placeholder="Full name" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-primary text-xs font-bold uppercase tracking-wider ml-2">Email</span>
                <input className="h-14 px-6 rounded-2xl border-none shadow-inner bg-white/40 focus:ring-2 focus:ring-primary/20 text-primary font-medium" placeholder="hello@example.com" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center ml-2">
                <span className="text-primary text-xs font-bold uppercase tracking-wider">Describe your Vision</span>
                <button 
                  type="button"
                  onClick={handleAiAdvice}
                  className="text-[10px] font-bold text-white bg-primary px-3 py-1 rounded-full flex items-center gap-1 hover:scale-105 transition-transform"
                >
                  <span className="material-symbols-outlined text-[14px]">auto_awesome</span> Get AI Ideas
                </button>
              </div>
              <textarea 
                value={formData.vision}
                onChange={(e) => setFormData({...formData, vision: e.target.value})}
                className="min-h-40 p-6 rounded-2xl border-none shadow-inner bg-white/40 focus:ring-2 focus:ring-primary/20 text-primary font-medium" 
                placeholder="I want a 24-inch round geode clock with navy blue and emerald green hues..."
              />
            </div>

            {isLoading && (
              <div className="p-4 rounded-2xl bg-white/20 animate-pulse text-xs font-bold text-primary text-center">Consulting Gemini Design Expert...</div>
            )}

            {advice && (
              <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20">
                <h4 className="text-xs font-black uppercase text-secondary-dark mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">auto_awesome</span> Gemini's Design Recommendation:
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium italic">"{advice}"</p>
              </div>
            )}

            <button type="submit" className="h-16 btn-resin rounded-full font-bold text-lg flex items-center justify-center gap-3">
              Send Inquiry <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
