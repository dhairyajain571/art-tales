
import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import logoHeader from '../assets/logo_header.png';

const AdminLayout: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="flex h-screen bg-slate-50 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-full fixed md:relative z-20">
                <div className="p-6 border-b border-slate-100 flex flex-col items-center">
                    <img src={logoHeader} alt="Art Tales" className="h-16 w-auto mb-2" />
                    <span className="text-xs font-black uppercase tracking-widest text-primary/60">Admin Panel</span>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                    {[
                        { to: '/admin', icon: 'dashboard', label: 'Dashboard', end: true },
                        { to: '/admin/products', icon: 'inventory_2', label: 'Products' },
                        { to: '/admin/discounts', icon: 'local_offer', label: 'Discounts' },
                        { to: '/admin/cms', icon: 'edit_document', label: 'Site Content' },
                    ].map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.end}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${isActive
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
                                }`
                            }
                        >
                            <span className="material-symbols-outlined">{link.icon}</span>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-100">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-colors"
                    >
                        <span className="material-symbols-outlined">logout</span>
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
                <div className="max-w-7xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
