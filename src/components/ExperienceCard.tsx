import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative h-80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img 
          src={experience.image} 
          alt={experience.alt} 
          className="w-full h-full object-cover object-center"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80" />
      </div>
      
      <motion.div 
        className="absolute inset-0 flex flex-col justify-end p-6 text-white"
        initial={{ y: 20 }}
        whileHover={{ y: 0 }}
      >
        <motion.h3 
          className="text-xl font-bold mb-2"
          initial={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          {experience.title}
        </motion.h3>
        <motion.p 
          className="text-sm text-gray-200 transform-gpu"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {experience.description}
        </motion.p>
        <motion.button 
          className="mt-4 text-blue-300 hover:text-blue-100 self-start font-medium flex items-center transition-colors"
          whileHover={{ x: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;