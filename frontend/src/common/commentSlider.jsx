import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";

const CommentSlider = ({ comments, title }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="relative w-full py-16 bg-[#f7f8f9]">
      <div className="w-full max-w-[1280px] mx-auto">
        <div
          className="
    flex items-center justify-between 
    flex-nowrap
    gap-3 sm:gap-6 
    mb-10 
    text-left
  "
        >
          <h3
            className="
      text-[20px] sm:text-[28px] md:text-[32px] 
      font-semibold 
      capitalize 
      text-[#272343] 
      truncate
    "
          >
            {title}
          </h3>
          <div
            className="
      flex items-center gap-3 sm:gap-4 
      shrink-0
    "
          >
            <button
              ref={prevRef}
              className="
        w-9 h-9 sm:w-10 sm:h-10 
        flex items-center justify-center 
        rounded-full bg-white text-gray-700 
        shadow-sm border border-gray-200 
        hover:bg-[#029FAE] hover:text-white 
        transition-all duration-300
      "
            >
              <FaArrowLeftLong className="text-[14px] sm:text-[16px]" />
            </button>
            <button
              ref={nextRef}
              className="
        w-9 h-9 sm:w-10 sm:h-10 
        flex items-center justify-center 
        rounded-full bg-white text-gray-700 
        shadow-sm border border-gray-200 
        hover:bg-[#029FAE] hover:text-white 
        transition-all duration-300
      "
            >
              <FaArrowRightLong className="text-[14px] sm:text-[16px]" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 24 },
          }}
          className="pb-4"
        >
          {comments.map((info) => (
            <SwiperSlide key={info.id}>
              <div className="relative bg-white h-[340px] rounded-2xl border  border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
                <img
                  src="/image/double_quotes_r 1.png"
                  alt="quote"
                  className="absolute bottom-0 right-6 w-[80px] h-[80px] sm:w-[140px] sm:h-[140px]  object-contain select-none pointer-events-none"
                />

                <div className="relative z-10">
                  <div className="border-l-[3px] border-[#029FAE] pl-5">
                    <p className="text-[#636270] text-[18px] font-normal leading-[150%] line-clamp-6">
                      {info.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 relative z-10 mt-6">
                  <img
                    src={info.avatar}
                    alt={info.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-gray-200 shadow"
                  />
                  <div>
                    <h4 className="text-[#272343] font-semibold text-[18px] sm:text-[20px] leading-[130%] capitalize">
                      {info.name}
                    </h4>
                    <p className="text-[14px] sm:text-[16px] font-normal text-[#9A9CAA] mt-1">
                      {info.position}
                    </p>
                  </div>
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
