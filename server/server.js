import express from "express";
import cors from "cors";

import {
  runAccessibilityScan,
} from "./scanners/accessibilityScanner.js";

const app = express();

// Handle PNA preflight
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Private-Network", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(cors());
app.use(express.json());

app.post("/scan", async (req, res) => {

  try {

    const { url } = req.body;

    const results = await runAccessibilityScan(url);

    res.json(results);

  } catch (error) {

    // console.log(error);

    return res.status(500).json({
        success: false,
        message: "Sorry, could not fetch data for this URL. Check your URL and try again.", 
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});