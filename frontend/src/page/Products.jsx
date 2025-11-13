import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../common/Footer";
import Copyright from "../common/Copyright";
import { useCart } from "../context/CartContext";
import { FiList, FiShoppingCart } from "react-icons/fi";
import { FaPlay, FaChevronDown } from "react-icons/fa";
// import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { categories, featuredProducts } from "../../../database/data/siteData";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const Products = () => {
  const { addToCart } = useCart();
  const [activeFilter, setActiveFilter] = useState("Popular");
  const [priceSort, setPriceSort] = useState("");
  const [filterProduct, setFilterProduct] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  // const [currentPage, setCurrentPage] = useState(1);

  // const itemsPerPage = 10;
  // const indexLastItem = currentPage * itemsPerPage;
  // const indexFirstItem = indexLastItem - itemsPerPage;

  const categoryList = ["Table", "Chair", "Bed", "Wardrobe", "Shelf"];

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromQuery = params.get("category");

    if (categoryFromQuery) {
      const key = categoryFromQuery.toLowerCase();
      if (categories[key]) {
        setSelectedCategoryId(categories[key].id);
      }
    }
  }, [location.search]);

  useEffect(() => {
    let products = [...featuredProducts.items];
    if (activeFilter === "New") {
      products = products.filter((p) => p.status === "New");
    } else if (activeFilter === "Sale") {
      products = products.filter((p) => p.status === "Sale");
    } else {
      products = [...featuredProducts.items];
    }
    if (selectedCategoryId) {
      products = products.filter((p) => p.categoryId === selectedCategoryId);
    }
    if (priceSort) {
      products = [...products].sort((a, b) => {
        const priceA = parseFloat(a.price.slice(1).replace(/,/g, ""));
        const priceB = parseFloat(b.price.slice(1).replace(/,/g, ""));
        return priceSort === "lowToHigh" ? priceA - priceB : priceB - priceA;
      });
    }
    setFilterProduct(products);
  }, [activeFilter, priceSort, selectedCategoryId]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="w-full border-b border-b-[#e1e3e6]">
        <Navigation data={{}} />
      </header>

      <div className="w-full py-8 max-lg:py-4">
        <div className="max-w-[1320px] mx-auto flex flex-row items-start gap-[60px] px-4">
          <div className="w-[20%] max-lg:hidden bg-white border border-gray-200 rounded-xl shadow p-[20px]">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-[12px] mb-[16px]">
              <FiList className="text-[22px]" />
              <button
                onClick={() => {
                  setSelectedCategoryId(null);
                  setActiveFilter("Popular");
                  navigate("/products");
                }}
                className="text-[17px] font-semibold text-[#272343] capitalize"
              >
                All Categories
              </button>
            </div>
            <div className="flex flex-col gap-[8px] space-y-[8px]">
              {categoryList.map((item, i) => {
                let key = item.toLowerCase();
                let categoryId = categories[key].id;
                let isSelected = selectedCategoryId === categoryId;

                return (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedCategoryId(isSelected ? null : categoryId);
                      navigate(`/products?category=${item}`);
                    }}
                    className={`flex items-center justify-between ${
                      isSelected ? "!text-[#007580]" : "hover:text-[#007580]"
                    }`}
                  >
                    <span className="flex gap-[12px] items-center">
                      <FaPlay
                        className={`text-[#007580] text-[10px] ${
                          isSelected
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex-1 ">
            <div className="flex max-lg:hidden   items-center justify-between py-[13px] px-[20px] bg-[#e1e3e6] rounded-md">
              <div className="flex items-center gap-[10px] flex-wrap">
                <span className="text-[#555] text-[18px] max-lg:text-[16px] mr-2 flex max-xl:hidden">
                  Sort by
                </span>

                {["Popular", "New", "Sale"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-[15px] py-[8px] text-[16px] max-xl:text-[14px] rounded-md transition-all ${
                      activeFilter === filter
                        ? "bg-[#029FAE] text-white"
                        : "bg-white text-[#272343]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}

                <div className="relative inline-block ">
                  <select
                    value={priceSort}
                    onChange={(e) => setPriceSort(e.target.value)}
                    className="px-[15px] py-2 text-[16px] max-xl:text-[14px] text-[#272343] rounded-md bg-white border border-gray-300"
                  >
                    <option value="" disabled hidden>
                      Price
                    </option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <FaChevronDown className="text-gray-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:hidden rounded-md  py-[16px]">
              <div className="flex items-center gap-[12px] pb-[12px]">
                <FiList className="text-[22px] " />
                <button
                  onClick={() => {
                    setSelectedCategoryId(null);
                    setActiveFilter("popular");
                    navigate("/products");
                  }}
                  className="text-[17px]  sm:text-[18px] font-semibold text-[#272343] capitalize"
                >
                  All Categories
                </button>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-4">
                {categoryList.map((item, i) => {
                  let key = item.toLowerCase();
                  let categoryId = categories[key].id;
                  let isSelected = selectedCategoryId === categoryId;

                  return (
                    <button
                      key={i}
                      onClick={() =>
                        setSelectedCategoryId(isSelected ? null : categoryId)
                      }
                      className={`flex justify-center items-center py-[8px] text-[15px] sm:text-[16px] rounded-md transition-colors duration-200 font-medium ${
                        isSelected
                          ? "bg-[#029FAE] text-white"
                          : "bg-gray-100 text-[#636270] "
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 gap-[16px] max-xl:gap-[14px] my-[20px]">
              {filterProduct.length > 0 ? (
                filterProduct.map((product) => (
                  <div key={product.id}>
                    <div
                      onClick={() => navigate(`/products/${product.id}`)}
                      className="group cursor-pointer"
                    >
                      <div className="overflow-hidden transition-all duration-300 relative mt-[20px] max-md:mt-[18px] mb-[12px]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-[200px] max-lg:h-[180px] max-md:aspect-square object-cover rounded-md"
                        />
                        {product.status && (
                          <span
                            className={`absolute top-3 left-3 max-sm:top-2 max-sm:left-2 text-white max-sm:text-[11px] text-[13px] font-semibold px-2 sm:px-3 py-[2px] sm:py-1 rounded-sm shadow-md ${
                              product.status === "Sale"
                                ? "bg-[#F5813F]"
                                : "bg-[#01ad5a]"
                            }`}
                          >
                            {product.status}
                          </span>
                        )}
                      </div>

                      <div className="flex justify-between items-center mt-0 max-md:mt-[2px]">
                        <div>
                          <span className="mt-0 truncate max-md:mt-[15px] text-[16px] max-xl:text-[14px]  leading-[130%] text-[#272343] transition-colors duration-300 group-hover:text-[#029FAE]">
                            {product.name}
                          </span>
                          <div className="flex gap-[6px] items-center mt-[10px] max-xl:mt-[8px]">
                            <span className="font-semibold text-[16px] max-xl:text-[14px]  text-[#272343]">
                              {product.price}
                            </span>
                            {product.oldPrice && (
                              <span className="text-[14px] max-xl:text-[13px] max-md:text-[12px] font-normal text-[#9A9CAA] line-through">
                                {product.oldPrice}
                              </span>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          className="w-[32px] h-[32px] flex items-center justify-center rounded-md bg-gray-100 text-[#272343] transition-all duration-300 group-hover:bg-[#029FAE] group-hover:text-white max-sm:-translate-y-[20%] -translate-y-[30%] mt-[10%]"
                        >
                          <FiShoppingCart className="text-[16px] max-md:text-[14px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="col-span-4 text-center text-[#9a9caa] text-[18px] lg:text-[16px] py-10">
                  No products found with the filters you selected.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-[#e9eaec] bg-white mt-auto">
        <div className="max-w-[1320px] w-full mx-auto max-xl:px-4">
          <Footer />
        </div>
        <section className="border-t border-[#e9eaec]">
          <div className="max-w-[1320px] w-full mx-auto max-xl:px-4">
            <Copyright />
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Products;
