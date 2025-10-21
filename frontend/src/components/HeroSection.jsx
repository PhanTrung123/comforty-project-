import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

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

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  }, []);

  return (
    <section className="relative w-full bg-[#F0F2F3] overflow-hidden rounded-b-lg py-8 sm:py-12 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#e1e3e6]/70 to-[#f0f2f3]/70 z-10"></div>

      <div className="relative z-20 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          speed={800}
          className="relative"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 min-h-[450px] md:min-h-[550px]">
                <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                  <h2 className="text-gray-700 text-sm uppercase tracking-wide mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-[20px] sm:text-[26px] md:text-[34px] lg:text-[42px] font-bold text-gray-800 mb-5 leading-snug">
                    {slide.desc}
                  </p>
                  <button className="bg-[#029FAE] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-teal-600 transition-all duration-300 flex items-center gap-2 shadow-md w-fit">
                    Shop Now
                    <FaArrowRightLong />
                  </button>
                </div>

                <div className="relative w-full md:w-1/2 flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[80%] sm:w-[70%] md:w-[85%] object-contain rounded-lg"
                  />
                  <div className="absolute top-[8%] right-[10%] bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center text-center shadow-lg z-30 p-1">
                    <span className="text-lg sm:text-2xl text-red-600 font-bold">
                      {slide.discount}%
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-600">
                      Discount
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={prevRef}
          className="hidden lg:flex absolute -left-10 top-1/2 -translate-y-1/2 
          z-30 items-center justify-center w-12 h-12 rounded-full 
          bg-white shadow-md hover:bg-gray-100 hover:shadow-lg transition-all"
        >
          <FaArrowLeftLong className="text-[#029FAE]" />
        </button>

        <button
          ref={nextRef}
          className="hidden lg:flex absolute -right-10 top-1/2 -translate-y-1/2 
          z-30 items-center justify-center w-12 h-12 rounded-full 
          bg-white shadow-md hover:bg-gray-100 hover:shadow-lg transition-all"
        >
          <FaArrowRightLong className="text-[#029FAE]" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
