import React, { FC } from "react";
import { IProduct } from "../../interface/iproduct.interface";
import ControlBtn from "../../ui/controls-btn/ControlBtn";
import {
  OrderSummaryCard,
  OrderSummaryCardBottom,
  OrderSummaryContent,
  OrderSummaryInner,
} from "./OrderSummaryStyled";

interface IOrderSummaryItemProps {
  product: IProduct;
}

const OrderSummaryItem: FC<IOrderSummaryItemProps> = ({ product }) => {
  return (
    <OrderSummaryCard>
      <OrderSummaryInner>
        <div>
          <img
            src={product.image}
            alt="product"
            style={{ height: "90px", width: "90px" }}
          />
        </div>
        <OrderSummaryContent>
          <h3>{product.title}</h3>
          <OrderSummaryCardBottom>
            <span>{product.price}</span>
            <ControlBtn
              count={product.count}
              productId={product.id}
              onPlus={() => product.id}
              onMinus={() => product.id}
            />
          </OrderSummaryCardBottom>
        </OrderSummaryContent>
      </OrderSummaryInner>
    </OrderSummaryCard>
  );
};

export default OrderSummaryItem;
