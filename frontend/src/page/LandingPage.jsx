// LandingPage.jsx (chỉ phần thay đổi)
import React, { useState, useEffect } from "react";
import Layout from "../common/Layout";
import axios from "axios";
import * as fallbackData from "../../data/siteData";
import { toast, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";

const LandingPage = () => {
  const [landingData, setLandingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [showFallbackNotice, setShowFallbackNotice] = useState(false);

  useEffect(() => {
    const fetchLandingData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/landing");
        console.log("API response:", res.data);
        setLandingData(res.data || {});
      } catch (err) {
        console.error("API error:", err.message);

        // setLandingData({});
        setIsFallback(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLandingData();
  }, []);

  useEffect(() => {
    if (isFallback) {
      setShowFallbackNotice(true);
      const timer = setTimeout(() => setShowFallbackNotice(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isFallback]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <ClipLoader color="#007580" loading={true} size={100} />
      </div>
    );
  }

  return (
    <>
      {showFallbackNotice && (
        <div className="w-full text-center bg-yellow-100 text-yellow-700 py-2 text-sm font-medium transition-opacity duration-700">
          Đang hiển thị giao diện với dữ liệu rỗng (server chưa kết nối)
        </div>
      )}
      <Layout data={landingData} />

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default LandingPage;
