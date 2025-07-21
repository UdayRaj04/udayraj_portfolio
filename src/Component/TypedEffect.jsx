// TypedEffect.jsx
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "../CSS/type.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

const TypedEffect = () => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: [
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "AI/ML",
  "Data Analyst"
],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
      loop: true,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

   const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation once on scroll into view
          observer.unobserve(entry.target); // Optional: remove if you want repeated animation
        }
      },
      { threshold: 0.1 } // When 40% of the element is visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  

  return (<div className="atype">
    <div className="intro-container">
      <h2>Hi ,<br />I'm <span className="highlight">Uday </span>Raj Sharma</h2>
      <p>I am into <span className="typing-text" ref={typedElement}></span></p>
<div className="so">
            <a href="https://www.linkedin.com/in/udayrajsharma" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
            <a href="https://www.facebook.com/sharmarajuday" className="fab fa-facebook" target="_blank" rel="noopener noreferrer" aria-label="Twitter"></a>
            <a href="https://github.com/UdayRaj04" className="fab fa-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
            <a href="mailto:sharmarajuday@gmail.com" className="fas fa-envelope" target="_blank" rel="noopener noreferrer" aria-label="Mail"></a>
            <a href="https://www.instagram.com/udayrajsharma4/" className="fab fa-instagram" target="_blank" rel="noopener noreferrer" aria-label="Telegram"></a>
          </div>
       <div className="button-group">
      <a href="#contact" className="contact-wrapper">
        <button className="contact-btn">
          <span>Contact me</span>
          <RiContactsFill size={16} />
        </button>
      </a>

      <a
        className="resume-btn"
        role="button"
        target="_blank"
        rel="noopener noreferrer"
        href="uday_cv.pdf"
      >
        <span>Get Resume</span>
        <MdDownload size={16} />
      </a>
    </div>
    </div>
    <div className="ctype">
    <div className="btype">
        <img ref={imgRef} draggable="false" src="uday.png" alt="Uday" className="imguday" />
    </div>
    </div>
    </div>
  );
};

export default TypedEffect;
