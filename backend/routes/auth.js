import express from "express";
import { register } from "../controllers/auth/register.js";
import { registerValidators } from "../controllers/auth/validators.js";
import { authenticateUsers } from "../controllers/auth/authentication.js";
import { loginValidators } from "../controllers/auth/validators.js";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.json({ message: "Success" });
// });
router.post("/", registerValidators, register);
router.get("/", loginValidators, authenticateUsers);

export default router;
