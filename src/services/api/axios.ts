import axios from "axios";

export const apiClient = () => {
    const api = axios.create({
        baseURL: "https://api.escuelajs.co/api/v1/",
    });

    api.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("Authorization");
            if (token) config.headers.Authorization = `Bearer ${token}`;
            return config;
        },
        (error) => {
            console.log(error);
        },
    );

    api.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            console.log(error);
        },
    );

    return api;
};
