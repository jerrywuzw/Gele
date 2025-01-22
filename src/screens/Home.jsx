import React, { useState } from "react";
import "./home.css"; // Importing the CSS file for styles

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility when clicked
  };

  return (
    <div className="home-container">
      {/* Navigation Menu */}
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <div className="logo-title">
          {/* Placeholder for logo */}
          <img src="/logo-placeholder.png" alt="Logo" className="logo" />
          <h1>Align Life</h1>
        </div>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* Menu items */}
        <ul className={`menu-items ${isMenuOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="main-content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a placeholder page for your portfolio.</p>
      </main>
    </div>
  );
};

export default Home;
