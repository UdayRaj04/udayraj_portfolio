import React from 'react';
import '../CSS/education.css'

const educationData = [
  {
    title: 'Bachelor of Technology',
    name: 'Future Institute of Engineering and Management',
    stream: 'Computer Science and Engineering (Data Science)',
    year: '2022 - 2026',
    board: 'Broad - MAKAUT',
  },
  {
    title: 'Higher Secondary',
    name: 'Tollgunge Ashoke Nagar Vidyapith',
    stream: 'Stream - Science',
    year: '2020-2022',
    board: 'Broad - WBCHSE',
  },
  {
    title: 'Secondary',
    name: 'Mass Education High School',
    stream:" " ,
    year: '2020',
    board: 'Broad - WBBSE',
  },
];
 
const Education = () => {
  return (
    <>
  <div className="edu-heading-bar" id='education'>
    <span className="edu-heading-label">
      <i className="fas fa-graduation-cap"></i> MY EDUCATION
    </span>
    <span className="edu-heading-line"></span>
  </div>

  <div className="jobs-container">
    {educationData.map((edu, index) => (
      <div key={index} className="all">
        <div className="title">
          {edu.title}
          <h4 className="year">{edu.year}</h4>
        </div>
        <div className="jobs-tab-content">
          <h4>{edu.name}</h4>
          <h5 className="job-range">{edu.stream}</h5>
          <p className="edu-board">{edu.board}</p>
        </div>
      </div>
    ))}
  </div>
</>

  );
}

export default Education