import { useNavigate } from "react-router-dom";
import type { ProductType } from "../types/ProductType";
import { useState } from "react";

interface ProductPropsType {
    product: ProductType;
}

export const ProductCard = ({
    product: { id, title, images, price, description },
}: ProductPropsType) => {
    const navigate = useNavigate();
    const [isAdded, setIsAdded] = useState(false);
    const discount = 20;
    const originalPrice = Math.round(price / (1 - discount / 100));
    return (
        <li
            onClick={() => navigate(`/product/${id}`)}
            className="group cursor-pointer overflow-hidden rounded-xl bg-neutral-primary-soft shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
            <div className="relative">
                <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow">
                    {discount}% OFF
                </span>
                <img
                    src={images[0]}
                    alt={title}
                    className="h-56 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex h-56 flex-col p-5">
                <h3 className="line-clamp-1 text-xl font-semibold text-heading">{title}</h3>

                <p className="mt-3 line-clamp-3 text-sm text-body-secondary">{description}</p>

                <div className="mt-auto flex items-center justify-between pt-4">
                    <div>
                        <span className="block text-2xl font-bold text-heading">${price}</span>

                        <span className="text-sm text-gray-500 line-through">${originalPrice}</span>
                    </div>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsAdded((prev) => !prev);
                        }}
                        className={`rounded-lg px-4 py-2 text-sm font-semibold shadow transition-all duration-200 ${
                            isAdded
                                ? "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg"
                                : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
                        }`}
                    >
                        {isAdded ? "✓ Added" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </li>
    );
};
