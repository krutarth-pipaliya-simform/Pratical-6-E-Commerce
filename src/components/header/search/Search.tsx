import { useNavigate } from "react-router-dom";
import { useProductsContext } from "../../../hooks/useProductsContext";

export const Search = () => {
    const { query, searchProducts } = useProductsContext();
    const navigate = useNavigate();
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                navigate("/");
            }}
            className="align-center"
        >
            <input
                type="search"
                value={query}
                onChange={(e) => searchProducts(e.target.value)}
                placeholder="Search products..."
            />
        </form>
    );
};
