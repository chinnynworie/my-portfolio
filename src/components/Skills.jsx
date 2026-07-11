// src/components/Skills.jsx
import { skills } from '../data/portfolioData';
import SkillCard from './SkillCard';
import './Skills.css';

function Skills() {
  const technical = skills.filter(s => s.category === 'technical');
  const professional = skills.filter(s => s.category === 'professional');

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-columns">
          <div className="skills-column">
            <h3>Technical</h3>
            <div className="skills-grid">
              {technical.map(skill => <SkillCard key={skill.name} skill={skill} />)}
            </div>
          </div>
          <div className="skills-column">
            <h3>Professional</h3>
            <div className="skills-grid">
              {professional.map(skill => <SkillCard key={skill.name} skill={skill} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;