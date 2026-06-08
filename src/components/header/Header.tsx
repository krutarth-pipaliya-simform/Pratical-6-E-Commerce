import { Search } from "./search/Search";

import img from "../../assets/headerLogo.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/");
    };
    return (
        <header className="flex gap-4 items-center justify-between px-8 shadow-xl ">
            <img className="h-20 cursor-pointer" src={img} onClick={handleOnClick} />
            <Search />
        </header>
    );
};
