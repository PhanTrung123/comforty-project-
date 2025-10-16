import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: "Welcome to Chairy",
      desc: " Best Furniture Collection For Your Interior.",
      image: "/Product Image.png",
      discount: 54,
    },
    {
      id: 2,
      title: "Welcome to Chairy",
      desc: " Best Furniture Collection For Your Interior.",
      image: "/Product Image.png",
      discount: 54,
    },
    {
      id: 3,
      title: "Welcome to Chairy",
      desc: " Best Furniture Collection For Your Interior.",
      image: "/Product Image.png",
      discount: 54,
    },
  ];

  const totalSlides = slides.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full rounded-b-lg  h-[850px] bg-gradient-to-br from-[#f0f2f3] to-[#e1e3e6] flex items-center overflow-hidden">
      <div className="absolute  rounded-full bg-[#e1e3e6] opacity-70 w-[747px] h-[747px] -top-[196px] left-[804px] z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#e1e3e6]/70 to-[#f0f2f3]/70 z-10"></div>
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="w-full md:w-1/2 text-left">
          <p className="text-gray-500 text-sm uppercase tracking-wide mb-3">
            {slide.title}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight break-words">
            {slide.desc}
          </h1>
          <button className="!bg-[#029FAE] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg">
            Shop Now
            <span className="w-6 h-6 items-center flex ">
              <FaArrowRightLong />
            </span>
          </button>
        </div>

        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className="absolute !-left-12 z-20 flex items-center justify-center w-14 h-14 !rounded-full !bg-white shadow-md hover:shadow-lg !hover:bg-gray-100 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
        >
          <FaArrowLeftLong className="text-[#029FAE] text-xl" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentSlide === totalSlides - 1}
          className="absolute !-right-12 z-20 flex items-center justify-center w-14 h-14 !rounded-full !bg-white shadow-md hover:shadow-lg !hover:bg-gray-100 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
        >
          <FaArrowRightLong className="text-[#029FAE] text-xl" />
        </button>
        <div className="absolute rounded-full bg-[#e1e3e6] opacity-70 w-[747px] h-[747px] -top-[196px] left-[804px] z-0"></div>
        <div className="relative w-[350px] md:w-[400px]">
          <img
            src={slide.image}
            alt="Furniture Chair"
            className="w-full object-cover z-20"
          />
          <div className="absolute -top-6 right-0 bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-center shadow-lg z-30 p-1">
            <span className="text-2xl text-red-600 font-bold">
              {slide.discount}%
            </span>
            <span className="text-xs text-gray-600">Discount</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 w-full flex justify-center space-x-4 px-4 z-20">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide === index
                ? "bg-gray-800 scale-125"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
