import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import db from '../Firebase/Firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import { useState } from 'react';
import './highscore.css';
import Card from '../cards/Card';
const HighScore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const docSnap = await getDocs(query(collection(db, 'scores')));
      if (docSnap.docs.length > 0) {
        const data = docSnap.docs.map((doc) => ({
          propertyId: doc.id,
          ...doc.data(),
        }));
        console.log(data);
        setData(data);
      } else {
        console.log('No such document!');
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="main">
        <div className="button">
          <Link to={'/'} className="lnk">
            Go Home
          </Link>
        </div>
        <div className="card-container">
          <h1>Scores</h1>
          {data.map((win, index) => (
            <Card key={index} item={win} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HighScore;
