import React from "react";
import Navigation from "../components/Navigation";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#e7f7ff] to-[#fff0fb] shadow-lg font-sans">
      <Navigation />
      <main className="flex flex-col flex-1 ">{children}</main>
    </div>
  );
};

export default Layout;
