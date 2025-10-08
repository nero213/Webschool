import pool from "../../config/db.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";

export const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    // 🧩 2. Check if user already exists
    const [existing] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (existing.length > 0) {
      return res.status(409).json({ error: "Email already registered." });
    }

    // 🧩 3. Hash the password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🧩 4. Insert the new user
    const [result] = await pool.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    if (result.affectedRows > 0) {
      res.status(400).json({ message: "Something When wrong " });
    }

    // 🧩 5. Respond with success
    res.status(201).json({
      message: "User registered successfully",
      userId: result.insertId,
      email,
      username,
      password,
    });
  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
