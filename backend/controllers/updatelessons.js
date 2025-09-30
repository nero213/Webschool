import pool from "../config/db.js";

export const updateLessons = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { title, language, content } = req.body;
    
    if (isNaN(id)) {
      return res.status(400).json({ message: "invalid number " });
    }

    if (
      typeof title !== "string" ||
      typeof language !== "string" ||
      typeof content !== "string"
    ) {
      return res.status(400).json({ message: "invalid" });
    }

    const [result] = await pool.query(
      "UPDATE lessons SET title = ?, language = ?, content = ? WHERE id = ? ",
      [title, language, content, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "not found" });
    }

    res.status(200).json({ message: "updated" });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
