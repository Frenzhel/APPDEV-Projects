import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/mission-vision" className="nav-link">Mission & Vision</Link></li>
          <li><Link to="/showcase" className="nav-link">Showcase</Link></li>
          <li><Link to="/products" className="nav-link">Products</Link></li>
          <li><Link to="/reviews" className="nav-link">Reviews</Link></li>
          <li><Link to="/profile" className="nav-link">Company Profile</Link></li>
          <li><Link to="/developers" className="nav-link">Developers</Link></li>
        </ul>
      </nav>
    </div>
  )
}
