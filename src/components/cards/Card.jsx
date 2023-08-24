import React from 'react'
import './card.css'
const Card = ({ item }) => {
  return (
    <div className="card">
      <h1>{item.name}</h1>
      <p>Score: {item.score}</p>
    </div>
  )
}

export default Card
