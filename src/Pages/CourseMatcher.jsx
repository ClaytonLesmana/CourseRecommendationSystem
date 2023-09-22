// import Button from "./Components/Navbar";
import "../Styles/main.css";
function CourseMatcher() {
  return (
    <div className="course-matcher-container">
      <div className="questions-section">
        <h3 className="question-text">What's your programming personality?</h3>
      </div>
      <div className="answers-section">
        <p className="answer-text">
          Find out which careers, languages, and courses suit your personal
          interests and strengths best.
        </p>
        <button type="button" class="btn btn-light">
          Light
        </button>
      </div>
    </div>
  );
}

export default CourseMatcher;
