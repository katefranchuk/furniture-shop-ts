import { Container } from "@mui/material";
import React, { useState } from "react";
import { useAppSelector } from "../../hooks/useActions";
import { selectCart } from "../../store/slices/cartSlice";
import EmptyBlock from "../../ui/empty-block/EmptyBlock";
import { useResponsive } from "../../utils/responsive/ResponsiveContext";
import CartCheckout from "./cart-checkout-block/CartCheckout";
import CartItem from "./CartItem";
import {
  ProductCardBottomChekout,
  ProductCartPageTitle,
  ProductsListItem,
  ProductsTable,
} from "./CartItem.styled";

const CartBox = () => {
  const { items, totalPrice } = useAppSelector(selectCart);
  const { isSm } = useResponsive();
  const [isOrderComplete, setOrderIsComplete] = useState<boolean>(false);

  if (!totalPrice) {
    return (
      <EmptyBlock
        title={isOrderComplete ? "Thanks for order!" : "Cart is Empty"}
      />
    );
  }

  return (
    <section>
      <Container maxWidth={"lg"}>
        <ProductCartPageTitle
          variant={isSm ? "accent4" : "accent3"}
          component="h2"
        >
          Your shopping cart
        </ProductCartPageTitle>
        <div style={{ marginBottom: "28px" }}>
          {isSm && (
            <ProductsTable>
              <p>Products</p>
              <p style={{ textAlign: "right" }}>Quantity</p>
              <p style={{ textAlign: "right" }}>Total</p>
            </ProductsTable>
          )}
          <ProductsListItem>
            {items.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ProductsListItem>
        </div>
        <ProductCardBottomChekout>
          <CartCheckout setOrderIsComplete={setOrderIsComplete} />
        </ProductCardBottomChekout>
      </Container>
    </section>
  );
};

export default CartBox;
