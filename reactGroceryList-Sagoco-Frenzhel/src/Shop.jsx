import React, { useState } from 'react';

export default function Shop({ items, cart, onAddToCart, onRemoveFromCart, onCheckout }) {
  const [quantity, setQuantity] = useState({})
  const [removeQuantity, setRemoveQuantity] = useState({})

  const handleQuantityChange = (itemId, value) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [itemId]: value,
    }));
  }

  const handleRemoveQuantityChange = (itemId, value) => {
    setRemoveQuantity((prevRemoveQuantity) => ({
      ...prevRemoveQuantity,
      [itemId]: value,
    }));
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const renderQuantityOptions = () => {
    let options = [];
    for (let i = 1; i <= 10; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  }

  return (
    <div>
      <h2>Items for Sale</h2>
      <ul className='itemSale'>
        {items.map((item) => (
          <li key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: 100, height: 100, marginRight: 10 }}
            />
            <p>{item.name} - ${item.price}</p>
            {/* Add to Cart: Dropdown for quantity */}
            <select
              value={quantity[item.id] || 1}
              onChange={(e) =>
                handleQuantityChange(item.id, parseInt(e.target.value) || 1)
              }
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            >
              {renderQuantityOptions()}
            </select>
            <button className='addButton' onClick={() => onAddToCart(item, quantity[item.id] || 1)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h3>Your Cart</h3>
      <ul className='itemCart'>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} ({item.quantity}) - ${item.price * item.quantity}
            <br />
            {/* Remove from Cart: Dropdown for quantity */}
            <select className='quantity'
              value={removeQuantity[item.id] || 1}
              onChange={(e) =>
                handleRemoveQuantityChange(item.id, parseInt(e.target.value) || 1)
              }
            >
              {renderQuantityOptions()}
            </select>
            <button className='removeButton' onClick={() => onRemoveFromCart(item.id, removeQuantity[item.id] || 1)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>

      <button className='checkoutButton' onClick={onCheckout}>Proceed to Checkout</button>
    </div>
  )
}