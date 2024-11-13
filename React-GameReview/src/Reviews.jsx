import React, { useState } from 'react';
import './index.css';

export default function Reviews() {
    const [gameName, setGameName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [reviews, setReviews] = useState([]);

    function handleGameNameChange(event) {
        setGameName(event.target.value)
    }

    function handleReviewTextChange(event) {
        setReviewText(event.target.value)
    }

    function addReview() {
        if (gameName.trim() === '' || reviewText.trim() === '') {
            alert('Please fill in both fields to add a review.')
            return
        }
        const newReview = {
            gameName,
            reviewText,
            date: new Date().toLocaleDateString(),
        }
        setReviews([...reviews, newReview])
        setGameName('')
        setReviewText('')
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
            <button onClick={addReview}>Add Review</button>
        </div>
    )

    const renderReviews = () => (
        <div>
            <h3>Reviews:</h3>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <strong>{review.gameName}</strong> - {review.date}
                            <p>{review.reviewText}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews added yet.</p>
            )}
        </div>
    )

    return (
        <div className="app">
            {renderReviewForm()}
            {renderReviews()}
        </div>
    )
}
