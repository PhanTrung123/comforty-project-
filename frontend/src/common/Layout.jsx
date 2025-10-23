import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";
import Footer from "./Footer";
import RecentlyAdd from "../components/RecentlyAdd";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      <header className="w-full h-[204px]">
        <Navigation />
      </header>
      <section className="w-full mx-0 px-0 md:max-w-[1740px] md:mx-auto md:px-6 lg:px-8">
        <HeroSection />
      </section>
      <main className="flex-1 w-full max-w-[1320px] mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
      <section className="w-full">
        <Testimonial />
      </section>
      <section className="w-full max-w-[1320px] mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <RecentlyAdd />
      </section>
      <footer className="w-full border-t border-b border-[#E1E3E5] bg-white">
        <div className="max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
