import sqlite3 from 'sqlite3';
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
// Connect to the SQLite database
const db = new sqlite3.Database('../Data/Student1.db');




// Define an API endpoint to retrieve course data
app.get('/courses', function (req, res, next){
  const query = `
    SELECT DISTINCT course_num, course_name
    FROM course
    ORDER BY course_name;
  `;
  db.all(query, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    console.log('Received course data:', rows);

    try {
      const jsonData = JSON.stringify({ courses: rows });
      // If parsing is successful, send it as JSON
      res.json(JSON.parse(jsonData));
    } catch (jsonError) {
      // If parsing fails, send an error response
      res.status(500).json({ error: 'Invalid JSON data' });
    }
  });
});

// API endpoint to get course details by name
app.get('/courses/:courseName', (req, res) => {
  const { courseName } = req.params;

  const query = `
    SELECT course.course_name, subject.subject_number, subject.subject_name
    FROM course
    JOIN subject ON course.subject_number = subject.subject_number
    WHERE course.course_name = ?
  `;

  db.all(query, [courseName], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (rows.length === 0) {
      res.status(404).json({ error: 'Course not found' });
    } else {
      console.log('Received course data:', rows);
      // Extract the course name and subjects from the result
      const courseDetails = {
        course_name: rows[0].course_name,
        subjects: rows.map((row) => ({
          subject_number: row.subject_number,
          subject_name: row.subject_name,
        })),
      };

      res.json(courseDetails);
    }
  });
});


// Start the server on a specified port (e.g., 3001)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
