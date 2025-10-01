import express from "express";
import cors from "cors";
import lessonsRoutes from "./routes/lessons.js";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

// this is to setup the env
dotenv.config();
const app = express();
const PORT = Number(process.env.BACKEND_PORT);

// CORS or cross origin resource sharing
// allows you to request from another port
//
app.use(
  cors({
    origin: process.env.FRONTEND_PORT, // must specify the original
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// this allows the use of the req.body to enable to send data in a json format
app.use(express.json());

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // this mean 15 minutes
  max: 5,
  message: { msg: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: true
});

// Mount routes
app.use("/api/lessons", limiter, lessonsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
