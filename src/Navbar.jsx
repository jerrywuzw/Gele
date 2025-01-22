import React, { useState } from 'react';
import './navbar.css';
import geleLogo from './assets/Gele-logo.png'; // Adjust path if needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left: Logo and Title */}
      <div className="logo-title">
        <img src={geleLogo} alt="Gele Logo" className="logo" />
        <h1>Gele</h1>
      </div>

      {/* Right: Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Dropdown Menu */}
      <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#agenda">Agenda</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
