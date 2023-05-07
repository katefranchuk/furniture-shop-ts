import React, { FC } from "react";
import { BtnElement } from "./ButtonGray.styled";

interface IButtonGray {
  children: React.ReactNode;
  onClick?: () => void;
  isWhite?: boolean;
  isBgDark?: boolean;
}

const ButtonGray: FC<IButtonGray> = ({
  children,
  onClick,
  isWhite = false,
  isBgDark = false,
}) => {
  return (
    <BtnElement onClick={onClick} isWhite={isWhite} isBgDark={isBgDark}>
      {children}
    </BtnElement>
  );
};

export default ButtonGray;
