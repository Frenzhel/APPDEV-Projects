import { Link } from 'react-router-dom';

export default function ProductListing() {
  const products = [
    { 
      id: 1, 
      name: "MK Shadow Guard Dark Multi LED 60% Mechanical Keyboard", 
      image: "https://example.com/mk-shadow-guard.jpg" // Replace with real URL
    },
    { 
      id: 2, 
      name: "Artisan Keyboard 2", 
      image: "https://example.com/artisan-keyboard-2.jpg" // Replace with real URL
    },
  ];

  const handleImageError = (event) => {
    event.target.src = 'https://via.placeholder.com/200x200.png?text=No+Image+Available';
  };

  return (
    <div>
      <h2>Product Listing</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img 
                src={product.image} 
                alt={product.name} 
                width="200" 
                onError={handleImageError}
              />
              <h3>{product.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
