import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiMenu,
  FiAlertCircle,
  FiCheck,
} from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="text-white w-full bg-[#272343]">
      <div className="w-full border-b border-gray-700">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-center md:justify-between py-2 px-4 text-xs md:text-sm text-gray-400">
          <p className="text-center md:text-left flex items-center gap-1">
            <FiCheck /> Free Shipping on All Orders Over $50
          </p>
          <div className="hidden md:flex items-center gap-4 text-gray-400 text-sm">
            <div className="relative">
              <select className="bg-transparent !text-gray-400 rounded px-2 py-1 hover:text-white transition">
                <option value="en">Eng</option>
                <option value="vi">Vi</option>
              </select>
            </div>
            <span className="hover:text-white transition cursor-pointer">
              Faqs
            </span>
            <a
              href="/help"
              className="hover:text-white transition flex items-center gap-1"
            >
              <FiAlertCircle /> Need Help?
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#f0f2f3] text-gray-800 w-full">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-3 p-4">
          <div className="flex items-center">
            <img
              src="/Logo.png"
              alt="Comforty Logo"
              className="w-[120px] sm:w-[166px] h-[40px] object-contain"
            />
          </div>

          <div className="flex-1 hidden md:flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full p-2 pl-3 pr-10 rounded outline-none bg-white border border-gray-300"
              />
              <span className="cursor-pointer absolute inset-y-0 right-3 flex items-center text-gray-500">
                <FaSearch />
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4 text-xl">
            <button className="flex justify-center items-center w-[110px] sm:w-[120px] h-[40px] bg-white border border-gray-300 rounded-md hover:text-[#007580] hover:bg-gray-50 transition">
              <span className="flex items-center gap-2 text-black">
                <FiShoppingCart />
                <span className="text-[12px] sm:text-[13px]">Cart</span>
              </span>
            </button>

            <button className="flex justify-center items-center w-[40px] h-[40px] bg-white border border-gray-300 rounded-md text-black hover:text-[#007580] hover:bg-gray-50 transition">
              <FiHeart />
            </button>

            <button className="flex justify-center items-center w-[40px] h-[40px] bg-white border border-gray-300 rounded-md text-black hover:text-[#007580] hover:bg-gray-50 transition">
              <FiUser />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white text-gray-800 border-t border-gray-200 w-full">
        <div className="max-w-[1320px] mx-auto flex flex-wrap justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-4 sm:space-x-6 flex-wrap">
            <button
              className=" border border-gray-300 rounded px-3 py-1 text-[14px] bg-white text-gray-800 hover:bg-gray-50 flex items-center gap-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FiMenu className="text-[20px]" />
              <span className="font-[#272343] font-medium">All Categories</span>
            </button>

            <div className="hidden md:flex items-center space-x-4 gap-6">
              <Link
                to="/"
                className="hover:text-[#007580] text-[14px] transition"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="hover:text-[#007580] text-[14px] transition"
              >
                Shop
              </Link>
              <Link
                to="/product"
                className="hover:text-[#007580] text-[14px] transition"
              >
                Product
              </Link>
              <Link
                to="/pages"
                className="hover:text-[#007580] text-[14px] transition"
              >
                Pages
              </Link>
              <Link
                to="/about"
                className="hover:text-[#007580] text-[14px] transition"
              >
                About
              </Link>
            </div>
          </div>
          <div className="text-[13px] sm:text-[14px] mt-2 sm:mt-0 text-center sm:text-right w-full sm:w-auto">
            Contact: <span className="font-bold ml-1">(808) 555-0111</span>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col px-4 py-2 space-y-2">
              <Link
                to="/"
                className="hover:text-[#007580] text-[14px] transition"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="hover:text-[#007580] text-[14px] transition"
              >
                Shop
              </Link>
              <Link
                to="/product"
                className="hover:text-[#007580] text-[14px] transition"
              >
                Product
              </Link>
              <Link
                to="/pages"
                className="hover:text-[#007580] text-[14px] transition"
              >
                Pages
              </Link>
              <Link
                to="/about"
                className="hover:text-[#007580] text-[14px] transition"
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
