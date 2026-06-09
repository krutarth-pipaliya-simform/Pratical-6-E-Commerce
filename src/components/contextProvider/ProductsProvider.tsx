import { useEffect, useState, type ReactNode } from "react";

import { QueryContext } from "../../hooks/useProductsContext";
import type { ProductType } from "../types/ProductType";
import { getProducts } from "../../services/api/userApi";
import { useNavigate } from "react-router-dom";

interface QueryProviderPropsType {
    children: ReactNode;
}

export const ProductsProvider = ({ children }: QueryProviderPropsType) => {
    const contextData = useProductsState();
    return <QueryContext.Provider value={contextData}>{children}</QueryContext.Provider>;
};

const useProductsState = () => {
    const [query, setQuery] = useState("");
    const [allProducts, setProducts] = useState<Array<ProductType>>([]);

    const navigate = useNavigate();
    const searchProducts = (searchQuery = "") => {
        setQuery(searchQuery);
        navigate("/");
    };

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    const products = allProducts.filter(
        ({ title, description }) =>
            title.toLocaleLowerCase().includes(query) ||
            description.toLocaleLowerCase().includes(query),
    );

    return {
        query,
        searchProducts,
        products,
        setProducts,
    };
};
