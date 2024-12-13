import { useParams } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

export default function EmployeeResume() {
  const { id } = useParams();

  const employees = {
    1: { 
      name: "Alice Johnson", 
      image: "",
      position: "Lead Designer", 
      bio: "With over 10 years of experience in the design industry, Alice has honed her skills in user interface (UI) and user experience (UX) design. She is passionate about creating visually appealing and intuitive interfaces that enhance user experience. Alice leads the design team and collaborates closely with developers to bring creative concepts to life. Her work focuses on developing unique design solutions for complex problems, always keeping the user at the center of her designs.",
      skills: ["UI/UX Design", "Adobe Creative Suite", "Sketch", "Figma", "Wireframing & Prototyping", "User Research", "Design Systems"],
      experience: [
        "Lead Designer at ABC Corp (2018–Present)",
        "Senior UI/UX Designer at XYZ Studios (2015–2018)",
        "UI Designer at DesignWorks (2012–2015)"
      ],
      education: "Bachelor of Fine Arts in Graphic Design, University of Art & Design"
    },
    2: { 
      name: "Bob Smith", 
      image: "",
      position: "Mechanical Engineer", 
      bio: "Bob is a highly skilled mechanical engineer with over 8 years of experience designing and optimizing mechanical components. He specializes in the creation of mechanical switches for keyboards, ensuring precision, durability, and a satisfying tactile experience. Bob’s deep understanding of materials science and mechanical testing ensures that every product meets the highest standards of performance and reliability. He plays a key role in prototyping and iterating new products, working closely with product managers and designers.",
      skills: ["Mechanical Design", "SolidWorks", "Prototyping", "Material Science", "CAD Modeling", "Testing & Quality Assurance"],
      experience: [
        "Mechanical Engineer at KeyTech Solutions (2017–Present)",
        "Mechanical Design Engineer at SwitchMasters (2014–2017)",
        "Junior Engineer at Innovatech (2012–2014)"
      ],
      education: "Bachelor of Science in Mechanical Engineering, Tech University"
    },
    3: { 
      name: "Charlie Davis", 
      image: "",
      position: "Product Manager", 
      bio: "Charlie is an experienced product manager with a focus on bringing innovative products to market. With a background in both business and technology, Charlie bridges the gap between engineering teams and customers to ensure that every product is not only functional but also meets the needs of its target audience. He oversees product roadmaps, prioritizes features, and ensures that product development stays on track. Charlie’s leadership helps turn concepts into successful, market-ready products.",
      skills: ["Product Strategy", "Market Research", "Agile Methodology", "Cross-functional Collaboration", "Roadmap Planning", "Customer-Centric Design"],
      experience: [
        "Product Manager at Innovators Inc. (2019–Present)",
        "Associate Product Manager at TechCo (2016–2019)",
        "Product Assistant at NewTech Solutions (2014–2016)"
      ],
      education: "Master of Business Administration (MBA), Harvard Business School"
    },
    4: { 
      name: "Diana Miller", 
      image: "",
      position: "Front-End Developer", 
      bio: "Diana is a passionate front-end developer with 6 years of experience specializing in building responsive and accessible web applications. She is well-versed in modern JavaScript frameworks, including React, and is committed to writing clean, maintainable code. Diana is dedicated to ensuring that web applications not only look great but also perform seamlessly across all devices. She enjoys collaborating with designers and back-end developers to bring ideas to life with precision and attention to detail.",
      skills: ["React", "JavaScript", "HTML/CSS", "Responsive Design", "SASS", "Webpack", "Version Control (Git)"],
      experience: [
        "Front-End Developer at WebWorks (2019–Present)",
        "Junior Front-End Developer at CodeMakers (2017–2019)",
        "Intern Web Developer at WebSolutions (2016–2017)"
      ],
      education: "Bachelor of Science in Computer Science, Code Academy"
    },
    5: { 
      name: "Ethan Walker", 
      image: "",
      position: "Quality Assurance Specialist", 
      bio: "Ethan is an experienced QA Specialist who ensures that every product meets the highest standards of quality before reaching customers. With over 7 years of experience in software and hardware testing, Ethan specializes in identifying potential issues early in the development process, reducing the risk of defects in final products. He has a keen eye for detail and is known for his thorough testing methods, which help improve product reliability and user satisfaction. Ethan works closely with developers to fix bugs and ensure a smooth user experience.",
      skills: ["Manual Testing", "Automated Testing", "Bug Reporting", "Test Case Creation", "Software & Hardware Testing", "Cross-Platform Testing", "Agile Testing"],
      experience: [
        "QA Specialist at QualityTech (2018–Present)",
        "Software QA Tester at SoftWare Solutions (2015–2018)",
        "Junior QA Tester at BugFixers Inc. (2013–2015)"
      ],
      education: "Bachelor of Science in Information Technology, Tech College"
    },
  }

  const employee = employees[id];

  if (!employee) {
    return <p>Employee not found.</p>;
  }

  const handleImageError = (event) => {
    event.target.src =
      "https://via.placeholder.com/200x200.png?text=No+Image+Available";
  }


  return (
    <div className="content-container">
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
      <h2>{employee.name}</h2>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>About:</strong> {employee.bio}</p>
      <h4>Skills:</h4>
      <ul>
        {employee.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h4>Experience:</h4>
      <ul>
        {employee.experience.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
      <h4>Education:</h4>
      <p>{employee.education}</p>
    </div>
  )
}
