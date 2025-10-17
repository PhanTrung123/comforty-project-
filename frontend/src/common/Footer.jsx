import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Category",
      items: [
        "Sofa",
        "Armchair",
        "Wing Chair",
        "Desk Chair",
        "Wooden Chair",
        "Park Bench",
      ],
    },
    {
      title: "Support",
      items: ["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"],
    },
    {
      title: "Newsletter",
      input: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
    },
  ];

  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
        <div className="flex flex-col">
          <img
            src="/Logo.png"
            alt="Comforty Logo"
            className="w-[120px] sm:w-[166px] h-[40px] object-contain"
          />
          <p className="text-[16px] text-gray-600 my-4">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus
          </p>

          <div className="flex flex-row gap-3 items-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007580] border border-[#007580] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#007580] hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#007580] transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#007580] transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#007580] transition"
            >
              <FaPinterestP size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#007580] transition"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
        {footerLinks.map((link, index) => (
          <div key={index} className="flex flex-col">
            <h4 className="text-[#9A9CAA] uppercase mb-3">{link.title}</h4>

            {link.input ? (
              <>
                <div className="flex w-full">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-r-md hover:bg-teal-700 transition">
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {link.description}
                </p>
              </>
            ) : (
              <ul className="space-y-2">
                {link.items.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-teal-600 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="  flex flex-row justify-between border-gray-200 py-4 items-center text-sm text-[#9A9CAA]">
        <p>
          © 2021 - Blogy — Designed & Developed by
          <span className="font-medium text-[#272343]"> Zakirsoft</span>
        </p>
        <img
          src="/payment.png"
          className="w-56 gap-10 opacity-50 object-contain h-auto grayscale"
        />
      </div>
    </footer>
  );
};

export default Footer;
