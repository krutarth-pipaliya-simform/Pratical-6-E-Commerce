import type { ProductType } from "../../../types/ProductType";

interface ProductPropsType {
    product: ProductType;
}

export const Product = ({ product }: ProductPropsType) => {
    return <li>{product.title}</li>;
};
