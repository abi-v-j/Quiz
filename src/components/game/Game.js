import React, { useState,  useEffect } from 'react';
import Question from '../question/Question';
import { loadedQuestion } from '../../helpers/QuestionsHelper';
import CircularProgress from '@mui/material/CircularProgress';
import './game.css';
import HeadDisply from '../headDisplay/HeadDisply';
import SaveScoreForm from '../savescoreform/SaveScoreForm';
import { useNavigate } from 'react-router-dom';

const Game = () => {

  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [done, setDone] = useState(false);

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('hi');
        const questions = await loadedQuestion();
        console.log(questions);
        setQuestions(questions);
        setCurrentQuestion(questions[0]);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
  
    fetchData();
  }, []);
  const scoreSaved = () => {
   navigate('/');
  };

  const changeQuestion = async(bonus = 0) => {
    if (questions.length === 0) {

      setDone(true);
      setScore(prevScore => prevScore + bonus);
      return;
    }
   try{
    const randomQuestionIndex = Math.floor(Math.random() * questions.length);
    
    const newCurrentQuestion = questions[randomQuestionIndex];
    const remainingQuestions = [...questions];
    remainingQuestions.splice(randomQuestionIndex, 1);
    setQuestions(remainingQuestions);
    setCurrentQuestion(newCurrentQuestion);
    setLoading(false);
    setScore(prevScore => prevScore + bonus);
    setQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1);

   }catch(err)
   {
    console.error(err);
   }
   
   
   
  };

  return (
    <div className="main">
      <div className="load">
        {loading && !done && <CircularProgress />}
        {done && <SaveScoreForm score={score} scoreSaved={scoreSaved} />}
      </div>

      {!done && !loading && currentQuestion && (
        <>
          <HeadDisply score={score} questionNumber={questionNumber} />
          <Question question={currentQuestion} changeQuestion={changeQuestion} />
        </>
      )}
    </div>
  );
};

export default Game;
