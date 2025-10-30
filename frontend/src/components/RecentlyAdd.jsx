import React from "react";
import ProductsSlider from "../common/ProductsSlider";

const RecentlyAdd = ({ data }) => {
  if (!data) return null;
  const { title, products, config } = data;

  return <ProductsSlider title={title} products={products} {...config} />;
};

export default RecentlyAdd;
