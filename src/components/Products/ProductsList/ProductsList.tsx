import { ProductsWrapper } from "./ProductsWrapper/ProductsWrapper";
import { SideBar } from "./SideBar/SideBar";

export const ProductsList = () => {
    return (
        <div className="products-wrapper flex-1 flex">
            <SideBar />
            <ProductsWrapper />
        </div>
    );
};
