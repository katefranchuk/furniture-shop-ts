import { FC } from "react";
import AboutUs from "../components/about-us/AboutUs";
import Features from "../components/features/Features";
import PopularProducts from "../components/popular-products/PopularProducts";
import Preview from "../components/preview/Preview";
import Products from "../components/products/Products";
import Subscription from "../components/subscription/Subscription";

const Home: FC = () => {
  return (
    <>
      <Preview />
      <Features />
      <Products />
      <PopularProducts />
      <Subscription />
      <AboutUs />
    </>
  );
};

export default Home;
