import React from "react";
import CardOutput from "../Components/CardOutput";
import "../Styles/CourseMatcherOutput.css";
import TimelineProgress from "../Components/TimelineProgress";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const allCourseData = {
  "Electrical Engineering": {
    1: [
      "Mathematics one",
      "Fundamentals of C Programming",
      "Introduction to Electrical and Electronic Engineering",
      "Physical Modelling",
      "Mathematics two",
      "Introduction to Engineering Projects",
      "Foundations of Electrical and Electronic Technology",
      "Electronics and Circuits",
    ],
    2: [
      "Engineering Project Appraisal",
      "Introductory Digital Systems",
      "Introductory Embedded Systems",
      "Signals and Systems",
      "Professional Practice Preparation 1",
      "Designing Sustainable Engineering Projects",
      "Electromechanical Automation",
      "Circuit Analysis and Design",
      "Control Design",
    ],
    3: [
      "Professional Engineering Communication",
      "Power Electronics",
      "Electrical Power Systems",
      "Electrical Engineering Elective One",
      "Engineering Work Experience",
      "Professional Studio A",
      "Collaboration in Complex Projects",
      "Electrical Engineering Elective Two",
      "Electrical Engineering Elective Three",
    ],
    4: [
      "Professional Experience Review",
      "Engineering Research Preparation",
      "Professional Studio B",
      "Electrical Engineering Elective Four",
      "Elective One",
      "Engineering Capstone",
      "Elective Two",
      "Elective Three",
      "Elective Four",
    ],
  },
  "Software Engineering": {
    1: [
      "Mathematics one",
      "Introduction to Engineering Projects",
      "Business Requirements Modelling",
      "Programming 1",
      "Mathematics two",
      "Programming two",
      "Systems Testing and Quality Management",
      "Database Fundamentals",
    ],
    2: [
      "Professional Practice Preparation 1",
      "Physical Modelling",
      "Data Structures and Algorithms",
      "Information System Development Methodologies",
      "Software Engineering Elective one",
      "Engineering Project Appraisal",
      "Software Design Studio",
      "Software Engineering Elective two",
    ],
    3: [
      "Designing Sustainable Engineering Projects",
      " Software Development Studio",
      "Software Engineering Elective Three",
      "Engineering Work Experience",
      "Professional Engineering Communication",
      "Software Analysis Studio",
      "Software Architecture",
    ],
    4: [
      "Engineering Research Preparation",
      "Collaboration in Complex Projects",
      "Professional Experience Review",
      "Software Engineering Elective Four",
      "Engineering Capstone",
      "Software Innovation Studio",
      "Software Engineering Elective Five",
    ],
  },
  "Mechatronic Engineering": {
    1: [
      "Mathematics one",
      "Introduction to Engineering Projects",
      "Introduction to Mechanical Engineering",
      "Physical Modelling",
      "Materials and Manufacturing Engineering A",
      "Applied Mechanics and Design A",
      "Introduction to Mechatronics Engineering",
      "Programming 1",
    ],
    2: [
      "Mathematics Two",
      "Embedded Mechatronics Systems",
      "Machines and Mechanisms A",
      "Mechanical Design Fundamentals Studio 1",
      "Professional Practice Preparation 1",
      "Engineering Project Appraisal",
      "Industrial Robotics",
      "Sensors and Control for Mechatronic Systems",
      "Mechatronic Elective One",
    ],
    3: [
      "Designing Sustainable Engineering Projects",
      "Programming for Mechatronic Systems",
      "Embedded Mechatronics Studio",
      "Dynamic Systems and Control A",
      "Professional Engineering Communication",
      "Robotics Studio 1",
      "Engineering Work Experience",
      "Mechatronic Elective Two",
      "Mechatronic Elective Three",
    ],
    4: [
      "Robotics Studio 2",
      "Professional Experience Review",
      "Engineering Research Preparation",
      "Artificial Intelligence in Robotics",
      "Mechatronic Elective Four",
      "Engineering Capstone",
      "Design in Mechanical and Mechatronic System",
      "Collaboration in Complex Projects",
      "Software Engineering Elective Six",
    ],
  },
  "Mechanical Engineering": {
    1: [
      "Mathematics one",
      "Introduction to Engineering Projects",
      " Introduction to Mechanical Engineering",
      "Physical Modelling",
      "Materials and Manufacturing Engineering A",
      "Applied Mechanics and Design A",
      "Introduction to Mechatronics Engineering",
      "Engineering Computations",
    ],
    2: [
      "Mathematics Two",
      "Machines and Mechanisms A",
      "Thermofluids A",
      "Mechanical Design Fundamentals Studio 1",
      "Professional Practice Preparation 1",
      "Engineering Project Appraisal",
      "Applied Mechanics and Design B",
      "Mechanical Elective One",
      "Mechanical Elective Two",
    ],
    3: [
      "Dynamic Systems and Control A",
      "Thermofluids B",
      "Machines and Mechanisms B",
      "Mechanical Design Fundamentals Studio 2",
      "Designing Sustainable Engineering Projects",
      "Mechanical Systems Design Studio 1",
      "Engineering Work Experience",
      "Mechanical Elective Three",
      "Mechanical Elective Four",
    ],
    4: [
      "Mechanical Systems Design Studio 2",
      "Professional Experience Review",
      "Dynamic Systems and Control B",
      "Engineering Research Preparation",
      "Professional Engineering Communication",
      "Engineering Capstone",
      "Design in Mechanical and Mechatronic Systems",
      "Mechanical Elective Five",
      "Collaboration in Complex Projects",
    ],
  },
};

