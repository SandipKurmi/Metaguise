import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from '../assets/logo.png';
import Drawer from './Drawer';

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  // Disable body scroll when the drawer is open
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDrawerOpen]);

  return (
    <div>
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <header className='header'>
        <div className='header-left'>
          <div className='social-icons'>
            <a href='https://gmail.com/' className='icon'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href='https://gmail.com/' className='icon'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='https://gmail.com/' className='icon'>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <img src={logo} alt='Logo' className='logo' />
        <div className='header-right'>
          <div className='menu'>
            <FontAwesomeIcon icon={faBars} onClick={toggleDrawer} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
