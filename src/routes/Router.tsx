import { createBrowserRouter } from "react-router-dom";
import { ProductList } from "../components/products/productsList/ProductList";
import { ProductDetails } from "../components/products/productDetails/ProductDetails";
import { Layout } from "../components/layout/Layout";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <ProductList />,
            },
            {
                path: "product/:productId",
                element: <ProductDetails />,
            },
        ],
    },
]);
