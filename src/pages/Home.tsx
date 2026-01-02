
import React from 'react';
import { Link } from 'react-router-dom';

// Note: Ensure these URLs match the ones in the user's snippet. 
// Using the provided Google Content URLs as they are specific assets the user likely wants.

interface Props {
    addToCart: (product: any) => void; // Using any for simplicity as we aren't using the full product type here for the static design parts
}

const Home: React.FC<Props> = () => {
    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-20 items-center w-full">
            {/* Hero Section */}
            <section className="relative w-full px-4 md:px-6">
                <div className="max-w-[1280px] mx-auto glass-panel !bg-white/30 rounded-[2.5rem] overflow-hidden min-h-[600px] flex shadow-2xl shadow-primary/5 border-t border-white/80">
                    <div className="relative z-20 flex flex-col-reverse lg:flex-row items-center w-full p-8 lg:p-16 gap-12 lg:gap-20">
                        <div className="flex flex-col gap-8 flex-1 text-center lg:text-left items-center lg:items-start">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/60 shadow-sm backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-secondary-dark animate-pulse"></span>
                                <span className="text-[11px] font-bold text-primary tracking-widest uppercase">New Ocean Collection</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-primary drop-shadow-sm">
                                <span className="block text-depth">Captured</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-dark filter drop-shadow-sm">
                                    in Resin
                                </span>
                            </h1>
                            <p className="text-lg text-slate-600 max-w-lg font-medium leading-relaxed">
                                Discover the art of frozen moments. Handcrafted resin decor and candles that embed color, light, and depth into your everyday space.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
                                <Link to="/shop" className="h-14 px-10 rounded-full btn-resin flex items-center justify-center gap-2 group text-base font-bold tracking-wide">
                                    Shop Now <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                                <Link to="/portfolio" className="h-14 px-10 rounded-full btn-resin-secondary flex items-center justify-center text-base font-bold tracking-wide">
                                    View Portfolio
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-secondary/40 to-primary/20 rounded-full blur-2xl"></div>
                            <div className="relative w-full max-w-[480px] aspect-[4/5] sm:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white/50 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 z-20 pointer-events-none opacity-80 mix-blend-overlay"></div>
                                <div className="w-full h-full bg-center bg-cover transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnfpnl8rnPT5eT5ClGG4m3IVGZwCW1fSFa3SzI3di1rCinY4i0B_gbBURMpa3KpA1_E-NYGrZlAvBmumCFjDH9TkcTJtK0_1Nu2mG93Qzh4FkSVxWRXp3HX7LBMdRmnPJQYn53srdhBZqwBr-Gfjdf11cc4n1Yf0lbhrVOzTPgYqvxSVGxlYOWnTAsykpmL77Ey8H6lR3blCGzVQBhnstN55Rnw7VKvTF4DzCLa-IJsEbC31Y8bYDVKcH6afO3S16N3NXoJb-RdjZP')" }}></div>
                                <div className="absolute bottom-8 left-8 z-30 bg-white/70 backdrop-blur-xl px-5 py-3.5 rounded-2xl shadow-lg border border-white/60 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-dark">
                                        <span className="material-symbols-outlined">water_drop</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Featured</span>
                                        <span className="text-base font-bold text-primary leading-tight">Ocean Series</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curated Collections */}
            <section className="w-full px-4 md:px-6">
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex flex-col sm:flex-row items-end justify-between gap-4 mb-12 px-2">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight text-depth">Curated Collections</h2>
                            <p className="text-slate-500 mt-2 font-medium">Hand-poured elegance, suspended in time.</p>
                        </div>
                        <Link to="/shop" className="px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 btn-resin-secondary">
                            Browse All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Collection Items */}
                        <div className="group cursor-pointer">
                            <div className="glass-panel !p-0 !rounded-[2rem] aspect-[3/4] mb-3 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl border-white/60 relative overflow-hidden">
                                <div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVTSL-upKnB_KKiuNfl-vlKV6VTqSMXEmavDZJgIJj-sB2r5Veqv8alcHutkSc4jUk3xBr3qbx_2ev95Nf3eBQ8uivrItECtz-UOGwr5VmMFHJdSG50oBPly8K7pDzaQSAuBbi8iBdZKwQrSp7BHfqFxEc0U7aFWRcQUXefc7sKnvDLTY_5mLkwFW1aqcB2jHSSofwJVb2EV6gfXk7qDdDWYEP6Npy5R6ZaiDxZtqIguf0Q-YsuT9phClJtfXfLK1gbZhzwXs7OL7K')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-lg font-bold text-white drop-shadow-md">Resin Coasters</h3>
                                    <p className="text-sm font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Floral & Gold Leaf</p>
                                </div>
                            </div>
                        </div>
                        <div className="group cursor-pointer md:mt-12">
                            <div className="glass-panel !p-0 !rounded-[2rem] aspect-[3/4] mb-3 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl border-white/60 relative overflow-hidden">
                                <div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTPhLWDB1NOIZ4-YajblVRxVWsKzasOKQiFZ2a0HWVKgxR7iNLm5Q5DL2FHjQGnPk3pgFV9X807Ery7udez__ezAE4me6P6naWg2M_mzqYgBUpUIbRutodR6M-OQfNW003M7SvrO89w8rGWZyhJoiOTnO7xiFxr1dFyYHrMXf1mB9OKmXFfx3ED2CgTgN5eawB_x-d84QzUTKKKH4OgJKvnzW4ej3EQPDXjjgpYzp9rdWkx-SeBAILq16wu2U4rhqxHeV69KcbJAcF')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-lg font-bold text-white drop-shadow-md">Scented Candles</h3>
                                    <p className="text-sm font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Soy Wax Blends</p>
                                </div>
                            </div>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="glass-panel !p-0 !rounded-[2rem] aspect-[3/4] mb-3 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl border-white/60 relative overflow-hidden">
                                <div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxVulVJURjpwSiG4_P-ZN17Dh2n2GXaYiyS5_TsgUJcqM5wskE7w25-rj3r9L2CHXY1tQozCiw6uCWQPI4CYPess_6RpL0AwotEtWjuQBapgQO7hFu9YyNiUGxdn36tlWdH-uZknnAw3RvgPJ8BqI3udpxhtjCVzj1XgwPg7SeYgXamUQbUqIzx1WmG_wJ1GH31IrfzegWAo0sHCH_FWKJ-uG5mm_RqZIuL_F1TOMEgZL_4lCRkm1iRSV3C2q_pDeqsyDyffN6x475')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-lg font-bold text-white drop-shadow-md">Wall Art</h3>
                                    <p className="text-sm font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Geode & Ocean</p>
                                </div>
                            </div>
                        </div>
                        <div className="group cursor-pointer md:mt-12">
                            <div className="glass-panel !p-0 !rounded-[2rem] aspect-[3/4] mb-3 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl border-white/60 relative overflow-hidden">
                                <div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9cVAS0Cf7CUDz6CT0wxegDe6CbbWIcV5jhMTmJxfAO2FGVMebHMcDWqVZ0N76-blT16mmJgAgIwA-zu_oRL-epH364B8CxvxSgfPxMsQr1Y8ja17Pl5XimfR-535pxDZKuUeXlu3uR0S0g2HTqYuf1-9R16VyQTt48lSA0CnrfrwNr-Gur71srDKKCoIkUkMo_7U5H_llwsSJQjlO1noBJz8GI9W9a8Y2x_TlEWaLLw-zJgTrzgtu-JmscOu93q67vuk8WF1BSi9d')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-lg font-bold text-white drop-shadow-md">Custom Trays</h3>
                                    <p className="text-sm font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Serving & Vanity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="w-full px-4 md:px-6">
                <div className="max-w-[1280px] mx-auto glass-panel !p-0 !rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-primary/10">
                    <div className="flex-1 p-10 md:p-16 flex flex-col justify-center bg-white/40 backdrop-blur-md relative z-10">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/30 rounded-full blur-2xl"></div>
                        <span className="inline-block self-start px-4 py-1.5 rounded-full bg-white/70 text-primary font-bold tracking-widest text-[10px] uppercase border border-white/50 shadow-sm mb-6">About the Artist</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-primary mb-6 text-depth">
                            Every pour tells a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-dark to-primary">unique story.</span>
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed font-medium mb-8">
                            Welcome to Art Tales. I'm Aashwi, and I believe in the magic of preserving beauty. My work combines fluid resin techniques with preserved botanicals and metallic accents to create pieces that feel alive with depth and light.
                        </p>
                        <Link to="/about" className="self-start flex items-center gap-3 px-8 py-3.5 btn-resin-secondary rounded-full font-bold text-sm group">
                            <span>Read Full Story</span>
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="flex-1 relative min-h-[400px] md:min-h-auto">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPA4C8S9aYLbcCcrz9ot0V4rU8EQUtchnJCa8jXJWuUbHY1NbQEs2YGec4pZbIzvwVuJ3_KgamMS7DYooyKjO-d46w3GHzkvDai3tE-hP3iyS1ZHRv3bmXD0mJwKMzHoAPnYfuO8E66995nl3R4G4Uglvx-IKn66qveP9FamcEgdYx63XJl4ovkgQn7CTOwNPEZa5FuzsETX_Ryv1N9jKjEKYAUNbFFTTvDal22wRMBi3wAl5YbQ9yPm_ccx1dm_U-keIFqPZlRSSz')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/40 md:to-white/10"></div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="w-full px-6">
                <div className="max-w-[900px] mx-auto">
                    <div className="glass-panel p-10 md:p-16 text-center rounded-[2.5rem] bg-gradient-to-br from-white/60 to-white/30 border border-white/70">
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-5xl text-primary/30 mb-4">mail</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-depth">Join the Art Tales Community</h2>
                            <p className="text-slate-600 max-w-lg mx-auto mb-8 text-lg font-medium">
                                Be the first to know about new collection drops, exclusive workshops, and custom order openings.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto p-1.5 rounded-full bg-white/60 border border-white/60 shadow-inner focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                                <input className="flex-1 h-12 rounded-full border-none bg-transparent px-6 focus:ring-0 placeholder:text-slate-400 text-slate-800 outline-none" placeholder="Enter your email address" type="email" />
                                <button className="h-12 px-8 btn-resin font-bold rounded-full flex items-center justify-center">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
