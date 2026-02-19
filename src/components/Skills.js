import React from 'react';

function Skills() {
  const skills = {
    backend: ['C#', '.NET Core', 'ASP.NET Core Web API', 'Microservices', 'REST API'],
    frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    database: ['SQL Server', 'Entity Framework Core', 'LINQ'],
    cloud: ['Microsoft Azure', 'Docker', 'Kubernetes', 'CI/CD'],
    tools: ['Visual Studio', 'Git', 'Azure DevOps']
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-tags">
              {skills.backend.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
            </div>
          </div>
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-tags">
              {skills.frontend.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
            </div>
          </div>
          <div className="skill-category">
            <h3>Database</h3>
            <div className="skill-tags">
              {skills.database.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
            </div>
          </div>
          <div className="skill-category">
            <h3>Cloud & DevOps</h3>
            <div className="skill-tags">
              {skills.cloud.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skill-tags">
              {skills.tools.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
