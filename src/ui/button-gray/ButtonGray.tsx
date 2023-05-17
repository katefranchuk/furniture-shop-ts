import React, { FC } from "react";
import { BtnElement } from "./ButtonGray.styled";

interface IButtonGray {
  children: React.ReactNode;
  onClick?: () => void;
  isWhite?: boolean;
  isBgDark?: boolean;
  sx?: {};
}

const ButtonGray: FC<IButtonGray> = ({
  children,
  onClick,
  isWhite = false,
  isBgDark = false,
  sx,
}) => {
  return (
    <BtnElement onClick={onClick} isWhite={isWhite} isBgDark={isBgDark} sx={sx}>
      {children}
    </BtnElement>
  );
};

export default ButtonGray;
