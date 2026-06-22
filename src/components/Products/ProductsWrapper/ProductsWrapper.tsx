import { ProductsList } from "./ProductsList";
import { FilterProducts } from "./FilterProducts";
import { ErrorBoundary } from "../../ErrorBoundary/ErrorBoundary";

export const ProductsWrapper = () => {
    return (
        <div className="products-wrapper flex-1 flex">
            <FilterProducts />
            <ErrorBoundary errorMessage="Error rendering the Products">
                <ProductsList />
            </ErrorBoundary>
        </div>
    );
};
