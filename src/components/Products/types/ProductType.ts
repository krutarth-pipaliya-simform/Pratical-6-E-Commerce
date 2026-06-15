export interface ProductType {
    id: string;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
}

export interface Category {
    id: string;
    name: string;
    image: string;
    slug: string;
}
