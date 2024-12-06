import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../index.css";

export default function ProductManual() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
  const [isCharacteristicsVisible, setIsCharacteristicsVisible] = useState(false);

  const products = [
    { 
      id: 1, 
      name: "MK Shadow Guard Dark Multi LED 60% Mechanical Keyboard", 
      image: "https://example.com/mk-shadow-guard.jpg",
      description: (
        <div className='product-desc'>
          <ul>
            <li>Silver frame</li>
            <li>Black laser engraved ABS backlit keycaps</li>
            <li>Compact 60% size</li>
            <li>MK exclusive</li>
            <li>Heroes of Shadow Guard theme</li>
            <li>Purple and orange single color LEDs</li>
          </ul>
          <p>
            An MK exclusive! This highly unique Limited Edition Heroes of Shadow Guard themed keyboard features the super clean Ducky Mini dark grey aluminum frame and lighting modes.
            The MK Shadow Guard features exclusive Purple and Orange single color LEDs.
          </p>
          <p>
            A one-of-a-kind keyboard and in very limited supply. Don't miss out on this one.
          </p>
        </div>
      ),
      characteristics: (
        <div className='container'>
          <div className='product-char'>
            <div className='prodcut-char-ul'>
              <ul>
                <li>Size: Compact</li>
                <li>Series: Shadow Guard</li>
                <li>Logical Layout: UK QWERTY</li>
                <li>Keycap Material: ABS</li>
                <li>Color: Grey</li>
                <li>Physical Layout: ANSI</li>
                <li>USB Key Rollover: Full</li>
                <li>Print Method: Laser Engraved</li>
                <li>Switch Mount Type: Plate mount</li>
                <li>Interface: USB</li>
                <li>Windows Compatible: Yes</li>
                <li>Mac Compatible: Yes</li>
                <li>Keycap Color: Black</li>
                <li>Linux Compatible: Yes</li>
                <li>Cord Length: 60 in</li>
                <li>Backlighting: Multi-Colored LED</li>
                <li>Hotswap: No</li>
                <li>Legend Color: Clear</li>
                <li>Print Position: Top</li>
                <li>Barebones: No</li>
                <li>Assembly: Prebuilt</li>
                <li>Cherry MX Clear: DK1461D-WUSALASZ2</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 2, 
      name: "Artisan Keyboard 2", 
      description: "Another handcrafted masterpiece.",
      image: "https://example.com/artisan-keyboard-2.jpg" // Replace with actual image URL
    },
  ]

  const product = products.find(p => p.id === parseInt(id));

  const handleAddComment = () => {
    setComments([...comments, comment]);
    setComment("");
  }

  const handleImageError = (event) => {
    event.target.src = 'https://via.placeholder.com/200x200.png?text=No+Image+Available';
  }

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  }

  const toggleCharacteristics = () => {
    setIsCharacteristicsVisible(!isCharacteristicsVisible);
  }

  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  function handleReviewTextChange(event) {
      setReviewText(event.target.value)
  }

  function handleRatingChange(newRating) {
      setRating(newRating)
  }

  function addReview() {
      if (reviewText.trim() === '' || rating === 0) {
          alert('Please fill in all fields and select a rating to add a review.')
          return
      }

      const newReview = {
          reviewText,
          rating,
          date: new Date().toLocaleDateString(),
      };
      setReviews([...reviews, newReview])
      setReviewText('')
      setRating(0)
  }

  const renderReviewForm = () => (
      <div className="reviews-container">
          <h3>Add a Review!</h3>
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
                          <strong>{review.reviewText}</strong> - {review.date}
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
                      </li>
                  ))}
              </ul>
          ) : (
              <p>No reviews added yet.</p>
          )}
      </div>
  );

  return (
    <div className="content-container">
      {product ? (
        <>
          <h3>{product.name}</h3>
          <br />
          <img src={product.image} alt={product.name} width="200" onError={handleImageError}/>
          <br /><br />
          <button onClick={toggleDescription}>
            {isDescriptionVisible ? "Hide Description" : "Show Description"}
          </button>
          {isDescriptionVisible && (
            <div className="description">
              {product.description}
            </div>
          )}
          <br /><br />
          <button onClick={toggleCharacteristics}>
            {isCharacteristicsVisible ? "Hide Characteristics" : "Show Characteristics"}
          </button>
          {isCharacteristicsVisible && (
            <div className="characteristics">
              {product.characteristics}
            </div>
          )}
          <br /><br />
          <button onClick={() => navigate("/products")}>Return to Products</button>
          <br /><br />
          {renderReviewForm()}
          {renderReviews()}
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  )
}