import React from 'react';
import Navbar from '../Navbar'; // Adjust the path as needed
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="main-content">
        <h1>Welcome to Gele</h1>
        <p>This is the homepage content.</p>
      </main>
    </div>
  );
};

export default Home;
