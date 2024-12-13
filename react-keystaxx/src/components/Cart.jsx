import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId); // Remove item completely
  }

  const handleQuantityChange = (productId, event) => {
    const newQuantity = Number(event.target.value);
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  }

  const handleIncreaseQuantity = (productId, quantity) => {
    updateQuantity(productId, quantity + 1);
  }

  const handleDecreaseQuantity = (productId, quantity) => {
    if (quantity > 1) {
      updateQuantity(productId, quantity - 1);
    }
  }

  const calculateTotalPrice = (price, quantity) => {
    return price * quantity;
  }

  return (
    <div className="content-container">
      <div className="cart-container">
        <h3>Your Cart</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <img src={product.image} alt={product.name} width="200" />
                <p>{product.name}</p>

                {/* Quantity management with + and - */}
                <div className="quantity-management">
                  <button
                    onClick={() => handleDecreaseQuantity(product.id, product.quantity)}
                    disabled={product.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(product.id, product.quantity)}
                    disabled={product.quantity >= product.maxQuantity}
                  >
                    +
                  </button>
                </div>
                <span>Total Price: ${calculateTotalPrice(product.price, product.quantity).toFixed(2)}</span>

                <br />
                <button onClick={() => handleRemove(product.id)}>Remove</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <button onClick={() => navigate("/products")}>Return to Products</button>
      </div>
    </div>
  )
}
