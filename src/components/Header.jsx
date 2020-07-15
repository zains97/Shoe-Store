import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import NotFound from "./NotFound";
import ProductDetails from "./ProductDetails";
import ProductHome from "./ProductHome";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="products">Products</Link>
      {" | "}
      <Link to="about">About</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}>
          <Route path="/" element={<ProductHome />} />
          <Route path=":productID" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Header;
