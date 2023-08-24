import React, { useState } from 'react';
import './savescoreform.css';
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import db from '../Firebase/Firebase';
const SaveScoreForm = ({ score, scoreSaved }) => {
  const [username, setUsername] = useState('');
  const myCollection = collection(db, 'scores');

  const onUserChange = (e) => {
    const updatedUsername = e.target.value;
    setUsername(updatedUsername);
  };
  const saveHighScore = async (e) => {
    e.preventDefault();
    const data = {
      name: username,
      score: score,
    };

    try {
      await addDoc(myCollection, data);
      scoreSaved();
    } catch (error) {
      console.error('Error saving score:', error);
    }
  };
  return (
    <div>
      <h1>Score : {score}</h1>
      <form onSubmit={saveHighScore}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="enter name"
          value={username}
          onChange={onUserChange}
        />
        <button type="submit" disabled={!username}>
          save
        </button>
      </form>
      <Link to={'/'} className="lnk">
        Go Home
      </Link>
    </div>
  );
};

export default SaveScoreForm;
