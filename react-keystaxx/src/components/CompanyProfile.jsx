import { Link } from 'react-router-dom';

export default function CompanyProfile() {
  const employees = [
    { id: 1, name: "Alice Johnson", position: "Lead Designer" },
    { id: 2, name: "Bob Smith", position: "Mechanical Engineer" },
    { id: 3, name: "Charlie Davis", position: "Product Manager" },
  ];

  return (
    <div className="content-container">
      <h2>Company Profile</h2>
      <p>Meet our talented team:</p>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            <Link to={`/profile/${employee.id}`}>{employee.name}</Link> - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
}
