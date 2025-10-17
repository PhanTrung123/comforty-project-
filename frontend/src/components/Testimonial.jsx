import React from "react";
import {
  FaArrowRightLong,
  FaArrowLeftLong,
  FaQuoteRight,
} from "react-icons/fa6";
import FeaturedProducts from "./FeaturedProducts";

const Testimonial = () => {
  const comments = [
    {
      id: 1,
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
      avatar: "/user1.png",
      name: "Kristin Watson",
      position: "Fashion Designer",
    },
    {
      id: 2,
      description:
        "Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum. ",
      avatar: "/user2.png",
      name: "Esther Howard",
      position: "Fashion Designer",
    },
  ];

  return (
    <section className="relative pb-8 ">
      <div className="relative w-full  py-12 bg-gradient-to-br from-[#f0f2f3] to-[#e1e3e6] overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-6 py-10 md:px-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-semibold text-gray-800">
              What client says about us
            </h3>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300">
                <FaArrowLeftLong />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300">
                <FaArrowRightLong />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comments.map((info) => (
              <div
                key={info.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between h-full"
              >
                <div className="border-l-3 border-[#029FAE] pl-6">
                  <p className="text-gray-600 text-[20px] leading-relaxed">
                    {info.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <img
                    src={info.avatar}
                    alt={info.name}
                    className="w-15 h-15 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-[18px]">
                      {info.name}
                    </h4>
                    <p className="text-sm text-gray-500">{info.position}</p>
                  </div>
                  <FaQuoteRight className="ml-auto text-6xl text-[#F0F2F3]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
