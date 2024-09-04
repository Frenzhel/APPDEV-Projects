import Footer from './Footer'
import Header from './Header'
import Body from './Body'
export default function App(){
    return(
        <>
        <Header /><br />
        <Body /><br />
        <Body name = "Will I Am" food = "Gravy" isHealthy = {false} age = "18"></Body><br />
        <Body name = "James Lebr" food = "Burger" isHealthy = {false} age = "18"></Body><br />
        <Body name = "Fredo" food = "Shawarma" isHealthy = {false} age = "18"></Body><br />
        <Body name = "MarkIX" food = "Chimken" isHealthy = {false} age = "18"></Body><br />
        <Body name = "RJ Salx" food = "Sinigang" isHealthy = {true} age = "18"></Body><br />
        <Footer /><br />
        </>
    )
}