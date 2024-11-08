import React, { useState } from 'react';

export default function MyCart() {
  const [cart, setCart] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue) {
      setCart([...cart, inputValue]);
      setInputValue('');
    }
  }

  return (
    <div>
      <h3>My Cart</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
