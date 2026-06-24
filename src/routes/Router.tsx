import { createBrowserRouter, Navigate } from "react-router-dom";

import { ProductsWrapper } from "../components/Products/ProductsWrapper/ProductsWrapper";
import { ProductDetails } from "../components/Products/ProductDetails/ProductDetails";
import { Layout } from "../components/Layout/Layout";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <ProductsWrapper />,
            },
            {
                path: "product/:productId",
                element: <ProductDetails />,
            },
        ],
    },
    {
        path: "/404",
        element: <>404</>,
    },
    {
        path: "*",
        element: <Navigate to="/404" replace />,
    },
]);
