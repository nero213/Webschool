// Import the database connection pool we created in config/db.js
// The pool manages multiple connections so our app can handle multiple
// requests at once instead of opening/closing a connection every time.
import pool from "../config/db.js";

// Define and export the controller function
// This function will be called when a POST request hits /api/insertlessons
export const insertlessons = async (req, res) => {
  try {
    // Destructure values coming from the request body (JSON sent by the client)
    // Example body:
    // {
    //   "title": "Intro to Express",
    //   "language": "JavaScript",
    //   "content": "Hello World"
    // }
    const { title, language, content } = req.body;

    // ✅ Input validation
    // We want to make sure that required fields are not missing.
    // If "title" or "language" is missing, we immediately return
    // a 400 Bad Request response with an error message.
    if (!title || !language) {
      return res.status(400).json({ msg: "make sure to add values" });
    }

    //  Database insert query
    // pool.query() runs a SQL query against MySQL.
    // - The first argument is the SQL statement with placeholders (?)
    // - The second argument is an array of values that replace the placeholders safely.
    //
    // Example:
    // "INSERT INTO lessons (title, language, created_at, content) VALUES (?, ?, NOW(), ?)"
    //
    // MySQL replaces:
    //   1st ? → title
    //   2nd ? → language
    //   3rd ? → content (or NULL if not provided)
    //
    // Using placeholders prevents SQL injection attacks.
    //
    // pool.query() returns an array:
    //   - result: metadata about the query (e.g. insertId, affectedRows)
    //   - fields: information about the table columns (not needed here)
    //
    // We use "await" because query() is asynchronous.
    const [result] = await pool.query(
      `INSERT INTO lessons (title, language, created_at, content) VALUES (?, ?, NOW(), ?)`,
      [title, language, content || null]
    );

    // ✅ Successful response
    // - result.insertId is the auto-incremented ID of the new row
    // - We send back the inserted data as confirmation
    res.status(201).json({
      id: result.insertId,
      title,
      language,
      content: content || null,
    });
  } catch (err) {
    // ✅ Error handling
    // If anything goes wrong (bad SQL, DB not running, etc.),
    // we log the error to the server console for debugging
    console.error("Database error:", err.message);

    // Then we send a 500 Internal Server Error response
    // with the error message to help the client understand what failed
    res.status(500).json({ msg: err.message });
  }
};
