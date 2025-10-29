import React from "react";
import ProductsSlider from "../common/ProductsSlider";

const RecentlyAdd = () => {
  const recentlyAdd = [
    {
      id: 1,
      name: "Modern Chair",
      price: "$25",
      oldPrice: "$40",
      image: "/image/Product_01.jpg",
      status: "New",
      tagColor: "bg-[#01ad5a]",
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
      id: 4,
      name: "Lounge Chair",
      price: "$45",
      oldPrice: "$60",
      image: "/image/Product_05.jpg",
    },
    {
      id: 4,
      name: "Lounge Chair",
      price: "$45",
      oldPrice: "$60",
      image: "/image/Product_06.jpg",
    },
  ];

  return (
    <ProductsSlider
      title="Recently Added"
      products={recentlyAdd}
      slidesToShow={4}
      gridCols="md:grid-cols-4"
      showPagination={true}
      extraMt={48}
      disableTitleMt={true}
      disableNavMt={true}
    />
  );
};

export default RecentlyAdd;
