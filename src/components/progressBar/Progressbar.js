import React from 'react'
import './progressbar.css'
const Progressbar = ({max, current}) => {
    const width = (current/max)*100;
  return (
    <div id='progressBar'>
        <div id='progressBarFull' style={{width:`${width}%`}}></div>
    </div>
  )
}

export default Progressbar
