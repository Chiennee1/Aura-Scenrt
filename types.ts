
export interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    category: string; // e.g., 'Floral', 'Woody', 'Fresh'
    concentration: 'Eau de Parfum' | 'Eau de Toilette' | 'Cologne' | 'Parfum';
    gender: 'Male' | 'Female' | 'Unisex';
    description: string;
    notes: {
        top: string;
        middle: string;
        base: string;
    };
    isNew?: boolean;
    isTrending?: boolean;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface FilterState {
    query: string;
    minPrice: number;
    maxPrice: number;
    brands: string[];
    categories: string[];
    genders: string[]; // Added Gender filter
    sort: 'popular' | 'price_asc' | 'price_desc' | 'newest';
}

export interface UserProfile {
    name: string;
    email: string;
    phone: string;
    avatar: string;
    addresses: Address[];
}

export interface Address {
    id: string;
    name: string;
    phone: string;
    details: string;
    isDefault: boolean;
}

export enum QuizStep {
    SCENT = 0,
    OCCASION = 1,
    STYLE = 2,
    RESULT = 3
}

export type OrderStatus = 'pending' | 'shipping' | 'delivered' | 'cancelled';

export interface Order {
    id: string;
    date: string;
    status: OrderStatus;
    total: number;
    items: CartItem[];
}

export interface Voucher {
    id: string;
    code: string;
    description: string;
    discountAmount?: number;
    discountPercent?: number;
    minSpend: number;
    expiryDate: string;
    type: 'shipping' | 'discount';
}
