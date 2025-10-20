import React, { useRef } from "react";
import Slider from "react-slick";
import {
  FaQuoteRight,
  FaArrowLeftLong,
  FaArrowRightLong,
} from "react-icons/fa6";

const CommentSlider = ({ comments, title }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className=" relative w-full py-16 bg-gradient-to-br from-[#f0f2f3] to-[#e1e3e6]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-semibold text-gray-800">{title}</h3>

          <div className="flex gap-4">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              <FaArrowLeftLong />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {comments.map((info) => (
            <div key={info.id} className="px-3">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 h-[300px] flex flex-col justify-between">
                {/* Nội dung bình luận */}
                <div className="border-l-4 border-[#029FAE] pl-6 overflow-hidden">
                  <p className="text-gray-600 text-[18px] leading-relaxed line-clamp-6">
                    {info.description}
                  </p>
                </div>

                {/* Thông tin người bình luận */}
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
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CommentSlider;
