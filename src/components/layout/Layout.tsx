import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ProductsProvider } from "../contextProvider/ProductsProvider";

export const Layout = () => {
    return (
        <ProductsProvider>
            <Header />
            <Outlet />
            <Footer />
        </ProductsProvider>
    );
};
