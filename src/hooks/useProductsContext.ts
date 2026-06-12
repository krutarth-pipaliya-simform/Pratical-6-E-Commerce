import { createContext, useContext, type SetStateAction } from "react";

import type { ProductType } from "../components/types/ProductType";

interface ProductsContextType {
    query: string;
    searchProducts: (searchQuery: string) => void;
    products: Array<ProductType>;
    setProducts: (value: SetStateAction<Array<ProductType>>) => void;
}

export const useProductsContext = () => {
    const context = useContext(ProductContext);
    if (!context) throw new Error("Please Wrap the Context");
    return context;
};

export const ProductContext = createContext<ProductsContextType | undefined>(undefined);
