import React from 'react';
import FadeSection from './fadeSection';
import '../styles/contact.css';

const Contact = () => {
  return (
    <FadeSection id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>
          If you'd like to get in touch, feel free to send an email to{' '}
          <a href="mailto:rsteward117@gmail.com">
            rsteward117@gmail.com
          </a>
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/randy-steward-6607191a6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rsteward117"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </FadeSection>
  );
};

export default Contact;
