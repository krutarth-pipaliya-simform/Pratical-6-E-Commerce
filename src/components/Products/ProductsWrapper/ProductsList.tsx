import { useSearchParams } from "react-router-dom";

import { ProductCard } from "./ProductCard";
import { useProducts } from "../../../hooks/useProducts";
import type { ProductType } from "../types/ProductType";

export const ProductsList = () => {
    const [params] = useSearchParams();
    const { products, isLoading, error } = useProducts();

    const categories = params.getAll("categories");

    const search = params.get("search")?.toLowerCase() ?? "";

    const renderProducts = products.filter((product: ProductType) => {
        const matchesCategory =
            categories.length === 0 || categories.includes(product.category.name);

        const matchesSearch =
            search === "" ||
            product.title.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search);

        return matchesCategory && matchesSearch;
    });

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Something went wrong</p>;

    return (
        <main className="p-4">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {renderProducts.map((product: ProductType) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
        </main>
    );
};
