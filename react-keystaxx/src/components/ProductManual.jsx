import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ProductManual() {
  const { id } = useParams();
  const navigate = useNavigate();
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
        <div>
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
        <div>
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
      )
    },
    { 
      id: 2, 
      name: "Artisan Keyboard 2", 
      description: "Another handcrafted masterpiece.",
      image: "https://example.com/artisan-keyboard-2.jpg" // Replace with actual image URL
    },
  ];

  const product = products.find(p => p.id === parseInt(id));

  const handleAddComment = () => {
    setComments([...comments, comment]);
    setComment("");
  };

  const handleImageError = (event) => {
    event.target.src = 'https://via.placeholder.com/200x200.png?text=No+Image+Available';
  };

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const toggleCharacteristics = () => {
    setIsCharacteristicsVisible(!isCharacteristicsVisible);
  };

  return (
    <div>
      {product ? (
        <>
          <h2>{product.name}</h2>
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
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}
