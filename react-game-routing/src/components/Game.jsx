import { useLocation } from "react-router-dom";

export default function Game() {
  const location = useLocation();
  const game = location.state.game;

  return (
    <div className="game-detail">
      <h1>{game.name}</h1>
      <img src={game.image} alt={game.name} className="game-image" />
      <p>{game.description}</p>
      <h2>Reviews:</h2>
      <ul>
        {game.review.map((review, index) => (
          <li key={index} className="review-item">
            <p>Name: <strong>{review.user}</strong> Rate: <strong>{review.rate}</strong></p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
