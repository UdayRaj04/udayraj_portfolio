import React from 'react'
import '../CSS/about.css'
import CoderProfile from './CoderProfile';

const About = () => {
   return (
    <div id="about" className="about-section">
  <div className="about-sidebar">
    <span>ABOUT ME</span>
    <span className="about-line"></span>
  </div>
  <CoderProfile/>
  <div className="about-content">
    <div className="about-info">
      <p className="about-subtitle">Who I am?</p>
      <p className="about-text">
        My name is Uday Raj Sharma. I am a professional and enthusiastic programmer in my daily life.
        I am a quick learner with a self-learning attitude. I love to learn and explore new technologies 
        and am passionate about problem-solving. I love almost all the stacks of web application development 
        and love to make the web more open to the world. My core skill is based on JavaScript , Java . 
        I am available for any kind of job opportunity that suits my skills and interests.
      </p>
    </div>
  </div>
</div>


  );
}

export default About