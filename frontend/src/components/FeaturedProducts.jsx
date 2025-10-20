import React from "react";
import Products from "../common/Products";

const FeaturedProducts = () => {
  const featuredList = [
    {
      id: 1,
      name: "Modern Chair",
      price: "$25",
      oldPrice: "$40",
      image: "/image/product1.jpg",
      status: "Sale",
      tagColor: "bg-red-500",
    },
    {
      id: 2,
      name: "Office Chair Pro",
      price: "$35",
      image: "/image/product2.jpg",
      status: "New",
      tagColor: "bg-teal-500",
    },
    {
      id: 3,
      name: "Wooden Armchair",
      price: "$30",
      image: "/image/product3.jpg",
    },
    {
      id: 4,
      name: "Lounge Chair",
      price: "$45",
      oldPrice: "$60",
      image: "/image/product4.jpg",
      status: "Hot",
      tagColor: "bg-yellow-500",
    },
    {
      id: 5,
      name: "Classic Rocking Chair",
      price: "$50",
      image: "/image/product5.jpg",
    },
    {
      id: 6,
      name: "Minimalist Desk Chair",
      price: "$38",
      oldPrice: "$50",
      image: "/image/product6.jpg",
      status: "Sale",
      tagColor: "bg-red-500",
    },
    {
      id: 7,
      name: "Velvet Armchair",
      price: "$70",
      image: "/image/product7.jpg",
      status: "New",
      tagColor: "bg-teal-500",
    },
    {
      id: 8,
      name: "Elegant Lounge",
      price: "$60",
      oldPrice: "$75",
      image: "/image/product8.jpg",
      status: "Hot",
      tagColor: "bg-yellow-500",
    },
  ];

  return (
    <Products
      title="Featured Products"
      products={featuredList}
      itemsPage={4}
      gridCols="md:grid-cols-4"
      showPagination={true}
    />
  );
};

export default FeaturedProducts;
