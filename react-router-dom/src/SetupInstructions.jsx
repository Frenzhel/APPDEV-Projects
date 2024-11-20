import React from "react";
import NavBar from "./Navbar";

export default function SetupInstructions() {
    return(
        <div className="full-width">
            <h2>Setup Instructions</h2>
        <NavBar />
            <h3>Unboxing</h3>
            <p>Carefully remove the keyboard and accessories from the box.</p>
            <h3>Connecting the Keyboard</h3>
            <p>Plug the USB cable into an available USB port on your computer. The keyboard should be automatically recognized and ready for use.</p>
            <h3>Software Installation (Optional)</h3>
            <ul>
                <li>Download the configuration software from the manufacturer's website if you wish to customize key functions or lighting.</li>
                <li>Follow the on-screen instructions to install the software.</li>
            </ul>
            <h3>Keycap Removal and Replacement</h3>
            <p>Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.</p>
        </div>
    )
}