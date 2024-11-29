import { useParams } from 'react-router-dom';

export default function EmployeeResume() {
  const { id } = useParams();

  const employees = {
    1: { name: "Alice Johnson", position: "Lead Designer", bio: "Experienced in crafting beautiful keyboard designs." },
    2: { name: "Bob Smith", position: "Mechanical Engineer", bio: "Specializes in designing mechanical switches." },
    3: { name: "Charlie Davis", position: "Product Manager", bio: "Ensures timely delivery of high-quality products." },
  };

  const employee = employees[id];

  if (!employee) {
    return <p>Employee not found.</p>;
  }

  return (
    <div>
      <h2>{employee.name}</h2>
      <p>Position: {employee.position}</p>
      <p>About: {employee.bio}</p>
    </div>
  );
}
