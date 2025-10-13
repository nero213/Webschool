import pool from "../../config/db.js";

export const deletelessons = async (req, res) => {
  try {
    const { uuid } = req.params;

    const [result] = await pool.query("DELETE FROM lessons WHERE uuid = ? ", [
      uuid,
    ]);
    const user = result[0];

    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "no rows are affected " });
    }
    res.status(200).json({ message: "success" });
  } catch (err) {
    console.log("Error");
    res.status(500).json({ message: err.message });
  }
};
