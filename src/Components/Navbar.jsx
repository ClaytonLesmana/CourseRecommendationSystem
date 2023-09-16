import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={Logo} className="logo-img" alt="Logo" />
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/CourseMatcher">Course Matcher</Link>
        <Link to="/Course">Course</Link>
        <Link to="/Contact">Contact</Link>
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
