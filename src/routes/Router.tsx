import { createBrowserRouter } from "react-router-dom";

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
]);
