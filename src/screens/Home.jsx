import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Video Section */}
      <div className="video-wrapper">
        <video className="homepage-video" controls autoPlay loop muted>
          <source src="./assets/videos/logoSpin.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Home;
