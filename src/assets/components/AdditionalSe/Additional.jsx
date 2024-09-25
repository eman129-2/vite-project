// AdditionalSection.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import '../categories/Categories.css'
const AdditionalSection = () => {
  return (
    <>
      <div className="additional-section">
        <div className="features">
          <div className="feature-item">
            <img src="/icon1.png" alt="High Quality" />
            <p className='first'>High Quality</p>
            <p>Crafted from top materials</p>
          </div>
          <div className="feature-item">
            <img src="/icon2.png" alt="Warranty Protection" />
            <p className='first'>Warranty Protection</p>
            <p>Over 2 years</p>
          </div>
          <div className="feature-item">
            <img src="/icon3.png" alt="Free Shipping" />
            <p className='first'>Free Shipping</p>
            <p>Order over $150</p>
          </div>
          <div className="feature-item">
            <img src="/icon4.png" alt="24/7 Support" />
            <p className='first'>24/7 Support</p>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className='fur'>Funiro.</h3>
            <p className='add'>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Help</h3>
            <ul>
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <input type="email" placeholder="Enter your email address" />
            <button>SUBSCRIBE</button> 
          </div>
        </div>
        <hr className='line' />
        <p className="footer-bottom">© 2023 Furniro. All rights reserved</p>
      </footer>
    </>
  );
};

export default AdditionalSection;
