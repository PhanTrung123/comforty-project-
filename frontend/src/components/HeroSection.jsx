import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { settings } from "../common/ProductsSlider";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: "Modern Comfort for Your Home",
      desc: "Discover elegant furniture designed to bring comfort and style to every room.",
      image: "/Product Image.png",
      discount: 30,
    },
    {
      id: 2,
      title: "Timeless Wooden Collections",
      desc: "Crafted from the finest wood, our pieces blend tradition with modern aesthetics.",
      image: "/image/product1.jpg",
      discount: 45,
    },
    {
      id: 3,
      title: "Luxury Meets Simplicity",
      desc: "Upgrade your living space with minimalist yet luxurious furniture pieces.",
      image: "/image/product2.jpg",
      discount: 50,
    },
  ];

  const sliderRef = useRef(null);

  const heroSettings = {
    ...settings,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="relative w-full bg-[#F0F2F3] overflow-hidden rounded-b-lg py-10 md:py-20 lg:py-28">
      <div className="absolute md:py-0 py-4 inset-0 bg-gradient-to-r from-[#e1e3e6]/70 to-[#f0f2f3]/70 z-10"></div>

      <div className="relative  z-20 py-4 w-full max-w-[1320px] mx-auto px-6 md:px-10">
        <Slider ref={sliderRef} {...heroSettings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <div
                className="flex flex-col-reverse md:flex-row items-center justify-between 
                gap-10 md:gap-10 lg:gap-14  min-h-[480px] md:min-h-[550px] lg:min-h-[600px]"
              >
                <div
                  className="w-full md:w-1/2 flex flex-col justify-center text-left 
                  pt-6 md:pt-0 md:pr-4 lg:pr-10"
                >
                  <p className="text-gray-700 text-xs sm:text-sm uppercase tracking-wide mb-2 sm:mb-3">
                    {slide.title}
                  </p>
                  <h1
                    className="text-[20px] sm:text-[26px] md:text-[34px] lg:text-[42px] xl:text-[48px] 
                    font-bold text-gray-800 mb-4 sm:mb-6 leading-snug md:leading-tight"
                  >
                    {slide.desc}
                  </h1>
                  <button
                    className="bg-[#029FAE] flex-1 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-teal-600 
                    transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg w-fit"
                  >
                    Shop Now
                    <FaArrowRightLong />
                  </button>
                </div>
                <div
                  className="relative w-full md:w-1/2 flex items-center justify-center 
                  md:pl-4 lg:pl-10"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[80%] sm:w-[70%] md:w-[90%] lg:w-[85%] object-contain rounded-lg"
                  />
                  <div
                    className="absolute top-[8%] right-[10%] bg-white rounded-full 
                    w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center 
                    text-center shadow-lg z-30 p-1"
                  >
                    <span className="text-lg sm:text-2xl text-red-600 font-bold">
                      {slide.discount}%
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-600">
                      Discount
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="hidden lg:flex absolute -left-14 xl:-left-14 top-1/2 -translate-y-1/2 
          z-20 items-center justify-center w-10 h-10 xl:w-14 xl:h-14 rounded-full 
          bg-white shadow-md hover:bg-gray-100 hover:shadow-lg transition-all"
        >
          <FaArrowLeftLong className="text-[#029FAE]" />
        </button>

        <button
          onClick={() => sliderRef.current.slickNext()}
          className="hidden lg:flex absolute -right-14 xl:-right-14 top-1/2 -translate-y-1/2 
          z-20 items-center justify-center w-10 h-10 xl:w-14 xl:h-14 rounded-full 
          bg-white shadow-md hover:bg-gray-100 hover:shadow-lg transition-all"
        >
          <FaArrowRightLong className="text-[#029FAE]" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
