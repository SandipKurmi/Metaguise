import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import MailIcon from "../assets/footer/mail.svg";
import PhoneIcon from "../assets/footer/phone.svg";

const Footer = () => {
  return (
    <footer className="tw-mt-14 tw-mb-8 tw-max-w-[1100px] tw-mx-auto tw-px-4">
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-items-center md:tw-items-start tw-gap-8 md:tw-gap-32 font">
        {/* Image 1 */}
        <img className="tw-w-32 md:tw-w-40" src={logo} alt="METAGUISE Logo" />

        <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center md:tw-items-start tw-gap-8 md:tw-gap-32">
          {/* Home Links */}
          <div className="tw-text-base tw-flex tw-flex-col tw-items-center md:tw-items-start tw-text-center md:tw-text-right footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#products">Products</a>
          </div>
          {/* About Links */}
          <div className="tw-text-base tw-flex tw-flex-col tw-items-center md:tw-items-start footer-links">
            <a href="#about">About Us</a>
            <a href="#contact">Talk to Us</a>
            <a href="#contact">Partner With Us</a>
          </div>
          {/* Contact Links */}
          <div className="tw-flex tw-text-base tw-flex-col tw-items-center md:tw-items-start tw-gap-4 footer-links">
            <div className="tw-flex tw-items-center tw-gap-2">
              <img src={MailIcon} alt="mail" />
              <a
                href="mailto:contactus@metaguise.com"
                className="tw-text-sm md:tw-text-base"
              >
                contactus@metaguise.com
              </a>
            </div>

            <div className="tw-flex tw-gap-4">
              <img src={PhoneIcon} alt="phone" />
              <a
                href="phoneto:981-160-4449"
                className="tw-text-sm md:tw-text-base"
              >
                981-160-4449 / 935-560-4449
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
