import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  FaQuoteRight,
  FaArrowLeftLong,
  FaArrowRightLong,
} from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";

const CommentSlider = ({ comments, title }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current || !prevRef.current || !nextRef.current) return;

    const swiper = swiperRef.current;
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;

    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  }, []);

  return (
    <section className="relative w-full py-16 bg-gradient-to-br from-[#f0f2f3] to-[#e1e3e6]">
      <div className="w-full max-w-full sm:max-w-[1280px] mx-auto px-4 sm:px-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-semibold text-gray-800 text-center sm:text-left w-full sm:w-auto">
            {title}
          </h3>

          <div className="hidden md:flex gap-4">
            <button
              ref={prevRef}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#029FAE] hover:text-white transition-all duration-300"
            >
              <FaArrowLeftLong />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#029FAE] hover:text-white transition-all duration-300"
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={2}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
          className="pb-4"
        >
          {comments.map((info) => (
            <SwiperSlide key={info.id}>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 h-[300px] flex flex-col justify-between">
                <div className="border-l-4 border-[#029FAE] pl-6 overflow-hidden">
                  <p className="text-gray-600 text-[18px] leading-relaxed line-clamp-6">
                    {info.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-6 relative">
                  <img
                    src={info.avatar}
                    alt={info.name}
                    className="w-14 h-14 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-[18px]">
                      {info.name}
                    </h4>
                    <p className="text-sm text-gray-500">{info.position}</p>
                  </div>
                  <FaQuoteRight className="absolute right-4 text-5xl text-[#F0F2F3]" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CommentSlider;
