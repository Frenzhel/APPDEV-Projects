import { Link } from 'react-router-dom';

export default function ProductListing() {
  const products = [
    { id: 1, name: "Artisan Keyboard 1", description: "A beautiful custom keyboard." },
    { id: 2, name: "Artisan Keyboard 2", description: "Another handcrafted masterpiece." },
    // Add more
  ]

  return (
    <div>
      <h2>Product Listing</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link> - {product.description}
          </li>
        ))}
      </ul>
    </div>
  )
}
