'use client';
import { motion } from 'framer-motion';

interface AnimatedListItemProps {
  children: React.ReactNode;
}

const AnimatedListItem = ({ children }: AnimatedListItemProps) => {
  return (
    <motion.li 
      className="flex items-start text-gray-600 group-hover:text-gray-900 transition-all duration-300"
      whileHover={{ x: 4 }}
    >
      <svg
        className="mr-3 h-5 w-5 text-red-400 flex-shrink-0 transform group-hover:scale-110 
          group-hover:rotate-12 transition-all duration-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      {children}
    </motion.li>
  );
};

export default AnimatedListItem;