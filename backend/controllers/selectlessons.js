import pool from "../config/db.js";

export const getLessons = async (req, res) => {
  // this is just to select the data from the database
  // and show it towards the frontend
  try {
    const [rows] = await pool.query("SELECT * FROM lessons");
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching lessons" });
  }
};




