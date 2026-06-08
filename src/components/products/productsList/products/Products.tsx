import { useProductsContext } from "../../../../hooks/useProductsContext";
import { Product } from "./Product";

export const Products = () => {
    const { products } = useProductsContext();
    return (
        <ul>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </ul>
    );
};
