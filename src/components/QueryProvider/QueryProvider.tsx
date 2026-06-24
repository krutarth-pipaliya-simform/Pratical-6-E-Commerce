import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

interface QueryProviderPropsType {
    children: ReactNode;
}
export const QueryProvider = ({ children }: QueryProviderPropsType) => {
    const queryClient = new QueryClient();

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
