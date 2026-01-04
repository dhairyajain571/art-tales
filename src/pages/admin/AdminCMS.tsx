import React, { useState, useEffect } from 'react';
import { useData } from '../../contexts/DataContext';
import { SiteContent } from '../../types';
import ImageUpload from '../../components/admin/ImageUpload';
import ArrayEditor from '../../components/admin/ArrayEditor';

// Helper Components for ArrayEditor Forms
const CollectionForm = ({ item, onSave, onCancel }: { item: any, onSave: (i: any) => void, onCancel: () => void }) => {
    const [formData, setFormData] = useState(item);
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <input className="p-3 border rounded-xl" placeholder="Title" value={formData.title || ''} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                <input className="p-3 border rounded-xl" placeholder="Subtitle" value={formData.subtitle || ''} onChange={e => setFormData({ ...formData, subtitle: e.target.value })} />
            </div>
            <ImageUpload value={formData.image} onChange={val => setFormData({ ...formData, image: val })} />
            <div className="flex justify-end gap-2 mt-4">
                <button type="button" onClick={onCancel} className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-lg">Cancel</button>
                <button type="button" onClick={() => onSave(formData)} className="btn-primary px-4 py-2 rounded-lg">Done</button>
            </div>
        </div>
    );
};

const PortfolioItemForm = ({ item, onSave, onCancel, categories }: { item: any, onSave: (i: any) => void, onCancel: () => void, categories: string[] }) => {
    const [formData, setFormData] = useState(item);
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <input className="p-3 border rounded-xl" placeholder="Project Title" value={formData.title || ''} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                <select className="p-3 border rounded-xl" value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
            </div>
            <textarea className="w-full p-3 border rounded-xl" rows={2} placeholder="Description" value={formData.description || ''} onChange={e => setFormData({ ...formData, description: e.target.value })} />
            <ImageUpload value={formData.image} onChange={val => setFormData({ ...formData, image: val })} />
            <div className="flex justify-end gap-2">
                <button type="button" onClick={onCancel} className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-lg">Cancel</button>
                <button type="button" onClick={() => onSave(formData)} className="btn-primary px-4 py-2 rounded-lg">Done</button>
            </div>
        </div>
    );
};

const CategoryForm = ({ item, onSave, onCancel }: { item: any, onSave: (i: any) => void, onCancel: () => void }) => {
    const [name, setName] = useState(item.name || '');
    return (
        <div className="flex gap-2">
            <input autoFocus className="flex-1 p-2 border rounded-lg" value={name} onChange={e => setName(e.target.value)} placeholder="Category Name" />
            <button type="button" onClick={() => name && onSave({ id: name, name })} className="btn-primary px-4 rounded-lg">Save</button>
            <button type="button" onClick={onCancel} className="bg-slate-100 px-4 rounded-lg">Cancel</button>
        </div>
    );
};

const TestimonialForm = ({ item, onSave, onCancel }: { item: any, onSave: (i: any) => void, onCancel: () => void }) => {
    const [formData, setFormData] = useState(item);
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <input className="p-3 border rounded-xl" placeholder="Name" value={formData.name || ''} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                <input className="p-3 border rounded-xl" placeholder="Location" value={formData.location || ''} onChange={e => setFormData({ ...formData, location: e.target.value })} />
            </div>
            <textarea className="w-full p-3 border rounded-xl" rows={3} placeholder="Quote" value={formData.text || ''} onChange={e => setFormData({ ...formData, text: e.target.value })} />
            <ImageUpload label="User Avatar" value={formData.avatar} onChange={val => setFormData({ ...formData, avatar: val })} />
            <div className="flex justify-end gap-2">
                <button type="button" onClick={onCancel} className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-lg">Cancel</button>
                <button type="button" onClick={() => onSave(formData)} className="btn-primary px-4 py-2 rounded-lg">Done</button>
            </div>
        </div>
    );
};

const ImageForm = ({ item, onSave, onCancel }: { item: any, onSave: (i: any) => void, onCancel: () => void }) => {
    // For simple string arrays (images), we treat item as { id, value: string } wrapper
    const [url, setUrl] = useState(item.value || '');
    return (
        <div className="space-y-4">
            <ImageUpload value={url} onChange={setUrl} />
            <div className="flex justify-end gap-2">
                <button type="button" onClick={onCancel} className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-lg">Cancel</button>
                <button type="button" onClick={() => url && onSave({ ...item, value: url })} className="btn-primary px-4 py-2 rounded-lg">Done</button>
            </div>
        </div>
    );
};


