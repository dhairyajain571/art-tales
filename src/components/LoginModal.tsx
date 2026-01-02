import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import loginBg from '../assets/login_bg.png';
import logo from '../assets/logo_header.png';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const { loginWithEmail, loginWithPhone, loginWithSocial, loginAsGuest, loading } = useAuth();
    const [activeTab, setActiveTab] = useState<'email' | 'phone' | 'social'>('email');

    // Form States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);

    if (!isOpen) return null;

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await loginWithEmail(email, password);
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    const handlePhoneLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!showOtpInput) {
            // Simulate sending OTP
            setShowOtpInput(true);
        } else {
            try {
                await loginWithPhone(phone, otp);
                onClose();
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleSocialLogin = async (provider: 'google' | 'facebook' | 'apple') => {
        try {
            await loginWithSocial(provider);
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    const handleGuestAccess = () => {
        loginAsGuest();
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-primary/30 backdrop-blur-sm" onClick={onClose}></div>

            <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] animate-fadeIn">
                {/* Left Side - Visual */}
                <div className="w-full md:w-5/12 relative hidden md:block">
                    <img src={loginBg} alt="Art background" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8 text-white">
                        <img src={logo} alt="Logo" className="w-24 mb-6 brightness-0 invert" />
                        <h2 className="text-3xl font-black mb-2">Welcome Back</h2>
                        <p className="text-white/80 font-medium leading-relaxed">
                            Sign in to save your favorite pieces, track orders, and get personalized art recommendations.
                        </p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex-1 p-8 md:p-12 flex flex-col bg-white">
                    <div className="flex justify-end">
                        <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors">
                            <span className="material-symbols-outlined text-slate-400">close</span>
                        </button>
                    </div>

                    <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-primary mb-1">Get Started</h3>
                            <p className="text-slate-500 text-sm">Join the community of art lovers.</p>
                        </div>

                        {/* Tabs */}
                        <div className="flex p-1 bg-slate-100 rounded-xl mb-8">
                            <button
                                onClick={() => setActiveTab('email')}
                                className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${activeTab === 'email' ? 'bg-white text-primary shadow-sm' : 'text-slate-400 hover:text-primary'}`}
                            >
                                Email
                            </button>
                            <button
                                onClick={() => setActiveTab('phone')}
                                className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${activeTab === 'phone' ? 'bg-white text-primary shadow-sm' : 'text-slate-400 hover:text-primary'}`}
                            >
                                Phone
                            </button>
                            <button
                                onClick={() => setActiveTab('social')}
                                className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${activeTab === 'social' ? 'bg-white text-primary shadow-sm' : 'text-slate-400 hover:text-primary'}`}
                            >
                                Social
                            </button>
                        </div>

                        {/* Content */}
                        {activeTab === 'email' && (
                            <form onSubmit={handleEmailLogin} className="space-y-4 animate-fadeIn">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                                <button disabled={loading} className="w-full h-14 btn-resin rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                    {loading ? 'Signing In...' : 'Sign In'}
                                </button>
                            </form>
                        )}

                        {activeTab === 'phone' && (
                            <form onSubmit={handlePhoneLogin} className="space-y-4 animate-fadeIn">
                                {!showOtpInput ? (
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                            placeholder="+1 (555) 000-0000"
                                            required
                                        />
                                        <p className="text-[10px] text-slate-400 mt-2">We'll send you a one-time password.</p>
                                    </div>
                                ) : (
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Enter OTP</label>
                                        <input
                                            type="text"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-center text-2xl font-bold tracking-widest focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                            placeholder="••••"
                                            maxLength={4}
                                            required
                                        />
                                        <button type="button" onClick={() => setShowOtpInput(false)} className="text-xs text-primary font-bold mt-2 hover:underline">Change Number</button>
                                    </div>
                                )}
                                <button disabled={loading} className="w-full h-14 btn-resin rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                    {loading ? 'Sending...' : (showOtpInput ? 'Verify & Login' : 'Send OTP')}
                                </button>
                            </form>
                        )}

                        {activeTab === 'social' && (
                            <div className="space-y-4 animate-fadeIn">
                                <button onClick={() => handleSocialLogin('google')} className="w-full h-14 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors">
                                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
                                    Continue with Google
                                </button>
                                <button onClick={() => handleSocialLogin('facebook')} className="w-full h-14 bg-[#1877F2] text-white hover:bg-[#166fe5] rounded-xl font-bold flex items-center justify-center gap-3 transition-colors">
                                    <span className="material-symbols-outlined">public</span>
                                    Continue with Facebook
                                </button>
                                <button onClick={() => handleSocialLogin('apple')} className="w-full h-14 bg-black text-white hover:bg-gray-900 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors">
                                    <span className="material-symbols-outlined">adb</span>
                                    Continue with Apple
                                </button>
                            </div>
                        )}

                        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-4">
                            <button onClick={handleGuestAccess} className="text-sm font-bold text-slate-400 hover:text-primary transition-colors">
                                Continue as Guest
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
