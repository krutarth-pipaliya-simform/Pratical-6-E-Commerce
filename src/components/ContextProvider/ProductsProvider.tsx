import { useRef, type ReactNode } from "react";

import { ProductContext } from "../../hooks/useProductsContext";

interface QueryProviderPropsType {
    children: ReactNode;
}

export const ProductsProvider = ({ children }: QueryProviderPropsType) => {
    const contextData = useProductsState();
    return <ProductContext.Provider value={contextData}>{children}</ProductContext.Provider>;
};

const useProductsState = () => {
    const searchRef = useRef<HTMLInputElement | null>(null);
    const focusOnSearch = () => {
        searchRef.current?.focus();
    };

    return {
        searchRef,
        focusOnSearch,
    };
};
