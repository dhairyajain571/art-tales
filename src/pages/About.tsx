
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logoFull from '../assets/logo_full.png';

const About: React.FC = () => {
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
                                <img src={logoFull} alt="Art Tales Logo" className="h-full w-auto object-contain drop-shadow-sm" />
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
                        <div className="resin-image-frame rotate-2 hover:rotate-0 transition-transform duration-1000 ease-out">
                            <div
                                className="w-full aspect-square max-w-[480px] bg-center bg-no-repeat bg-cover rounded-[2.8rem] shadow-inner relative overflow-hidden group"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7BVwNujloKr0xa4BBBS9-DOvxNZS0SNvUKpwaTaruVTFPNzFeWi57chgttaobU_q6CQ2D6baimRtlPht98ZUC-6hSM_W39Uw8Rhf4-B1ivXY_DisBH0pTGrGWA1pi308RJtK1r-lUYun16g57PCFcDvDeYXS2wVD3MoEcjERWSNdizE5zJ7DE-tEXoEIojcZjrZoa7erxfyrHAtKoejCWYvYwOTNQZGjXunk1Uz2mYQuXMO7S9PL7xwjArkuEWD5_OfQU6N89NyGX")' }}
                            >
                                <div className="absolute inset-0 bg-resin-shine opacity-30 group-hover:opacity-50 transition-opacity"></div>
                            </div>
                            <div className="absolute inset-0 rounded-[3rem] pointer-events-none bg-gradient-to-tr from-transparent via-white/20 to-white/40 mix-blend-overlay"></div>
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

            {/* Subscription CTA */}
            <section className="px-4 md:px-10 lg:px-40 py-24 md:py-32">
                <div className="max-w-[1280px] mx-auto flex flex-col items-center">
                    <div className="p-12 md:p-20 rounded-[4.5rem] resin-embedded w-full max-w-[900px] flex flex-col items-center relative overflow-hidden text-center shadow-[0_40px_80px_-20px_rgba(74,20,140,0.1)] border-white/60">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none"></div>

                        <div className="w-32 h-32 rounded-full bg-white/40 mb-8 shadow-gem border-[6px] border-white/60 z-10 flex items-center justify-center">
                            <img src={logo} alt="Art Tales Brand" className="w-20 h-20 object-contain" />
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
