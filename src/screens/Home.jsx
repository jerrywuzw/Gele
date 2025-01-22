import React, { useState } from 'react';
import './home.css';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-container">
      <nav className="menu">
        {/* Left side: Logo and Title */}
        <div className="logo-title">
          <img src="/lGele-logo.png" alt="Logo" className="logo" />
          <h1>Gele</h1>
        </div>

        {/* Right side: Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* Dropdown Menu */}
        <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#agenda">Agenda</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
