import React from "react";
import NavBar from "./Navbar";

export default function UseKeyboard() {
    return(
        <div className="full-width">
            <h2>Using the Keyboard</h2>
        <NavBar />    
            <h3>Basic Typing</h3>
            <p>Simply start typing; the keyboard is pre-configured with standard key mappings.</p>
            <h3>Customizing Backlighting</h3>
            <p>Press Fn + F9 to cycle through preset lighting effects.</p>
            <p>Use the configuration software to create custom lighting profiles.</p>
            <h3>Programming Keys</h3>
            <p>Open the configuration software.</p>
            <p>Select the key you want to program.</p>
            <p>Assign a macro or function and save your changes.</p>
            <h3>Using Media Controls</h3>
            <p>Use the dedicated media keys (Play/Pause, Volume Up/Down, Mute) for easy media
            control.</p>
        </div>
    )
}