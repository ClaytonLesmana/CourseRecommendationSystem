import React, { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import "../Styles/main.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Select, Input, Alert } from "@mantine/core";
// import { IconInfoCircle } from "@tabler/icons-react";

function CourseMatcher() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const navigate = useNavigate();
  const [selectedMajor, setSelectedMajor] = useState("");
  const [creditPoints, setCreditPoints] = useState(0);
  const [showPersonalityQuestions, setShowPersonalityQuestions] =
    useState(false);

  const handleNavigation = () => {
    navigate("/CourseMatcherOutput", {
      state: { selectedMajor, creditPoints },
    });
  };

  // const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (answerText) => {
    if (!showPersonalityQuestions) {
      if (currentQuestion === 0 && answerText === "No") {
        setShowPersonalityQuestions(true);
        return; // Exit the function early to avoid moving to the next question
      }
      // Check for Major selection
      if (currentQuestion === 1 && !selectedMajor) {
        alert("Please enter your major before continuing.");
        return;
      }

      // Check for Credit Points input
      if (currentQuestion === 2 && (!creditPoints || creditPoints === 0)) {
        alert("Please enter your credit points before continuing.");
        return;
      }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < activeQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      handleNavigation();
    }
  };
  const questions = [
    {
      questionText: "Are you currently enrolled in a university?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: false },
      ],
    },
    {
      questionText: "Which major are you in?",
      answerOptions: [],
      component: (
        <>
          <div>
            <Select
              label=""
              placeholder="Your Major"
              data={[
                "Biomedical Engineering",
                "Civil Engineering",
                "Civil and Enviromental Engineering",
                "Data Science Engineering",
                "Electrical Engineering",
                "Electronic Engineering",
                "Mechanical Engineering",
                "Mechanical and Mechatronic Engineering",
                "Mechatronic Engineering",
                "Software Engineering",
                "Electrical and Electronic Engineering",
                "Flexible Engineering",
                "Renewable Energy Engineering",
                "Chemical Process Engineering",
              ]}
              className="dropdown"
              onChange={(value) => setSelectedMajor(value)}
            />
            <button
              onClick={handleAnswerButtonClick}
              className="button-questionaire-custom"
            >
              Continue
            </button>
          </div>
        </>
      ),
    },
    {
      questionText: "Whats your Current Credit Rating?",
      answerOptions: [],
      component: (
        <>
          <div>
            <Input
              placeholder="Input component"
              onChange={(e) => setCreditPoints(e.target.value)}
            />
            ;
            <button
              onClick={handleAnswerButtonClick}
              className="button-questionaire-custom"
            >
              Continue
            </button>
          </div>
        </>
      ),
    },
  ];

  const personalityQuestions = [
    {
      questionText: "what is your favourite hobby?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: false },
      ],
    },
    {
      questionText: "what is your gender?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: false },
      ],
    },
  ];

  const activeQuestions = showPersonalityQuestions
    ? personalityQuestions
    : questions;

  return (
    <div className="course-matcher-container">
      {showScore ? (
        <div className="score-sction">{handleNavigation()}</div>
      ) : (
        <>
          <div className="questions-section">
            <div className="question-count">
              <span>{currentQuestion + 1}</span>/{activeQuestions.length}
            </div>
            <div className="question-text">
              {activeQuestions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answers-section">
            {activeQuestions[currentQuestion].component
              ? activeQuestions[currentQuestion].component
              : activeQuestions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        handleAnswerButtonClick(answerOption.answerText)
                      }
                      className="button-questionaire"
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
          </div>
        </>
      )}
    </div>
  );
}

export default CourseMatcher;
