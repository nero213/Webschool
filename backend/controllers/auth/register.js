import pool from "../../config/db.js";
import bcrypt, { genSalt } from "bcrypt";
import { validationResult } from "express-validator";

export const register = async (req, res) => {
  try {
    // this is used to get the data from the middleware
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    const [existing] = await pool.query(
      "SELECT 1 FROM users WHERE email = ? LIMIT 1",
      [email]
    );
    if (existing.length > 0) {
      return res.status(409).json({ error: "Email already registered." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [result] = await pool.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    if (result.affectedRows > 0) {
      return res.status(400).json({ message: "Something went wrong " });
    }

    res.status(201).json({
      message: "User registered successfully",
      userId: result.insertId,
      email,
      username,
      password,
    });
  } catch (err) {
    console.error("Error adding user:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
