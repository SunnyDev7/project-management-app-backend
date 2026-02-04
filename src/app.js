import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import healthCheckRouter from "./routes/healthcheck.routes.js";

const app = express();

// basic configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://locahost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

//Health Check Route
app.use("/api/v1/healthcheck", healthCheckRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Project Management Backend");
});

export default app;
