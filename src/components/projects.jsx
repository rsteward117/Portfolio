import React from 'react';
import FadeSection from './fadeSection';
import '../styles/projects.css';
import blogProjectImage from '../assets/blog_project_image.png';
import { motion } from 'framer-motion';


const projects = [
  {
    title: "Warhammer 40k Fan Blog",
    description: "A fan-made blog dedicated to the rich universe of Warhammer 40k. Join fellow enthusiasts to delve deep into the lore of 40k, sharing insights and original writings along the way",
    stack: ["React", "JavaScript", "NodeJS", "PostgreSQL"],
    liveDemo: "https://warhammer-blog-frontend.onrender.com",
    github: "https://github.com/rsteward117/Warhammer-blog",
    image: blogProjectImage
  }
];

const Projects = () => {
  return (
    <FadeSection id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h1>{project.title}</h1>
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={`${project.title} screenshot`} />
                </div>
              )}
              <p>{project.description}</p>
              <p className="project-stack">
                {project.stack.join(' • ')}
              </p>
              <div className="project-links">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeSection>
  );
};

export default Projects;
