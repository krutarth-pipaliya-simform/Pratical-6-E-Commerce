import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { ProductContext } from "../../hooks/useProductsContext";
import { GET } from "../../services/httpMethods";
import type { ProductType } from "../types/ProductType";

interface QueryProviderPropsType {
    children: ReactNode;
}

export const ProductsProvider = ({ children }: QueryProviderPropsType) => {
    const contextData = useProductsState();
    return <ProductContext.Provider value={contextData}>{children}</ProductContext.Provider>;
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

const getProducts = async () => {
    return await GET("products?offset=0&limit=20").then((res) => {
        return res.data;
    });
};