const AdminCMS: React.FC = () => {
    const { siteContent, updateSiteContent } = useData();
    const [formData, setFormData] = useState(siteContent);
    const [activeTab, setActiveTab] = useState<'global' | 'home' | 'about' | 'portfolio' | 'footer' | 'layout' | 'settings'>('global');
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        setFormData(siteContent);
    }, [siteContent]);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateSiteContent(formData);
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 2000);
    };

    const updateNested = (section: keyof SiteContent, key: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [key]: value
            }
        }));
    };

    return (
        <div className="space-y-6">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-primary tracking-tight">Site Content</h1>
                    <p className="text-slate-500 font-medium">Customize your website text, images, and layout.</p>
                </div>
                {isSaved && (
                    <span className="text-green-600 font-bold bg-green-50 px-4 py-2 rounded-lg animate-fadeIn">Saved Successfully!</span>
                )}
            </header>

            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[600px]">
                {/* Sidebar Tabs */}
                <div className="w-full md:w-64 bg-slate-50 border-r border-slate-100 p-4 flex flex-col gap-2 overflow-y-auto max-h-[800px] hide-scrollbar">
                    {[
                        { id: 'global', icon: 'settings', label: 'Global Settings' },
                        { id: 'home', icon: 'home', label: 'Home Page' },
                        { id: 'about', icon: 'person', label: 'About Page' },
                        { id: 'portfolio', icon: 'photo_library', label: 'Portfolio' },
                        { id: 'footer', icon: 'info', label: 'Footer' },
                        { id: 'layout', icon: 'dashboard_customize', label: 'Layout' },
                        { id: 'settings', icon: 'tune', label: 'Settings' },
                    ].map(tab => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id as any)}
                            className={`text-left px-4 py-3 rounded-xl font-bold transition-all flex items-center gap-3 text-sm ${activeTab === tab.id ? 'bg-white text-primary shadow-sm ring-1 ring-slate-200' : 'text-slate-500 hover:bg-white hover:text-primary'}`}>
                            <span className="material-symbols-outlined text-[20px]">{tab.icon}</span> {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 p-8 overflow-y-auto max-h-[800px]">
                    <form onSubmit={handleSave} className="max-w-4xl space-y-8">


                        {activeTab === 'settings' && (
                            <div className="space-y-8 animate-fadeIn">
                                <h3 className="text-xl font-bold text-primary border-b border-primary/10 pb-4">General Settings</h3>
                                <div className="space-y-6">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <label className="flex items-center justify-between cursor-pointer group">
                                            <div className="flex-1 pr-4">
                                                <div className="font-bold text-slate-700 mb-1 group-hover:text-primary transition-colors">Enable AI Assistant</div>
                                                <div className="text-sm text-slate-500">Show the floating 'Ask AI' bubble on the site for live consultation.</div>
                                            </div>
                                            <div className={`w-14 h-8 rounded-full relative transition-all duration-300 ${formData.settings?.enableAI ? 'bg-primary' : 'bg-slate-300'}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setFormData(prev => ({ ...prev, settings: { ...prev.settings, enableAI: !(prev.settings?.enableAI ?? true) } as any }));
                                                }}>
                                                <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${formData.settings?.enableAI ? 'translate-x-6' : ''}`}></div>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                                        <label className="block font-bold text-slate-700">WhatsApp Business Number</label>
                                        <input
                                            type="text"
                                            className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all font-mono text-sm"
                                            value={formData.settings?.whatsappNumber || ''}
                                            onChange={e => setFormData({ ...formData, settings: { ...formData.settings, whatsappNumber: e.target.value } as any })}
                                            placeholder="e.g. 919876543210 (No spaces or +)"
                                        />
                                        <p className="text-xs text-slate-400 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">info</span>
                                            Enter number with country code, no spaces or +.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'global' && (
                            <div className="space-y-8 animate-fadeIn">
                                <section>
                                    <h2 className="text-lg font-bold text-primary mb-4 border-b border-slate-100 pb-2">Currency Settings</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Store Currency</label>
                                            <select
                                                className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary font-bold"
                                                value={formData.global.currency}
                                                onChange={e => updateNested('global', 'currency', e.target.value)}
                                            >
                                                <option value="USD">USD ($)</option>
                                                <option value="EUR">EUR (€)</option>
                                                <option value="GBP">GBP (£)</option>
                                                <option value="INR">INR (₹)</option>
                                                <option value="AUD">AUD (A$)</option>
                                            </select>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <h2 className="text-lg font-bold text-primary mb-4 border-b border-slate-100 pb-2">Announcements</h2>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Top Bar Text</label>
                                        <input className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary font-medium"
                                            value={formData.global.announcementBar} onChange={e => updateNested('global', 'announcementBar', e.target.value)} />
                                    </div>
                                </section>
                                <section>
                                    <h2 className="text-lg font-bold text-primary mb-4 border-b border-slate-100 pb-2">Shop Categories</h2>
                                    <ArrayEditor
                                        title="Product Categories"
                                        items={formData.shop?.categories?.map(c => ({ id: c, name: c })) || []}
                                        onChange={(newItems) => setFormData(prev => ({ ...prev, shop: { ...prev.shop, categories: newItems.map(i => i.name) } }))}
                                        renderItem={(item) => <span className="font-bold text-slate-700">{item.name}</span>}
                                        renderForm={(item, onSave, onCancel) => <CategoryForm item={item} onSave={onSave} onCancel={onCancel} />}
                                        newItemTemplate={{ name: '' }}
                                        addButtonLabel="Add Category"
                                    />
                                </section>
                            </div>
                        )}

                        {activeTab === 'home' && (
                            <div className="space-y-8 animate-fadeIn">
                                <section>
                                    <h2 className="text-lg font-bold text-primary mb-4 border-b border-slate-100 pb-2">Hero Section</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Title</label>
                                            <input className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary text-lg font-bold"
                                                value={formData.home.heroTitle} onChange={e => updateNested('home', 'heroTitle', e.target.value)} />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Subtitle</label>
                                            <textarea className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-primary" rows={3}
                                                value={formData.home.heroSubtitle} onChange={e => updateNested('home', 'heroSubtitle', e.target.value)} />
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <ArrayEditor
                                        title="Curated Collections"
                                        items={formData.home.collections || []}
                                        onChange={(newCollections) => updateNested('home', 'collections', newCollections)}
                                        renderItem={(item) => (
                                            <div className="flex items-center gap-4">
                                                <img src={item.image} className="w-12 h-12 rounded-lg object-cover bg-slate-100" />
                                                <div>
                                                    <p className="font-bold text-primary">{item.title}</p>
                                                    <p className="text-xs text-slate-500">{item.subtitle}</p>
                                                </div>
                                            </div>
                                        )}
                                        renderForm={(item, onSave, onCancel) => <CollectionForm item={item} onSave={onSave} onCancel={onCancel} />}
                                        newItemTemplate={{ title: 'New Collection', subtitle: 'Description', image: '', link: '/shop' }}
                                    />
                                </section>
                            </div>
                        )}

                        {activeTab === 'about' && (
                            <div className="space-y-8 animate-fadeIn">
                                <section>
                                    <h2 className="text-lg font-bold text-primary mb-4 border-b border-slate-100 pb-2">About Page</h2>
                                    <div className="space-y-4">
                                        <input className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200" value={formData.about.title} onChange={e => updateNested('about', 'title', e.target.value)} />
                                        <textarea className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 h-40" value={formData.about.story} onChange={e => updateNested('about', 'story', e.target.value)} />
                                        <ImageUpload label="Artist Image" value={formData.about.image} onChange={val => updateNested('about', 'image', val)} />
                                    </div>
                                </section>

                                <section>
                                    <ArrayEditor
                                        title="Behind the Scenes Images"
                                        items={formData.about.behindTheScenes?.map((img, i) => ({ id: i.toString(), value: img })) || []}
                                        onChange={(newItems) => setFormData(prev => ({ ...prev, about: { ...prev.about, behindTheScenes: newItems.map(i => i.value) } }))}
                                        renderItem={(item) => <img src={item.value} className="w-16 h-12 rounded bg-slate-100 object-cover" />}
                                        renderForm={(item, onSave, onCancel) => <ImageForm item={item} onSave={onSave} onCancel={onCancel} />}
                                        newItemTemplate={{ value: '' }}
                                        addButtonLabel="Add Image"
                                    />
                                </section>

                                <section>
                                    <ArrayEditor
                                        title="Testimonials"
                                        items={formData.about.testimonials || []}
                                        onChange={(newItems) => setFormData(prev => ({ ...prev, about: { ...prev.about, testimonials: newItems } }))}
                                        renderItem={(item) => (
                                            <div className="flex gap-4 items-center">
                                                <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                                <div>
                                                    <p className="font-bold text-sm text-primary">{item.name}</p>
                                                    <p className="text-xs text-slate-500 truncate max-w-[200px]">{item.text}</p>
                                                </div>
                                            </div>
                                        )}
                                        renderForm={(item, onSave, onCancel) => <TestimonialForm item={item} onSave={onSave} onCancel={onCancel} />}
                                        newItemTemplate={{ name: 'New User', location: 'City, Country', text: 'Great work!', avatar: '' }}
                                        addButtonLabel="Add Testimonial"
                                    />
                                </section>
                            </div>
                        )}

                        {activeTab === 'portfolio' && (
                            <div className="space-y-8 animate-fadeIn">
                                <section>
                                    <ArrayEditor
                                        title="Portfolio Projects"
                                        items={formData.portfolio?.items || []}
                                        onChange={(items) => setFormData(prev => ({ ...prev, portfolio: { ...prev.portfolio, items } }))}
                                        renderItem={(item) => (
                                            <div className="flex items-center gap-4">
                                                <img src={item.image} className="w-16 h-12 rounded-lg object-cover bg-slate-100" />
                                                <div>
                                                    <p className="font-bold text-primary">{item.title}</p>
                                                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-xs text-slate-500">{item.category}</span>
                                                </div>
                                            </div>
                                        )}
                                        renderForm={(item, onSave, onCancel) => (
                                            <PortfolioItemForm
                                                item={item}
                                                onSave={onSave}
                                                onCancel={onCancel}
                                                categories={formData.portfolio?.categories || ['Trays']}
                                            />
                                        )}
                                        newItemTemplate={{ title: 'New Project', category: 'Trays', description: '', image: '' }}
                                    />
                                </section>
                                <section>
                                    <h2 className="text-lg font-bold text-primary mb-4 border-b border-slate-100 pb-2">Portfolio Categories</h2>
                                    <ArrayEditor
                                        title="Categories"
                                        items={formData.portfolio?.categories?.map(c => ({ id: c, name: c })) || []}
                                        onChange={(newItems) => setFormData(prev => ({ ...prev, portfolio: { ...prev.portfolio, categories: newItems.map(i => i.name) } }))}
                                        renderItem={(item) => <span className="font-bold text-slate-700">{item.name}</span>}
                                        renderForm={(item, onSave, onCancel) => <CategoryForm item={item} onSave={onSave} onCancel={onCancel} />}
                                        newItemTemplate={{ name: '' }}
                                        addButtonLabel="Add Category"
                                    />
                                </section>
                            </div>
                        )}

                        {activeTab === 'footer' && (
                            <div className="space-y-8 animate-fadeIn">
                                <section>
                                    <h2 className="text-lg font-bold text-primary mb-4 border-b border-slate-100 pb-2">Footer Content</h2>
                                    <div className="space-y-4">
                                        <textarea className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200" rows={3}
                                            value={formData.footer?.description}
                                            onChange={e => setFormData(prev => ({ ...prev, footer: { ...prev.footer, description: e.target.value } }))}
                                            placeholder="Footer Description"
                                        />
                                        <input className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200"
                                            value={formData.footer?.copyright}
                                            onChange={e => setFormData(prev => ({ ...prev, footer: { ...prev.footer, copyright: e.target.value } }))}
                                            placeholder="Copyright Text"
                                        />
                                    </div>
                                </section>
                            </div>
                        )}

                        {activeTab === 'layout' && (
                            <div className="space-y-8 animate-fadeIn">
                                <section>
                                    <h2 className="text-lg font-bold text-primary mb-4 border-b border-slate-100 pb-2">Home Page Layout</h2>
                                    <p className="text-sm text-slate-500 mb-6">Toggle the visibility of sections on your home page.</p>

                                    <div className="space-y-4">
                                        {[
                                            { key: 'showHero', label: 'Hero Banner' },
                                            { key: 'showCollections', label: 'Curated Collections' },
                                            { key: 'showAbout', label: 'About Section' },
                                            { key: 'showNewsletter', label: 'Newsletter Signup' }
                                        ].map((item) => (
                                            <label key={item.key} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white hover:border-primary/50 cursor-pointer transition-colors group">
                                                <span className="font-bold text-slate-700 group-hover:text-primary">{item.label}</span>
                                                <div className="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" className="sr-only peer"
                                                        checked={(formData.layout as any)?.[item.key] ?? true}
                                                        onChange={e => setFormData(prev => ({
                                                            ...prev,
                                                            layout: {
                                                                ...prev.layout,
                                                                [item.key]: e.target.checked
                                                            }
                                                        }))}
                                                    />
                                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none ring-4 ring-slate-100 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        )}

                        <div className="pt-6 border-t border-slate-100 flex justify-end sticky bottom-0 bg-white/50 backdrop-blur-md p-4">
                            <button type="submit" className="btn-resin px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center gap-2">
                                <span className="material-symbols-outlined">save</span> Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminCMS;
