import React from 'react';
import FadeSection from './fadeSection';
import Skills from './skills';
import profilePic from '../assets/my_photo.png';
import '../styles/about.css';

const About = () => {
  return (
    <FadeSection id="about" className="about">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-image">
          <img src={profilePic} alt="Profile" />
        </div>
        <section className="about-text">
        <div className="text-card">
          <p>
            I'm a passionate full-stack web developer with a keen eye for design and in-depth knowledge of both front-end and back-end technologies. On the front end, I specialize in building clean, minimal UIs using React, TailwindCSS, and JavaScript, ensuring that my websites are both responsive and engaging for users.
            On the back end, I develop robust server-side applications and have extensive experience working with SQL databases such as PostgreSQL, optimizing data storage and retrieval to power dynamic, scalable web applications.
          </p>
        </div>
        </section>
      </div>
      <Skills />
    </FadeSection>
  );
};

export default About;
