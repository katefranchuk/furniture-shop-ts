import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useActions";
import { postOrder } from "../../store/api-products/apiProducts";
import { clearItems, selectCart } from "../../store/slices/cartSlice";
import ButtonGray from "../../ui/button-gray/ButtonGray";
import Spinner from "../../ui/spinner/Spinner";
import OrderSummary from "../order-summary/OrderSummary";
import {
  OrderFormControll,
  OrderFormInner,
  OrderFormInput,
  OrderFormStyled,
} from "./OrderForm.styled";

interface OrderFormProps {
  toggle: () => void;
  isActive: boolean;
}

const OrderForm: FC<OrderFormProps> = ({ isActive, toggle }) => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectCart);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [orderId, setOrderID] = useState(null);
  const [isOrderComplete, setOrderIsComplete] = useState<boolean>(false);
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onClickOrder = async () => {
    if (mail !== "") {
      try {
        setIsLoading(true);
        await dispatch(
          postOrder({
            email: mail,
            name: name,
            orderedProducts: items,
          })
        );
        await delay(2000);
        setOrderIsComplete(true);
        dispatch(clearItems());
      } catch (error) {
        alert("Can't create the order, please try again later");
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <OrderFormStyled>
            <OrderFormInner>
              <OrderFormControll>
                <label>Email adress</label>
                <OrderFormInput
                  required
                  type="text"
                  placeholder="Email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </OrderFormControll>
              <OrderFormControll>
                <label>Name</label>
                <OrderFormInput
                  required
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </OrderFormControll>
              <ButtonGray isBgDark isWhite onClick={onClickOrder}>
                Order
              </ButtonGray>
            </OrderFormInner>
            <OrderSummary />
          </OrderFormStyled>
        </>
      )}
    </>
  );
};

export default OrderForm;
