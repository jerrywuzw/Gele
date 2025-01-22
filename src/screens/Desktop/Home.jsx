import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Menu */}
      <nav className="menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a placeholder page for your portfolio.</p>
      </main>
    </div>
  );
};

export default Home;