function CourseMatcherOutput() {
  const handleNavigation = () => {
    navigate("/CourseMatcherOutput", {
      state: {
        selectedMajor,
        creditPoints,
        suggestedEngineeringType,
        courses,
        // allCourses,
        year,
      },
    });
  };
  const location = useLocation();
  const [currentYear, setCurrentYear] = React.useState(1);
  const {
    selectedMajor,
    creditPoints,
    suggestedEngineeringType,
    courses,
    allCourses,
    year,
  } = location.state || {};

  // const year = creditPoints ? determinedYear : currentYear;
  const major = selectedMajor || suggestedEngineeringType || "Default Major";
  const coursesForMajorAndYear = allCourseData[major]?.[currentYear] || [];

  // const renderCards2 = (coursesList) => {
  //   // Check if coursesList is an array and has items
  //   if (Array.isArray(coursesList) && coursesList.length) {
  //     return (
  //       <div className="card-container">
  //         {coursesList.map((course, index) => (
  //           <div key={index} className="card">
  //             <CardOutput title={course} />
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   } else {
  //     // If coursesList is not an array or is empty, display a message
  //     return <p>No courses available.</p>;
  //   }
  // };

  const renderCards2 = (coursesList) => {
    // Check if coursesList is an array and has items
    if (Array.isArray(coursesList) && coursesList.length) {
      // Split the array into two: one for the first row, and one for the rest
      const firstRowCourses = coursesList.slice(0, 4);
      const secondRowCourses = coursesList.slice(4);

      return (
        <>
          <div className="card-container">
            {firstRowCourses.map((course, index) => (
              <div key={index} className="card">
                <CardOutput title={course} />
              </div>
            ))}
          </div>
          {secondRowCourses.length > 0 && (
            <div className="card-container second-row">
              {secondRowCourses.map((course, index) => (
                <div key={index + 4} className="card">
                  <CardOutput title={course} />
                </div>
              ))}
            </div>
          )}
        </>
      );
    } else {
      // If coursesList is not an array or is empty, display a message
      return <p>No courses available.</p>;
    }
  };

  const renderCards = (coursesList) => {
    // Check if coursesList is an array and has items
    if (Array.isArray(coursesList) && coursesList.length) {
      return (
        <div className="card-container">
          {coursesList.map((course, index) => (
            <div key={index} className="card">
              <CardOutput title={courses[index]} />
            </div>
          ))}
        </div>
      );
    } else {
      // If coursesList is not an array or is empty, display a message
      return <p>No courses available.</p>;
    }
  };

  return (
      <>
        <div className="output-container">
          <div className="progress-bar-placeholder">
            <h2 className="major-header">
              {selectedMajor || suggestedEngineeringType || "Default Major"}
            </h2>

            <TimelineProgress creditPoints={creditPoints} setYear={setCurrentYear} />
            <div className="progress-labels-container">
              <h5 className="progress-label-1">Basics</h5>
              <h5 className="progress-label-2">Advance Topics</h5>
              <h5 className="progress-label-3">Mastery</h5>
            </div>
          </div>
        </div>
        {selectedMajor && creditPoints ? (
            <h2 className="year-header">Year {year}</h2>
        ) : (
            <h2 className="year-header">Year {currentYear}</h2>
        )}
        {selectedMajor && creditPoints ? (
            renderCards(courses)
        ) : (
            renderCards2(coursesForMajorAndYear)
        )}
      </>
  );

}

export default CourseMatcherOutput;
