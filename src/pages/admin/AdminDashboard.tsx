
import React from 'react';
import { useData } from '../../contexts/DataContext';

const AdminDashboard: React.FC = () => {
    const { products, discounts, formatPrice } = useData();

    const activeDiscounts = discounts.filter(d => d.isActive).length;
    const totalInventoryValue = products.reduce((sum, p) => sum + p.price, 0); // Simplified value calculation

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-black text-primary tracking-tight">Dashboard</h1>
                <p className="text-slate-500 font-medium">Welcome back, Administrator.</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl">inventory_2</span>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Products</p>
                        <p className="text-3xl font-black text-primary">{products.length}</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl">local_offer</span>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Discounts</p>
                        <p className="text-3xl font-black text-primary">{activeDiscounts}</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl">payments</span>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Inventory Value</p>
                        <p className="text-3xl font-black text-primary">{formatPrice(totalInventoryValue)}</p>
                    </div>
                </div>
            </div>

            {/* Recent Activity / Quick Actions Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-primary mb-6">Quick Actions</h3>
                    <div className="flex gap-4">
                        <button className="flex-1 h-32 rounded-2xl bg-slate-50 hover:bg-primary hover:text-white transition-all border border-slate-100 flex flex-col items-center justify-center gap-2 group">
                            <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-white">add_box</span>
                            <span className="text-sm font-bold">Add Product</span>
                        </button>
                        <button className="flex-1 h-32 rounded-2xl bg-slate-50 hover:bg-secondary-dark hover:text-white transition-all border border-slate-100 flex flex-col items-center justify-center gap-2 group">
                            <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-white">campaign</span>
                            <span className="text-sm font-bold">New Promos</span>
                        </button>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-primary mb-6">System Status</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 rounded-xl bg-green-50 text-green-700 border border-green-100">
                            <span className="flex items-center gap-2 font-bold text-sm"><span className="w-2 h-2 rounded-full bg-green-500"></span> Frontend</span>
                            <span className="text-xs font-black uppercase tracking-widest">Operational</span>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
                            <span className="flex items-center gap-2 font-bold text-sm"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Data Context</span>
                            <span className="text-xs font-black uppercase tracking-widest">Connected</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
