import express from "express";
import cors from "cors";

import {
  runAccessibilityScan,
} from "./scanners/accessibilityScanner.js";

const app = express();

// Handle PNA preflight
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Private-Network", "true");
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
  }));
app.use(express.json());

app.get("/", (req, res) => {

  res.json({
    success: true,
    message: "Accessibility Auditor API running",
  });

});

app.post("/scan", async (req, res) => {

  try {

    const { url } = req.body;

    const results = await runAccessibilityScan(url);

    res.json(results);

  } catch (error) {

    console.log("SCAN ERROR:");
  console.log(error);

    return res.status(500).json({
        success: false,
        // message: "Sorry, could not fetch data for this URL. Check your URL and try again.", 
        message: error.message,
    });
  }
});

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});