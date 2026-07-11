// src/components/Footer.jsx
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {year} {personalInfo.name}. All rights reserved.</p>
        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href={`mailto:${personalInfo.email}`}><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;