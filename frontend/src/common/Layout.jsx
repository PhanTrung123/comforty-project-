import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";
import Footer from "./Footer";
import RecentlyAdd from "../components/RecentlyAdd";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      <header className="w-full">
        <Navigation />
      </header>
      <main className="flex-1 w-full max-w-[1740px] mx-auto px-4 sm:px-6 lg:px-8 ">
        <HeroSection />
      </main>
      <main className="flex-1 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <main className="flex-1 w-full ">
        <Testimonial />
      </main>
      <main className="flex-1 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <RecentlyAdd />
      </main>
      <div className="w-full border-t border-b border-[#E1E3E5] bg-white">
        <footer className="max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
