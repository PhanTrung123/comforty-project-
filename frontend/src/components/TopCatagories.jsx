import React, { useRef } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import SliderSpecial from "../common/SliderSpecial";

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Wing Chair",
      image: "/image/product5.jpg",
      quantity: "3,584 Products",
    },
    {
      id: 2,
      name: "Wooden Chair",
      image: "/image/product6.jpg",
      quantity: "157 Products",
    },
    {
      id: 3,
      name: "Desk Chair",
      image: "/image/product7.png",
      quantity: "154 Products",
    },
    {
      id: 4,
      name: "Park Bench",
      image: "/image/product8.jpg",
      quantity: "154 Products",
    },
    {
      id: 5,
      name: "Arm Chair",
      image: "/image/product9.jpg",
      quantity: "200 Products",
    },
    {
      id: 6,
      name: "Lounge Chair",
      image: "/image/product1.jpg",
      quantity: "120 Products",
    },
    {
      id: 7,
      name: "Rocking Chair",
      image: "/image/product2.jpg",
      quantity: "80 Products",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative pb-8">
      <div className="flex items-center justify-between py-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800">Top Categories</h3>
        <div className="flex items-center gap-3">
          <button
            ref={prevRef}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            <FaArrowLeftLong />
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <div className="w-full">
        <SliderSpecial
          products={categories}
          prevRef={prevRef}
          nextRef={nextRef}
        />
      </div>
    </section>
  );
};

export default TopCategories;
