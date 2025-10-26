import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiMenu,
  FiAlertCircle,
  FiCheck,
  FiX,
} from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartItems, cartCount, removeFromCart, clearCart } = useCart();
  const cartRef = useRef(null);

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
        <div className="max-w-[1320px] mx-auto flex flex-nowrap items-center justify-between gap-3 p-4 ">
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
                className="w-full p-2 pl-3 pr-10 rounded outline-none text-[16px] bg-white border !text-[#9a9caa] border-gray-300"
              />
              <span className="cursor-pointer absolute inset-y-0 right-3 flex items-center">
                <img
                  src="/image/search.png"
                  className="w-[22px] h-[22px] object-cover"
                />
              </span>
            </div>
          </div>
          <div className="relative flex gap-3" ref={cartRef}>
            <button
              onClick={() => setShowCart((prev) => !prev)}
              onMouseEnter={() => setShowCart(true)}
              onMouseLeave={() => setShowCart(false)}
              className="relative gap-2 flex items-center justify-center w-[110px] sm:w-[120px] h-[40px] bg-white border border-gray-300 rounded-md hover:text-[#007580] hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-2 text-black">
                <img
                  src="/image/cart.png"
                  className="w-[17px] h-[17px] object-cover"
                />
                <span className="text-[13px] font-medium text-[#272343] leading-[110%]">
                  Cart
                </span>
              </div>

              {cartCount > 0 && (
                <span className="bg-[#007580] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="w-[40px] flex items-center justify-center h-[40px] bg-white border border-gray-300 rounded-md hover:text-[#007580] transition">
              <img
                src="/image/heart.png"
                className="w-[22px] h-[22px] object-cover"
              />
            </button>
            <button className="w-[40px] flex items-center justify-center h-[40px] bg-white border border-gray-300 rounded-md hover:text-[#007580] transition">
              <img
                src="/image/user.png"
                className="w-[22px] h-[22px] object-cover"
              />
            </button>
            <AnimatePresence>
              {showCart && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setShowCart(true)}
                  onMouseLeave={() => setShowCart(false)}
                  className="absolute right-0 top-full mt-3 w-[280px] sm:w-[320px] md:w-[360px] bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50"
                >
                  <h4 className="text-lg font-semibold mb-3 text-[#272343]">
                    Your Cart
                  </h4>

                  {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center text-gray-500 py-8">
                      <FiShoppingCart className="text-4xl mb-2 text-gray-400" />
                      <p className="text-sm font-medium">Your cart is empty.</p>
                    </div>
                  ) : (
                    <>
                      <div className="max-h-[300px] overflow-y-auto space-y-3 pr-1">
                        {cartItems.map((item) => (
                          <div
                            key={item.id}
                            className="relative flex items-center justify-between border-b border-gray-100 pb-2 pr-7 group"
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 rounded-md object-cover flex-shrink-0"
                              />
                              <div className="min-w-0">
                                <p className="text-sm font-medium text-[#272343] truncate">
                                  {item.name}
                                </p>
                                <p className="text-xs text-[#9a9caa]">
                                  {item.quantity} × {item.price}
                                </p>
                              </div>
                            </div>
                            <span className="text-sm font-semibold text-[#272343] whitespace-nowrap">
                              $
                              {(
                                item.quantity *
                                parseFloat(item.price.replace("$", ""))
                              ).toFixed(2)}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              title="Remove item"
                              className="
          absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 text-[#272343] hover:text-[#007580] bg-white text-sm"
                            >
                              <FiX className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <button
                          onClick={clearCart}
                          className="text-sm text-[#272343] hover:text-[#007580] transition"
                        >
                          Clear All
                        </button>
                        <button className="bg-[#007580] text-white px-4 py-2 rounded-md text-sm hover:bg-[#029FAE] transition">
                          Checkout
                        </button>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-800 border-t border-gray-200 w-full">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between px-4 py-4 gap-3 flex-nowrap">
          <div className="flex items-center space-x-4 sm:space-x-6 flex-wrap">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="border border-gray-300 rounded px-4 py-2 text-[14px] gap-2 bg-white hover:bg-gray-50 flex items-center whitespace-nowrap flex-shrink-0"
            >
              <FiMenu className="text-[20px]" />
              <span className="font-medium text-sm">All Categories</span>
            </button>
            <div className="hidden md:flex gap-2 items-center space-x-6">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="hover:text-[#007580] text-[14px] text-[#636270] transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-[14px] text-[#636270] flex items-center gap-2 flex-shrink-0 whitespace-nowrap">
            <span>Contact:</span>
            <span className="font-bold text-[#272343]">{contactNumber}</span>
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
