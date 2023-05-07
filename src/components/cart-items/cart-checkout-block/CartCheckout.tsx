import { FC } from "react";
import { useAppSelector } from "../../../hooks/useActions";
import { useActive } from "../../../hooks/useActive";
import { selectCart } from "../../../store/slices/cartSlice";
import ButtonGray from "../../../ui/button-gray/ButtonGray";
import OrderModalWindow from "../../../ui/order-modal-window/OrderModalWindow";
import {
  CartCheckoutBlock,
  CartCheckoutText,
  CartCheckoutTextSmall,
  CartCheckoutTotal,
  CartCheckoutTotalNumber,
} from "./CartCheckoutBlock.styed";

const CartCheckout: FC = () => {
  const { totalPrice } = useAppSelector(selectCart);
  const { isActive, toggle } = useActive();

  const onClickModal = () => {
    toggle();
    window.scrollTo(0, 0);
  };

  return (
    <CartCheckoutBlock>
      <CartCheckoutTotal>
        <CartCheckoutText variant="accent5" component="h4">
          Subtotal
        </CartCheckoutText>
        <CartCheckoutTotalNumber variant="accent3" component="span">
          £{Math.floor(totalPrice)}
        </CartCheckoutTotalNumber>
      </CartCheckoutTotal>
      <CartCheckoutTextSmall variant="text4" component="p">
        Taxes and shipping are calculated at checkout
      </CartCheckoutTextSmall>
      <ButtonGray
        children={"Go to chekout"}
        isBgDark
        isWhite
        onClick={onClickModal}
      />
      {isActive && <OrderModalWindow toggle={toggle} isActive={isActive} />}
    </CartCheckoutBlock>
  );
};

export default CartCheckout;
