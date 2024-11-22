import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Games from './components/Games'
import NotFound from './NotFound'
import Game from './components/Game'

export default function App() {

  return (
    <>
      <nav>
        <h1>This is my React Page</h1>
        <ul >
          <li ><Link to="/">Home</Link></li>
          <li ><Link to="/about">About</Link></li>
          <li ><Link to="/games">Games</Link></li>
        </ul>
      </nav>

      {/*This are the Routes for the Application*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" >
          <Route index element={<Games />} />
          <Route path=':gameId' element={<Game />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}