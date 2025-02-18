// FadeSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2 }
  }
};

const FadeSection = ({ id, className, children }) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: .2 }}
      variants={fadeVariants}
    >
      {children}
    </motion.section>
  );
};

export default FadeSection;
