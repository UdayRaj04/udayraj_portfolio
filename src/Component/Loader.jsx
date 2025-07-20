import React from 'react';
import '../CSS/loader.css';

const Loader = () => {
  return (
    <>
    <div className="loader-wrapper">
      <h1 className="loader-text">
        <span className="letter">U</span>
        <span className="letter">R</span>
        <span className="letter">S</span>
      </h1>
      <div className='udayraj'>
      <hr className="line" />
      <h1 className="credit">
        Designed with <i className="fa fa-heart pulse"></i> by
        <a href="https://www.instagram.com/udayrajsharma4/"> Uday Raj</a>
      </h1>
      </div>
    </div></>
  );
};

export default Loader;
