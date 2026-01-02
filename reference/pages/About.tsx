
import React from 'react';
import { Link } from 'react-router-dom';

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
              <div className="h-20 w-auto mb-2 flex justify-start">
                 <img src="input_file_0.png" alt="Art Tales Logo" className="h-full w-auto object-contain drop-shadow-sm" />
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

      {/* Behind the Scenes Grid */}
      <section className="px-4 md:px-10 lg:px-40 py-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-3 mb-16 text-center items-center">
            <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-2 opacity-60">Studio Life</span>
            <h2 className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-tight drop-shadow-sm">
              Behind the Scenes
            </h2>
            <div className="h-2 w-28 bg-secondary/50 rounded-full mt-4 blur-[1px]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-X0edOkNBoeq4XIeQZRSWbkA4Gv6gseeaUI2KDnp7S_RMsvAKdGFkk-vM9Hg1jeq9Egs2Z9QxpiI_CU8uF4nN1i3S4zNWi7EF1Ni3byBZhAyxjzxgO7edxpHaoq4OpDGDyJEnQXRF3fmbX4nCYiydw_BQCfQTX1xC9tE3ol4er9xY7XLJut_wRCFwEjE5s8bA6At2gYf4tS_sVsCtB83HFZBGq9I68z_WZv9vLaB3OOUUZ-X0pGIiL8svQsKuK3un3BmQX1cLrrGg', title: 'Mixing Colors' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp0RpzAeobjVGvKExlB31KGhNKNE_1hdwz4TfOiggnLkg4Mvxu_1ZoK6aax31-HCxJ5q2v4BPFXlThpyBBmnOtLfm1BC740t-gZPI8-BPgaZddyTZSBRsPo7uxqdPgN7sHFBLepCsYhoyrb_00SkgL3S5qRtogNEIoRjsJTTz_Ku7GKDmMjNkzT3s-CF4bohzP6HyhxBMl8ENFLTzyiWiyK483Or37yWSZ50-h1fqCI-OIk0fJVVLzlOO02nfQe7qYOdEfvSJFzyPr', title: 'The Pour', offset: true },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC42W8L3vGZ1VPtKi0yRkn4i7cT49tYwcct6KRVoLKLZdxClO7byOqnGMXv5WaxbSY0upckpvOLq0va2K4dL9ojIHRXBQbGKCl6P_teTUA7IBeaYgM3dTaDouw07Kd7LF138QPkyCQqDSdKAFl4q1shDnc0kh1OnN0GsG6DeJCWDhUTHmTbdd2CwWlpLFrFzSJOoP30Tq-MUpjPe3ALTcVk4IcC1Xx3eA0sERFeMrLry4OYS_Yx6T9egWNeMUzqYjvif_fFwacMlCYS', title: 'Finished Art' }
            ].map((box, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-[3.5rem] aspect-[4/5] border-[12px] border-white/20 shadow-2xl resin-embedded p-0 ${box.offset ? 'lg:-mt-12' : ''}`}>
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
                  style={{ backgroundImage: `url("${box.img}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-10 left-10 text-white translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h4 className="font-black text-2xl tracking-tight">{box.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories: Testimonials */}
      <section className="relative w-full py-24 bg-white/10 backdrop-blur-md overflow-visible">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-24 relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] md:text-[140px] leading-none font-black text-primary/5 select-none pointer-events-none whitespace-nowrap hidden sm:block uppercase tracking-tight">Stories</span>
            <h2 className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-tight drop-shadow-sm relative z-10">Loved by Art Lovers</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 lg:gap-14">
            {[
              { id: 1, class: 'bubble-1', text: '"I ordered a custom resin ocean tray for my sister\'s wedding, and it was absolutely stunning. The depth of the colors is incredible! It feels like a slice of the ocean."', name: 'Sarah Jenkins', city: 'Mumbai', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOsepZe9vRycaQKIb4iO-y_905pmDOQqvjy3ApblSxmhJr3mYcp68wlz9uHAwxDfQJJODSeBxIiZVSk43YenWs1V6KdGJtU1kYag_FCRil50hevYGVzTVRyBHbiNbimxEhtv1qv5vzfsOFrSr4J1NNzA9pSg82YQ-z9CxxTz9w-K_fL4KyhqT8D0ftXO2PFAlSI6gDdjSGP-M23qfhWJ3pJQrjO0Ag1nlazFKcKTN5hH8JFYNpb37lFhfeZRX41SVjKiPEiahZh4XD' },
              { id: 2, class: 'bubble-2', text: '"The scented candles from Art Tales are a vibe. They burn cleanly and the Midnight Jasmine scent is just perfect for my evening reading. The glass jar is reusable too!"', name: 'Rohan Mehta', city: 'Bangalore', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa-xn-WUM9k48SkoLsPbchEXmHuapigczt6FmhZHDRumMP3yzpT0R_2ZJqNi2J9L9vix8m-u6EaUFn1vFgjeYeJjSule3iBKPTnFL8i0tLqQmnrs9YCmwn6AB8L6LqYRIt3aIsO2xYh8lH58M-EZQaw1xoLUvVAXsoC8iYCFj_MlpQhgoV389uDslxfixFdWtj2PIPcl0LEEcIr3H7TRUcom4BUthgfEwSUjFPBJIkfHX4ANXU1siD6IVskWSxsoWZ7RsydjdaxmIX', offset: true },
              { id: 3, class: 'bubble-3', text: '"Aashwi is so talented! I asked for a geode wall art piece with specific gold accents, and she delivered beyond my expectations. It\'s the centerpiece of my living room now."', name: 'Priya Kapoor', city: 'Delhi', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2PCffNLpsGIPYGijvP_1_oPAj9QPvPEXGWfjk4MGO1q7B_SpmNohnfqiCUX3rHMW_llZldcnzKo9Z42E_XHicw6Q29bEElKLFGTUEvb9-JnnZ1qqg_I-R3A0J4N1zAAHzGvutAdvxCdvYeLkFt7v9F6d50iv62-6cxK6GNDZxuFswjtG7eMe6MeEl2f3f8qtTidnmUtR9fEwjw5bTfH6mzwehpLZIJposZ04YfxG2kLrtzzFB3flQXZEI4Fpkl7BEadYwy1N9SnIm' }
            ].map((t) => (
              <div key={t.id} className={`flex flex-col p-10 md:p-12 ${t.class} resin-bubble group relative ${t.offset ? 'md:-mt-16' : ''}`}>
                <div className={`absolute -top-6 ${t.id === 2 ? '-right-2' : '-left-2'} bg-secondary text-primary p-4 rounded-full shadow-xl rotate-[15deg] border-2 border-white group-hover:rotate-[0deg] transition-all duration-500 z-20`}>
                  <span className="material-symbols-outlined text-2xl font-black">format_quote</span>
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <p className="text-primary text-base font-bold leading-relaxed mb-10 italic opacity-80">
                    {t.text}
                  </p>
                  <div className="mt-auto flex items-center gap-5 pt-6 border-t border-primary/10">
                    <div 
                      className="w-16 h-16 rounded-full bg-cover bg-center ring-4 ring-white shadow-lg" 
                      style={{ backgroundImage: `url("${t.img}")` }}
                    />
                    <div>
                      <p className="text-xl font-black text-primary tracking-tight">{t.name}</p>
                      <p className="text-[10px] font-black uppercase text-primary/40 tracking-[0.2em]">{t.city}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA - same refined layout as previous but ensuring brand logo is used */}
      <section className="px-4 md:px-10 lg:px-40 py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <div className="p-12 md:p-20 rounded-[4.5rem] resin-embedded w-full max-w-[900px] flex flex-col items-center relative overflow-hidden text-center shadow-[0_40px_80px_-20px_rgba(74,20,140,0.1)] border-white/60">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="w-24 h-24 rounded-full bg-white/40 mb-8 shadow-gem border-[6px] border-white/60 z-10 flex items-center justify-center">
              <img src="input_file_0.png" alt="Art Tales Brand" className="w-16 h-16 object-contain" />
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
