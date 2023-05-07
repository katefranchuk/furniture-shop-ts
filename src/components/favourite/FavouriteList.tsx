import { Container } from "@mui/material";
import React, { FC } from "react";
import { useAppSelector } from "../../hooks/useActions";
import { selectLike } from "../../store/slices/favouritesSlice";
import EmptyBlock from "../../ui/empty-block/EmptyBlock";
import ProductItem from "../../ui/product-item/ProductItem";
import { ProductsListWrapper } from "../../ui/products-list/ProductList.styled";
import { useResponsive } from "../../utils/responsive/ResponsiveContext";
import { FavoriteListTitle } from "./FavouriteList.styled";

const FavouriteList: FC = () => {
  const { items } = useAppSelector(selectLike);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const { isSm } = useResponsive();

  if (!totalCount) {
    return <EmptyBlock children={"Wish list is empty"} />;
  }

  return (
    <Container maxWidth={"lg"}>
      <FavoriteListTitle variant={isSm ? "accent4" : "accent3"} component="h2">
        Wish List
      </FavoriteListTitle>
      <ProductsListWrapper>
        {items.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsListWrapper>
    </Container>
  );
};

export default FavouriteList;
