import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function ProductManual() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    setComments([...comments, comment]);
    setComment("");
  }

  return (
    <div>
      <h2>Product Manual: Keyboard {id}</h2>
      <p>Details about the product...</p>
      <h3>Reviews</h3>
      <input
        type="text"
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="Add a review"
      />
      <button onClick={handleAddComment}>Submit</button>
      <ul>
        {comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  )
}
