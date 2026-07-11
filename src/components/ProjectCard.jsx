// src/components/ProjectCard.jsx
import './ProjectCard.css';

function ProjectCard({ project }) {
  const { title, description, tags, githubUrl, liveUrl, image } = project;

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} onError={(e) => { e.target.style.display = 'none' }} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tags">
          {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <div className="project-links">
          <a href={githubUrl} target="_blank" rel="noreferrer" className="link-btn">
            GitHub
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="link-btn primary">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;