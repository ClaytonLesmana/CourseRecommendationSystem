import React from "react";
import CardOutput from "../Components/CardOutput";
import "../Styles/CourseMatcherOutput.css";
import TimelineProgress from "../Components/TimelineProgress";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function CourseMatcherOutput() {
  const handleNavigation = () => {
    navigate("/CourseMatcherOutput", {
      state: { selectedMajor, creditPoints, suggestedEngineeringType },
    });
  };
  const location = useLocation();
  const [currentYear, setCurrentYear] = React.useState(1);
  const { selectedMajor, creditPoints, suggestedEngineeringType } =
    location.state || {};

  // Function to render the desired number of cards
  const renderCards = (count) => {
    return (
      <div className="card-container">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="card">
            <CardOutput />
          </div>
        ))}
      </div>
    );
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
      <h2 className="year-header">Year {currentYear}</h2>
      {selectedMajor && creditPoints ? (
        <>{renderCards(4)}</>
      ) : (
        <>
          {renderCards(4)}
          {renderCards(4)}
        </>
      )}
    </>
  );
}

export default CourseMatcherOutput;
