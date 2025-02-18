import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, LayoutGroup } from 'framer-motion';
import '../styles/navbar.css';
import FadeSection from './fadeSection';
import myLogo from '../assets/logo.png';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("hero");

  return (
    <nav className="navbar">
      <FadeSection className="navbar-container">
        <div className="logo">
          <img src={myLogo} alt="My Logo" />
        </div>
        <LayoutGroup>
          <ul className="nav-links">
            <li 
              className={activeNav === "hero" ? "active" : ""}
            >
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                onClick={() => setActiveNav("hero")}
              >
                Home
              </Link>
              {activeNav === "hero" && (
                <motion.div 
                  className="underline" 
                  layoutId="underline" 
                />
              )}
            </li>
            <li 
              className={activeNav === "about" ? "active" : ""}
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                onClick={() => setActiveNav("about")}
              >
                About
              </Link>
              {activeNav === "about" && (
                <motion.div 
                  className="underline" 
                  layoutId="underline" 
                />
              )}
            </li>
            <li 
              className={activeNav === "skills" ? "active" : ""}
            >
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={() => setActiveNav("skills")}
              >
                Skills
              </Link>
              {activeNav === "skills" && (
                <motion.div 
                  className="underline" 
                  layoutId="underline" 
                />
              )}
            </li>
            <li 
              className={activeNav === "projects" ? "active" : ""}
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setActiveNav("projects")}
              >
                Projects
              </Link>
              {activeNav === "projects" && (
                <motion.div 
                  className="underline" 
                  layoutId="underline" 
                />
              )}
            </li>
            <li 
              className={activeNav === "contact" ? "active" : ""}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={120}
                duration={500}
                onClick={() => setActiveNav("contact")}
              >
                Contact
              </Link>
              {activeNav === "contact" && (
                <motion.div 
                  className="underline" 
                  layoutId="underline" 
                />
              )}
            </li>
          </ul>
        </LayoutGroup>
      </FadeSection>
    </nav>
  );
};

export default Navbar;
