import React, { useState } from 'react';
import Shop from './Shop';
import Receipt from './Receipt';

export default function App() {
  const items = [
    { id: 1, name: "Grapes", price: 50, image:"https://img.freepik.com/premium-vector/single-grape-fruit-pixel-art-style_475147-1988.jpg?semt=ais_hybrid"},
    { id: 2, name: "Oranges", price: 20 },
    { id: 3, name: "Kiwis", price: 30 },
    { id: 4, name: "Bananas", price: 10 },
    { id: 5, name: "Cucumbers", price: 15 },
  ];

  const [cart, setCart] = useState([]);
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [amountPaid, setAmountPaid] = useState(0);

  const handleAddToCart = (item, quantity) => {
    if (quantity <= 0) return;

    setCart((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);

      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const handleRemoveFromCart = (itemId, quantityToRemove) => {
    if (quantityToRemove <= 0) return;

    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: Math.max(item.quantity - quantityToRemove, 0),
            }
          : item
      ).filter((item) => item.quantity > 0); 

      return updatedCart;
    });
  };

  const handleCheckout = () => {
    setIsCheckedOut(true);
    setTotalPrice(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
  };

  const handlePayment = (amount) => {
    setAmountPaid(amount);
  };

  const handleAddPayment = (amount) => {
    setAmountPaid((prevAmount) => prevAmount + amount);
  };

  return (
    <div>
      <h1>Grocery Store</h1>
      {!isCheckedOut ? (
        <Shop
          items={items}
          cart={cart}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
      ) : (
        <Receipt
          cart={cart}
          totalPrice={totalPrice}
          amountPaid={amountPaid}
          onPayment={handleAddPayment}
        />
      )}
    </div>
  );
}
