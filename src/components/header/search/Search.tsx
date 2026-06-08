import { useProductsContext } from "../../../hooks/useProductsContext";

export const Search = () => {
    const { query, setQuery } = useProductsContext();
    return (
        <form className="align-center">
            <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
            />
        </form>
    );
};
