import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import './index.css'
export default function App(){
    return(
        <>
        <Header /><br />
        <Body name = "Stark" bdate = "December 25, 2005" age = "18" desc = "I like playing computer games specially FPS shooting games and I am in the program of Computer Science"></Body><br />
        <Footer /><br />
        </>
    )
}