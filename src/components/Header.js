import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import logo from "../assets/logo.png";
import Drawer from "./Drawer";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Toggle drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable body scroll when the drawer is open
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDrawerOpen]);

  return (
    <div>
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <header className="header">
        {!isMobile && (
          <div className="header-left">
            <div className="social-icons">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        )}

        <div className="header-center">
          <img src={logo} alt="Metaguise Logo" className="logo" />
        </div>

        <div className="header-right">
          <div className="menu">
            <FontAwesomeIcon icon={faBars} onClick={toggleDrawer} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
