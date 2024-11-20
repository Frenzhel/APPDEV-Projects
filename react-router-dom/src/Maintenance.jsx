import React from 'react';
import NavBar from './Navbar';

export default function Maintenance() {
  return (
    <div className="full-width">
      <h2>Maintenance and Care</h2>
    <NavBar />  
      <h3>Cleaning</h3>
      <ul>
        <li>Disconnect the keyboard from the computer.</li>
        <li>Use a soft, dry cloth to clean the surface.</li>
        <li>For deeper cleaning, carefully remove keycaps and use compressed air to remove debris.</li>
      </ul>

      <h3>Storage</h3>
      <ul>
        <li>Store the keyboard in a cool, dry place.</li>
        <li>Avoid exposure to liquids or extreme temperatures.</li>
      </ul>
    </div>
  )
}