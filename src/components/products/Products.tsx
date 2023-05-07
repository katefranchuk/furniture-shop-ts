import { Container } from "@mui/system";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../interface/iproduct.interface";
import ButtonGray from "../../ui/button-gray/ButtonGray";
import ProductsList from "../../ui/products-list/ProductsList";
import { ProductsSection, ProductsTitle } from "./Products.styled";

const Product: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch(`https://6420a00e82bea25f6d04a4a9.mockapi.io/products?page=1&limit=4`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ProductsSection>
      <Container maxWidth={"lg"}>
        <ProductsTitle variant="text1" component="h2">
          New ceramics
        </ProductsTitle>
        <ProductsList products={products} />
        <div style={{ textAlign: "center" }}>
          <Link to={"products"}>
            <ButtonGray children={"View collection"} />
          </Link>
        </div>
      </Container>
    </ProductsSection>
  );
};

export default Product;
