import React from "react";
import ProductsSlider from "../common/ProductsSlider";
import { recentlyAddedData } from "../../data/siteData";

const RecentlyAdd = () => {
  const { title, products, config } = recentlyAddedData;
  return <ProductsSlider title={title} products={products} {...config} />;
};

export default RecentlyAdd;
