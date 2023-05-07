import { FC } from "react";
import { IProduct } from "../../../interface/iproduct.interface";
import ControlBtn from "../../../ui/controls-btn/ControlBtn";
import {
  ProductCardText,
  ProductCardTitle,
  ProductTableCard,
  ProductTableCardBottom,
} from "../CartItem.styled";

interface IMobieTableCard {
  product: IProduct;
}

const MobieTableCard: FC<IMobieTableCard> = ({ product }) => {
  return (
    <ProductTableCard>
      <img src={product.image} alt="product" style={{ maxWidth: "133px" }} />
      <ProductTableCardBottom>
        <ProductCardTitle component="h3" variant="accent5">
          {product.title}
        </ProductCardTitle>
        <ProductCardText variant="text2" component="p">
          Lorem ipsum dolor sit amet.
        </ProductCardText>
        <ProductCardText variant="text2" component="span">
          £{product.price}
        </ProductCardText>
        <div>
          <ControlBtn
            count={product.count}
            productId={product.id}
            onPlus={() => product.id}
            onMinus={() => product.id}
          />
        </div>
      </ProductTableCardBottom>
    </ProductTableCard>
  );
};

export default MobieTableCard;
