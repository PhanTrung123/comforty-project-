import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const CommentSlider = ({ comments, prevRef, nextRef }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef?.current && nextRef?.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [prevRef, nextRef]);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={24}
      slidesPerView={1}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      navigation={{
        prevEl: prevRef?.current,
        nextEl: nextRef?.current,
      }}
      breakpoints={{
        1024: { slidesPerView: 2, spaceBetween: 24 },
      }}
      className="pb-4"
    >
      {comments?.map((info) => (
        <SwiperSlide key={info.id}>
          <div className="relative bg-white md:h-[345px] w-full lg:max-w-[648px] rounded-xl border border-gray-200 transition-all duration-300 p-6 md:p-10 sm:pt-10 sm:px-10 flex flex-col overflow-hidden">
            <img
              src="/icons/Double_quotes_right_01.png"
              alt="quote"
              className="absolute bottom-0 xs:bottom-6 sm:bottom-4 md:bottom-0 right-6 w-[100px] h-[100px] md:w-[140px] md:h-[140px] xl:w-[163px] xl:h-[163px] object-contain select-none pointer-events-none"
            />

            <div className="relative z-10 lg:max-w-[568px] flex-1">
              <div className="border-l-[3px] border-[#029FAE] pl-6 ">
                <p className="text-[#636270] text-[14px] md:text-[18px] lg:text-[20px] font-normal leading-[150%] line-clamp-6">
                  {info.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 relative z-10 mt-[25px]">
              <img
                src={info.avatar}
                alt={info.name}
                className="w-14 h-14 sm:w-15 sm:h-15 rounded-full object-cover border border-gray-200 shadow"
              />
              <div>
                <h4 className="text-[#272343] font-semibold text-[18px] lg:text-[20px] leading-[130%] capitalize">
                  {info.name}
                </h4>
                <p className="text-[14px] lg:text-[16px] font-normal text-[#9A9CAA] mt-1">
                  {info.position}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CommentSlider;
