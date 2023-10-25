import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CourseMatcher from "./Pages/CourseMatcher";
import Courses from "./Pages/Courses.jsx";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Course from "./Pages/Course";
function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/CourseMatcher" element={<CourseMatcher />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/course/:courseName" element={<Course />} />
      </Routes>
    </Router>
  );
}

export default App;
