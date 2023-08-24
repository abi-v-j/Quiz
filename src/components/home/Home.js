import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
const home = () => {
  return (
   
      <div className="main">
        <h1>Quiz App</h1>
        <Link to={'/game'} className="btn">
          Start game
        </Link>
        <Link to={'/highscore'} className="btn">
          High Score
        </Link>
      </div>
   
  );
};

export default home;
