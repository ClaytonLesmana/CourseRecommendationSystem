import React, { useEffect, useState } from 'react';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/courses') // This will send a request to your Node.js server
      .then((response) => response.json())
      .then((data) => setCourses(data.courses))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.course_num}>{course.course_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
