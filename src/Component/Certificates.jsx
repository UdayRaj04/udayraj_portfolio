import React, { useState } from "react";
import "../CSS/certi.css";

const certificates = [
  {
    name: "Full Stack Web Development - Coursera",
    image: "uday.png", // public folder or use import
    link: "https://example.com/fullstack-cert"
  },
  {
    name: "Advanced Node.js - Udemy",
    image: "/certificates/nodejs.jpg",
    link: "https://example.com/nodejs-cert"
  },
  {
    name: "MySQL for Developers - EdX",
    image: "/certificates/mysql.jpg",
    link: "https://example.com/mysql-cert"
  }
];

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="certificates-container">
      <div className="cert-list">
        {certificates.map((cert, index) => (
          <button
            key={index}
            className={`cert-button ${selected === index ? "active" : ""}`}
            onClick={() => setSelected(index)}
          >
            {cert.name}
          </button>
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
  );
};

export default Certificates;
