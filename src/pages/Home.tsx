import { FC } from "react";
import AboutUs from "../components/about-us/AboutUs";
import Features from "../components/features/Features";
import PopularProducts from "../components/popular-products/PopularProducts";
import Preview from "../components/preview/Preview";
import Products from "../components/products/Products";
import Subscription from "../components/subscription/Subscription";
import { useResponsive } from "../utils/responsive/ResponsiveContext";

const Home: FC = () => {
  const { isSm } = useResponsive();

  return (
    <>
      <Preview />
      <Features />
      <Products />
      {isSm && <PopularProducts />}
      <Subscription />
      <AboutUs />
    </>
  );
};

export default Home;
