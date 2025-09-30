import express from "express";
import { getLessons } from "../controllers/selectlessons.js";
import { insertlessons } from "../controllers/insertlessons.js";
import { updateLessons } from "../controllers/updatelessons.js";
import { deletelessons } from "../controllers/deletelessons.js";

const router = express.Router();

router.post("/", insertlessons);
router.get("/", getLessons);
router.put("/:id", updateLessons);
router.delete("/:id", deletelessons);

export default router;
