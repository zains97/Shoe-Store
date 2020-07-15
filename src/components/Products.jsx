import React from "react";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h3> Products</h3>
      <Outlet />
    </div>
  );
};

export default Products;
