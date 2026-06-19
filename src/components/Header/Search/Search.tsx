import { useNavigate, useSearchParams } from "react-router-dom";

import { useProductsContext } from "../../../hooks/useProductsContext";
import { useState } from "react";

export const Search = () => {
    const { searchRef: ref } = useProductsContext();
    const navigate = useNavigate();
    const [, setParams] = useSearchParams();
    const [query, setQuery] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                navigate("/");
            }}
            className="align-center"
        >
            <input
                ref={ref}
                type="search"
                value={query}
                onChange={(e) => {
                    setParams((prev) => {
                        const newParams = new URLSearchParams(prev);
                        newParams.set("search", e.target.value);
                        setQuery(e.target.value);
                        return newParams;
                    });
                }}
                placeholder="Search products..."
            />
        </form>
    );
};
