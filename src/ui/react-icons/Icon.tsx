import { FC } from "react";
import { IconStyled } from "./Icon.styled";

interface IconsProps {
  children: React.ReactNode;
}

const Icon: FC<IconsProps> = ({ children }) => {
  return <IconStyled>{children}</IconStyled>;
};

export default Icon;
