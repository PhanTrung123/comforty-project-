import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SliderSpecial = ({ products = [], prevRef, nextRef }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!swiperRef.current) return;
  }, []);

  return (
    <Swiper
      modules={[Navigation]}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      slidesPerView={1}
      navigation={{
        prevEl: prevRef?.current,
        nextEl: nextRef?.current,
      }}
      onBeforeInit={(swiper) => {
        if (typeof swiper.params.navigation !== "boolean") {
          swiper.params.navigation.prevEl = prevRef?.current;
          swiper.params.navigation.nextEl = nextRef?.current;
        }
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      centeredSlides={true}
      loop={true}
      spaceBetween={20}
      className="w-full py-6"
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
    >
      {products.map((item, index) => {
        const total = products.length;
        let diff = Math.abs(activeIndex - index);
        diff = Math.min(diff, total - diff);

        let opacity = 1;
        let scale = 1;

        if (diff === 0) {
          opacity = 1;
          scale = 1;
        } else if (diff === 1) {
          opacity = 1;
          scale = 0.92;
        } else if (diff === 2) {
          opacity = 0.8;
          scale = 0.88;
        } else {
          opacity = 0.6;
          scale = 0.84;
        }

        return (
          <SwiperSlide key={item.id}>
            <div
              className="rounded-xl overflow-hidden shadow-md cursor-pointer transition-all duration-500"
              style={{
                transform: `scale(${scale})`,
                opacity: opacity,
              }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[300px] md:h-[320px] object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-3 md:p-4">
                  <h4 className="font-semibold !text-white text-base md:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-xs md:text-sm">{item.quantity}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderSpecial;
