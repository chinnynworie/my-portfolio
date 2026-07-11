// src/components/About.jsx
import { personalInfo } from '../data/portfolioData';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        {personalInfo.bio.map((paragraph, index) => (
          <p key={index} className="about-bio">{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default About;