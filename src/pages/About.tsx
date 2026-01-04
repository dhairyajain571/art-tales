import React from 'react';
import { Link } from 'react-router-dom';
import logoHero from '../assets/logo_hero.png';
import logoHeader from '../assets/logo_header.png';
import { useData } from '../contexts/DataContext';

const About: React.FC = () => {
    const { siteContent } = useData();
    const { behindTheScenes, testimonials } = siteContent.about;

    return (
        <div className="flex flex-col w-full relative">
            {/* Background decoration elements */}
            <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-secondary/20 rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[10%] w-[45vw] h-[45vw] bg-secondary/15 rounded-full blur-[130px] opacity-50 animation-delay-4000"></div>
            </div>

            {/* Meet Aashwi Hero Section */}
            <section className="px-4 md:px-10 lg:px-40 py-16 md:py-24">
                <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex flex-col gap-10 p-10 md:p-14 rounded-[3rem] resin-embedded relative overflow-hidden order-2 lg:order-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none mix-blend-overlay"></div>
                        <div className="flex flex-col gap-8 text-left relative z-10">
                            <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px] bg-white/60 w-fit px-4 py-2 rounded-full backdrop-blur-md shadow-sm border border-white/60">Meet Aashwi</span>

                            {/* Brand Logo inside hero content */}
                            <div className="h-32 w-auto mb-6 flex justify-start">
                                <img src={logoHero} alt="Art Tales Logo" className="h-full w-auto object-contain drop-shadow-sm" />
                            </div>

                            <h1 className="text-primary text-5xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
                                Crafting Memories in Resin & Wax
                            </h1>
                            <p className="text-primary/90 text-lg font-medium leading-relaxed max-w-lg">
                                Hi, I'm Aashwi. Welcome to Art Tales, where every pour tells a story. What began as a personal journey of expression has blossomed into a studio dedicated to capturing emotions in tangible art.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 relative z-10 pt-4">
                            <Link to="/shop" className="h-14 px-10 btn-resin rounded-full flex items-center justify-center font-black text-[11px] uppercase tracking-widest shadow-xl shadow-primary/10">
                                Shop Collection
                            </Link>
                            <Link to="/contact" className="h-14 px-10 btn-resin-secondary rounded-full flex items-center justify-center font-black text-[11px] uppercase tracking-widest border-white/60 shadow-lg">
                                Contact Me
                            </Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
                        <div className="relative p-4 bg-white rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-1000 ease-out border-4 border-white/50">
                            <div className="w-full aspect-square max-w-[480px] rounded-[2.5rem] relative overflow-hidden group">
                                <img
                                    src={siteContent.about?.image}
                                    alt="Aashwi - Art Tales"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none mix-blend-overlay"></div>
                                <div className="absolute inset-0 bg-resin-shine opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="px-4 md:px-10 lg:px-40 py-16">
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex flex-col lg:flex-row gap-10 items-stretch">
                        <div className="flex flex-col gap-8 lg:w-3/5 p-12 md:p-16 rounded-[4rem] resin-glass shadow-2xl relative overflow-hidden group">
                            <div className="absolute -top-32 -right-32 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000"></div>
                            <h2 className="text-primary text-[38px] font-black leading-tight tracking-tight relative z-10">From Hobby to Brand</h2>
                            <div className="space-y-6 relative z-10">
                                <p className="text-primary/90 text-xl leading-relaxed font-medium">
                                    What started as a weekend experiment with colors and textures has grown into a dedicated studio. I believe in the beauty of handmade imperfections and the joy of personalized art.
                                </p>
                                <p className="text-primary/90 text-xl leading-relaxed font-medium">
                                    Each piece created at Art Tales is a labor of love. We focus on creating not just products, but memories that you can hold, smell, and see.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 lg:w-2/5">
                            {[
                                { icon: 'favorite', title: 'Handcrafted Love', desc: 'Every piece poured by hand ensuring uniqueness.' },
                                { icon: 'eco', title: 'Sustainable Materials', desc: 'Eco-friendly soy waxes and non-toxic resin.' },
                                { icon: 'brush', title: 'Custom Designs', desc: 'Tailored specifically to your aesthetic needs.' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 p-8 rounded-[2.5rem] resin-embedded hover:bg-white/50 transition-all duration-500 group border border-white/40 shadow-lg">
                                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-primary shrink-0 shadow-gem border border-white/60 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-primary text-xl font-black mb-1">{item.title}</h3>
                                        <p className="text-primary/60 text-sm font-bold tracking-tight leading-snug">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Behind the Scenes Section */}
            <section className="px-4 md:px-10 lg:px-40 py-16">
                <div className="max-w-[1280px] mx-auto text-center">
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px] bg-white/60 w-fit px-4 py-2 rounded-full backdrop-blur-md shadow-sm border border-white/60 mb-6 mx-auto inline-block">Studio Life</span>
                    <h2 className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4 drop-shadow-sm">Behind the Scenes</h2>
                    <p className="text-primary/70 mb-12 text-lg font-medium">A glimpse into the Art Tales studio</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {behindTheScenes?.map((img, i) => (
                            <div key={i} className={`group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-xl border-[6px] border-white/40 ${i === 1 ? 'md:-translate-y-8' : ''}`}>
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${img}')` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="px-4 md:px-10 lg:px-40 py-16 bg-white/30 backdrop-blur-sm">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h2 className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-tight mb-16 drop-shadow-sm">Loved by Art Lovers</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials?.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] shadow-lg border border-white/60 text-left relative group hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                                    <span className="material-symbols-outlined text-xl">format_quote</span>
                                </div>
                                <div className="absolute -top-4 -left-4 w-10 h-10 bg-secondary/30 rounded-full blur-xl"></div>

                                <p className="text-slate-700 font-medium leading-relaxed mb-8 text-sm">"{testimonial.text}"</p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-sm">{testimonial.name}</h4>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subscription CTA */}
            <section className="px-4 md:px-10 lg:px-40 py-24 md:py-32">
                <div className="max-w-[1280px] mx-auto flex flex-col items-center">
                    <div className="p-12 md:p-20 rounded-[4.5rem] resin-embedded w-full max-w-[900px] flex flex-col items-center relative overflow-hidden text-center shadow-[0_40px_80px_-20px_rgba(74,20,140,0.1)] border-white/60">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none"></div>

                        <div className="mb-8 z-10 flex items-center justify-center">
                            <img src={logoHeader} alt="Art Tales Brand" className="h-28 w-auto object-contain" />
                        </div>

                        <h2 className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6 z-10">Stay in the Loop</h2>
                        <p className="text-primary/70 mb-12 max-w-[550px] text-lg font-medium z-10 leading-relaxed">
                            Join the community to get first access to new collections and exclusive workshop invites.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 w-full max-w-[550px] z-10">
                            <input
                                className="flex-1 rounded-full border border-white bg-white/70 px-8 py-4 text-base outline-none transition-all text-primary placeholder:text-primary/40 shadow-inner backdrop-blur-md font-bold"
                                placeholder="Enter your email"
                                type="email"
                                required
                            />
                            <button type="submit" className="h-16 px-12 btn-resin font-black text-[11px] uppercase tracking-[0.25em] rounded-full transition-all hover:scale-105 active:scale-95">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
