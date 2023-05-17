import React, { FC } from "react";
import OrderForm from "../../components/order-form/OrderForm";
import CloseButton from "../close-button/CloseButton";
import { OrderWindow, OrderWindowDivider } from "./OrderModalWindow.styled";

interface OrderModalWindowProps {
  toggle: () => void;
  isActive: boolean;
}

const OrderModalWindow: FC<OrderModalWindowProps> = ({ toggle, isActive }) => {
  return (
    <OrderWindowDivider>
      <OrderWindow>
        <CloseButton onClick={toggle} />
        <OrderForm toggle={toggle} isActive={isActive} />
      </OrderWindow>
    </OrderWindowDivider>
  );
};

export default OrderModalWindow;
