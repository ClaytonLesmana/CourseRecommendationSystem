import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../Styles/courseOutput.css";
import CardOutput from '../Components/CardOutput';
import TimelineProgress from '../Components/TimelineProgress';

function Course() {
    const { courseName } = useParams();
    const [courseDetails, setCourseDetails] = useState({});
    const [selectedYear, setSelectedYear] = useState(1);

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

            <TimelineProgress creditPoints={0} setYear={setSelectedYear} />

            {Object.keys(subjectsByYear).map((year) => (
                <div key={year}>
                    {parseInt(year) === selectedYear && (
                        <div>
                            <div style={{ marginTop: '120px' }}>
                                <h2>Year {year} Subjects:</h2>
                                {subjectsByYear[year].map((subject, index) => (
                                    <CardOutput key={index} title={subject.subject_name} />
                                ))}

                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Course;
