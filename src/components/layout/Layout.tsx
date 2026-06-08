import { Outlet } from "react-router-dom";

import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ProductsProvider } from "../contextProvider/ProductsProvider";

export const Layout = () => {
    return (
        <div className="h-dvh flex flex-col overflow-hidden">
            <ProductsProvider>
                <Header />
                <div className="overflow-y-scroll flex-1 flex flex-col">
                    <Outlet />
                    <Footer />
                </div>
            </ProductsProvider>
        </div>
    );
};
