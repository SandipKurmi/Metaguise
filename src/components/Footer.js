import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; 

const Footer= () => {
  return (
    <div className="App">
      <footer className="footer">
        <div className="footer-logo">
          <img src={logo} alt="METAGUISE Logo" />
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#talk">Talk To Us</a>
          <a href="#partner">Partner With Us</a>
        </div>
        <div className="footer-contact">
          <p>
            <i className="fas fa-envelope"></i> contactus@metaguise.com
          </p>
          <p>
            <i className="fas fa-phone"></i> 981-160-4449 / 935-560-4449
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
