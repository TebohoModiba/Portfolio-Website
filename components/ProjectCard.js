function ProjectCard({ title, description, tech }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="project-card-tech">{tech}</span>
    </div>
  );
}