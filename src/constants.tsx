import { Product, Testimonial, PortfolioItem } from './types';
import dummyProduct from './assets/dummy_product.png';

// Use local dummy image for all products since original links might be broken or external
const IMAGE_PLACEHOLDER = dummyProduct;

export const PRODUCTS: Product[] = [
    {
        id: 'p1',
        name: 'Ocean Breeze Resin Tray',
        category: 'Trays',
        price: 45.00,
        description: 'Hand-poured resin art capturing the serenity of the ocean waves. Each piece is unique, crafted with passion, and features layers of translucent blue resin and real sand to bring the beach to your home.',
        image: IMAGE_PLACEHOLDER,
        isNew: true,
        details: ['Diameter: 12 inches', 'Heat resistant up to 120°F', 'Real sand and pigments']
    },
    {
        id: 'p2',
        name: 'Ocean Coasters (Set of 4)',
        category: 'Coasters',
        price: 28.00,
        description: 'Deep teal and gold resin coasters with a realistic geode aesthetic.',
        image: IMAGE_PLACEHOLDER
    },
    {
        id: 'p3',
        name: 'Sea Salt & Orchid Candle',
        category: 'Candles',
        price: 18.00,
        oldPrice: 22.00,
        description: 'A soothing mix of sea salt and orchid in a minimal glass jar.',
        image: IMAGE_PLACEHOLDER
    },
    {
        id: 'p4',
        name: 'Cheese Board w/ Resin',
        category: 'Trays',
        price: 55.00,
        description: 'Natural wood cheese board with a wave-patterned resin handle.',
        image: IMAGE_PLACEHOLDER
    },
    {
        id: 'p5',
        name: 'Seashell Trinket Dish',
        category: 'Resin Art',
        price: 15.00,
        description: 'A delicate white shell-shaped dish with elegant gold edging.',
        image: IMAGE_PLACEHOLDER
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 't1',
        name: 'Sarah Jenkins',
        location: 'Mumbai',
        text: '"I ordered a custom resin ocean tray for my sister\'s wedding, and it was absolutely stunning. The depth of the colors is incredible!"',
        avatar: 'https://picsum.photos/seed/sarah/100/100'
    },
    {
        id: 't2',
        name: 'Rohan Mehta',
        location: 'Bangalore',
        text: '"The scented candles from Art Tales are a vibe. They burn cleanly and the scent is just perfect for my evening reading."',
        avatar: 'https://picsum.photos/seed/rohan/100/100'
    }
];

export const PORTFOLIO: PortfolioItem[] = [
    {
        id: 'pf1',
        title: 'Cerulean Tide Coffee Table',
        category: 'Furniture',
        description: 'Large scale ocean pour with deep cerulean and turquoise pigments.',
        image: IMAGE_PLACEHOLDER
    },
    {
        id: 'pf2',
        title: 'Floral Preservation Cube',
        category: 'Botanical',
        description: 'Preserving a wedding bouquet in high-clarity crystal resin.',
        image: IMAGE_PLACEHOLDER
    },
    {
        id: 'pf3',
        title: 'Midnight Galaxy Tray',
        category: 'Trays',
        description: 'Custom pour featuring holographic glitter and midnight blacks.',
        image: IMAGE_PLACEHOLDER
    },
    {
        id: 'pf4',
        title: 'Midnight Blue Clock',
        category: 'Clocks',
        description: 'Functional art piece with gold hands and numbering.',
        image: IMAGE_PLACEHOLDER
    },
    {
        id: 'pf5',
        title: 'Lavender Mist Candle',
        category: 'Candles',
        description: 'Hand-poured soy wax with calming essential oils.',
        image: IMAGE_PLACEHOLDER
    },
    {
        id: 'pf6',
        title: 'Noir Gold Coaster Set',
        category: 'Trays',
        description: 'Abstract gold and black resin coaster set.',
        image: IMAGE_PLACEHOLDER
    }
];
