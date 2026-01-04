
import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { Product } from '../../types';

const AdminProducts: React.FC = () => {
    const { products, addProduct, updateProduct, deleteProduct } = useData();
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [newProduct, setNewProduct] = useState<Partial<Product>>({
        category: 'Resin Art',
        isNew: true
    });

    const handleAddNewClick = () => {
        setIsEditing(false);
        setEditingId(null);
        setNewProduct({ category: 'Resin Art', isNew: true });
        setIsAddModalOpen(true);
    };

    const handleEditClick = (product: Product) => {
        setIsEditing(true);
        setEditingId(product.id);
        setNewProduct(product);
        setIsAddModalOpen(true);
    };

    const handleAddProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newProduct.name && newProduct.price) {
            const productData = {
                name: newProduct.name,
                price: Number(newProduct.price),
                category: newProduct.category as any,
                description: newProduct.description || 'New Product',
                image: newProduct.image || 'https://via.placeholder.com/300',
                videoUrl: newProduct.videoUrl,
                dimensions: newProduct.dimensions,
                shippingInfo: newProduct.shippingInfo,
                isNew: newProduct.isNew
            };

            if (isEditing && editingId) {
                await updateProduct(editingId, productData);
            } else {
                await addProduct({
                    id: 'p' + Date.now(),
                    ...productData,
                    isNew: true
                } as Product);
            }
            setIsAddModalOpen(false);
            setNewProduct({ category: 'Resin Art', isNew: true });
        }
    };

    return (
        <div className="space-y-6">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-primary tracking-tight">Inventory</h1>
                    <p className="text-slate-500 font-medium">Manage your products and collections.</p>
                </div>
                <button onClick={handleAddNewClick} className="btn-resin px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <span className="material-symbols-outlined">add</span> Add Product
                </button>
            </header>

            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 text-xs uppercase tracking-widest text-slate-500 font-black">
                        <tr>
                            <th className="p-6">Product</th>
                            <th className="p-6">Category</th>
                            <th className="p-6">Price</th>
                            <th className="p-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {products.map(product => (
                            <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="p-6">
                                    <div className="flex items-center gap-4">
                                        <img src={product.image} className="w-12 h-12 rounded-xl object-cover bg-slate-100" />
                                        <div>
                                            <p className="font-bold text-primary">{product.name}</p>
                                            <p className="text-xs text-slate-400 font-mono">{product.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-6">
                                    <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-500">
                                        {product.category}
                                    </span>
                                </td>
                                <td className="p-6 font-black text-primary">${product.price.toFixed(2)}</td>
                                <td className="p-6 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button onClick={() => handleEditClick(product)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-300 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">edit</span>
                                        </button>
                                        <button onClick={() => deleteProduct(product.id)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-50 text-slate-300 hover:text-red-500 transition-colors">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Simple Add Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-[2rem] p-8 w-full max-w-lg shadow-2xl">
                        <h2 className="text-2xl font-black text-primary mb-6">{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
                        <form onSubmit={handleAddProduct} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Name</label>
                                <input required className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary"
                                    value={newProduct.name || ''} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Price</label>
                                    <input required type="number" className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary"
                                        value={newProduct.price || ''} onChange={e => setNewProduct({ ...newProduct, price: Number(e.target.value) })} />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Category</label>
                                    <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary"
                                        value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value as any })}>
                                        <option>Resin Art</option>
                                        <option>Coasters</option>
                                        <option>Trays</option>
                                        <option>Candles</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Main Image URL</label>
                                <input required className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary font-mono text-xs"
                                    placeholder="https://example.com/image.jpg"
                                    value={newProduct.image || ''} onChange={e => setNewProduct({ ...newProduct, image: e.target.value })} />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Video URL (Product Video)</label>
                                <input className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary font-mono text-xs"
                                    placeholder="https://www.youtube.com/embed/..."
                                    value={newProduct.videoUrl || ''} onChange={e => setNewProduct({ ...newProduct, videoUrl: e.target.value })} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Dimensions</label>
                                    <input className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary"
                                        placeholder="e.g. 12x12 inches"
                                        value={newProduct.dimensions || ''} onChange={e => setNewProduct({ ...newProduct, dimensions: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Shipping</label>
                                    <input className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary"
                                        placeholder="e.g. Free Shipping"
                                        value={newProduct.shippingInfo || ''} onChange={e => setNewProduct({ ...newProduct, shippingInfo: e.target.value })} />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Description</label>
                                <textarea className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary" rows={3}
                                    value={newProduct.description || ''} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}></textarea>
                            </div>
                            <div className="pt-4 flex gap-3">
                                <button type="button" onClick={() => setIsAddModalOpen(false)} className="flex-1 py-3 font-bold text-slate-500 hover:bg-slate-50 rounded-xl">Cancel</button>
                                <button type="submit" className="flex-1 py-3 font-bold bg-primary text-white rounded-xl shadow-lg shadow-primary/20">{isEditing ? 'Save Changes' : 'Create Product'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminProducts;
