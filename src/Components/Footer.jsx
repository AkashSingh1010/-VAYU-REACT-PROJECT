import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="column">
        <h2>GET IN TOUCH</h2>
        <p>+91 7619221922</p>
        <p>+91 89041722505</p>
        <p>admin@amigosbusinesscorp.com</p>
        <div className='icons-footer'>
        <a href="www.twitter.com" className="icon"><i className="fab fa-twitter"></i></a>
          <a href="#facebook" className="icon"><i className="fab fa-facebook"></i></a>
          <a href="#youtube" className="icon"><i className="fab fa-youtube"></i></a>
          <a href="#instagram" className="icon"><i className="fab fa-instagram"></i></a>
          <a href="#linkedin" className="icon"><i className="fab fa-linkedin"></i></a>
          </div>
      </div>
      <div className="column">
        <h2>USEFUL LINKS</h2>
        <p>Our Story</p>
        <p>Our Services</p>
        <p>Contact Us</p>
      </div>
      <div className="column">
        <h2>STAY UPDATED</h2>
        <p>Watch here for more information on courses and training we conduct</p>
      </div>
    </footer>
  );
}

export default Footer;