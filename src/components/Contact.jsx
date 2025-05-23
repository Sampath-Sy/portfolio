import React from "react";
import mail from "./../assets/mail.png";
import iphone from "./../assets/iphone.png";

import { FaLinkedin, FaGithub,FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <h2 className="contact-headline">Contact</h2>
        <p className="contact-summary">
          Front-End Developer with 3 years of hands-on experience designing and
          building responsive, user-friendly web applications. Skilled in React,
          TypeScript, JavaScript, HTML, and CSS, I am dedicated to delivering
          high-quality digital experiences and innovative solutions.
        </p>

        <div className="email-section">
          <img src={mail} alt="mail icon" />
          <span className="email">sampathi.yedukondalu@yahoo.com</span>
        </div>
        <div className="phone-section">
          <img src={iphone} alt="phone icon" />
          <span className="phone">+91 9490922949</span>
        </div>
        <div className="social-sections">
          <a href="https://www.linkedin.com/in/sampath-sy-" target="_blank">
            <FaLinkedin size={32} color="#0A66C2" />
          </a>

          <a href="https://github.com/Sampath-Sy" target="_blank">
            <FaGithub size={32}  color="#FEFEFE"/>
          </a>

          <a href="https://www.instagram.com/sampath_sy" target="_blank">
            <FaInstagram size={32} color="#E4405F"/>
          </a>
        </div>
      </div>
    </section>
  );
}
