import React from "react";
import { FaBox, FaTruck, FaClock, FaShieldAlt } from "react-icons/fa";

const Feature = () => {
  return (
    <section className="z-20 relative left-1/2 -translate-x-1/2 bottom-16 max-w-[1320px]">
      <div className="w-full flex justify-between items-center h-36 bg-white rounded-[12px] shadow-md px-10">
        <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
          <span className="text-3xl">
            <FaBox />
          </span>
          <div className="text-left">
            <h3 className="font-semibold !text-black text-lg">Discount</h3>
            <p className="text-gray-500 text-sm">Every week new sales</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
          <span className="text-3xl">
            <FaTruck />
          </span>
          <div className="text-left">
            <h3 className="font-semibold !text-black text-lg">Free Delivery</h3>
            <p className="text-gray-500 text-sm">100% Free for all orders</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
          <span className="text-3xl">
            <FaClock />
          </span>
          <div className="text-left">
            <h3 className="font-semibold !text-black text-lg">
              Great Support 24/7
            </h3>
            <p className="text-gray-500 text-sm">We care your experiences</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
          <span className="text-3xl">
            <FaShieldAlt />
          </span>
          <div className="text-left">
            <h3 className="font-semibold !text-black text-lg">
              Secure Payment
            </h3>
            <p className="text-gray-500 text-sm">100% Secure Payment Method</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
