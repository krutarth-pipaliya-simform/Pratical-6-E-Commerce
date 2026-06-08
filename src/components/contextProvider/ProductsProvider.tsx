import { useState, type ReactNode } from "react";

import { QueryContext } from "../../hooks/useProductsContext";
import type { ProductType } from "../types/ProductType";

interface QueryProviderPropsType {
    children: ReactNode;
}

export const ProductsProvider = ({ children }: QueryProviderPropsType) => {
    const contextData = useProductsState();
    return <QueryContext.Provider value={contextData}>{children}</QueryContext.Provider>;
};

const useProductsState = () => {
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState<Array<ProductType>>([]);

    return {
        query,
        setQuery,
        products,
        setProducts,
    };
};
