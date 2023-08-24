import React from 'react';
import './headdisply.css'
import Progressbar from '../progressBar/Progressbar'


const HeadDispaly = ({ score, questionNumber }) => {
  return (
    <div className='head-main'>
      <div className="head-item">
        <p className="head-prefix">Question {questionNumber}/10</p>
        <Progressbar max={10} current={questionNumber}/>
      </div>
     
      <div className="head-item">
        <p className="head-prefix">Score</p>
        <h1 className="head-main-text">{score}</h1>
      </div>
    </div>
  );
};

export default HeadDispaly;
