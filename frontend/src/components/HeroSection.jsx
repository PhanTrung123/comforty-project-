import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = ({ slides }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const hasData = slides && (slides.items?.length > 0 || slides.length > 0);
  const slideItems = slides?.items || slides || [];

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
    <section className="relative md:mt-0 !h-auto min-h-[700px] lg:min-h-[850px] md:min-h-[650px] w-full flex items-center bg-[#F0F2F3] overflow-hidden rounded-b-[12px] lg:rounded-b-[48px] pt-[20%] md:pt-0">
      <div className="absolute right-[5%] top-[5%] -translate-y-[30%] w-[747px] h-[747px] bg-[#E1E3E5] rounded-full z-10"></div>
      <div className="relative z-20 w-full max-w-[1564px] mx-auto px-4 sm:px-6 lg:px-10">
        {hasData ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
              clickable: true,
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            // autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={30}
            slidesPerView={1}
            speed={800}
            className="relative"
          >
            {slideItems.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex 2xl:max-w-[1320px]  flex-col-reverse md:flex-row items-center lg:mx-auto lg:px-10 xl:px-20 2xl:px-0 justify-between mx-4 sm:mx-6 md:mx-8 2xl:mx-10 gap-8 md:gap-6 2xl:gap-10">
                  <div className="w-full xl:max-w-[631px]  flex flex-col justify-center text-left">
                    <h2 className="font-normal text-[14px] leading-[100%] tracking-[0.12em] uppercase text-[#272343] mb-3">
                      {slide.subtitle}
                    </h2>
                    <p className="text-[#272343] font-bold text-[28px] sm:text-[36px] md:text-[40px] lg:text-[54px] xl:text-[68px] leading-[110%] tracking-[0em] capitalize mb-8 !max-w-[631px] md:h-[225px]  ">
                      {slide.title}
                    </p>
                    <button className="bg-[#029FAE] text-white text-[16px] flex items-center gap-3 px-6 py-3 rounded-[8px] hover:bg-teal-600 transition-all duration-300 shadow-md w-fit mb-[10%] md:mb-[0%] md:-mt-[25%] lg:-mt-0">
                      {slide.buttonText}
                      <img
                        src="/icons/Right.png"
                        alt="arrow"
                        className="w-5 h-5 object-contain"
                      />
                    </button>
                  </div>

                  <div className="relative w-full md:w-[747px] flex items-center justify-center transition-transform duration-300 md:translate-x-0  xl:translate-x-0 2xl:translate-x-40">
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
                        alt={slide.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 relative z-20"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="absolute top-[0%] right-[6%] bg-white rounded-full w-20 h-20 sm:w-18 sm:h-18 lg:w-[140px] lg:h-[124px] flex flex-col items-center justify-center text-center shadow-md z-30 p-2">
                      <span className="text-base lg:text-lg lg:text-[36px] font-bold text-[#F05C52]   leading-[110%] text-center capitalize">
                        {slide.discount}%
                      </span>
                      <span className="text-[9px] sm:text-[10px] lg:text-[14px] text-[#272343]">
                        Discount
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="w-full text-center py-20 text-gray-500 text-[16px] font-medium">
            Hiện chưa có slide nào để hiển thị.
          </div>
        )}

        <button
          ref={prevRef}
          className="hidden w-[52px] h-[52px] xl:left-[3%] 2xl:left-[0%] lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 items-center justify-center rounded-full bg-white hover:bg-gray-100 shadow transition-all"
        >
          <FaArrowLeft className="text-[#029FAE]" />
        </button>

        <button
          ref={nextRef}
          className="hidden w-[52px] h-[52px] xl:right-[3%] 2xl:right-[0%] lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 items-center justify-center rounded-full bg-white hover:bg-gray-100 shadow transition-all"
        >
          <FaArrowRight className="text-[#029FAE]" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
