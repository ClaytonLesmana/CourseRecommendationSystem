import React, { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import "../Styles/main.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Select, Input } from "@mantine/core";
import { Button } from "bootstrap";
function CourseMatcher() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const navigate = useNavigate();
  const [selectedMajor, setSelectedMajor] = useState("");
  const [creditPoints, setCreditPoints] = useState(0);
  const handleNavigation = () => {
    navigate("/CourseMatcherOutput", {
      state: { selectedMajor, creditPoints },
    });
  };

  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const questions = [
    {
      questionText: "What faculty are you in?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
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
    {
      questionText: "Whats your expected Workload:?",
      answerOptions: [
        { answerText: "Part-time", isCorrect: false },
        { answerText: "Full-time", isCorrect: false },
      ],
    },
  ];

  return (
    <div className="course-matcher-container">
      {showScore ? (
        <div className="score-sction">{handleNavigation()}</div>
      ) : (
        <>
          <div className="questions-section">
            <div className="question-count">
              <span>{currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answers-section">
            {questions[currentQuestion].component
              ? questions[currentQuestion].component
              : questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        handleAnswerButtonClick(answerOption.isCorrect)
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
