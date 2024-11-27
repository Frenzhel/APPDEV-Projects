import { Link } from "react-router-dom";
import Footer from "./Footer";

const games = [
  {id: 1, 
    name: "Assassin's Creed Shadows", 
    image: "https://wegotthiscovered.com/wp-content/uploads/2024/05/assassins-creed-shadows.jpg",
    description: "Experience an epic action-adventure story set in Feudal Japan! Become a shinobi assassin and legendary samurai as you explore a beautiful open world in a time of chaos. Switch between these two unlikely allies as you discover their common destiny and usher in a new era for Japan", 
    publisher: "Ubisoft",
    developer: "Ubisoft",
    review: [
      {user:"ShinobiMaster", rate:"9/10", comment:"Incredible setting and story, the transition between the assassin and samurai gameplay is seamless. Some parts feel repetitive, but the world-building and combat make up for it."},
      {user:"KatanaKid", rate:"7/10", comment:"Great potential, but the pacing can be slow at times. I love the art style and the attention to historical detail, though!"}, 
      {user:"ShadowOfThePast", rate:"10/10", comment:"One of the best AC titles in recent years. A true masterpiece blending stealth and action with an epic tale of samurai honor."},
    ]},
  {id: 2, 
    name: "Call of Duty: Black Ops 6", 
    image: "https://gaming-cdn.com/images/products/13629/orig/call-of-duty-2024-pc-game-cover.jpg?v=1694089346",
    description: "Call of Duty: Black Ops 6 is signature Black Ops across a cinematic single-player Campaign, a best-in-class Multiplayer experience and with the epic return of Round-Based Zombies",
    publisher: "Activision",
    developer: "Treyach, Raven Software",
    review: [
      {user:"RazorSharp", rate:"8/10", comment:"The multiplayer is solid as always, and Zombies mode is a blast. I miss the old campaigns though—this one felt a little too over-the-top."},
      {user:"ZombieSlayerX", rate:"9/10", comment:"The Zombies mode is absolutely top-tier! So much fun with friends, and the maps are fantastic. Campaign is okay, but not as strong as previous titles."},
      {user:"WarMachine44", rate:"6/10", comment:"Disappointed with the lack of innovation. The campaign didn't leave a lasting impression, and the multiplayer is just the same as last year. Still fun, but could do better."},
    ]},
  {id: 3, 
    name: "Apex Legends", 
    image: "https://cdn.wccftech.com/wp-content/uploads/2019/02/apex-legends-keyart.jpg",
    description: "Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.",
    publisher: "Electronic Arts",
    developer: "Respawn",
    review: [
      {user:"KingOfTheApex", rate:"10/10", comment:"Fast-paced and super strategic. The legends are so unique and fun to play with different abilities. My favorite battle royale by far."},
      {user:"SoloQueueSurvivor", rate:"7/10", comment:"Fun game, but matchmaking can be frustrating. It's definitely designed for squads, and it’s tough to win solo."},
      {user:"SquadGoals", rate:"9/10", comment:"Love the teamwork element. Each legend feels special and balanced, and the game keeps getting better with each season."},
    ]},
  {id: 4, 
    name: "TEKKEN 8", 
    image: "https://cdn.wccftech.com/wp-content/uploads/2023/03/tekken8-key-art-HD-scaled.jpg",
    description: "Fist Meets Fate in TEKKEN 8. Holding a record for the longest-running video game storyline, the TKKEN series begins a new chapter as TEKKEN 8 continues the tragic saga of the Mishima and Kazama bloodlines, and their world-shaking father-and-son grudge matches from 6 months after the closure of the last match.",
    publisher: "Bandai Namco Entertainment",
    developer: "Bandai Namco Studios Inc.",
    review: [
      {user:"TekkenGodX", rate:"10/10", comment:"The best fighting game out right now! The combat feels tighter, and the story is pure drama. It’s great to see the Mishima family saga continue."},
      {user:"FightingFury", rate:"8/10", comment:"Great gameplay, but I wish there were more characters. The balance is good, but Tekken fans might want more diversity."},
      {user:"ComboMaster", rate:"9/10", comment:"The new mechanics are awesome, and the game feels very fluid. Can't wait to see how the competitive scene evolves with this release."},
    ]},
  {id: 5, 
    name: "Among Us", 
    image: "https://cdn.mobygames.com/covers/9699387-among-us-nintendo-switch-front-cover.jpg",
    description: "An online and local party game of teamwork and betrayal for 4-15 players... in space!",
    publisher: "Innersloth",
    developer: "Innersloth",
    review: [
      {user:"Claymore_23", rate: "9/10", comment: "There is one thing that really stands out, and that's the atmosphere. It's so unique and fun. The community can be pretty toxic though."},
      {user:"FinleyLaz", rate: "8/10", comment: "Ngl I love this game, my only issue is the ammount of racists, sexists, and just generally bad people I see rage bating in most lobbies."},
      {user:"Grey Ghost", rate: "10/10", comment: "A simple concept that works and plays well, especially if you have friends. Great for a game night with non-gamers."},
    ]},
]

export default function Games() {
  return (
    <>
      <h1 className="page-title">Games List:</h1>
      <ul className="game-list">
        {games.map((game) => (
          <li key={game.id} className="game-item">
            <Link to={`/games/${game.id}`} state={{ game }} className="game-link">
              {game.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

    </>
  )
}
