import React, { useState } from 'react';
import './index.css';

export default function Reviews() {
    const [gameName, setGameName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);

    function handleGameNameChange(event) {
        setGameName(event.target.value)
    }

    function handleReviewTextChange(event) {
        setReviewText(event.target.value)
    }

    function handleRatingChange(newRating) {
        setRating(newRating)
    }

    function addReview() {
        if (gameName.trim() === '' || reviewText.trim() === '' || rating === 0) {
            alert('Please fill in all fields and select a rating to add a review.')
            return
        }

        const newReview = {
            gameName,
            reviewText,
            rating,
            date: new Date().toLocaleDateString(),
        };
        setReviews([...reviews, newReview])
        setGameName('')
        setReviewText('')
        setRating(0)
    }

    const renderReviewForm = () => (
        <div className="reviews-container">
            <h2>Add a Game Review</h2>
            <input
                type="text"
                placeholder="Game Name"
                value={gameName}
                onChange={handleGameNameChange}
            />
            <textarea
                placeholder="Write your review here..."
                value={reviewText}
                onChange={handleReviewTextChange}
            />
            <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`star ${star <= rating ? 'filled' : ''}`}
                        onClick={() => handleRatingChange(star)}
                    >
                        ★
                    </span>
                ))}
            </div>
            <br />
            <button onClick={addReview}>Add Review</button>
        </div>
    );

    const renderReviews = () => (
        <div>
            <h3>Reviews:</h3>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <strong>{review.gameName}</strong> - {review.date}
                            <div className="star-rating">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={`star ${star <= review.rating ? 'filled' : ''}`}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p>{review.reviewText}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews added yet.</p>
            )}
        </div>
    );

    return (
        <div className="app">
            {renderReviewForm()}
            {renderReviews()}
        </div>
    );
}
