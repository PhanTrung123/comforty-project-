import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[850px] bg-gradient-to-br from-[#f0f2f3] to-[#e1e3e6] flex items-center overflow-hidden">
      <div className="absolute rounded-full bg-[#e1e3e6] opacity-70 w-[747px] h-[747px] -top-[196px] left-[804px] z-0"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#e1e3e6]/70 to-[#f0f2f3]/70 z-10"></div>

      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="w-full md:w-1/2 text-left">
          <p className="text-gray-500 text-sm uppercase tracking-wide mb-3">
            Welcome to Chairy
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight break-words">
            Best Furniture Collection For Your Interior.
          </h1>
          <button className="!bg-[#029FAE] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg">
            Shop Now
            <span className="w-6 h-6 items-center flex ">
              <FaArrowRightLong />
            </span>
          </button>
        </div>

        <div className="absolute rounded-full bg-[#e1e3e6] opacity-70 w-[747px] h-[747px] -top-[196px] left-[804px] z-0"></div>

        <div className="relative w-[350px] md:w-[400px]">
          <img
            src="/Product Image.png"
            alt="Furniture Chair"
            className="w-full object-cover z-20"
          />
          <div className="absolute -top-6 right-0 bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-center shadow-lg z-30 p-1">
            <span className="text-2xl text-red-600 font-bold">54%</span>
            <span className="text-xs text-gray-600">Discount</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 w-full max-w-[1280px] mx-auto flex justify-center space-x-6 px-4 z-20">
        <div className="flex items-center space-x-2 text-gray-600 text-sm">
          <span>📦</span>
          <span>Discount - Weekly new sales</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 text-sm">
          <span>🚚</span>
          <span>Free Delivery - 100% Free</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 text-sm">
          <span>⏰</span>
          <span>24/7 Support</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 text-sm">
          <span>🔒</span>
          <span>Secure Payment</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
