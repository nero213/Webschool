import express from "express";
import { register } from "../controllers/auth/register.js";
import { validators } from "../controllers/auth/validators.js";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.json({ message: "Success" });
// });
router.post("/", validators, register);

export default router;
