import React from 'react';
import FadeSection from './fadeSection';
import { ReactTyped } from 'react-typed';
import '../styles/hero.css';

const Hero = () => {
  return (
    <FadeSection id="hero" className="hero">
      <div className="container">
        <h1>
          <ReactTyped
            strings={["Hi, I'm Randy Steward"]}
            typeSpeed={65}
            showCursor={false}
          />
        </h1>
        <p>
          <ReactTyped
            strings={["I'm a FullStack Web Developer"]}
            typeSpeed={65}
            startDelay={1500}
            showCursor={false}
          />
        </p>
        <a href="#projects" className="cta-button">
          View Projects
        </a>
      </div>
    </FadeSection>
  );
};

export default Hero;
