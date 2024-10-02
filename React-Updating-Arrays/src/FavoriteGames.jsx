import React,{useState} from "react"
export default function FavoriteGames(){
    const [games,setGames] = useState(["Hades","Risk of Rain 2","Doomsday Hunters"])
    //function to add games
    function handleAddGame(){
        //referencing our text box
        const newGame = document.getElementById("gameInput").value;
        setGames(g => [...g, newGame])
        //reset textbox
        document.getElementById("gameInput").value = " "
    }
    //function to remove a game from list
    function handleRemoveGame(index){
        const newGame = games.filter((game, i) => i != index)
        setGames(newGame)
    }
    return(
        <>
        <div>
            <br /><br /><br /><br /><br />
            <h2>These are my favorite games in 2024:</h2>
            <ul>
                {
                    games.map((game,index) => 
                    <li key={index} onClick={() => handleRemoveGame(index)}>{game}</li>)
                }
            </ul>
            <div className="input-containter">
                <input type="text" name="gameInput" id="gameInput" />
                <button type="button" onClick={handleAddGame}>Add Game</button>
            </div>
            <br /><br /><br /><br /><br />
        </div>
        </>
    )
}