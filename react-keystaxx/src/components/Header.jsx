import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { ImKeyboard } from "react-icons/im";

export default function Header() {
  return (
    <div className="nav-container">
      <nav>
        <ul className='nav-list'>
          <li className='icon'>
            <Link to="/" className="nav-link"><ImKeyboard style={{width: 100,height: 50}} /></Link>
          </li>
          <div className='nav-tabs'>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/mission-vision" className="nav-link">Mission & Vision</Link></li>
            <li><Link to="/showcase" className="nav-link">Showcase</Link></li>
            <li><Link to="/products" className="nav-link">Products</Link></li>
            <li><Link to="/reviews" className="nav-link">Reviews</Link></li>
            <li><Link to="/profile" className="nav-link">Company Profile</Link></li>
            <li><Link to="/developers" className="nav-link">Developer</Link></li>
          </div>
          <li className="cart-icon">
            <Link to="/cart" className="nav-link"><FaShoppingCart /></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
