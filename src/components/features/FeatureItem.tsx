import React, { FC } from "react";

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
    <li style={{ textAlign: "left" }}>
      {data.icon}
      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </li>
  );
};

export default FeatureItem;
