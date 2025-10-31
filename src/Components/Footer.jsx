import React from "react";
import "../Style/footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-name">Sumitra Biswal</h3>
        <p className="footer-quote">
          “Keep learning, keep building, keep growing.”
        </p>

        <div className="footer-links">
          <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:biswalsumi6@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Sumitra Biswal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
