import { FC } from "react";
import { Link } from "react-router-dom";
import { PopularProdct } from "../../interface/iproduct.interface";
import {
  PopularProductCard,
  PopularProductCardTitle,
} from "./PopularProduct.styled";

interface IPopularProduct {
  product: PopularProdct;
}

const PopularProductItem: FC<IPopularProduct> = ({ product }) => {
  return (
    <Link to={`/info/${product.id}`}>
      <PopularProductCard>
        <img src={product.image} alt="product" />
        <PopularProductCardTitle variant="accent5" component="h4">
          {product.title}
        </PopularProductCardTitle>
        <span>{product.price}</span>
      </PopularProductCard>
    </Link>
  );
};

export default PopularProductItem;
