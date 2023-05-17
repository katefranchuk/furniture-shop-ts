import { FC } from "react";
import { GrFormClose } from "react-icons/gr";
import { CloseButtonStyled } from "./CloseButton.styled";

interface ICloseButtonProps {
  onClick: () => void;
}

const CloseButton: FC<ICloseButtonProps> = ({ onClick }) => {
  return (
    <CloseButtonStyled onClick={onClick}>
      <GrFormClose />
    </CloseButtonStyled>
  );
};

export default CloseButton;
