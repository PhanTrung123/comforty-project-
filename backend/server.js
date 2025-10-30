// server.js
const express = require("express");
const cors = require("cors");
const siteData = require("../frontend/data/siteData");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/landing", (req, res) => {
  res.json(siteData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
