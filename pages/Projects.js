function Projects() {
  const projects = [
    {
      title: "Haven App",
      description: "Mental health app with mood tracking and AI chat",
      tech: "React Native, Firebase",
    },
    {
      title: "Habit Tracker",
      description: "Mobile app to track daily habits and routines with AI suggestions",
      tech: "React Native, Firebase, C#",
    },
    {
      title: "NCD Website",
      description: "Business website for Nako Creative Design services",
      tech: "HTML, CSS, JavaScript",
    },
  ];

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <p className="projects-subtitle">A collection of things I've built</p>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            tech={p.tech}
          />
        ))}
      </div>
    </div>
  );
}