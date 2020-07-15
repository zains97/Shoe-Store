import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h3> Products</h3>
      <Outlet />
    </div>
  );
};

export default Products;
