import React, { useRef } from "react";
import ProductsSlider from "../common/ProductsSlider";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const FeaturedProducts = ({ products }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const hasData =
    products && (products.items?.length > 0 || products.length > 0);

  return (
    <section className="mt-[80px]">
      <div className="flex items-center justify-between mb-[40px]">
        <h3 className="text-[18px] xs:text-[20px] sm:text-[24px] lg:text-[32px] font-semibold text-[#272343] leading-[110%] truncate">
          Featured Products
        </h3>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            ref={prevRef}
            className="w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            <FaArrowLeftLong className="text-[14px] sm:text-[16px]" />
          </button>
          <button
            ref={nextRef}
            className="w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            <FaArrowRightLong className="text-[14px] sm:text-[16px]" />
          </button>
        </div>
      </div>

      {hasData ? (
        <ProductsSlider
          products={products.items || products}
          prevRef={prevRef}
          nextRef={nextRef}
          extraMt={48}
          disableTitleMt={true}
        />
      ) : (
        <div className="w-full text-center py-10 text-gray-500  ">
          Không có dữ liệu sản phẩm nổi bật để hiển thị.
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
