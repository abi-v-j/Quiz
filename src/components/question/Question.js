import React, { useState } from 'react';
import './question.css';
const Question = ({ question, changeQuestion }) => {
  const [classToApply, setClassToApply] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [answering, setAnswering] = useState(false);

  const checkAnswer = (selectedAnswer) => {
    if (answering) return;
    const classToApply =
    selectedAnswer === question.answer ? 'correct' : 'incorrect';

  setClassToApply(classToApply);
    setAnswering(true);
    setSelectedAnswer(selectedAnswer);

   
    const bonus = selectedAnswer === question.answer ? 10 : 0;

    setTimeout(() => {
      setSelectedAnswer(-1);
      setAnswering(false);
      changeQuestion(bonus);
    }, 1000);
  };

  

  return (
    <>
      <h2 dangerouslySetInnerHTML={{ __html: question.question }}></h2>
      {question.answerChoices.map((choice, key) => (
        <div
          key={key}
          className={`choice-container ${
          selectedAnswer === key&&classToApply
          }`}
          onClick={() => checkAnswer(key)}
        >
          <p className="choice-prefix">{key + 1}</p>
          <p
            className="choice-text"
            dangerouslySetInnerHTML={{ __html: choice }}
          ></p>
        </div>
      ))}
    </>
  );
};

export default Question;
