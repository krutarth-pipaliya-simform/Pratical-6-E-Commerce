import { useNavigate } from "react-router-dom";
import type { ProductType } from "../../../types/ProductType";

interface ProductPropsType {
    product: ProductType;
}

export const Product = ({ product }: ProductPropsType) => {
    const navigate = useNavigate();
    return <li onClick={() => navigate(`product/${product.id}`)}>{product.title}</li>;
};
