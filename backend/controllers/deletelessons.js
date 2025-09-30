import pool from "../config/db.js";


export const deletelessons = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ msg: "invalid number" });
    }

    const [result] = await pool.query("DELETE FROM lessons WHERE id = ? ", [id]);

    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "no rows are affected " });
    }
    res.status(200).json({ remove: result.insertId });
  } catch (err) {
    console.log("Error");
    res.status(500).json(err.message);
  }
};
