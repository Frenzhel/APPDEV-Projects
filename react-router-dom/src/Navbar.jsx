import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="full-width">
        <nav className="navbar">
            <nav className="pixel-effect">
                <ul>
                    <li><Link to="/">Home <br /></Link></li>
                    <li><Link to="/keyboard-doc">Keyboard Documentation</Link></li>
                    <li><Link to="/setup-instructions">Setup Instructions</Link></li>
                    <li><Link to="/use-keyboard">Using the Keyboard</Link></li>
                    <li><Link to="/troubleshooting">Troubleshooting <br /></Link></li>
                    <li><Link to="/maintenance">Maintenance & Care</Link></li>
                    <li><Link to="/warranty-support">Warranty & Support</Link></li>
                </ul>
            </nav>
        </nav>
    </div>
    
  )
}