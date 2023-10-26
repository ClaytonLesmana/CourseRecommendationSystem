import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../Styles/courseOutput.css";


function Course() {
    const { courseName } = useParams();
    const [courseDetails, setCourseDetails] = useState({});

    useEffect(() => {
        // Fetch course details based on the courseName from the URL
        fetch(`http://localhost:3000/courses/${courseName}`)
            .then((response) => response.json())
            .then((data) => setCourseDetails(data))
            .catch((error) => console.error(error));
    }, [courseName]);

    return (
        <div>
            <div className="output-container">
                <div className="progress-bar-placeholder">
                    <h2 className="major-header"> {courseName || "Default Major"}</h2>

                    <div className="progress-labels-container">
                        <h5 className="progress-label-1">Basics</h5>
                        <h5 className="progress-label-2">Advance Topics</h5>
                        <h5 className="progress-label-3">Mastery</h5>
                    </div>
                </div>
            </div>

            <h1 className="major-header">{courseName}</h1>
            <h2>Subjects:</h2>
            <ul>
                {courseDetails.subjects &&
                    courseDetails.subjects.map((subject, index) => (
                        <li key={index}>
                            Subject Number: {subject.subject_number}, Subject Name: {subject.subject_name}
                        </li>
                    ))}
            </ul>




        </div>
    );
}

export default Course;
