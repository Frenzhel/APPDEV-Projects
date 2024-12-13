import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

export default function CompanyProfile() {
  const employees = [
    { id: 1, name: "Alice Johnson", position: "Lead Designer", image:"" },
    { id: 2, name: "Bob Smith", position: "Mechanical Engineer", image:"" },
    { id: 3, name: "Charlie Davis", position: "Product Manager", image:"" },
    { id: 4, name: "Diana Miller", position: "Front-End Developer", image:"" },
    { id: 5, name: "Ethan Walker", position: "Quality Assurance Specialist", image:"" },
  ]

  const handleImageError = (event) => {
    event.target.src =
      "https://via.placeholder.com/200x200.png?text=No+Image+Available";
  }

  return (
    <div className="content-container">
      <h2>Company Profile</h2>
      <p>Meet our talented team:</p>
      <ul className='un-list'>
        {employees.map(employee => (
          <li className="list" key={employee.id}>
            <Link to={`/profile/${employee.id}`}>
              <div className="img-container">
                {employee.image ? (
                  <img
                  src={employee.image}
                  alt={employee.name}
                  width="200"
                  onError={handleImageError}
                  />
                ) : (<CgProfile size={200}/>)}
              </div>
              {employee.name}
            </Link> - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  )
}
