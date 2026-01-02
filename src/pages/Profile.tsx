import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    if (!user) return null;

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="glass-panel p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover relative z-10"
                    />

                    <div className="flex-1 text-center md:text-left relative z-10">
                        <h1 className="text-3xl font-black text-primary mb-2">Hello, {user.name}</h1>
                        <p className="text-slate-500 font-medium mb-6">
                            {user.email || user.phone || 'Guest User'} • {user.isGuest ? 'Guest Access' : 'Member'}
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <button className="px-6 h-12 bg-white border border-primary/20 text-primary font-bold rounded-xl hover:bg-primary/5 transition-colors">
                                Edit Profile
                            </button>
                            <button
                                onClick={handleLogout}
                                className="px-6 h-12 bg-red-50 text-red-500 font-bold rounded-xl hover:bg-red-100 transition-colors flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined">logout</span>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Stats */}
                    <div className="glass-panel p-6 flex flex-col items-center justify-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary-dark flex items-center justify-center">
                            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                        </div>
                        <span className="text-3xl font-black text-primary">0</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Orders</span>
                    </div>

                    <div className="glass-panel p-6 flex flex-col items-center justify-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center">
                            <span className="material-symbols-outlined text-2xl">favorite</span>
                        </div>
                        <span className="text-3xl font-black text-primary">0</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Favorites</span>
                    </div>

                    <div className="glass-panel p-6 flex flex-col items-center justify-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center">
                            <span className="material-symbols-outlined text-2xl">reviews</span>
                        </div>
                        <span className="text-3xl font-black text-primary">0</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Reviews</span>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                        <span className="material-symbols-outlined">history</span>
                        Recent Orders
                    </h2>

                    <div className="glass-panel p-12 text-center text-slate-400">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                            <span className="material-symbols-outlined text-4xl">inventory_2</span>
                        </div>
                        <p className="font-medium">No orders yet.</p>
                        <p className="text-sm mt-2 opacity-70">Your fluid art journey is just beginning!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
