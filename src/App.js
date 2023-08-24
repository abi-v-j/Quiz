import React from 'react'
import Home from './components/home/Home'
import HighScore from './components/highScore/HighScore'
import Game from './components/game/Game'
import './App.css'
import {Route, Routes} from 'react-router-dom'
const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/highscore' element={<HighScore/>}/>
        <Route path='/game' element={<Game/>}/>
      </Routes>
    
    </div>
  )
}

export default App
