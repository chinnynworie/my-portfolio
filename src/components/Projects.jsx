// src/components/Projects.jsx
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}

export default Projects;