import { Products } from "./products/Products";
import { SideBar } from "./sideBar/SideBar";

export const ProductsList = () => {
    return (
        <div className="products-wrapper flex-1 flex">
            <SideBar />
            <Products />
        </div>
    );
};
