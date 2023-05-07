import { FC } from "react";
import { LinkProps } from "react-router-dom";
import { ProductsLinkStyled, ProductsLinkTitle } from "./ProductsLink.styled";

interface IProductsLinkProps extends LinkProps {
  title: string;
  isTransparent?: boolean;
  isWhite?: boolean;
}

const ProductsLink: FC<IProductsLinkProps> = ({
  title,
  isTransparent = false,
  isWhite = false,
  ...linkProps
}) => {
  return (
    <ProductsLinkStyled
      {...linkProps}
      isTransparent={isTransparent}
      isWhite={isWhite}
    >
      <ProductsLinkTitle variant="text2" component="p">
        {title}
      </ProductsLinkTitle>
    </ProductsLinkStyled>
  );
};

export default ProductsLink;
