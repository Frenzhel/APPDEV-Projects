import { Link } from "react-router-dom";
import products from "./products.json";

export default function ProductListing() {
  const handleImageError = (event) => {
    event.target.src =
      "https://via.placeholder.com/200x200.png?text=No+Image+Available";
  }

  const renderProductList = () => {
    return (
      <ul className="un-list">
        {products.map((product) => (
          <li className="list" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div className="img-container">
                <img
                  src={product.image}
                  alt={product.name}
                  width="200"
                  onError={handleImageError}
                />
              </div>
              <h5>{product.name}</h5>
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return(
    <div className="content-container">
      <h2>Products</h2>
      {renderProductList()}
    </div>
  )
}