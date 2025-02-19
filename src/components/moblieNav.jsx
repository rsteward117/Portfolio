import React from 'react';
import { Link } from 'react-scroll';
import '../styles/mobileNav.css';

function MobileNav({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <button className="close-button" onClick={onClose}>X</button>
      <ul className="moblie-links">
        <li>
            <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            onClick={onClose}
            >
            Home
            </Link>
        </li>
        <li>
            <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            onClick={onClose}
            >
            About
            </Link>
        </li>
        <li>
            <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            onClick={onClose}
            >
            Skills
            </Link>
        </li>
        <li>
            <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={onClose}
            >
            Projects
            </Link>
        </li>
        <li>
            <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={120}
            duration={500}
            onClick={onClose}
            >
            Contact
            </Link>
        </li>
        </ul>
    </div>
  );
}

export default MobileNav;