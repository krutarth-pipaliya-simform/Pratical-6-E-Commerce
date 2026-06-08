import { GET } from "./http";

export const getProducts = async () => {
    return await GET("products?offset=0&limit=20").then((res) => {
        return res.data;
    });
};
