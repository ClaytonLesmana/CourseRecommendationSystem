import React from "react";
import CardOutput from "../Components/CardOutput";
import "../Styles/CourseMatcherOutput.css";
import TimelineProgress from "../Components/TimelineProgress";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function CourseMatcherOutput() {
  const handleNavigation = () => {
    navigate("/CourseMatcherOutput", {
      state: { selectedMajor, creditPoints },
    });
  };
  const location = useLocation();
  const [currentYear, setCurrentYear] = React.useState(1);
  const { selectedMajor, creditPoints } = location.state || {};
  return (
    <>
      <div className="output-container">
        <div className="progress-bar-placeholder">
          <h2 className="major-header"> {selectedMajor || "Default Major"}</h2>
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
      <div className="card-container">
        <div className="card">
          <CardOutput />
        </div>
        <div className="card">
          <CardOutput />
        </div>
        <div className="card">
          <CardOutput />
        </div>
        <div className="card">
          <CardOutput />
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardOutput />
        </div>
        <div className="card">
          <CardOutput />
        </div>
        <div className="card">
          <CardOutput />
        </div>
        <div className="card">
          <CardOutput />
        </div>
      </div>

      {/* <Card />
      <Card /> */}
    </>
  );
}

export default CourseMatcherOutput;
