// TypedEffect.jsx
import React, { useEffect, useRef } from "react";
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
        "Frontend Development",
        "Backend Development",
        "Web Development",
        "AIML",
        "Data Analist"
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
        href="{personalData.resume}"
      >
        <span>Get Resume</span>
        <MdDownload size={16} />
      </a>
    </div>
    </div>
    <div className="ctype">
    <div className="btype">
        <img  draggable="false" src="uday.png" alt="Uday" className="imguday" />
    </div>
    </div>
    </div>
  );
};

export default TypedEffect;
