import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "../../pages/Products";
import { ProductDetails } from "../../pages/ProductDetails";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </BrowserRouter>
    );
};
