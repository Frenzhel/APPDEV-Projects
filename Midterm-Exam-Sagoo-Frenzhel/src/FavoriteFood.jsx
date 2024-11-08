import React from 'react';

export default function FavoriteFood({ items, type }) {
  return (
    <div>
      <h3>My Favorite {type}</h3>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - Color: {item.color}, Rating: {item.rating}
            </li>
          ))}
        </ul>
      ) : (
        <p>I have no favorite {type}</p>
      )}
    </div>
  )
}