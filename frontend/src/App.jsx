import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
