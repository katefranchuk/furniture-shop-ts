import React, { FC } from "react";
import { useAppSelector } from "../../hooks/useActions";
import { selectCart } from "../../store/slices/cartSlice";
import OrderSummaryItem from "./OrderSummaryItem";
import { OrderSummaryBlock, OrderSummaryCard } from "./OrderSummaryStyled";

const OrderSummary: FC = () => {
  const { items, totalPrice } = useAppSelector(selectCart);

  return (
    <OrderSummaryBlock>
      <h3>Order Summary</h3>
      <OrderSummaryCard>
        {items.map((product) => (
          <OrderSummaryItem key={product.id} product={product} />
        ))}
      </OrderSummaryCard>
      <span>Total price £{totalPrice.toFixed(2)}</span>
    </OrderSummaryBlock>
  );
};

export default OrderSummary;
