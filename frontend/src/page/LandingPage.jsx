import React, { useState, useEffect } from "react";
import Layout from "../common/Layout";
import axios from "axios";
import * as fallbackData from "../../data/siteData";

const LandingPage = () => {
  const [landingData, setLandingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLandingData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/landing");
        console.log("API response:", res.data);
        setLandingData(res.data);
        setError("lỗi test");
      } catch (err) {
        console.error("API error:", err);
        setError(err);
        setLandingData(fallbackData.default || fallbackData);
      } finally {
        setLoading(false);
      }
    };

    fetchLandingData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!landingData) return <div>Error loading data</div>; // an toàn

  return <Layout data={landingData} />;
};

export default LandingPage;
