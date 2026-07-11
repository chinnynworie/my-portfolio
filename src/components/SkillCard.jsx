// src/components/SkillCard.jsx
import './SkillCard.css';

function SkillCard({ skill }) {
  const { name, level, icon: Icon } = skill;

  return (
    <div className="skill-card">
      <Icon className="skill-icon" size={28} />
      <div className="skill-info">
        <p className="skill-name">{name}</p>
        <div className="skill-bar">
          <div className="skill-bar-fill" style={{ width: `${level}%` }} />
        </div>
      </div>
    </div>
  );
}

export default SkillCard;