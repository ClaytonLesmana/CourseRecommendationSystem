import React from "react";
import CardOutput from "../Components/CardOutput";
import "../Styles/CourseMatcherOutput.css";
import TimelineProgress from "../Components/TimelineProgress";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function CourseMatcherOutput() {
  const handleNavigation = () => {
    navigate("/CourseMatcherOutput", {
      state: {
        selectedMajor,
        creditPoints,
        suggestedEngineeringType,
        courses,
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
    year,
  } = location.state || {};

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
            {" "}
            {selectedMajor || suggestedEngineeringType || "Default Major"}
          </h2>

          <TimelineProgress
            creditPoints={creditPoints}
            setYear={setCurrentYear}
          />
          <div className="progress-labels-container">
            <h5 className="progress-label-1">Basics</h5>
            <h5 className="progress-label-2">Advance Topics</h5>
            <h5 className="progress-label-3">Mastery</h5>
          </div>
        </div>
      </div>
      <h2 className="year-header">Year {year}</h2>
      {selectedMajor && creditPoints ? (
        <>{renderCards(courses)}</>
      ) : (
        <>
          {renderCards(courses)}
          {/* {renderCards(courses)} */}
        </>
      )}
    </>
  );
}

export default CourseMatcherOutput;
