import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      subtitle: "WELCOME TO CHAIREY",
      title: "Best Furniture Collection For Your Interior.",
      image: "/Product Image.png",
      discount: 54,
    },
    {
      id: 2,
      subtitle: "MODERN DESIGN",
      title: "Timeless Wooden Collections That Inspire Warmth.",
      image: "/image/product1.jpg",
      discount: 40,
    },
    {
      id: 3,
      subtitle: "LUXURY COMFORT",
      title: "Minimalist Sofas With Maximum Comfort.",
      image: "/image/product2.jpg",
      discount: 45,
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
    <section className="relative !h-auto min-h-[700px] md:min-h-[850px] w-full flex items-center bg-[#F0F2F3] overflow-hidden rounded-b-[48px]">
      <div className="absolute right-[5%] top-[5%] -translate-y-[40%] w-[750px] h-[750px] bg-[#E1E3E5] rounded-full z-10"></div>
      <div className="relative z-20 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          speed={800}
          className="relative"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col-reverse md:flex-row items-center justify-betweenmx-4 sm:mx-6 md:mx-8 lg:mx-10 gap-8 md:gap-6 lg:gap-10">
                <div className="w-full md:w-[631px] flex flex-col justify-center text-left">
                  <h2 className="font-normal text-[14px] leading-[100%] tracking-[0.12em] uppercase text-[#272343] mb-3">
                    {slide.subtitle}
                  </h2>
                  <p className="text-[#272343] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[68px] font-bold leading-[110%] mb-8 max-w-[90%]">
                    {slide.title}
                  </p>
                  <button className="bg-[#029FAE] text-white text-[16px] flex items-center gap-3 px-6 py-3 rounded-[8px] hover:bg-teal-600 transition-all duration-300 shadow-md w-fit">
                    Shop Now
                    <img
                      src="/image/Right 24px.png"
                      alt="arrow"
                      className="w-5 h-5 object-contain"
                    />
                  </button>
                </div>
                <div className="relative w-full md:w-[747px] flex items-center justify-center">
                  <div
                    className="
                      w-full 
                      max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[520px] 
                      aspect-[520/694] 
                      overflow-hidden flex items-center justify-center 
                      rounded-2xl
                    "
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="
                        w-full h-full 
                        object-cover 
                        transition-transform duration-500 
                        relative z-20
                      "
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="absolute top-[10%] right-[15%] bg-white rounded-full w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex flex-col items-center justify-center text-center shadow-md z-30 p-2">
                    <span className="text-base sm:text-lg md:text-xl font-bold text-[#EA3F3F]">
                      {slide.discount}%
                    </span>
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-600">
                      Discount
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center mt-3 md:mt-4 lg:mt-2"></div>
        <div className="max-w-[1564px]">
          <button
            ref={prevRef}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-100 shadow transition-all"
          >
            <FaArrowLeft className="text-[#029FAE]" />
          </button>

          <button
            ref={nextRef}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-100 shadow transition-all"
          >
            <FaArrowRight className="text-[#029FAE]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
