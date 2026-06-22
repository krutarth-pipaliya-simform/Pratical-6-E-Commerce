import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { GET } from "../../../services/httpMethods";
import { FALLBACK_IMAGE } from "../../../utilities/constants";
import { useQuery } from "@tanstack/react-query";

export const ProductDetails = () => {
    const { productId } = useParams();
    const [mainImage, setMainImage] = useState("");
    const [isAdded, setIsAdded] = useState(false);
    const navigate = useNavigate();

    const discount = 20;
    const {
        data: product,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["product"],
        queryFn: () => getProduct(productId ?? ""),
    });

    if (isLoading) return <div className="flex-1 min-h-full">"Loading..."</div>;
    if (error) return <Navigate to={"/404"} />;
    if (mainImage === "") setMainImage(product.images[0]);

    return (
        <main className="p-4 flex-1 min-h-full flex gap-4 relative">
            <span
                className="cursor-pointer px-2 aspect-square rounded-full bg-[#FE7A04] absolute right-4 top-4 text-white"
                onClick={() => navigate("/")}
            >
                x
            </span>
            <section className="flex-1 flex flex-col items-center">
                <img
                    className="w-[30vw] aspect-square"
                    src={mainImage}
                    alt="NA"
                    onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = FALLBACK_IMAGE;
                    }}
                />
                <div className="mt-4 flex gap-4">
                    {product.images.map((src: string) => {
                        return (
                            <img
                                onClick={() => setMainImage(src)}
                                key={src}
                                className={`w-[5vw] aspect-square ${src === mainImage ? "ring-2 ring-[#0360F4]" : ""}`}
                                src={src}
                                alt="NA"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.onerror = null;
                                    target.src = FALLBACK_IMAGE;
                                }}
                            />
                        );
                    })}
                </div>
            </section>
            <section className="flex-1">
                <h2 className="text-2xl font-bold">{product.title}</h2>
                <div>{product.description}</div>
                <div>
                    <span className="block text-2xl font-bold text-heading">${product.price}</span>

                    <span className="text-sm text-gray-500 line-through">
                        ${Math.round(product.price / (1 - discount / 100))}
                    </span>
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
            </section>
        </main>
    );
};

const getProduct = async (productId: string) => {
    return await GET(`products/${productId}`).then((res) => {
        return res?.data;
    });
};
