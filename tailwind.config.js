/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#6A1B9A", // Richer Purple for Resin
                "primary-light": "#8E24AA",
                "primary-dark": "#4A148C",
                "secondary": "#F8BBD0", // Light Pink
                "accent": "#FFD54F", // Gold Leaf color
                "background-light": "#F3E5F5",
                "background-dark": "#12021a",
                "surface-light": "rgba(255, 255, 255, 0.25)",
                "surface-dark": "rgba(42, 14, 61, 0.4)",
                "text-main": "#2e0842",
                "text-muted": "#6a4c7a",
                "border-subtle": "rgba(255, 255, 255, 0.5)",
                "item-hover": "#fce4ec",
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "sans-serif"]
            },
            backgroundImage: {
                'resin-flow': 'radial-gradient(circle at 0% 0%, rgba(244, 143, 177, 0.2) 0%, transparent 50%), radial-gradient(circle at 100% 0%, rgba(106, 27, 154, 0.15) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(244, 143, 177, 0.2) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(106, 27, 154, 0.15) 0%, transparent 50%)',
                'card-gloss': 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.05) 100%)',
                'card-shine': 'linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.4) 45%, rgba(255, 255, 255, 0.1) 50%, transparent 55%)',
                'btn-gem': 'linear-gradient(135deg, #8E24AA 0%, #4A148C 100%)',
                'btn-gem-hover': 'linear-gradient(135deg, #AB47BC 0%, #6A1B9A 100%)',
                'glass-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.5), rgba(255,255,255,0.1))',
                'footer-gloss': 'linear-gradient(to top, rgba(255,255,255,0.4), rgba(255,255,255,0.6))',
            },
            boxShadow: {
                'resin-deep': '0 20px 40px -10px rgba(46, 8, 66, 0.2), 0 0 20px rgba(255, 255, 255, 0.4) inset',
                'resin-card': '0 10px 30px -5px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.6), inset 0 1px 20px rgba(255,255,255,0.4)',
                'resin-card-hover': '0 25px 50px -12px rgba(106, 27, 154, 0.25), inset 0 0 0 1px rgba(255,255,255,0.9), inset 0 1px 30px rgba(255,255,255,0.6)',
                'resin-btn': '0 4px 15px rgba(106, 27, 154, 0.3), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
                'embedded': 'inset 2px 2px 5px rgba(46, 8, 66, 0.08), inset -2px -2px 5px rgba(255, 255, 255, 0.9)',
                'gem': 'inset 2px 2px 4px rgba(255,255,255,0.9), inset -2px -2px 4px rgba(74,20,140,0.1), 2px 4px 8px rgba(74,20,140,0.15)', // Keeping from prev if valid
            },
            borderRadius: {
                'organic': '2rem 1.5rem 2rem 1.5rem',
                'fluid': '2.5rem 1.5rem 2.5rem 1.5rem',
                'pill': '9999px',
            }
        },
    },
    plugins: [],
}
