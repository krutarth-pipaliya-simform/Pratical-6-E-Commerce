import { useProducts } from "../../../hooks/useProducts";
import { FilterItem } from "./FilterItem";

export const FilterProducts = () => {
    const { products, isLoading } = useProducts();
    if (isLoading) return <>Loading..</>;
    const categories = new Array(
        ...new Set(products.map(({ category }: { category: { name: string } }) => category.name)),
    );
    return (
        <aside className="sticky top-0 h-screen p-4 shadow-xl bg-[#FE7A04] text-white min-w-xs">
            <div>
                Category
                <ul>
                    {categories.map((category) =>
                        typeof category === "string" ? (
                            <FilterItem key={category} category={category} />
                        ) : null,
                    )}
                </ul>
            </div>
        </aside>
    );
};
