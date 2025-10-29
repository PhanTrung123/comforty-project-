import React, { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import SliderSpecial from "../common/SliderSpecial";

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Wing Chair",
      image: "/image/Product_05.jpg",
      quantity: "3,584 Products",
    },
    {
      id: 2,
      name: "Wooden Chair",
      image: "/image/Product_06.jpg",
      quantity: "157 Products",
    },
    {
      id: 3,
      name: "Desk Chair",
      image: "/image/Product_07.png",
      quantity: "154 Products",
    },
    {
      id: 4,
      name: "Park Bench",
      image: "/image/Product_08.jpg",
      quantity: "154 Products",
    },
    {
      id: 5,
      name: "Arm Chair",
      image: "/image/Product_09.jpg",
      quantity: "200 Products",
    },
    {
      id: 6,
      name: "Lounge Chair",
      image: "/image/Product_01.jpg",
      quantity: "120 Products",
    },
    {
      id: 7,
      name: "Rocking Chair",
      image: "/image/Product_02.jpg",
      quantity: "80 Products",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative ">
      <div className="max-w-[1320px] w-full mx-auto flex items-center justify-between mt-20 mb-10">
        <h3 className="text-[18px] xs:text-[20px] sm:text-[24px] lg:text-[32px] font-semibold text-[#272343] leading-[110%] truncate tracking-normal">
          Top Categories
        </h3>

        <div className="flex items-center gap-3">
          <button
            ref={prevRef}
            className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            <FaArrowLeftLong className="text-[16px]" />
          </button>
          <button
            ref={nextRef}
            className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            <FaArrowRightLong className="text-[16px]" />
          </button>
        </div>
      </div>

      <SliderSpecial
        products={categories}
        prevRef={prevRef}
        nextRef={nextRef}
      />
    </section>
  );
};

export default TopCategories;
