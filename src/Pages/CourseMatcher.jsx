import React, { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import "../Styles/main.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Select, Input, Alert } from "@mantine/core";
// import { IconInfoCircle } from "@tabler/icons-react";
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
const courseData = {
  "Electrical Engineering": {
    1: [
      "Mathematics one",
      "Fundamentals of C Programming",
      "Introduction to Electrical and Electronic Engineering",
      "Physical Modelling",
    ],
    1.5: [
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
    ],
    2.5: [
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
    ],
    3.5: [
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
    ],
    4.5: [
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
    ],
    1.5: [
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
    ],
    2.5: [
      "Engineering Project Appraisal",
      "Software Design Studio",
      "Software Engineering Elective two",
    ],
    3: [
      "Designing Sustainable Engineering Projects",
      " Software Development Studio",
      "Software Engineering Elective Three",
    ],
    3.5: [
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
    ],
    4.5: [
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
    ],
    1.5: [
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
    ],
    2.5: [
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
    ],
    3.5: [
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
    ],
    4.5: [
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
    ],
    1.5: [
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
    ],
    2.5: [
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
    ],
    3.5: [
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
    ],
    4.5: [
      "Engineering Capstone",
      "Design in Mechanical and Mechatronic Systems",
      "Mechanical Elective Five",
      "Collaboration in Complex Projects",
    ],
  },
};



function determinYear(creditPoints) {
  if (creditPoints >= 0 && creditPoints <= 24) {
    return 1;
  } else if (creditPoints >= 25 && creditPoints < 49) {
    return 1.5;
  } else if (creditPoints >= 49 && creditPoints < 73) {
    return 2;
  } else if (creditPoints >= 73 && creditPoints < 97) {
    return 2.5;
  } else if (creditPoints >= 97 && creditPoints < 121) {
    return 3;
  } else if (creditPoints >= 121 && creditPoints < 145) {
    return 3.5;
  } else if (creditPoints >= 145 && creditPoints < 169) {
    return 4;
  } else if (creditPoints >= 189 && creditPoints < 193) {
    return 4.5;
  }
}
function getCoursesForMajorAndYear(major, suggestedType, year) {
  const majorType = major || suggestedType;
  return courseData[majorType][year];
}

function determineEngineeringType(answers) {
  let engineeringCounts = {
    "Biomedical Engineering": 0,
    "Civil Engineering": 0,
    "Civil and Enviromental Engineering": 0,
    "Data Science Engineering": 0,
    "Electrical Engineering": 0,
    "Electronic Engineering": 0,
    "Mechanical Engineering": 0,
    "Mechanical and Mechatronic Engineering": 0,
    "Mechatronic Engineering": 0,
    "Software Engineering": 0,
    "Electrical and Electronic Engineering": 0,
    "Renewable Energy Engineering": 0,
    "Chemical Process Engineering": 0,
  };
  // Question 1
  if (
    answers[
      "When buying products, do you ofter consider their enviromental impact or sustainability?"
    ] === "Yes"
  ) {
    engineeringCounts["Civil and Enviromental Engineering"]++;
    engineeringCounts["Renewable Energy Engineering"]++;
  } else if (
    answers[
      "When buying products, do you ofter consider their enviromental impact or sustainability?"
    ] === "No"
  ) {
    engineeringCounts["Biomedical Engineering"]++;
    engineeringCounts["Civil Engineering"]++;
    engineeringCounts["Data Science Engineering"]++;
    engineeringCounts["Electrical Engineering"]++;
    engineeringCounts["Electronic Engineering"]++;
    engineeringCounts["Mechanical Engineering"]++;
    engineeringCounts["Mechanical and Mechatronic Engineering"]++;
    engineeringCounts["Mechatronic Engineering"]++;
    engineeringCounts["Software Engineering"]++;
    engineeringCounts["Electrical and Electronic Engineering"]++;
    engineeringCounts["Chemical Process Engineering"]++;
  }
  // Question 2
  if (
    answers[
      "How important is it for you to work in a field that directly addresses societal or global challenges?"
    ] === "Very important"
  ) {
    engineeringCounts["Civil and Enviromental Engineering"]++;
    engineeringCounts["Biomedical Engineering"]++;
  } else if (
    answers[
      "How important is it for you to work in a field that directly addresses societal or global challenges?"
    ] === "I dont really care"
  ) {
    engineeringCounts["Civil Engineering"]++;
    engineeringCounts["Data Science Engineering"]++;
    engineeringCounts["Electrical Engineering"]++;
    engineeringCounts["Electronic Engineering"]++;
    engineeringCounts["Mechanical Engineering"]++;
    engineeringCounts["Mechanical and Mechatronic Engineering"]++;
    engineeringCounts["Mechatronic Engineering"]++;
    engineeringCounts["Software Engineering"]++;
    engineeringCounts["Electrical and Electronic Engineering"]++;
    engineeringCounts["Renewable Energy Engineering"]++;
    engineeringCounts["Chemical Process Engineering"]++;
  }
  // Question 3
  if (
    answers[
      "Given a complex problem, do you usually start by breaking it down into smaller components or by brainstorming possible solutions with others?"
    ] === "Break it down"
  ) {
    engineeringCounts["Electrical Engineering"]++;
    engineeringCounts["Chemical Process Engineering"]++;
  } else if (
    answers[
      "Given a complex problem, do you usually start by breaking it down into smaller components or by brainstorming possible solutions with others?"
    ] === "Brainstorm"
  ) {
    engineeringCounts["Mechatronic Engineering"]++;
    engineeringCounts["Software Engineering"]++;
  }
  //Question 4
  if (
    answers[
      "If a device at home breaks down, what's your first instinct: to open it up and see the problem, call for help, or replace it?"
    ] === "Open it up"
  ) {
    engineeringCounts["Electronic Engineering"]++;
    engineeringCounts["Mechanical and Mechatronic Engineering"]++;
  } else if (
    answers[
      "If a device at home breaks down, what's your first instinct: to open it up and see the problem, call for help, or replace it?"
    ] === "Call for help"
  ) {
    engineeringCounts["Civil Engineering"]++;
  } else if (
    answers[
      "If a device at home breaks down, what's your first instinct: to open it up and see the problem, call for help, or replace it?"
    ] === "Replace it"
  ) {
    engineeringCounts["Data Science Engineering"]++;
  }
  //Question 5
  if (
    answers[
      "When you come across news about a technological breakthrough, are you more intrigued by the technology itself or the potential societal implications?"
    ] === "Technology"
  ) {
    engineeringCounts["Electrical and Electronic Engineering"]++;
    engineeringCounts["Software Engineering"]++;
  } else if (
    answers[
      "When you come across news about a technological breakthrough, are you more intrigued by the technology itself or the potential societal implications?"
    ] === "Societal Implications"
  ) {
    engineeringCounts["Biomedical Engineering"]++;
    engineeringCounts["Renewable Energy Engineering"]++;
  }
  //Question 6
  if (
    answers[
      "In group projects, are you usually the one to take the lead, ensure the team stays on track, or bring in innovative ideas?"
    ] === "Take the lead"
  ) {
    engineeringCounts["Mechanical Engineering"]++;
  } else if (
    answers[
      "In group projects, are you usually the one to take the lead, ensure the team stays on track, or bring in innovative ideas?"
    ] === "Ensure on track"
  ) {
    engineeringCounts["Electrical Engineering"]++;
  } else if (
    answers[
      "In group projects, are you usually the one to take the lead, ensure the team stays on track, or bring in innovative ideas?"
    ] === "Innovative ideas"
  ) {
    engineeringCounts["Mechatronic Engineering"]++;
  }
  //Question 7
  if (
    answers[
      "When traveling to a new place, do you prefer to have a detailed plan or discover things spontaneously?"
    ] === "Detailed plan"
  ) {
    engineeringCounts["Civil Engineering"]++;
    engineeringCounts["Chemical Process Engineering"]++;
  } else if (
    answers[
      "When traveling to a new place, do you prefer to have a detailed plan or discover things spontaneously?"
    ] === "Spontaneously"
  ) {
    engineeringCounts["Software Engineering"]++;
    engineeringCounts["Data Science Engineering"]++;
  }

  //Question 8
  if (
    answers[
      "When at a beach, are you more likely to build intricate sand structures, or explore the surroundings?"
    ] === "Sand structures"
  ) {
    engineeringCounts["Civil Engineering"]++;
  } else if (
    answers[
      "When at a beach, are you more likely to build intricate sand structures, or explore the surroundings?"
    ] === "Explore"
  ) {
    engineeringCounts["Enviromental Engineering"]++;
    engineeringCounts["Renewable Energy Engineering"]++;
  }
  //Question 9
  if (
    answers[
      "At parties or gatherings, do you usually find yourself discussing the latest scientific advancements, debating societal issues, or sharing DIY projects?"
    ] === "Scientific advancements"
  ) {
    engineeringCounts["Biomedical Engineering"]++;
    engineeringCounts["Electrical and Electronic Engineering"]++;
  } else if (
    answers[
      "At parties or gatherings, do you usually find yourself discussing the latest scientific advancements, debating societal issues, or sharing DIY projects?"
    ] === "Societal issues"
  ) {
    engineeringCounts["Civil and Enviromental Engineering"]++;
  } else if (
    answers[
      "At parties or gatherings, do you usually find yourself discussing the latest scientific advancements, debating societal issues, or sharing DIY projects?"
    ] === "DIY projects"
  ) {
    engineeringCounts["Mechanical and Mechatronic Engineering"]++;
  }
  //Question 10
  if (
    answers[
      "Do you often find yourself being the mediator in disagreements, valuing harmony and consensus?"
    ] === "Yes"
  ) {
    engineeringCounts["Civil and Environmental Engineering"]++;
    engineeringCounts["Renewable Energy Engineering"]++;
  } else if (
    answers[
      "Do you often find yourself being the mediator in disagreements, valuing harmony and consensus?"
    ] === "No"
  ) {
    engineeringCounts["Biomedical Engineering"]++;
    engineeringCounts["Civil Engineering"]++;
    engineeringCounts["Data Science Engineering"]++;
    engineeringCounts["Electrical Engineering"]++;
    engineeringCounts["Electronic Engineering"]++;
    engineeringCounts["Mechanical Engineering"]++;
    engineeringCounts["Mechanical and Mechatronic Engineering"]++;
    engineeringCounts["Mechatronic Engineering"]++;
    engineeringCounts["Software Engineering"]++;
    engineeringCounts["Electrical and Electronic Engineering"]++;
    engineeringCounts["Chemical Process Engineering"]++;
  }
  //Question 11
  if (
    answers[
      "On a free weekend, would you rather visit a museum, go for a nature hike, work on a DIY project, or attend a tech workshop?"
    ] === "Museum"
  ) {
    engineeringCounts["Biomedical Engineering"]++;
  } else if (
    answers[
      "On a free weekend, would you rather visit a museum, go for a nature hike, work on a DIY project, or attend a tech workshop?"
    ] === "Nature hike"
  ) {
    engineeringCounts["Enviromental Engineering"]++;
  } else if (
    answers[
      "On a free weekend, would you rather visit a museum, go for a nature hike, work on a DIY project, or attend a tech workshop?"
    ] === "DIY project"
  ) {
    engineeringCounts["Mechanical Engineering"]++;
  } else if (
    answers[
      "On a free weekend, would you rather visit a museum, go for a nature hike, work on a DIY project, or attend a tech workshop?"
    ] === "Tech workshop"
  ) {
    engineeringCounts["Software Engineering"]++;
    engineeringCounts["Data Science Engineering"]++;
  }
  //Question 12
  if (
    answers[
      "If you had to choose a game to play, would it be a strategy board game, a fast-paced video game, a puzzle, or a simulation game?"
    ] === "Strategy"
  ) {
    engineeringCounts["Civil Engineering"]++;
    engineeringCounts["Chemical Process Engineering"]++;
  } else if (
    answers[
      "If you had to choose a game to play, would it be a strategy board game, a fast-paced video game, a puzzle, or a simulation game?"
    ] === "Fast-paced"
  ) {
    engineeringCounts["Electronic Engineering"]++;
  } else if (
    answers[
      "If you had to choose a game to play, would it be a strategy board game, a fast-paced video game, a puzzle, or a simulation game?"
    ] === "Puzzle"
  ) {
    engineeringCounts["Mechatronic Engineering"]++;
  } else if (
    answers[
      "If you had to choose a game to play, would it be a strategy board game, a fast-paced video game, a puzzle, or a simulation game?"
    ] === "Simulation"
  ) {
    engineeringCounts["Data Science Engineering"]++;
  }
  //Question 13
  if (
    answers[
      "When faced with a long queue or traffic, do you often think of ways to optimize the system?"
    ] === "Yes"
  ) {
    engineeringCounts["Data Science Engineering"]++;
    engineeringCounts["Electronic Engineering"]++;
  } else if (
    answers[
      "When faced with a long queue or traffic, do you often think of ways to optimize the system?"
    ] === "No"
  ) {
    engineeringCounts["Biomedical Engineering"]++;
    engineeringCounts["Civil Engineering"]++;
    engineeringCounts["Civil and Enviromental Engineering"]++;
    engineeringCounts["Electrical Engineering"]++;
    engineeringCounts["Mechanical Engineering"]++;
    engineeringCounts["Mechanical and Mechatronic Engineering"]++;
    engineeringCounts["Mechatronic Engineering"]++;
    engineeringCounts["Software Engineering"]++;
    engineeringCounts["Electrical and Electronic Engineering"]++;
    engineeringCounts["Renewable Energy Engineering"]++;
    engineeringCounts["Chemical Process Engineering"]++;
  }
  //Question 14
  if (
    answers[
      "If the internet goes down at home, is your instinct to troubleshoot the router or check with neighbors?"
    ] === "Troubleshoot"
  ) {
    engineeringCounts["Electrical and Electronic Engineering"]++;
    engineeringCounts["Software Engineering"]++;
  } else if (
    answers[
      "If the internet goes down at home, is your instinct to troubleshoot the router or check with neighbors?"
    ] === "Check with the neighbour"
  ) {
    engineeringCounts["Civil Engineering"]++;
  }
  //Question 15
  if (
    answers[
      "When cooking, do you strictly follow recipes or experiment with ingredients?"
    ] === "Follow Recepies"
  ) {
    engineeringCounts["Chemical Process Engineering"]++;
  } else if (
    answers[
      "When cooking, do you strictly follow recipes or experiment with ingredients?"
    ] === "Experiment"
  ) {
    engineeringCounts["Biomedical Engineering"]++;
    engineeringCounts["Renewable Energy Engineering"]++;
  }
  let predictedEngineering = null;
  let maxCount = -1;
  let tiedEngineeringTypes = [];

  for (let type in engineeringCounts) {
    if (engineeringCounts[type] > maxCount) {
      predictedEngineering = type;
      maxCount = engineeringCounts[type];
      tiedEngineeringTypes = [type]; // Reset the tied types array with the new highest type
    } else if (engineeringCounts[type] === maxCount) {
      tiedEngineeringTypes.push(type); // Add to the tied types array if count is same as max
    }
  }
  if (tiedEngineeringTypes.length > 1) {
    const randomIndex = Math.floor(Math.random() * tiedEngineeringTypes.length);
    predictedEngineering = tiedEngineeringTypes[randomIndex];
  }

  return predictedEngineering;
}

function CourseMatcher() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const navigate = useNavigate();
  const [selectedMajor, setSelectedMajor] = useState("");
  const [creditPoints, setCreditPoints] = useState(0);
  const [showPersonalityQuestions, setShowPersonalityQuestions] =
    useState(false);
  const [answers, setAnswers] = useState({});
  const handleNavigation = () => {

    const year = determinYear(creditPoints);
    const year2 = 0;
    const suggestedEngineeringType = determineEngineeringType(answers);
    const courses = getCoursesForMajorAndYear(
      selectedMajor,
      suggestedEngineeringType,
      year
    );
    const allCourses = getCoursesForMajorAndYear(
      selectedMajor,
      suggestedEngineeringType,
      year2
    );

    navigate("/CourseMatcherOutput", {
      state: {
        selectedMajor,
        creditPoints,
        suggestedEngineeringType,
        year,
        courses,
        // allCourses,
      },

      
    });
  };

  // const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (answerText) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [activeQuestions[currentQuestion].questionText]: answerText,
    }));
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
                "Electrical Engineering",
                "Mechanical Engineering",
                "Mechatronic Engineering",
                "Software Engineering",

                "Electrical and Electronic Engineering",
                "Renewable Energy Engineering",
                "Chemical Process Engineering",

              ]}
              className="dropdown"
              name="major"
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
              name="creditPoints"
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
    // Value Ethics Questions
    {
      questionText:
        "When buying products, do you often consider their environmental impact or sustainability?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: false },
      ],
    },
    {
      questionText:
        "How important is it for you to work in a field that directly addresses societal or global challenges?",
      answerOptions: [
        { answerText: "Very important", isCorrect: false },
        { answerText: "I dont really care", isCorrect: false },
      ],
    },
    //Probelm solving & Approach
    {
      questionText:
        "Given a complex problem, do you usually start by breaking it down into smaller components or by brainstorming possible solutions with others?",
      answerOptions: [
        { answerText: "Break it down", isCorrect: false },
        { answerText: "Brainstorm", isCorrect: false },
      ],
    },
    {
      questionText:
        "If a device at home breaks down, what's your first instinct: to open it up and see the problem, call for help, or replace it?",
      answerOptions: [
        { answerText: "Open it up", isCorrect: false },
        { answerText: "Call for help", isCorrect: false },
        { answerText: "Replace it", isCorrect: false },
      ],
    },
    {
      questionText:
        "When you come across news about a technological breakthrough, are you more intrigued by the technology itself or the potential societal implications?",
      answerOptions: [
        { answerText: "Technology", isCorrect: false },
        { answerText: "Societal Implications", isCorrect: false },
      ],
    },
    //Risk and decision making
    {
      questionText:
        "In group projects, are you usually the one to take the lead, ensure the team stays on track, or bring in innovative ideas?",
      answerOptions: [
        { answerText: "Take the lead", isCorrect: false },
        { answerText: "Ensure on track", isCorrect: false },
        { answerText: "Innovative ideas", isCorrect: false },
      ],
    },
    {
      questionText:
        "When traveling to a new place, do you prefer to have a detailed plan or discover things spontaneously?",
      answerOptions: [
        { answerText: "Detailed plan", isCorrect: false },
        { answerText: "Spontaneously", isCorrect: false },
      ],
    },
    //Personal traits and behaviour
    {
      questionText:
        "When at a beach, are you more likely to build intricate sand structures, or explore the surroundings?",
      answerOptions: [
        { answerText: "Sand structures", isCorrect: false },
        { answerText: "Explore", isCorrect: false },
      ],
    },
    {
      questionText:
        "At parties or gatherings, do you usually find yourself discussing the latest scientific advancements, debating societal issues, or sharing DIY projects?",
      answerOptions: [
        { answerText: "Scientific advancements", isCorrect: false },
        { answerText: "Societal issues", isCorrect: false },
        { answerText: "DIY projects", isCorrect: false },
      ],
    },
    {
      questionText:
        "Do you often find yourself being the mediator in disagreements, valuing harmony and consensus?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: false },
      ],
    },
    //Hobbies and pastimes
    {
      questionText:
        "On a free weekend, would you rather visit a museum, go for a nature hike, work on a DIY project, or attend a tech workshop?",
      answerOptions: [
        { answerText: "Museum", isCorrect: false },
        { answerText: "Nature hike", isCorrect: false },
        { answerText: "DIY project", isCorrect: false },
        { answerText: "Tech workshop", isCorrect: false },
      ],
    },
    {
      questionText:
        "If you had to choose a game to play, would it be a strategy board game, a fast-paced video game, a puzzle, or a simulation game?",
      answerOptions: [
        { answerText: "Strategy", isCorrect: false },
        { answerText: "Fast-paced", isCorrect: false },
        { answerText: "Puzzle", isCorrect: false },
        { answerText: "Simulation", isCorrect: false },
      ],
    },
    //Daily Behaviour
    {
      questionText:
        "When faced with a long queue or traffic, do you often think of ways to optimize the system?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: false },
      ],
    },
    {
      questionText:
        "If the internet goes down at home, is your instinct to troubleshoot the router or check with neighbors?",
      answerOptions: [
        { answerText: "Troubleshoot", isCorrect: false },
        { answerText: "Check with the neighbour", isCorrect: false },
      ],
    },
    {
      questionText:
        "When cooking, do you strictly follow recipes or experiment with ingredients?",
      answerOptions: [
        { answerText: "Follow Recepies", isCorrect: false },
        { answerText: "Experiment", isCorrect: false },
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
