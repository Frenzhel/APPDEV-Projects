import Header from './Header'
import ListOfFruits from './ListOfFruits'
import Footer from './Footer'
import './index.css'

export default function App(){
  //array of fruits => fruit.objects
  const fruits = [
    {id: 1, name: "apple",color: "red"},
    {id: 2, name: "banana", color: "yellow"},
    {id: 3, name: "orange", color: "orange"},
    {id: 4, name: "grape", color: "purple"},
    {id: 5, name: "kiwi", color: "green"},
  ]
  const deserts = [
    {id: 1, name: "cake",color: "red"},
    {id: 2, name: "ice cream", color: "blue"},
    {id: 3, name: "pie", color: "green"},
  ]
  return(
    <>
    <Header/>
    {/* {fruits.length > 0 && {<ListOfFruits items = {fruits} category = "My Favorite Fruits"/>} */}
    {fruits.length > 0 ? (<ListOfFruits items = {fruits} category = "My Favorite Fruits"/>) : (<p>No Fruits</p>)}
    {deserts.length > 0 ? (<ListOfFruits items = {deserts} category = "My Favorite Deserts"/>) : (<p>I Do Not Like Deserts</p>)}
    <Footer/>
    </>
  )
}