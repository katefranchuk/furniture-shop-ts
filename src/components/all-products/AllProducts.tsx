import { FC, useEffect } from "react";
import ProductsList from "../../ui/products-list/ProductsList";
import { Container } from "@mui/material";
import {
  AllProductInner,
  AllProductsHeader,
  AllProductsSection,
  AllProductsSx,
  AllProductsTitle,
} from "./AllProducts.styled";
import AllProductsFilter from "./all-products-filter/AllProductsFilter";
import { useAppDispatch, useAppSelector } from "../../hooks/useActions";
import { selectProductData } from "../../store/slices/loadingProductsSlice";
import { apiProducts } from "../../store/api-products/apiProducts";

const AllProducts: FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector(selectProductData);

  useEffect(() => {
    dispatch(apiProducts([""]));
  }, [dispatch]);

  return (
    <AllProductsSection>
      <AllProductsHeader>
        <Container maxWidth={"lg"} style={{ marginTop: "auto" }}>
          <AllProductsTitle variant="accent3" component="h2">
            All products
          </AllProductsTitle>
        </Container>
      </AllProductsHeader>
      <Container maxWidth={"lg"}>
        <AllProductInner>
          <AllProductsFilter />
          {status === "loading" ? (
            <div>Loading</div>
          ) : (
            <ProductsList products={items} sx={AllProductsSx} />
          )}
        </AllProductInner>
      </Container>
    </AllProductsSection>
  );
};

export default AllProducts;
