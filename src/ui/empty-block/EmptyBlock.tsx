import { FC } from "react";
import { EmptyBlockStyled } from "./EmptyBlock.styled";

interface IEmptyBlock {
  children: React.ReactNode;
}

const EmptyBlock: FC<IEmptyBlock> = ({ children }) => {
  return <EmptyBlockStyled>{children}</EmptyBlockStyled>;
};

export default EmptyBlock;
