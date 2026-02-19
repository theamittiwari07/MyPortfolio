import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Microservices E-Commerce Platform',
      description: 'Designed and developed scalable microservices using .NET Core and Docker with API Gateway and Azure deployment.',
      tech: ['.NET Core', 'Docker', 'Azure', 'Microservices']
    },
    {
      title: 'Enterprise Web API',
      description: 'Developed secure REST APIs using ASP.NET Core with JWT authentication and SQL Server.',
      tech: ['ASP.NET Core', 'JWT', 'SQL Server', 'REST API']
    },
    {
      title: 'React + .NET Dashboard',
      description: 'Built full-stack dashboard using React frontend and .NET Core backend with real-time data.',
      tech: ['React', '.NET Core', 'Real-time', 'Full-stack']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, j) => <span key={j} className="tech-badge">{tech}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
