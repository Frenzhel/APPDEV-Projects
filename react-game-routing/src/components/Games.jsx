import { Link } from "react-router-dom"
const games = [
    {id: 1, 
        name: "Assassin's Creed Shadows", 
        description: "Experience an epic action-adventure story set in Feudal Japan! Become a shinobi assassin and legendary samurai as you explore a beautiful open world in a time of chaos. Switch between these two unlikely allies as you discover their common destiny and usher in a new era for Japan", 
        publisher: "Ubisoft",
        developer: "Ubisoft"},
    {id: 2, 
        name: "Valorant", 
        description: "This is the most popular FPS game in the world",
        publisher: "Riot Games",
        developer: "Riot Games"},
    {id: 3, 
        name: "Apex Legends", 
        description: "Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.",
        publisher: "Electronic Arts",
        developer: "Respawn"},
    {id: 4, 
        name: "Valorant", 
        description: "This is the most popular FPS game in the world",
        publisher: "Riot Games",
        developer: "Riot Games"},
    {id: 5, 
        name: "Valorant", 
        description: "This is the most popular FPS game in the world",
        publisher: "Riot Games",
        developer: "Riot Games"},
]
export default function Games() {
    return(
        <>
            <h1>Games List:</h1>
            <ul>
                {games.map((game)=> (
                    <li key={games.id}>
                        <Link to={`/games/${game.id}`} state={{game}}>{game.name.toUpperCase()}</Link>,<br /> {game.description}
                    </li>
                ))}
            </ul>
        </>
    )
}