import React from 'react';

function Experience() {
  return (
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
  );
}

export default Experience;
