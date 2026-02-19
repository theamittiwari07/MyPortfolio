import React from 'react';

function Hero() {
  return (
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
  );
}

export default Hero;
