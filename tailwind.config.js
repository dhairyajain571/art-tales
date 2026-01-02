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
                "primary": "#4A148C",
                "primary-light": "#7c43bd",
                "secondary": "#F8BBD0",
                "secondary-dark": "#F06292",
                "accent": "#FEFCF3",
                "background-soft": "#fcfafc"
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "sans-serif"]
            },
            backgroundImage: {
                'resin-swirl': "radial-gradient(at 10% 10%, hsla(305,49%,96%,0.8) 0, transparent 50%), radial-gradient(at 90% 10%, hsla(285,45%,93%,0.8) 0, transparent 50%), radial-gradient(at 90% 90%, hsla(320,55%,94%,0.8) 0, transparent 50%), radial-gradient(at 10% 90%, hsla(278,41%,92%,0.8) 0, transparent 50%), radial-gradient(at 50% 50%, hsla(330,55%,98%,0.8) 0, transparent 50%)",
                'resin-shine': 'linear-gradient(125deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.1) 100%)',
                'resin-depth': 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.05) 100%)',
            },
            boxShadow: {
                'glass-inset': 'inset 0 0 20px rgba(255, 255, 255, 0.5), inset 0 0 5px rgba(255, 255, 255, 0.3), 0 5px 15px rgba(0,0,0,0.1)',
                'resin-card': '0 10px 30px -5px rgba(74, 20, 140, 0.15), inset 0 1px 1px rgba(255,255,255,0.8), inset 0 -1px 20px rgba(255,255,255,0.3)',
                'resin-hover': '0 20px 40px -5px rgba(74, 20, 140, 0.25), inset 0 1px 1px rgba(255,255,255,0.9), inset 0 -1px 20px rgba(255,255,255,0.4)',
                'resin-block': 'inset 1px 1px 0px rgba(255, 255, 255, 0.6), inset -1px -1px 0px rgba(0, 0, 0, 0.05), 0 10px 30px -5px rgba(74, 20, 140, 0.1), 0 4px 6px -2px rgba(74, 20, 140, 0.05)',
                'gem': 'inset 2px 2px 4px rgba(255,255,255,0.9), inset -2px -2px 4px rgba(74,20,140,0.1), 2px 4px 8px rgba(74,20,140,0.15)',
                'btn-glass': 'inset 1px 1px 0 rgba(255, 255, 255, 0.7), inset -1px -1px 0 rgba(74, 20, 140, 0.1), 0 4px 12px rgba(74, 20, 140, 0.25)',
            },
            animation: {
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            }
        },
    },
    plugins: [],
}
