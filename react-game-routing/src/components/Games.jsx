import { Link } from "react-router-dom"
const games = [
    {id: 1, 
        name: "Assassin's Creed Shadows", 
        description: "Experience an epic action-adventure story set in Feudal Japan! Become a shinobi assassin and legendary samurai as you explore a beautiful open world in a time of chaos. Switch between these two unlikely allies as you discover their common destiny and usher in a new era for Japan", 
        publisher: "Ubisoft",
        developer: "Ubisoft"},
    {id: 2, 
        name: "Call of Duty: Black Ops 6", 
        description: "Call of Duty: Black Ops 6 is signature Black Ops across a cinematic single-player Campaign, a best-in-class Multiplayer experience and with the epic return of Round-Based Zombies",
        publisher: "Activision",
        developer: "Treyach, Raven Software"},
    {id: 3, 
        name: "Apex Legends", 
        description: "Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.",
        publisher: "Electronic Arts",
        developer: "Respawn"},
    {id: 4, 
        name: "TEKKEN 8", 
        description: "Fist Meets Fate in TEKKEN 8. Holding a record for the longest-running video game storyline, the TKKEN series begins a new chapter as TEKKEN 8 continues the tragic saga of the Mishima and Kazama bloodlines, and their world-shaking father-and-son grudge matches from 6 months after the closure of the last match.",
        publisher: "Bandai Namco Entertainment",
        developer: "Bandai Namco Studios Inc."},
    {id: 5, 
        name: "Among Us", 
        description: "An online and local party game of teamwork and betrayal for 4-15 players... in space!",
        publisher: "Innersloth",
        developer: "Innersloth",
        review: [
            {user:"Claymore_23", rating: "9/10", comment: "There is one thing that really stands out, and that's the atmosphere. It's so unique and fun. The community can be pretty toxic though."},
            {user:"FinleyLaz", rating: "8/10", comment: "Ngl I love this game, my only issue is the ammount of racists, sexists, and just generally bad people I see rage bating in most lobbies."},
            {user:"Grey Ghost", rating: "", comment: ""},
        ]},
]
export default function Games() {
    return(
        <>
            <h1>Games List:</h1>
            <ul>
                {games.map((game)=> (
                    <li key={games.id}>
                        <Link to={`/games/${game.id}`} state={{game}}>{game.name.toUpperCase()}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}