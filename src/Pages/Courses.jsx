import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/courses.css'; // Import your CSS file

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/courses')
            .then((response) => response.json())
            .then((data) => setCourses(data.courses))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
        <h1 className={"courses-header"}>Courses</h1>
        <div className="course-grid-container">
                {courses.map((course) => (
                    <div key={course.course_num} className="course-card">
                        <Link to={`/course/${course.course_name}`} >
                            {course.course_name}
                        </Link>
                    </div>
                ))}

        </div>
        </div>
    );
}

export default Courses;
