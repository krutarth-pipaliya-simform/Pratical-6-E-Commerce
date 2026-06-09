import { GET } from "./http";

export const getProducts = async () => {
    return await GET("products?offset=0&limit=20").then((res) => {
        return res.data;
    });
};

export const getProduct = async (productId: string) => {
    return await GET(`products/${productId}`).then((res) => {
        return res?.data;
    });
};
