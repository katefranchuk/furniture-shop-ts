import React, { FC } from "react";
import OrderForm from "../../components/order-form/OrderForm";
import { OrderWindow, OrderWindowDivider } from "./OrderModalWindow.styled";

interface OrderModalWindowProps {
  toggle: () => void;
  isActive: boolean;
}

const OrderModalWindow: FC<OrderModalWindowProps> = ({ toggle, isActive }) => {
  return (
    <OrderWindowDivider>
      <OrderWindow>
        <OrderForm toggle={toggle} isActive={isActive} />
      </OrderWindow>
    </OrderWindowDivider>
  );
};

export default OrderModalWindow;
