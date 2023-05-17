import { FC } from "react";
import { EmptyBlockStyled, EmptyBlockTitle } from "./EmptyBlock.styled";

interface IEmptyBlock {
  title: string;
}

const EmptyBlock: FC<IEmptyBlock> = ({ title }) => {
  return (
    <EmptyBlockStyled>
      <EmptyBlockTitle component="h2" variant="accent3">
        {title}
      </EmptyBlockTitle>
    </EmptyBlockStyled>
  );
};

export default EmptyBlock;
