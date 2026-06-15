import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ProductsProvider } from "../ContextProvider/ProductsProvider";
import { useRef } from "react";

export const Layout = () => {
    const searchRef = useRef<HTMLFormElement | null>(null);
    const focusOnSearch = () => {
        searchRef.current.focus();
    };
    return (
        <div className="h-dvh flex flex-col overflow-hidden">
            <ProductsProvider>
                <Header searchRef={searchRef} />
                <div className="overflow-y-scroll flex-1 flex flex-col">
                    <Outlet />
                    <Footer focusOnSearch={focusOnSearch} />
                </div>
            </ProductsProvider>
        </div>
    );
};
