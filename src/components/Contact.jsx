// src/components/Contact.jsx
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <p className="contact-sub">Feel free to reach out — I'd love to hear from you.</p>
        <div className="contact-links">
          <a href={`mailto:${personalInfo.email}`} className="contact-link">
            <FaEnvelope /> Email
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact-link">
            <FaGithub /> GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact-link">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        <a href="/resume.pdf" download className="btn btn-primary resume-download">
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;