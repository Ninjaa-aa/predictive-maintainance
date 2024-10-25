// services/client/ServiceCard.tsx
'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { type Service } from '@/data/service';
import { FlipText } from '@/components/services/client/FlipText';
import { iconComponents } from '@/data/service';

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    once: false,
    margin: "-100px",
    amount: 0.3
  });

  const variants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateY: -180
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        delay: index * 0.2
      }
    }
  };

  const IconComponent = iconComponents[service.icon];

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="h-full perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card content remains the same as your original implementation */}
      <motion.div
        className="h-full bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-xl p-6 relative overflow-hidden"
        animate={{
          scale: isHovered ? 1.05 : 1,
          boxShadow: isHovered 
            ? "0 25px 50px -12px rgba(239, 68, 68, 0.25)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Your existing card content implementation */}
        <motion.div 
          className="flex items-center space-x-4 mb-6"
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.div
            className="bg-red-100 rounded-full p-3"
            animate={{ 
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.6 }}
          >
            <IconComponent className="w-8 h-8 text-red-600" />
          </motion.div>
          
          <FlipText 
            text={service.title}
            className="text-2xl font-bold text-red-700"
          />
        </motion.div>

        <motion.p 
          className="text-gray-700 leading-relaxed mb-6"
          animate={{
            opacity: isHovered ? 1 : 0.8,
            y: isHovered ? 0 : 5
          }}
          transition={{ duration: 0.3 }}
        >
          {service.description}
        </motion.p>

        <motion.button
          className="flex items-center text-red-600 font-semibold group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Learn More</span>
          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            <ChevronRight className="w-5 h-5 ml-2" />
          </motion.div>
        </motion.button>

        <motion.div
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-red-500/20 rounded-full blur-3xl"
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.3 : 0
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
}
