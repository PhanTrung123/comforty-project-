import React from "react";
import Products from "../common/Products";

const RecentlyAdd = () => {
  const recentlyAdd = [
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
      id: 4,
      name: "Lounge Chair",
      price: "$45",
      oldPrice: "$60",
      image: "/image/product5.jpg",
      status: "Hot",
      tagColor: "bg-yellow-500",
    },
    {
      id: 4,
      name: "Lounge Chair",
      price: "$45",
      oldPrice: "$60",
      image: "/image/product6.jpg",
      status: "Hot",
      tagColor: "bg-yellow-500",
    },
  ];

  return (
    <Products
      title="Recently Added"
      products={recentlyAdd}
      itemsPage={4}
      gridCols="md:grid-cols-4"
      showPagination={true}
    />
  );
};

export default RecentlyAdd;
