import React from "react";
import ProductsSlider from "../common/ProductsSlider";
import { featuredProduct } from "../../data/siteData";

const FeaturedProducts = () => {
  return (
    <ProductsSlider title={featuredProduct.title} products={featuredProduct} />
  );
};

export default FeaturedProducts;
