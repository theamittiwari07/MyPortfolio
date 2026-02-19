import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const skills = {
    backend: ['C#', '.NET Core', 'ASP.NET Core Web API', 'Microservices', 'REST API'],
    frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    database: ['SQL Server', 'Entity Framework Core', 'LINQ'],
    cloud: ['Microsoft Azure', 'Docker', 'Kubernetes', 'CI/CD'],
    tools: ['Visual Studio', 'Git', 'Azure DevOps']
  };

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
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">AT</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Amit Tiwari</span>
            </h1>
            <h2 className="hero-subtitle">Senior Software Developer</h2>
            <p className="hero-description">
              Specializing in .NET Core, React, Microservices & Azure
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
        </div>
      </section>

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

      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            <div className="experience-card">
              <div className="exp-header">
                <h3>Software Developer</h3>
                <span className="company">Motilal Oswal Financial Services Limited</span>
                <span className="location">Mumbai, India</span>
                <span className="duration">April 2024 – Present</span>
              </div>
              <ul className="exp-details">
                <li>Developed and enhanced enterprise-grade applications across monolithic and microservices architectures</li>
                <li>Built critical back-office applications for financial services operations</li>
                <li>Developed RESTful APIs and backend services using .NET Core, C#, and Entity Framework Core</li>
                <li>Created dynamic front-end modules using jQuery, HTML5, CSS3, and Bootstrap</li>
                <li>Optimized database performance with complex queries and stored procedures in SQL Server</li>
                <li>Designed microservices for inter-application communication ensuring scalability</li>
                <li>Participated in full SDLC from requirements to deployment and maintenance</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
            <div className="experience-card">
              <div className="exp-header">
                <h3>Software Developer</h3>
                <span className="company">Nexus Techno Solutions Pvt. Ltd</span>
                <span className="location">Navi Mumbai, India</span>
                <span className="duration">January 2022 – March 2024</span>
              </div>
              <ul className="exp-details">
                <li>Responsible for full-stack web development using ASP.NET technologies</li>
                <li>Created Web APIs for web applications</li>
                <li>Assisted Lead Developer in implementing ASP.NET solutions for business needs</li>
                <li>Maintained and deployed existing web applications</li>
                <li>Mentored junior developers on best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>I'm currently open to new opportunities and collaborations.</p>
            <p>Feel free to reach out if you'd like to discuss a project or just connect!</p>
            <div className="contact-links">
              <a href="mailto:theamittiwari07@gmail.com" className="contact-link">
                📧 Email
              </a>
              <a href="https://in.linkedin.com/in/theamittiwari07" className="contact-link" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
              <a href="https://theamittiwari07.github.io/MyPortfolio/" className="contact-link" target="_blank" rel="noopener noreferrer">
                🌐 Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Amit Tiwari. All rights reserved.</p>
          <p>Built with React.js</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
