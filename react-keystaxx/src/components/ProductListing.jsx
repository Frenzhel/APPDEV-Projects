import { Link } from 'react-router-dom';

export default function ProductListing() {
  const products = [
    { 
      id: 1, 
      name: "MK Shadow Guard Dark Multi LED 60% Mechanical Keyboard", 
      image: "https://example.com/mk-shadow-guard.jpg"
    },
    { 
      id: 2, 
      name: "Artisan Keyboard 2", 
      image: "https://example.com/artisan-keyboard-2.jpg" 
    },
  ];

  const handleImageError = (event) => {
    event.target.src = 'https://via.placeholder.com/200x200.png?text=No+Image+Available';
  };

  return (
    <div className="content-container">
      <ul className='product'>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img 
                src={product.image} 
                alt={product.name} 
                width="200" 
                onError={handleImageError}
              />
              <h5>{product.name}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
