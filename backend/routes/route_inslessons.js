import express from "express";
import { insertlessons } from "../controllers/insertlessons.js";

const router = express.Router();

router.post("/", insertlessons);

// in route_inslessons.js
router.get("/test", (req, res) => {
  res.json({ msg: "Insert lessons route is alive ✅" });
});

export default router;
