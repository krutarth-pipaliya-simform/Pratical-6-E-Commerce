import { useQuery } from "@tanstack/react-query";

import { GET } from "../services/httpMethods";

export const useProducts = () => {
    const {
        data: products = [],
        isLoading,
        error,
    } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });
    return {
        products,
        isLoading,
        error,
    };
};

const getProducts = async () => {
    return await GET("products?offset=0&limit=20").then((res) => {
        return res.data;
    });
};
