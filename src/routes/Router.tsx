import { createBrowserRouter } from "react-router-dom";

import { ProductsList } from "../components/Products/ProductsList/ProductsList";
import { ProductDetails } from "../components/Products/ProductDetails/ProductDetails";
import { Layout } from "../components/Layout/Layout";

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
