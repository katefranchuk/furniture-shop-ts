import React, { FC } from "react";
import OrderForm from "../../components/order-form/OrderForm";
import CloseButton from "../close-button/CloseButton";
import { OrderWindow, OrderWindowDivider } from "./OrderModalWindow.styled";

interface OrderModalWindowProps {
  toggle: () => void;
  setOrderIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderModalWindow: FC<OrderModalWindowProps> = ({
  toggle,
  setOrderIsComplete,
}) => {
  return (
    <OrderWindowDivider>
      <OrderWindow>
        <CloseButton onClick={toggle} />
        <OrderForm setOrderIsComplete={setOrderIsComplete} />
      </OrderWindow>
    </OrderWindowDivider>
  );
};

export default OrderModalWindow;
