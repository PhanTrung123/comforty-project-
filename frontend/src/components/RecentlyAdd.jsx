import React from "react";

import {
  FaArrowRightLong,
  FaArrowLeftLong,
  FaQuoteRight,
} from "react-icons/fa6";
import Products from "../common/Products";

const RecentlyAdd = () => {
  const recenlyAdd = [
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
      oldPrice: null,
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
  ];
  return (
    <section className="relative pb-8 ">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-800">Recently Added</h3>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300">
            <FaArrowLeftLong />
          </button>
          <button className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300">
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <Products products={recenlyAdd} />
    </section>
  );
};

export default RecentlyAdd;
