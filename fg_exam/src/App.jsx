import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import './index.css'
export default function App(){
    return(
        <>
        <Header /><br />
        <Body 
        kbImg="https://img.freepik.com/premium-photo/red-keyboard-with-letters-x-it_915071-8199.jpg"
        kbModel="KB X1000"
        pOverview="The KB-X1000 is a high-performance mechanical keyboard designed for gamers, 
        professionals, and everyday users who demand precision and comfort. It features customizable RGB 
        backlighting, durable mechanical switches, and programmable keys to enhance your typing and gaming 
        experience."
        specifics="Switch Type: Cherry MX Red (Mechanical)
        Key Layout: Full-size (104 keys)
        Backlighting: RGB with customizable colors
        Connectivity: Wired (USB 2.0)
        Dimensions: 440 mm x 135 mm x 35 mm
        Weight: 1.2 kg
        Cable Length: 1.8 meters
        Additional Features: Anti-ghosting, N-key rollover, dedicated media controls"
        itbox="KB-X1000 Keyboard
        USB Cable
        User Manual
        Keycap Removal Tool
        Warranty Card"
        kfeat="Customizable RGB Backlighting: Personalize the keyboard’s illumination with a wide range of colors 
        and lighting effects.
        Mechanical Switches: Cherry MX Red switches for a responsive and smooth typing experience.
        Programmable Keys: Assign macros and custom functions to any key with the included software.
        Anti-Ghosting & N-Key Rollover: Ensure accurate keypress registration during intense gaming 
        sessions.
        Dedicated Media Controls: Easily control music and videos with dedicated media keys."
        unbx="Carefully remove the keyboard and accessories from the box."
        ctkey="Plug the USB cable into an available USB port on your computer.
        ● The keyboard should be automatically recognized and ready for use. No additional drivers are 
        required."
        ></Body><br />
        <Footer /><br />
        </>
    )
}