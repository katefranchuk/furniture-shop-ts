import React, { FC } from "react";
import { IProduct } from "../../interface/iproduct.interface";
import ControlBtn from "../../ui/controls-btn/ControlBtn";
import {
  OrderSummaryCardBottom,
  OrderSummaryContent,
  OrderSummaryInner,
} from "./OrderSummaryStyled";

interface IOrderSummaryItemProps {
  product: IProduct;
}

const OrderSummaryItem: FC<IOrderSummaryItemProps> = ({ product }) => {
  return (
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
          <p>£{product.price}</p>
          <ControlBtn
            count={product.count}
            productId={product.id}
            onPlus={() => product.id}
            onMinus={() => product.id}
          />
        </OrderSummaryCardBottom>
      </OrderSummaryContent>
    </OrderSummaryInner>
  );
};

export default OrderSummaryItem;
