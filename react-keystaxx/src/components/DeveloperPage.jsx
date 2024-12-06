import { useState } from 'react';

export default function DeveloperPage() {
  const [vouches, setVouches] = useState(0)

  const handleVouch = () => {
    setVouches(vouches + 1);
  }

  return (
    <div className="content-container">
      <h2>Developer Page</h2>
      <p>
        This website was crafted by a dedicated developer and designer who strive to deliver an
        exceptional user experience.
      </p>
      <div>
        <h3>Developer: Frenzhel Vhonn Q. Sagoco</h3>
        <p>
          Passionate about creating intuitive and visually appealing web applications.
        </p>
        <button onClick={handleVouch}>Vouch for Me</button>
        <p>Vouches: {vouches}</p>
      </div>
    </div>
  )
}
