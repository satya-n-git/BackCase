import React from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";

const Product = () => {
  return (
    <div>
      <h1>This is the Product you want to buy </h1>
      <Link to="/productDetails">PRODUCT</Link>
    </div>
  );
};

export default Product;
