
export interface Product {
    id: string;
    name: string;
    category: 'Resin Art' | 'Candles' | 'Jewelry' | 'Wall Clocks' | 'Trays' | 'Coasters';
    price: number;
    oldPrice?: number;
    description: string;
    image: string;
    images?: string[]; // Gallery images
    videoUrl?: string; // YouTube/Vimeo link
    isNew?: boolean;
    isHot?: boolean;
    details?: string[]; // Legacy, kept for compatibility
    dimensions?: string;
    shippingInfo?: string;
    finishOptions?: string[];
}

// New Interfaces for Dynamic Content
export interface CollectionItem {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    link: string;
}

export interface PortfolioItem {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
}

export interface FooterLink {
    id: string;
    label: string;
    url: string;
}

export interface SiteContent {
    global: {
        announcementBar: string;
        currency: 'USD' | 'EUR' | 'GBP' | 'INR' | 'AUD';
        currencyRate: Record<string, number>;
    };
    home: {
        heroTitle: string;
        heroSubtitle: string;
        collections: CollectionItem[];
    };
    shop: {
        categories: string[];
    };
    about: {
        title: string;
        story: string;
        image: string;
        behindTheScenes: string[];
        testimonials: Testimonial[];
    };
    portfolio: {
        categories: string[];
        items: PortfolioItem[];
    };
    contact: {
        email: string;
        phone: string;
        address: string;
    };
    settings?: {
        enableAI: boolean;
        whatsappNumber: string;
    };
    footer: {
        description: string;
        copyright: string;
        socialLinks: FooterLink[];
        shopLinks: FooterLink[];
        supportLinks: FooterLink[];
    };
    layout: {
        showHero: boolean;
        showCollections: boolean;
        showAbout: boolean;
        showNewsletter: boolean;
    };
}

export interface Testimonial {
    id: string;
    name: string;
    location: string;
    text: string;
    avatar: string;
}

// Duplicate interface removed

export interface User {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    avatar?: string;
    isGuest?: boolean;
    role?: 'admin' | 'user' | 'guest'; // Added for Admin Dashboard
}
