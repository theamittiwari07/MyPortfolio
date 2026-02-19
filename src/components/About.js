import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I am a passionate and results-driven Software Developer with <strong>4+ years of experience</strong> building 
            scalable, high-performance web applications using .NET Core, C#, ASP.NET Core, React, and Microservices architecture.
          </p>
          <p>
            I have strong expertise in backend development, REST API design, cloud deployment using Azure, 
            and containerization using Docker and Kubernetes.
          </p>
          <p>
            I focus on writing clean, maintainable code and designing scalable systems. 
            I am continuously learning new technologies and improving my skills.
          </p>
          <div className="about-stats">
            <div className="stat">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
