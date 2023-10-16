import { useState } from "react";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Navbar from "./Components/Navbar";
import CourseMatcher from "./Pages/CourseMatcher";
import Courses from "./Pages/Courses";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import "@mantine/core/styles.css";
import CourseMatcherOutput from "./Pages/CourseMatcherOutput";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <MantineProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/CourseMatcher" element={<CourseMatcher />} />
          <Route path="/Contact" element={<Contact />} />
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
