import type { AxiosRequestConfig } from "axios";
import { apiClient } from "./axios";

const api = apiClient();

export const GET = (url: string, config?: AxiosRequestConfig) => api.get(url, config);

export const POST = (url: string, data?: unknown, config?: AxiosRequestConfig) =>
    api.post(url, data, config);

export const PATCH = (url: string, data?: unknown, config?: AxiosRequestConfig) =>
    api.patch(url, data, config);

export const PUT = (url: string, data?: unknown, config?: AxiosRequestConfig) =>
    api.put(url, data, config);

export const DELETE = (url: string, config?: AxiosRequestConfig) => api.delete(url, config);
