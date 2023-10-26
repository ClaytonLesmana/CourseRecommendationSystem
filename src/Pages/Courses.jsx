import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Courses.css'; // Import your CSS file

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/courses')
            .then((response) => response.json())
            .then((data) => setCourses(data.courses))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="courses-container">
            <h1 className="courses-header">Course List</h1>
            <ul className="courses-list">
                {courses.map((course) => (
                    <li key={course.course_num} className="course-item">
                        <Link to={`/course/${course.course_name}`} className="course-link">
                            {course.course_name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Courses;
