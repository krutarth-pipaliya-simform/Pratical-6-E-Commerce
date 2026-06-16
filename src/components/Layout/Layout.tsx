import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ProductsProvider } from "../ContextProvider/ProductsProvider";

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
