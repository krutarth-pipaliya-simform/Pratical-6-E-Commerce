import { createBrowserRouter } from "react-router-dom";
import { ProductList } from "../components/products/productsList/ProductList";
import { ProductDetails } from "../components/products/productDetails/ProductDetails";

export const Router = createBrowserRouter([
    {
        index: true,
        element: <ProductList />,
    },
    {
        path: "product/:productId",
        element: <ProductDetails />,
    },
]);
