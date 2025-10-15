import pool from "../../config/db.js";
import { Result, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authenticateUsers = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const { email, password, username } = req.body;

    const [rows] = await pool.execute(
      "SELECT * FROM users WHERE email = ? LIMIT 1",
      [email]
    );
    if (rows.length === 0) {
      return res.status(400).json({ mes: "invalid email or password" });
    }

    const user = rows[0];

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      return res.status(400).json({ Message: "invalid email or password" });
    }

    const token = jwt.sign(
      { username: user.user_id, email: user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "development" || true,
        sameSite: "none",
        maxAge: 3600000,
      })
      .status(200)
      .json({ message: "Authentication successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
