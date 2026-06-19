import { createContext, useContext, type RefObject } from "react";

interface ProductsContextType {
    focusOnSearch: () => void;
    searchRef: RefObject<HTMLInputElement | null>;
}

export const useProductsContext = () => {
    const context = useContext(ProductContext);
    if (!context) throw new Error("Please Wrap the Context");
    return context;
};

export const ProductContext = createContext<ProductsContextType | undefined>(undefined);
