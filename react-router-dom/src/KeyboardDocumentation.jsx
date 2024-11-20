import React from 'react';
import NavBar from './Navbar';

export default function KeyboardDocumentation() {
  return (
    <div className="full-width">
      <h2>KB-X1000 Keyboard Documentation</h2>
    <NavBar />  
      <h3>Specifications</h3>
      <ul>
        <li>Switch Type: Cherry MX Red (Mechanical)</li>
        <li>Key Layout: Full-size (104 keys)</li>
        <li>Backlighting: RGB with customizable colors</li>
        <li>Connectivity: Wired (USB 2.0)</li>
        <li>Dimensions: 440 mm x 135 mm x 35 mm</li>
        <li>Weight: 1.2 kg</li>
        <li>Cable Length: 1.8 meters</li>
        <li>Additional Features: Anti-ghosting, N-key rollover, dedicated media controls</li>
      </ul>

      <h3>In the Box</h3>
      <ul>
        <li>KB-X1000 Keyboard</li>
        <li>USB Cable</li>
        <li>User Manual</li>
        <li>Keycap Removal Tool</li>
        <li>Warranty Card</li>
      </ul>

      <h3>Key Features</h3>
      <ul>
        <li><strong>Customizable RGB Backlighting:</strong> Personalize the keyboard’s illumination with a wide range of colors and lighting effects.</li>
        <li><strong>Mechanical Switches:</strong> Cherry MX Red switches for a responsive and smooth typing experience.</li>
        <li><strong>Programmable Keys:</strong> Assign macros and custom functions to any key with the included software.</li>
        <li><strong>Anti-Ghosting & N-Key Rollover:</strong> Ensure accurate keypress registration during intense gaming sessions.</li>
        <li><strong>Dedicated Media Controls:</strong> Easily control music and videos with dedicated media keys.</li>
      </ul>
    </div>
  )
}
