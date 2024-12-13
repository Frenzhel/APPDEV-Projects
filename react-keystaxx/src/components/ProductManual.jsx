import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "./products.json";
import "../index.css";
import { useCart } from "./CartContext";

export default function ProductManual() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart } = useCart();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
  const [isCharacteristicsVisible, setIsCharacteristicsVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [reviewText, setReviewText] = useState("")
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const product = products.find((p) => p.id === parseInt(id))

  const calculateTotalPrice = (price, quantity) => {
    return price * quantity
  }

  const handleAddComment = () => {
    setComments([...comments, comment])
    setComment("")
  }

  const handleImageError = (event) => {
    event.target.src =
      "https://via.placeholder.com/200x200.png?text=No+Image+Available"
  }

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible)
  }

  const toggleCharacteristics = () => {
    setIsCharacteristicsVisible(!isCharacteristicsVisible)
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity })
  }

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value)
  }

  const handleRatingChange = (newRating) => {
    setRating(newRating)
  }

  const addReview = () => {
    if (reviewText.trim() === "" || rating === 0) {
      alert("Please fill in all fields and select a rating to add a review.");
      return;
    }

    const newReview = {
      reviewText,
      rating,
      date: new Date().toLocaleDateString(),
    }
    setReviews([...reviews, newReview])
    setReviewText("")
    setRating(0)
  }

  const renderDescription = () => (
    <>
      <button onClick={toggleDescription}>
        {isDescriptionVisible ? "Hide Description" : "Show Description"}
      </button>
      {isDescriptionVisible && product.description && (
        <div className="description">
          <ul>
            {product.description.bullets.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {product.description.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </>
  )

  const renderCharacteristics = () => (
    <>
      <button onClick={toggleCharacteristics}>
        {isCharacteristicsVisible ? "Hide Characteristics" : "Show Characteristics"}
      </button>
      {isCharacteristicsVisible && (
        <div className="characteristics">
          <ul>
            {product.characteristics.map((char, index) => (
              <li key={index}>
                <strong>{char.label}:</strong> {char.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )

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
            className={`star ${star <= rating ? "filled" : ""}`}
            onClick={() => handleRatingChange(star)}
          >
            ★
          </span>
        ))}
      </div>
      <br />
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
              <strong>{review.reviewText}</strong> - {review.date}
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= review.rating ? "filled" : ""}`}
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
  )

  return (
    <div className="content-container">
      {product ? (
        <>
          <h3>{product.name}</h3>
          <br />
          <div className="img-container">
            <img
              src={product.image}
              alt={product.name}
              width="200"
              onError={handleImageError}
            />
          </div>
          <br /><br />
          <div className="quantity-management">
            <span>${calculateTotalPrice(product.price, quantity).toFixed(2)}</span>
            <button onClick={decreaseQuantity} disabled={quantity <= 1}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <br />
          <button onClick={handleAddToCart}>Add to Cart</button>
          <br /><br /><br />
          {renderDescription()}
          <br /><br />
          {renderCharacteristics()}
          <br /><br /><br /><br />
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
