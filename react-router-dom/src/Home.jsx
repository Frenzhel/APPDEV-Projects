import React from 'react';
import NavBar from './Navbar';

export default function Home() {
  return (
    <div className="full-width">
      <header>
        <h1>KB X1000</h1>
        <NavBar />
        <h3>Product Overview</h3>
        <p>The KB-X1000 is a high-performance mechanical keyboard designed for
          gamers, professionals, and everyday users who demand precision and comfort. It features
          customizable RGB backlighting, durable mechanical switches, and programmable keys to
          enhance your typing and gaming experience.</p>
      </header>
    </div>
  )
}
