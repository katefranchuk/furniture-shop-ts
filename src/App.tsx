import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Cart from "./pages/Cart";
import FavouritesPage from "./pages/FavouritesPage";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="info/:id" element={<ProductInfo />} />
          <Route path="favorites" element={<FavouritesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
