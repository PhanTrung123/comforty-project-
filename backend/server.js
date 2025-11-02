const express = require("express");
const cors = require("cors");
const siteData = require("../database/data/siteData");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/api/landing", (req, res) => {
  res.json(siteData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
