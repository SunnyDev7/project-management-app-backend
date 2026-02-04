import "dotenv/config";
import express from "express";

import connectDB from "../db/index.js";

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
  res.send("Server Up");
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up on ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error", error);
    process.exit(1);
  });
