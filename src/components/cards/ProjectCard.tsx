import { Project } from "../../constants/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const typeColor = {
    residential: "#3B82F6",
    commercial: "#8B5CF6",
    municipal: "#10B981",
  };

  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={project.image} alt={project.name} />
        <div className="project-overlay">
          <button className="view-project-btn">View Project →</button>
        </div>
      </div>
      <div className="project-card-content">
        <div className="project-header">
          <h3>{project.name}</h3>
          <span
            className="project-type"
            style={{ background: typeColor[project.type] }}
          >
            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
          </span>
        </div>

        <p className="project-description">{project.description}</p>

        {project.location && (
          <div className="project-meta">
            <span>📍 {project.location}</span>
            {project.completionDate && <span>📅 {project.completionDate}</span>}
          </div>
        )}

        <div className="project-features">
          <strong>Key Features:</strong>
          <ul>
            {project.features.slice(0, 2).map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
