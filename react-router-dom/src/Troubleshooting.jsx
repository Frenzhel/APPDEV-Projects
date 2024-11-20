import React from 'react';
import NavBar from './Navbar';

export default function Troubleshooting() {
  return (
    <div className="full-width">
      <h2>Troubleshooting</h2>
    <NavBar />  
      <h3>Keyboard Not Responding</h3>
      <ul>
        <li>Ensure the USB connection is secure.</li>
        <li>Try connecting the keyboard to a different USB port.</li>
        <li>Restart your computer if necessary.</li>
      </ul>

      <h3>Backlighting Not Working</h3>
      <ul>
        <li>Check if the backlight is disabled or set to a minimal brightness level.</li>
        <li>Verify that the configuration software is properly installed.</li>
      </ul>

      <h3>Key Not Registering</h3>
      <ul>
        <li>Confirm that no physical obstructions are affecting the key.</li>
        <li>Test the key in different applications to determine if the issue is software-related.</li>
      </ul>
    </div>
  )
}