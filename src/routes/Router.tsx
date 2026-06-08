import { createBrowserRouter } from "react-router-dom";

import { ProductsList } from "../components/products/productsList/ProductsList";
import { ProductDetails } from "../components/products/productDetails/ProductDetails";
import { Layout } from "../components/layout/Layout";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <ProductsList />,
            },
            {
                path: "product/:productId",
                element: <ProductDetails />,
            },
        ],
    },
]);
