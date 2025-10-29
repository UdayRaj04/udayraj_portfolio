import React, { useEffect, useState } from "react";
import "../CSS/certi.css";

const certificates = [
  {
    name: "MERN Stack Dev.- Ardent",
    image: "ardent.jpg", // public folder or use import
    link: "https://certificate.ardentsoftware.co.in/generate/136388"
  },
  {
    name: "2025 Core JAVA -Udemy",
    image: "ggg.jpg",
    link: "https://www.udemy.com/certificate/UC-71167b60-53a2-4791-9713-e49512997cc3/"
  },{
    name: "Practice Next.js & React.js Web App",
    image: "sggs.jpg",
    link: "https://www.udemy.com/certificate/UC-0876325e-ce36-48a3-a46a-05be3547ec88"
  }
  ,{
    name: "DSU DevHack 2024",
    image: "dsu.png"
  },{
    name: "HackSpire 2024",
    image: "hackspire.png"
  },
  {
    name: "Adobe GenSolve 2024",
    image: "adobe.jpg",
  },{
    name: "SIH Internal 2024",
    image: "sih24.jpg"
  }
];

const Certificates = () => {
  const [selected, setSelected] =  useState(0); // ✅ default first certificate

  useEffect(() => {
    // Ensure first certificate is active on load
    if (certificates.length > 0) {
      setSelected(0);
    }
  }, [certificates]);
  return (
    <div id="Certificates">
    <div className="edu-heading-bar">
        <span className="edu-heading-label">
          <i className="fas fa-certificate"></i> Certificates
        </span>
        <span className="edu-heading-line"></span>
      </div>
    <div className="certificates-container">
      <div className="cert-list">
        {certificates.map((cert, index) => (
          <div className="cert-list-l">
          <button
            key={index}
            className={`cert-button ${selected === index ? "active" : ""}`}
            onClick={() => setSelected(index)}
          >
            {cert.name}
          </button>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div className="cert-display">
          <a href={certificates[selected].link} target="_blank" rel="noopener noreferrer">
            <img src={certificates[selected].image} alt={certificates[selected].name} />
          </a>
        </div>
      )}
    </div>
    </div>
  );
};

export default Certificates;
