import express from "express";
import { getLessons } from "../controllers/lessonsEnpoints/selectlessons.js";
import { insertlessons } from "../controllers/lessonsEnpoints/insertlessons.js";
import { updateLessons } from "../controllers/lessonsEnpoints/updatelessons.js";
import { deletelessons } from "../controllers/lessonsEnpoints/deletelessons.js";

const router = express.Router();

router.post("/", insertlessons);
router.get("/", getLessons);
router.put("/:id", updateLessons);
router.delete("/:id", deletelessons);

export default router;
