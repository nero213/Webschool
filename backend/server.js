import express from "express";
import cors from "cors";
import lessonsRoutes from "./routes/lessons.js";
import insertlessons from "./routes/route_inslessons.js";
import dotenv from "dotenv";

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

app.use(express.json());

// Mount routes
app.use("/api/lessons", lessonsRoutes);
app.use("/api/insertlessons", insertlessons);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
