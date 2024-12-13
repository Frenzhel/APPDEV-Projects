import { useState } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");

  const handleAddReview = () => {
    if (review.trim()) {
      const reviewerName = name.trim() || "user-unknown"; // Default to "user-unknown" if no name is entered
      setReviews([...reviews, { reviewText: review, reviewerName }]);
      setReview("");
      setName(""); // Reset the name input after submission
    }
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleReviewChange = (e) => setReview(e.target.value);

  const renderReviews = () => (
    <ul>
      {reviews.map((r, index) => (
        <li key={index}>
          <p>
            <strong>{r.reviewerName} </strong> - {new Date().toLocaleDateString()}
            <br />
            {r.reviewText} 
          </p>
        </li>
      ))}
    </ul>
  );

  const renderReviewForm = () => (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name (optional)"
      />
      <br/><br/>
      <input
        type="text"
        value={review}
        onChange={handleReviewChange}
        placeholder="Write your review here..."
      />
      <br/><br/>
      <button onClick={handleAddReview}>Submit Review</button>
      <br/><br/>
    </div>
  );

  return (
    <div className="content-container">
      <h2>Reviews</h2>
      <p>We value your feedback! Please leave your review below:</p>
      <br/>
      {renderReviewForm()}
      <h3>Submitted Reviews</h3>
      <br/><br/>
      {renderReviews()}
    </div>
  );
}
