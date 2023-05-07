import React, { FC } from "react";
import { IProduct } from "../../interface/iproduct.interface";
import ProductItem from "../product-item/ProductItem";
import { ProductsListWrapper } from "./ProductList.styled";

interface ProductListProps {
  products: IProduct[];
  sx?: {};
}

const ProductsList: FC<ProductListProps> = ({ products, sx }) => {
  return (
    <ProductsListWrapper sx={sx}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductsListWrapper>
  );
};

export default ProductsList;
