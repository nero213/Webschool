import pool from "../../config/db.js";

export const updateLessons = async (req, res) => {
  try {
    const { uuid } = req.params;
    const { title, language, content } = req.body;

    if (
      typeof title !== "string" ||
      typeof language !== "string" ||
      typeof content !== "string"
    ) {
      return res.status(400).json({ message: "invalid" });
    }

    const [result] = await pool.execute(
      "UPDATE lessons SET title = ?, language = ?, content = ? WHERE uuid = ? ",
      [title, language, content, uuid]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "not found" });
    }

    res.status(200).json({ message: "updated" });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
