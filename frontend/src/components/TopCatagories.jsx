import React, { useState } from "react";
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

  const itemsPage = 5;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };
  const visibleSlides = Array.from(
    { length: itemsPage },
    (_, i) => categories[(currentIndex + i) % categories.length]
  );

  return (
    <section className="relative pb-8">
      <div className="flex items-center justify-between py-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800">Top Categories</h3>
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <div className="w-full flex items-center justify-center space-x-4 overflow-hidden relative">
        {visibleSlides.map((item, index) => {
          let scale = "scale-90";
          let opacity = "opacity-40";

          if (index === 1 || index === 3 || index === 2) {
            scale = "scale-100";
            opacity = "opacity-100";
          }

          return (
            <div
              key={item.id}
              className={`relative cursor-pointer group transition-all duration-500 ${scale} ${opacity} w-[220px] flex-shrink-0`}
            >
              <div className="w-full h-[300px] overflow-hidden rounded-lg flex items-center justify-center bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute text-left bottom-0 w-full bg-black/70 text-white p-2 text-sm rounded-b-lg">
                <h3 className="!text-white font-semibold">{item.name}</h3>
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
