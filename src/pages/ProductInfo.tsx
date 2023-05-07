import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Features from "../components/features/Features";
import PopularProducts from "../components/popular-products/PopularProducts";
import ProductDetails from "../components/product-info/ProductDetails";
import { IProduct } from "../interface/iproduct.interface";
import Spinner from "../ui/spinner/Spinner";

const ProductInfo: FC = () => {
  const [details, setDetails] = useState<IProduct>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_DATA_URL}${id}`)
      .then(({ data }) => setDetails(data));
  }, [id]);

  if (!details) {
    return <Spinner />;
  }

  return (
    <>
      <ProductDetails details={details} />
      <PopularProducts />
      <Features />
    </>
  );
};

export default ProductInfo;
