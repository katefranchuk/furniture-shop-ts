import { FC } from "react";
import { useAppDispatch } from "../../hooks/useActions";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "../../store/slices/cartSlice";
import { BsPlus } from "react-icons/bs";
import { HiMinusSm } from "react-icons/hi";
import {
  ControlButtonQuantity,
  ControlButtonStyled,
  ControlButtonsWrapper,
} from "./ControlButtons.styled";

interface IControlBtnProps {
  onPlus: (productId: string) => void;
  onMinus: (productId: string) => void;
  productId: string;
  count: number;
}

const ControlBtn: FC<IControlBtnProps> = ({
  onPlus,
  onMinus,
  productId,
  count,
}) => {
  const dispatch = useAppDispatch();

  const handlePlus = () => {
    dispatch(increaseItemQuantity(productId));
    onPlus(productId);
  };

  const handleMinus = () => {
    dispatch(decreaseItemQuantity(productId));
    onMinus(productId);
    if (count <= 1) {
      dispatch(removeItem(productId));
    }
  };

  return (
    <ControlButtonsWrapper>
      <ControlButtonStyled onClick={handlePlus}>
        <BsPlus />
      </ControlButtonStyled>
      <ControlButtonQuantity component="span" variant="text3">
        {count}
      </ControlButtonQuantity>
      <ControlButtonStyled onClick={handleMinus}>
        <HiMinusSm />
      </ControlButtonStyled>
    </ControlButtonsWrapper>
  );
};

export default ControlBtn;
