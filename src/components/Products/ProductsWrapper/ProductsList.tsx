import { useEffect } from "react";

import { useProductsContext } from "../../../hooks/useProductsContext";
import { ProductCard } from "./ProductCard";
import { GET } from "../../../services/httpMethods";
import { useSearchParams } from "react-router-dom";

export const ProductsList = () => {
    const { products, setProducts } = useProductsContext();
    const [params] = useSearchParams();

    const categories = params.getAll("categories");
    const renderProducts = categories.length
        ? products.filter((product) => categories.includes(product.category.name))
        : products;

    useEffect(() => {
        getProducts().then((data) => setProducts(data));
    }, [setProducts]);

    return (
        <main className="p-4">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {renderProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
        </main>
    );
};

const getProducts = async () => {
    return await GET("products?offset=0&limit=20").then((res) => {
        return res.data;
    });
};
