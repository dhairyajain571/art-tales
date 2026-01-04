
import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';

const AdminDiscounts: React.FC = () => {
    const { discounts, addDiscount, toggleDiscount, deleteDiscount } = useData();
    const [newCode, setNewCode] = useState('');
    const [newValue, setNewValue] = useState(10);

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newCode) {
            await addDiscount({
                code: newCode.toUpperCase(),
                value: newValue,
                type: 'percentage',
                isActive: true
            });
            setNewCode('');
            setNewValue(10);
        }
    };

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-black text-primary tracking-tight">Discounts</h1>
                <p className="text-slate-500 font-medium">Manage promotional codes.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Add Form */}
                <div className="md:col-span-1">
                    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm sticky top-6">
                        <h2 className="text-lg font-bold text-primary mb-4">Create New Code</h2>
                        <form onSubmit={handleAdd} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Code</label>
                                <input required className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary uppercase font-mono"
                                    placeholder="SUMMER2024"
                                    value={newCode} onChange={e => setNewCode(e.target.value)} />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Percentage Off</label>
                                <div className="flex items-center gap-2">
                                    <input required type="number" min="1" max="100" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary"
                                        value={newValue} onChange={e => setNewValue(Number(e.target.value))} />
                                    <span className="font-black text-slate-400">%</span>
                                </div>
                            </div>
                            <button type="submit" className="w-full py-3 font-bold bg-secondary-dark text-white rounded-xl shadow-lg shadow-secondary/20 mt-2">Create Discount</button>
                        </form>
                    </div>
                </div>

                {/* List */}
                <div className="md:col-span-2 space-y-4">
                    {discounts.map(discount => (
                        <div key={discount.code} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-primary/20 transition-all">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg ${discount.isActive ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                                    {discount.value}%
                                </div>
                                <div>
                                    <p className="font-bold text-primary font-mono text-lg">{discount.code}</p>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{discount.type}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button onClick={() => toggleDiscount(discount.code)} className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-colors ${discount.isActive ? 'bg-green-50 text-green-600 hover:bg-red-50 hover:text-red-500' : 'bg-slate-100 text-slate-500 hover:bg-green-50 hover:text-green-600'}`}>
                                    {discount.isActive ? 'Active' : 'Inactive'}
                                </button>
                                <button onClick={() => deleteDiscount(discount.code)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-50 text-slate-300 hover:text-red-500 transition-colors">
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDiscounts;
