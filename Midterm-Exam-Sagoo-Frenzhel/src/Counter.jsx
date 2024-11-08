import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count - 2)}>Decrement by 2</button>
      <button onClick={() => setCount(count + 2)}>Increment by 2</button>
    </div>
  )
}