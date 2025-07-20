import React from "react";
import Marquee from "react-fast-marquee";
import "../CSS/skill.css"; // Import CSS

function Skills() {
  const skillsData = [
    "C",
    "Python",
    "Java",
  "Javascript",
  "HTML",
  "CSS",
  // "Typescript",
  "React",
  "NodeJS",
  // "Next JS",
  "Tailwind",
  "MongoDB",
  "MySQL",
  // "PostgreSQL",
  "Git",
  // "Tensorflow",
  // "AWS",
  "Bootstrap",
  "MS Office",
  "Canva",
  "Photoshop"
  // ,
  // "Docker",
  // "Go",
  // "Figma",
  // "Firebase",
  // "MaterialUI",
  // "Nginx",
  // "Strapi"
];

const skillsImage = (skill) => {
  const images = {
    C: "/skills/c.svg",
    Python: "/skills/python.svg",
    Java: "/skills/java.svg",
    HTML: "/skills/html.svg",
    CSS: "/skills/css.svg",
    Javascript: "/skills/javascript.svg",
    React: "/skills/react.svg",
    NodeJS: "/skills/nodejs.svg",
    "Next JS": "/skills/nextjs.svg",
    Tailwind: "/skills/tailwind.svg",
    MongoDB: "/skills/mongoDB.svg",
    "MS Office":"/skills/microsoftoffice.svg",
    MySQL: "/skills/mysql.svg",
    PostgreSQL: "/skills/postgresql.svg",
    Git: "/skills/git.svg",
    AWS: "/skills/aws.svg",
    Bootstrap: "/skills/bootstrap.svg",
    Docker: "/skills/docker.svg",
    Go: "/skills/go.svg",
    Figma: "/skills/figma.svg",
    Firebase: "/skills/firebase.svg",
    MaterialUI: "/skills/materialui.svg",
    Nginx: "/skills/nginx.svg",
    Strapi: "/skills/strapi.svg",
    Tensorflow: "/skills/tensorflow.svg",
    Canva: "/skills/canva.svg",
    Photoshop: "/skills/photoshop.svg",


  };

  return images[skill] || "/skills/default.svg";
};


  return (
    <div id="skills" className="skills-section">
      <div className="skills-header">
        <hr className="line" />
        <span className="skills-title">Skills</span>
        <hr className="line" />
      </div>

      <div className="marquee-container">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="skill-card" key={id}>
            <div className="gradient-line"></div>
              <div className="card-content">
                <div className="skill-inner">
                  <img
                    src={skillsImage(skill)}
                    alt={skill}
                    className="skill-icon"
                  />
                  <p className="skill-name">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
