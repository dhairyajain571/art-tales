
export interface Product {
    id: string;
    name: string;
    category: 'Resin Art' | 'Candles' | 'Jewelry' | 'Wall Clocks' | 'Trays' | 'Coasters';
    price: number;
    oldPrice?: number;
    description: string;
    image: string;
    isNew?: boolean;
    isHot?: boolean;
    details?: string[];
}

export interface Testimonial {
    id: string;
    name: string;
    location: string;
    text: string;
    avatar: string;
}

export interface PortfolioItem {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
}

export interface User {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    avatar?: string;
    isGuest?: boolean;
}
