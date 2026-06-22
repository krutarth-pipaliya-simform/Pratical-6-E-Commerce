import { useSearchParams } from "react-router-dom";

export const FilterItem = ({ category }: { category: string }) => {
    const [params, setParams] = useSearchParams();
    return (
        <li>
            <input
                onChange={(e) => {
                    if (e.target.checked) {
                        setParams((prev) => {
                            prev.append("categories", e.target.value);
                            return prev;
                        });
                    } else {
                        setParams((prev) => {
                            const params = new URLSearchParams(prev);

                            const categories = params
                                .getAll("categories")
                                .filter((category) => category !== e.target.value);

                            params.delete("categories");

                            categories.forEach((category) => {
                                params.append("categories", category);
                            });

                            return params;
                        });
                    }
                }}
                type="checkbox"
                id={category}
                name={category}
                value={category}
                checked={params.getAll("categories").includes(category)}
            />
            <label htmlFor={category}> {category}</label>
        </li>
    );
};
