import type { RefObject } from "react";
import { useNavigate } from "react-router-dom";

import { Search } from "./Search/Search";
import img from "../../assets/headerLogo.png";

interface HeaderPropsType {
    searchRef: RefObject<HTMLInputElement | null>;
}

export const Header = ({ searchRef }: HeaderPropsType) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/");
    };

    return (
        <header className="flex gap-4 items-center justify-between px-8 shadow-xl ">
            <img className="h-20 cursor-pointer" src={img} alt="Logo" onClick={handleOnClick} />
            <Search ref={searchRef} />
        </header>
    );
};
