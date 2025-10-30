import React, { useState, useEffect } from "react";
import Layout from "../common/Layout";
import axios from "axios";
import * as siteData from "../../data/siteData";

const LandingPage = () => {
  const [landingData, setLandingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLandingData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/api/landing");
        setLandingData(res.data || siteData);
      } catch (err) {
        console.error("API error:", err);
        setError(err);
        setLandingData(siteData);
      } finally {
        setLoading(false);
      }
    };

    fetchLandingData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return <Layout data={landingData} />;
};

export default LandingPage;
