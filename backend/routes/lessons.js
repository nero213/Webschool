import express from "express";
import { getLessons } from "../controllers/lessonsController.js";

const router = express.Router();

router.get("/", getLessons);

export default router;
