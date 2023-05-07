import React, { FC } from "react";
import { useAppSelector } from "../../hooks/useActions";
import { selectCart } from "../../store/slices/cartSlice";
import OrderSummaryItem from "./OrderSummaryItem";
import { OrderSummaryBlock } from "./OrderSummaryStyled";

const OrderSummary: FC = () => {
  const { items, totalPrice } = useAppSelector(selectCart);

  return (
    <OrderSummaryBlock>
      <h3>Order Summary</h3>
      {items.map((product) => (
        <OrderSummaryItem product={product} />
      ))}
      <span>Total price {totalPrice}</span>
    </OrderSummaryBlock>
  );
};

export default OrderSummary;
