import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { type Service } from '@/data/service';
import { iconComponents } from '@/data/service';

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    once: true,
    margin: "-100px",
    amount: 0.3
  });

  // Card entrance animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        delay: index * 0.2
      }
    }
  };

  // Hover animation variants
  const hoverVariants = {
    rest: { 
      scale: 1,
      backgroundColor: "rgba(254, 242, 242, 0.9)",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hover: { 
      scale: 1.03,
      backgroundColor: "rgba(254, 226, 226, 0.95)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const iconVariants = {
    rest: { 
      scale: 1,
      rotate: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hover: { 
      scale: 1.15,
      rotate: 360,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const textVariants = {
    rest: { 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hover: { 
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const IconComponent = iconComponents[service.icon];

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="h-full"
    >
      <motion.div
        variants={hoverVariants}
        initial="rest"
        whileHover="hover"
        className="h-full rounded-xl p-6 relative overflow-hidden shadow-sm
                   bg-gradient-to-br from-red-50 via-red-50/80 to-white
                   hover:from-red-100/90 hover:via-rose-50/90 hover:to-red-50/80
                   border border-red-100 hover:border-red-200
                   transition-shadow duration-300 hover:shadow-xl"
      >
        <motion.div 
          className="flex items-center space-x-4 mb-6"
          variants={textVariants}
        >
          <motion.div
            variants={iconVariants}
            className="bg-gradient-to-br from-red-100 to-rose-100 rounded-full p-3"
          >
            <IconComponent className="w-8 h-8 text-red-600" />
          </motion.div>
          
          <motion.h3 
            variants={textVariants}
            className="text-2xl font-bold bg-gradient-to-r from-red-700 to-rose-600 bg-clip-text text-transparent"
          >
            {service.title}
          </motion.h3>
        </motion.div>

        <motion.p 
          variants={textVariants}
          className="text-gray-700 leading-relaxed"
        >
          {service.description}
        </motion.p>

        {/* Animated background elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ opacity: 0.3, scale: 1.5 }}
          transition={{ duration: 0.4 }}
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-red-400 to-rose-300 rounded-full blur-3xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ opacity: 0.2, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-rose-300 to-red-200 rounded-full blur-3xl"
        />
      </motion.div>
    </motion.div>
  );
}