// src/components/About.jsx
import { personalInfo } from '../data/portfolioData';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <img src="/profile.jpg" alt={personalInfo.name} className="about-photo" />
          <h2>About Me</h2>
        </div>
        <div className="about-text">
          {personalInfo.bio.map((paragraph, index) => (
            <p key={index} className="about-bio">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;