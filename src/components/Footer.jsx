import logo from '../assets/Logo.png'
import './Footer.css'
import { handleScrollClick } from '../utils/scroll'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logo} alt="Xpecto IT Solutions" />
            </div>
            <p className="footer-desc">
              Xpecto IT Solutions Pvt Ltd - A Reference Based Company providing 
              world-class digital marketing and web application services.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => handleScrollClick(e, 'home')}>Home</a></li>
              <li><a href="#services" onClick={(e) => handleScrollClick(e, 'services')}>Services</a></li>
              <li><a href="#expertise" onClick={(e) => handleScrollClick(e, 'expertise')}>Expertise</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')}>About Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services" onClick={(e) => handleScrollClick(e, 'services')}>Digital Marketing</a></li>
              <li><a href="#services" onClick={(e) => handleScrollClick(e, 'services')}>Web Applications</a></li>
              <li><a href="#services" onClick={(e) => handleScrollClick(e, 'services')}>Mobile Apps</a></li>
              <li><a href="#services" onClick={(e) => handleScrollClick(e, 'services')}>Consulting</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')}>Internship</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')}>Support</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')}>Client Login</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')}>Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Xpecto IT Solutions Pvt Ltd. All rights reserved.</p>
          <div className="footer-links">
            <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')}>Privacy Policy</a>
            <span>|</span>
            <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
