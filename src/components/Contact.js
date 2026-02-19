import React from 'react';

function Contact() {
  return (
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
  );
}

export default Contact;
