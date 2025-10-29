import React from "react";
import ProductsSlider from "../common/ProductsSlider";

const FeaturedProducts = () => {
  const featuredList = [
    {
      id: 1,
      name: "Modern Chair",
      price: "$25",
      oldPrice: "$40",
      image: "/image/Product_01.jpg",
      status: "New",
      tagColor: "bg-[#01AD5A]",
    },
    {
      id: 2,
      name: "Office Chair Pro",
      price: "$35",
      image: "/image/Product_02.jpg",
      status: "Sale",
      tagColor: "bg-[#F5813F]",
    },
    {
      id: 3,
      name: "Wooden Armchair",
      price: "$30",
      image: "/image/Product_03.jpg",
    },
    {
      id: 4,
      name: "Lounge Chair",
      price: "$45",
      oldPrice: "$60",
      image: "/image/Product_04.jpg",
    },
    {
      id: 5,
      name: "Classic Rocking Chair",
      price: "$50",
      image: "/image/Product_05.jpg",
    },
    {
      id: 6,
      name: "Minimalist Desk Chair",
      price: "$38",
      oldPrice: "$50",
      image: "/image/Product_06.jpg",
      status: "Sale",
      tagColor: "bg-[#F5813F]",
    },
    {
      id: 7,
      name: "Velvet Armchair",
      price: "$70",
      image: "/image/Product_07.jpg",
      status: "New",
      tagColor: "bg-[#01AD5A]",
    },
    {
      id: 8,
      name: "Elegant Lounge",
      price: "$60",
      oldPrice: "$75",
      image: "/image/Product_08.jpg",
    },
  ];

  return <ProductsSlider title="Featured Products" products={featuredList} />;
};

export default FeaturedProducts;
