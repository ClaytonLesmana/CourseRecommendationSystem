import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Navbar from "./Components/Navbar";
import CourseMatcher from "./Pages/CourseMatcher";
import Courses from "./Pages/Courses.jsx";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

import "@mantine/core/styles.css";
import CourseMatcherOutput from "./Pages/CourseMatcherOutput";

import Course from "./Pages/Course";

function App() {
  return (
    <MantineProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/CourseMatcher" element={<CourseMatcher />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/course/:courseName" element={<Course />} />
          <Route
            path="/CourseMatcherOutput"
            element={<CourseMatcherOutput />}
          />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
