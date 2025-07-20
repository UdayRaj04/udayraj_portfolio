import React, { useEffect, useState } from 'react';
import projectsData from './project.json';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../CSS/project.css";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="work projects-wrapper" id="work">
      <div className="edu-heading-bar">
        <span className="edu-heading-label">
          <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
        </span>
        <span className="edu-heading-line"></span>
      </div>

      <div className="box-container">
        {displayedProjects.map((project, index) => (
          <div key={index} className={`grid-item ${project.category}`}>
            <div className="box tilt" style={{ width: '380px', margin: '1rem' }}>
              <img
                src={project.image}
                alt={project.name}
                draggable="false"
              />
              <div className="content">
                <div className="tag">
                  <h3>{project.name}</h3>
                </div>
                <div className="desc">
                  <p>{project.desc}</p>
                  <div className="btns">
                    <a href={project.links.view} className="btn" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-eye"></i> View
                    </a>
                    <a href={project.links.code} className="btn" target="_blank" rel="noopener noreferrer">
                      Code <i className="fas fa-code"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="load-more-container">
          <button className="btn load-more-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less ^' : 'Show More ^'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Project;
