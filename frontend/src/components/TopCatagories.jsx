import React from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

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
  ];

  return (
    <section className="relative pb-8">
      <div className="flex items-center justify-between py-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800">Top Categories</h3>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300">
            <FaArrowLeftLong />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center space-x-4 overflow-hidden">
        {categories.map((item, index) => {
          const isCenter = index >= 1 && index <= 3;
          const sideStyle = !isCenter
            ? "scale-90 opacity-40"
            : "scale-100 opacity-100";

          return (
            <div
              key={item.id}
              className={`relative group transition-all duration-500 ${sideStyle} w-[220px]`}
            >
              <div className="w-full h-[300px] overflow-hidden rounded-lg flex items-center justify-center bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 w-full bg-black/70 text-white p-2 text-center text-sm rounded-b-lg">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="opacity-90">{item.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopCategories;
