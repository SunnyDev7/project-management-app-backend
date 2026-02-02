import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
  res.send("Server Up");
});

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
