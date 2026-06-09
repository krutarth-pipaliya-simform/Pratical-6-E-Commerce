import { useProductsContext } from "../../../../hooks/useProductsContext";
import { Product } from "./Product";

export const ProductsWrapper = () => {
    const { products } = useProductsContext();
    return (
        <main className="p-4">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </ul>
        </main>
    );
};
