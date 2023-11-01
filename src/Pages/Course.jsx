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

    // Organize subjects by year
    const subjectsByYear = {};
    if (courseDetails.subjects) {
        courseDetails.subjects.forEach((subject) => {
            if (!subjectsByYear[subject.subject_year]) {
                subjectsByYear[subject.subject_year] = [];
            }
            subjectsByYear[subject.subject_year].push(subject);
        });
    }

    return (
        <div>
            <h1 className="major-header">{courseName}</h1>
            <h2>Subjects:</h2>
            {Object.keys(subjectsByYear).map((year) => (
                <div key={year}>
                    <h3>Year {year}</h3>
                    <ul>
                        {subjectsByYear[year].map((subject) => (
                            <li key={subject.subject_number}>
                                Subject Number: {subject.subject_number}, Subject Name: {subject.subject_name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Course;
