import sqlite3 from 'sqlite3';
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
// Connect to the SQLite database
const db = new sqlite3.Database('Student.db');




// Define an API endpoint to retrieve course data
app.get('/courses', function (req, res, next){
  const query = `
    SELECT DISTINCT course_num, course_name, faculty_number
    FROM course
    ORDER BY course_name;
  `;
  db.all(query, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    console.log('Received course data:', rows);

    res.json({ courses: rows });
  });
});


// Start the server on a specified port (e.g., 3001)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
