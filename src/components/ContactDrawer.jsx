import React from "react";
import "./ContactDrawer.css";

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactDrawer = ({ isOpen }) => {
  return (
    <div className={`contact-drawer ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
      <div className="drawer-content">
        <h5 className="text-center mb-4">Ways to Connect</h5>

        <p><strong>Phone:</strong> 7828027765</p>
        <p><strong>Email:</strong> <a href="mailto:saivammmmi.dev.1020@gmail.com">saivammmmi.dev.1020@gmail.com</a></p>
        <p><strong>Resume:</strong> <a href="/your-resume-link.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a></p>
        <p><strong>Blog:</strong> <a href="/blog" target="_blank" rel="noopener noreferrer">Visit Blog</a></p>

        <div className="social-icons text-center mt-4">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com/yourinsta" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactDrawer;
