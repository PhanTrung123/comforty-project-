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
import { useCart } from "../context/CartContext";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const topBarData = {
    promo: { icon: <FiCheck />, text: "Free Shipping on All Orders Over $50" },
    languages: [
      { label: "Eng", value: "en" },
      { label: "Vi", value: "vi" },
    ],
    links: [
      { label: "Faqs", href: "#" },
      { label: "Need Help?", href: "/help", icon: <FiAlertCircle /> },
    ],
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Product", path: "/product" },
    { name: "Pages", path: "/pages" },
    { name: "About", path: "/about" },
  ];

  const contactNumber = "(808) 555-0111";

  return (
    <nav className="text-white w-full bg-[#272343]">
      <div className="w-full border-b border-gray-700">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-center md:justify-between py-2 px-4 text-xs md:text-sm text-gray-400">
          <p className="flex items-center gap-1">
            {topBarData.promo.icon}
            {topBarData.promo.text}
          </p>

          <div className="hidden md:flex items-center gap-4 text-sm">
            <select className="bg-transparent text-gray-400 rounded px-2 py-1 hover:text-white transition">
              {topBarData.languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>

            {topBarData.links.map((item, i) =>
              item.icon ? (
                <a
                  key={i}
                  href={item.href}
                  className="hover:text-white transition flex items-center gap-1"
                >
                  {item.icon} {item.label}
                </a>
              ) : (
                <a
                  key={i}
                  href={item.href}
                  className="hover:text-white transition"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#f0f2f3] text-gray-800 w-full">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-3 p-4">
          <img
            src="/Logo.png"
            alt="Comforty Logo"
            className="w-[120px] sm:w-[166px] h-[40px] object-contain"
          />
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
            <button className="relative gap-2 flex items-center justify-center w-[110px] sm:w-[120px] h-[40px] bg-white border border-gray-300 rounded-md hover:text-[#007580] hover:bg-gray-50 transition">
              <div className="flex items-center gap-2 text-black">
                <FiShoppingCart className="text-[18px]" />
                <span className="text-[13px] sm:text-[14px]">Cart</span>
              </div>

              {cartCount > 0 && (
                <span className=" bg-[#007580] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="w-[40px] items-center flex justify-center h-[40px] bg-white border border-gray-300 rounded-md hover:text-[#007580] transition">
              <FiHeart />
            </button>
            <button className="w-[40px]  items-center flex justify-center h-[40px] bg-white border border-gray-300 rounded-md hover:text-[#007580] transition">
              <FiUser />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-800 border-t border-gray-200 w-full">
        <div className="max-w-[1320px] mx-auto flex flex-wrap justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-4 sm:space-x-6 flex-wrap">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="border border-gray-300 rounded px-3 py-1 text-[14px] bg-white hover:bg-gray-50 flex items-center gap-1"
            >
              <FiMenu className="text-[20px]" />
              <span className="font-medium">All Categories</span>
            </button>
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="hover:text-[#007580] text-[14px] transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-[13px] sm:text-[14px] mt-2 sm:mt-0 text-center sm:text-right w-full sm:w-auto">
            Contact: <span className="font-bold ml-1">{contactNumber}</span>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col px-4 py-2 space-y-2">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="hover:text-[#007580] text-[14px] transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
