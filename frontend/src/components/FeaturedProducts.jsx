import React, { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
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

  const itemsPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(featuredList.length / itemsPage);
  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  const start = currentPage * itemsPage;
  const visibleProducts = featuredList.slice(start, start + itemsPage);
  return (
    <section className="relative pb-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-800">Featured Products</h3>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <Products products={visibleProducts} />
    </section>
  );
};

export default FeaturedProducts;
