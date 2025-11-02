import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/shelter">Find Shelters</Link></li>
            <li><Link to="/sos">Emergency SOS</Link></li>
            <li><Link to="/threat-alert">Report Threat</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><i className="fas fa-envelope"></i> info@sheshelter.org</li>
            <li><i className="fas fa-phone"></i> +1 (800) 123-4567</li>
            <li><i className="fas fa-map-marker-alt"></i> 123 Safety Ave, Suite 100</li>
            <li>City, State 12345</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>
          <p className="join-community">Join our community for updates and safety tips</p>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; 2025 SheShelter. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;