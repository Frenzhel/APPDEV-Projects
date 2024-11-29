import { useState } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");

  const handleAddReview = () => {
    if (review.trim()) {
      setReviews([...reviews, review]);
      setReview("");
    }
  };

  return (
    <div>
      <h2>Reviews</h2>
      <p>We value your feedback! Please leave your review below:</p>
      <input
        type="text"
        value={review}
        onChange={e => setReview(e.target.value)}
        placeholder="Write your review here..."
      />
      <button onClick={handleAddReview}>Submit Review</button>
      <h3>Submitted Reviews</h3>
      <ul>
        {reviews.map((r, index) => (
          <li key={index}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
