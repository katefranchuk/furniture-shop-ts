import { Container } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import ButtonGray from "../../ui/button-gray/ButtonGray";
import {
  PopularProductsSection,
  PopularProductsWrapper,
  PopularProductTitleSection,
} from "./PopularProduct.styled";
import PopularProductItem from "./PopularProductItem";
import { popularProducts } from "./popularProductsData";

const PopularProducts: FC = () => {
  return (
    <PopularProductsSection>
      <Container maxWidth={"lg"}>
        <PopularProductTitleSection component="h2" variant="accent2">
          Our popular products
        </PopularProductTitleSection>
        <PopularProductsWrapper>
          {popularProducts.map((product) => (
            <PopularProductItem key={product.id} product={product} />
          ))}
        </PopularProductsWrapper>
        <div style={{ textAlign: "center" }}>
          <Link to={"products"}>
            <ButtonGray children={"View collection"} />
          </Link>
        </div>
      </Container>
    </PopularProductsSection>
  );
};

export default PopularProducts;
