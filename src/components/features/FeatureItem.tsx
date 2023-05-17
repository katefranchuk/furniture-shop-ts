import { FC } from "react";
import { FeatureItemStyled, FeatureItemTitle } from "./Feature.styled";

interface IFeatureItems {
  data: {
    id: number;
    title: string;
    icon: JSX.Element;
    text: string;
  };
}

const FeatureItem: FC<IFeatureItems> = ({ data }) => {
  return (
    <FeatureItemStyled>
      {data.icon}
      <FeatureItemTitle component="h3" variant="accent5">
        {data.title}
      </FeatureItemTitle>
      <p>{data.text}</p>
    </FeatureItemStyled>
  );
};

export default FeatureItem;
