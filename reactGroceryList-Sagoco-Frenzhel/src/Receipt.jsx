import React, { useState } from 'react';

export default function Receipt({ cart, totalPrice, amountPaid, onPayment, onShopAgain }) {
  const [additionalPayment, setAdditionalPayment] = useState('')

  const handlePaymentChange = (e) => {
    setAdditionalPayment(e.target.value);
  }

  const handleSubmitAdditionalPayment = () => {
    const paymentAmount = Number(additionalPayment);
    if (paymentAmount > 0) {
      onPayment(paymentAmount);
      setAdditionalPayment('');
    }
  }

  const remainingBalance = totalPrice - amountPaid;
  const change = amountPaid - totalPrice;

  return (
    <div>
      <h2>Receipt</h2>

      {remainingBalance > 0 ? (
        <div>
          <h3>Remaining Balance: ${remainingBalance}</h3>
          <input
            className="payInput"
            type="number"
            value={additionalPayment}
            onChange={handlePaymentChange}
            placeholder="Enter additional payment"
          />
          <button className="payButton" onClick={handleSubmitAdditionalPayment}>Pay</button>
        </div>
      ) : (
        <div>
          <h3>Items Purchased</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} ({item.quantity}) - ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p>Total Price: ${totalPrice}</p>
          <p>Amount Paid: ${amountPaid}</p>
          <p>Change: ${change < 0 ? 0 : change}</p>

          {change < 0 ? (
            <p style={{ color: 'red' }}>Insufficient funds! Please pay more.</p>
          ) : (
            <p style={{ color: 'green' }}>Thank you for your purchase!</p>
          )}

          {change >= 0 && (
            <button onClick={onShopAgain} className="shopAgainButton">
              Shop Again
            </button>
          )}
        </div>
      )}
    </div>
  )
}
