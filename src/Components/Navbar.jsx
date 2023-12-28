import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import Logo from "../assets/Logo.png";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> personal-repo/main

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={Logo} className="logo-img" alt="Logo" />
      <nav ref={navRef}>
<<<<<<< HEAD
        <Link to="/">Home</Link>
        <Link to="/CourseMatcher">Course Matcher</Link>
        <Link to="/Courses">Course</Link>
        <Link to="/Contact">Contact</Link>
=======
        <a href="/#">Home</a>
        <a href="/#">Course Matcher</a>
        <a href="/#">Course</a>
        <a href="/#">Contact</a>
>>>>>>> personal-repo/main
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
