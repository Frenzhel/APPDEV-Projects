import React, { useState } from 'react';

export default function Function() {
  const [number, setNumber] = useState(0);

  const updateNumber = () => {
    if (number === 0 || number % 2 === 0) {
      setNumber((number + 1) * 2);
    } else {
      setNumber((number + 1) + 1);
    }
  }

  return (
    <div>
      <h2>Number: {number}</h2>
      <button onClick={updateNumber}>Update Number</button>
    </div>
  )
}