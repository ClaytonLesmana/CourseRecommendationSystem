
import React, { useState, useEffect } from 'react';
import '../Styles/Home.css'; // Adjust the import path

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: 'Course Matcher', description: 'Take the questionnare to determine which course would best suit your preferences' },
    { title: 'Course', description: 'See which courses are avialable withing different universites to see what could be your future career' },
    { title: 'Contact', description: 'Contact us for any questions or inquiries' }
  ];

  const slideCount = slides.length;

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slideCount);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((currentSlide - 1 + slideCount) % slideCount);
  };

  useEffect(() => {
    // Automatically change the slide every 7 seconds
    const intervalId = setInterval(goToNextSlide, 7000);

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, [currentSlide]);

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Course Matcher</h1>
      <p className="home-description">Find the perfect courses to match your learning goals.</p>

      <div className="slideshow-card">
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
      </div>
    </div>
  );
}

export default Home;