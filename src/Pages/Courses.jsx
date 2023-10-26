import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/courses') // This will send a request to your Node.js server
      .then((response) => response.json())
      .then((data) => setCourses(data.courses))
      .catch((error) => console.error(error));
  }, []);

    return (
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map((course) => (
                    <li key={course.course_num}>
                        <Link to={`/course/${course.course_name}`}>{course.course_name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Courses;
