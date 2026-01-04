
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, PortfolioItem, Testimonial, SiteContent } from '../types';
import { PRODUCTS as INITIAL_PRODUCTS, PORTFOLIO as INITIAL_PORTFOLIO, TESTIMONIALS as INITIAL_TESTIMONIALS } from '../constants';
import aboutArtistImage from '../assets/about-artist.png'; // Import local asset

export interface Discount {
    code: string;
    type: 'percentage' | 'fixed';
    value: number;
    isActive: boolean;
}

interface DataContextType {
    products: Product[];
    portfolio: PortfolioItem[];
    testimonials: Testimonial[];
    discounts: Discount[];
    siteContent: SiteContent;

    // Actions (Simulating API calls)
    addProduct: (product: Product) => Promise<void>;
    updateProduct: (id: string, updates: Partial<Product>) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;

    addDiscount: (discount: Discount) => Promise<void>;
    toggleDiscount: (code: string) => Promise<void>;
    deleteDiscount: (code: string) => Promise<void>;

    updateSiteContent: (updates: Partial<SiteContent>) => Promise<void>;
    formatPrice: (price: number) => string;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Initialize State from LocalStorage or Constants
    const [products, setProducts] = useState<Product[]>(() => {
        const stored = localStorage.getItem('art_tales_products');
        return stored ? JSON.parse(stored) : INITIAL_PRODUCTS;
    });

    const [portfolio] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO); // Read-only for now

    // Testimonials are now part of siteContent.about
    // Testimonials definition moved below siteContent initialization

    const [discounts, setDiscounts] = useState<Discount[]>(() => {
        const stored = localStorage.getItem('art_tales_discounts');
        return stored ? JSON.parse(stored) : [
            { code: 'WELCOME10', type: 'percentage', value: 10, isActive: true },
            { code: 'SUMMER25', type: 'percentage', value: 25, isActive: false }
        ];
    });

    const [siteContent, setSiteContent] = useState<SiteContent>(() => {
        const stored = localStorage.getItem('art_tales_content_v3'); // Changed key to force refresh
        return stored ? JSON.parse(stored) : {
            global: {
                announcementBar: 'Free Shipping on Orders Over $100 | Worldwide Delivery'
            },
            home: {
                heroTitle: 'Resin & Soul',
                heroSubtitle: 'Handcrafted resin art where every piece tells a unique story of fluid beauty.',
                collections: []
            },
            about: {
                title: 'Our Story',
                story: 'Art Tales began with a passion for capturing the fluidity of nature in solid form. Every piece is handcrafted in our studio using eco-friendly resin and ethically sourced pigments.',
                image: aboutArtistImage,
                behindTheScenes: [
                    'https://images.unsplash.com/photo-1510931591691-8d2645842884?auto=format&fit=crop&q=80&w=600',
                    'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=600',
                    'https://images.unsplash.com/photo-1616428768023-3db4d940656a?auto=format&fit=crop&q=80&w=600'
                ],
                testimonials: INITIAL_TESTIMONIALS
            },
            contact: {
                email: 'hello@arttales.com',
                phone: '+1 (555) 123-4567',
                address: '123 Art Studio Lane, Creative City, AC 90210'
            },
            settings: {
                enableAI: true,
                whatsappNumber: '919876543210'
            },
            layout: {
                showHero: true,
                showCollections: true,
                showAbout: true,
                showNewsletter: true
            }
        };
    });

    // Testimonials are now part of siteContent.about, dependent on siteContent being initialized
    const testimonials = siteContent.about?.testimonials || INITIAL_TESTIMONIALS;

    // Persistence Effects
    useEffect(() => {
        localStorage.setItem('art_tales_products', JSON.stringify(products));
    }, [products]);

    useEffect(() => {
        localStorage.setItem('art_tales_discounts', JSON.stringify(discounts));
    }, [discounts]);

    useEffect(() => {
        localStorage.setItem('art_tales_content_v3', JSON.stringify(siteContent));
    }, [siteContent]);

    // Migration Effect: Fix broken About Image AND missing fields
    useEffect(() => {
        setSiteContent(prev => {
            let updates: Partial<SiteContent> = {};
            let hasUpdates = false;

            // Fix Broken Image
            if (prev.about?.image?.includes('unsplash.com/photo-1460661631560')) {
                updates = { ...updates, about: { ...prev.about, image: aboutArtistImage } };
                hasUpdates = true;
            }

            // Backfill Behind The Scenes
            if (!prev.about?.behindTheScenes) {
                updates = {
                    ...updates,
                    about: {
                        ...(updates.about || prev.about),
                        behindTheScenes: [
                            'https://images.unsplash.com/photo-1510931591691-8d2645842884?auto=format&fit=crop&q=80&w=600',
                            'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=600',
                            'https://images.unsplash.com/photo-1616428768023-3db4d940656a?auto=format&fit=crop&q=80&w=600'
                        ]
                    }
                };
                hasUpdates = true;
            }

            // Backfill Testimonials
            if (!prev.about?.testimonials) {
                updates = {
                    ...updates,
                    about: {
                        ...(updates.about || prev.about),
                        testimonials: INITIAL_TESTIMONIALS
                    }
                };
                hasUpdates = true;
            }

            return hasUpdates ? { ...prev, ...updates } : prev;
        });
    }, []);

    // Product Actions
    const addProduct = async (product: Product) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setProducts(prev => [...prev, product]);
    };

    const updateProduct = async (id: string, updates: Partial<Product>) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    };

    const deleteProduct = async (id: string) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    // Discount Actions
    const addDiscount = async (discount: Discount) => {
        await new Promise(resolve => setTimeout(resolve, 300));
        setDiscounts(prev => [...prev, discount]);
    };

    const toggleDiscount = async (code: string) => {
        await new Promise(resolve => setTimeout(resolve, 300));
        setDiscounts(prev => prev.map(d => d.code === code ? { ...d, isActive: !d.isActive } : d));
    };

    const deleteDiscount = async (code: string) => {
        await new Promise(resolve => setTimeout(resolve, 300));
        setDiscounts(prev => prev.filter(d => d.code !== code));
    };

    // Content Actions
    const updateSiteContent = async (updates: Partial<SiteContent>) => {
        await new Promise(resolve => setTimeout(resolve, 300));
        setSiteContent(prev => ({ ...prev, ...updates }));
    };

    const formatPrice = (price: number): string => {
        // Safe access to currency settings with defaults
        const currencyKey = siteContent?.global?.currency || 'USD';
        const currencyRates = siteContent?.global?.currencyRate || {};

        const rate = currencyRates[currencyKey] || 1;
        const converted = price * rate;

        try {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currencyKey
            }).format(converted);
        } catch (error) {
            // Fallback for invalid currency codes
            return `$${converted.toFixed(2)}`;
        }
    };

    return (
        <DataContext.Provider value={{
            products,
            portfolio,
            testimonials,
            discounts,
            siteContent,
            addProduct,
            updateProduct,
            deleteProduct,
            addDiscount,
            toggleDiscount,
            deleteDiscount,
            updateSiteContent,
            formatPrice
        }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
