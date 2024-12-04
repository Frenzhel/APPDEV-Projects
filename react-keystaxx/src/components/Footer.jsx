import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <div className="footer-content">
          <div className="keystaxx-foot">
            <h5>KEYSTAXX</h5>
            <p>
              Established in 2024, Keystaxx has placed itself as the custom setup company. Match your setup, match your vibes.
            </p>
          </div>
          <div className="follow-foot">
            <h5>FOLLOW US</h5>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="contact-foot">
            <h5>CONTACT US</h5>
            <p>Email: support@keystaxx.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <hr />
        <p>&copy; KeyStaxx {new Date().getFullYear()} || All Rights Reserved</p>
      </footer>
    </div>
  )
}
