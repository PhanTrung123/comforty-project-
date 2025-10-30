import React from "react";
import ProductsSlider from "../common/ProductsSlider";

const FeaturedProducts = ({ products }) => {
  const title = products.title || "Featured Products";
  return <ProductsSlider title={title} products={products.items || products} />;
};

export default FeaturedProducts;
