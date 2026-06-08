import { Search } from "./search/Search";

import img from "../../assets/headerLogo.png";

export const Header = () => {
    return (
        <header className="flex gap-4 items-center justify-between px-8 shadow-xl ">
            <img className="h-24" src={img} />
            <Search />
        </header>
    );
};
