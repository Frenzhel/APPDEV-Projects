import { useState } from "react"
import Shop from "./Shop"
import AdminPanel from "./AdminPanel"
export default function Login() {
    let items = [{id: 1, name: "Grapes", price: 50}, {id: 2, name: "Orange", price: 20}, {id: 3, name: "Pickles", price: 40}]
    let accounts = [{id: 1, username: "customer", password: "customer", role: "customer"}, {id: 2, username: "admin", password: "admin", role: "admin"}]

    const[isLoggedIn,setIsLoggedIn] = useState(false)

    const[role, setRole] = useState("")

    const[enteredUsernames, setEnteredUsernames] = useState("")
    const[enteredPasswords, setEnteredPasswords] = useState("")
    //function to get the username entered
    function getUserName(event){
        setEnteredUsernames(event.target.value)
    }
    //function to get the passwords entered
    function getPassword(event){
        setEnteredPasswords(event.target.value)
    }
    //function to handle login process
    function handleLogin(){
        accounts.map((account)=>{
            if(account.username === enteredUsernames && account.password === enteredPasswords){
                setIsLoggedIn(true)
                setRole(account.role)
            }
        })
    }

    function renderLogin(){
        return(
            <div className="login-container">
                <h1>Login: </h1>
                Username: <input type="text" placeholder="username" id="username" className="username" onChange={getUserName} />
                <br />
                Password: <input type="text" placeholder="password" id="password" className="password" onChange={getPassword} />
                <br /><br />
                <button className="login-button" onClick={handleLogin}>Login</button>
            </div>
        )
    }
    //function to render the shop
    function renderShop(){
        return(
            <Shop isLoggedIn = {isLoggedIn} items = {items} />
        )
    }
    //function to render admin page
    function renderAdmin(){
        return(
            <AdminPanel isLoggedIn = {isLoggedIn} accounts = {ac}/>
        )
    }
    //handles renderLogin based on login credentials
    if(isLoggedIn === false){
        return renderLogin()
    }else{
        if(role === "admin"){
            return renderAdmin()
        }
        else{
            return renderShop()
        }
    }
}