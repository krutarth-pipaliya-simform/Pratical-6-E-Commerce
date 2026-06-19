import { useProductsContext } from "../../../hooks/useProductsContext";
import { FilterItem } from "./FilterItem";

export const FilterProducts = () => {
    const { categories } = useProductsContext();
    return (
        <aside className="sticky top-0 h-screen p-4 shadow-xl bg-[#FE7A04] text-white min-w-xs">
            <div>
                Category
                <ul>
                    {categories.map((category) => (
                        <FilterItem category={category} />
                    ))}
                </ul>
            </div>
        </aside>
    );
};
