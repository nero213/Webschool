import express from "express";
import { getLessons } from "../controllers/lessonsController.js";
import { insertlessons } from "../controllers/lessonsController.js";
import { updateLessons } from "../controllers/lessonsController.js";

const router = express.Router();

router.post("/", insertlessons);
router.get("/", getLessons);
router.put("/:id", updateLessons);

export default router;
