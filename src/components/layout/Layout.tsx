import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ProductsProvider } from "../contextProvider/ProductsProvider";

export const Layout = () => {
    return (
        <div className="min-h-dvh flex flex-col">
            <ProductsProvider>
                <Header />
                <Outlet />
                <Footer />
            </ProductsProvider>
        </div>
    );
};
