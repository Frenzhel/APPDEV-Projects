import { useState } from 'react';
import { CgProfile } from "react-icons/cg";

export default function DeveloperPage() {
  const [vouches, setVouches] = useState(0)

  const handleVouch = () => {
    setVouches(vouches + 1)
  }

  const handleImageError = (event) => {
    event.target.src =
      "https://via.placeholder.com/200x200.png?text=No+Image+Available";
  }


  const developer = {
    name: "Frenzhel Vhonn Q. Sagoco",
    image: "",
    bio: "Passionate about creating intuitive and visually appealing web applications. With experience in full-stack development, Frenzhel specializes in front-end frameworks like React and backend technologies such as Node.js. When not coding, Frenzhel enjoys learning about UI/UX design, improving website performance, and experimenting with new technologies.",
    skills: [
      "React, JavaScript, HTML, CSS",
      "Node.js, Express",
      "Responsive Web Design",
      "UI/UX Design",
      "Version Control (Git, GitHub)",
      "RESTful API Integration"
    ]
  }

  return (
    <div className="content-container">
      <h2>Developer Page</h2>
      <p>
        This website was crafted by a dedicated developer and designer who strives to deliver an
        exceptional user experience. With a keen eye for detail, the developer ensures that every
        aspect of the application is well-structured, responsive, and intuitive to use.
      </p>
      <br />
      <div className="img-container">
        {developer.image ? (
          <img
          src={developer.image}
          alt={developer.name}
          width="200"
          onError={handleImageError}
          />
        ) : (<CgProfile size={200}/>)}
      </div>
      <div>
        <h3>{developer.name}</h3>
        <p>{developer.bio}</p>
        <br />
        <h4>Skills & Technologies:</h4>
        <ul>
          {developer.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <button onClick={handleVouch}>Vouch for Me</button>
        <p>Vouches: {vouches}</p>
      </div>
    </div>
  )
}
