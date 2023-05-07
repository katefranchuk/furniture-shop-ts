import { FC } from "react";
import { IProduct } from "../../interface/iproduct.interface";
import ControlBtn from "../../ui/controls-btn/ControlBtn";
import { useResponsive } from "../../utils/responsive/ResponsiveContext";
import {
  ProductCardText,
  ProductCardTitle,
  ProductTableCard,
  ProductTableItem,
} from "./CartItem.styled";
import MobieTableCard from "./mobile-table-card/MobieTableCard";

interface CartItemProps {
  product: IProduct;
}

const CartItem: FC<CartItemProps> = ({ product }) => {
  const { isSm } = useResponsive();
  return (
    <ProductTableItem>
      {isSm ? (
        <>
          <ProductTableCard>
            <img
              src={product.image}
              alt="product"
              style={{ maxWidth: "133px" }}
            />
            <div>
              <ProductCardTitle component="h3" variant="accent5">
                {product.title}
              </ProductCardTitle>
              <ProductCardText variant="text2" component="p">
                Lorem ipsum dolor sit amet.
              </ProductCardText>
              <ProductCardText variant="text2" component="span">
                £{product.price}
              </ProductCardText>
            </div>
          </ProductTableCard>
          <div style={{ marginLeft: "auto" }}>
            <ControlBtn
              count={product.count}
              productId={product.id}
              onPlus={() => product.id}
              onMinus={() => product.id}
            />
          </div>
          <span style={{ textAlign: "right" }}>
            £{Math.floor(product.price * product.count)}
          </span>
        </>
      ) : (
        <MobieTableCard product={product} />
      )}
    </ProductTableItem>
  );
};

export default CartItem;
