import { ProductsList } from "./ProductsList";
import { FilterProducts } from "./FilterProducts";

export const ProductsWrapper = () => {
    return (
        <div className="products-wrapper flex-1 flex">
            <FilterProducts />
            <ProductsList />
        </div>
    );
};
