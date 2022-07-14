import React from "react";
import "./Footer.css";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faDiscord,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <section class="hero footer-section">
      <div className="hero-body  footer-section">
     <p className="connect">Let’s Connect</p>
     <p className="oppurtunity">Get in touch for opportunities or just to say hi! 👋</p>
     <div className="social-links">
     <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} className="footer-icon" size="2x"/>
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faFacebook} className="footer-icon" size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon className="footer-icon" icon={faDiscord} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faTwitter}className="footer-icon" size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faLinkedin} className="footer-icon" size="2x" />
      </a>
     </div>
      </div>
    </section>
  );
};

export default Footer;
