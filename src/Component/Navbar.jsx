import React, { useState } from 'react';
import '../CSS/navbar.css';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <img src="udayrs.png" alt="URS" className="logo-img" />
        <div className="logo">
          <Link to="/"  onClick={<Loader/>}>Uday Raj</Link>
        </div>
        <button className="toggle-btn" onClick={handleToggle}>
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li><a href="#about"  onClick={handleLinkClick}>About</a></li>
        <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
        <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
        <li><a href="#work" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
