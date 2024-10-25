// components/animated-hero.tsx
"use client"

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedVisuals } from '@/components/hero/client/AnimatedVisuals'
type AnimatedHeroProps = {
  children: React.ReactNode
}

export default function AnimatedHero({ children }: AnimatedHeroProps) {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const y = useTransform(scrollY, [0, 200], [0, 50]);

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    setIsMounted(true);

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };



  return (
    <>
      {/* Animated background grid */}
      <svg className="absolute inset-0 z-0 opacity-20" xmlns="http://www.w3.org/2000/svg">
        {[...Array(20)].map((_, i) => (
          <motion.line
            key={`h${i}`}
            x1="0%"
            y1={`${i * 5}%`}
            x2="100%"
            y2={`${i * 5}%`}
            stroke="#EF4444"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.line
            key={`v${i}`}
            x1={`${i * 5}%`}
            y1="0%"
            x2={`${i * 5}%`}
            y2="100%"
            stroke="#EF4444"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          />
        ))}
      </svg>

      <motion.div 
        className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10"
        style={{ opacity, scale, y }}
      >
        {/* Left side: Text content */}
        <motion.div 
          className="flex flex-col w-full lg:w-1/2 justify-center items-start text-left mb-8 lg:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            variants={textVariants}
            whileHover={{
              scale: 1.05,
              color: "#2563EB",
              transition: { duration: 0.2 }
            }}
          >
            {children}
          </motion.div>
        </motion.div>

        {/* Right side: Visual element */}
        <AnimatedVisuals dimensions={dimensions} isMounted={isMounted} />
      </motion.div>
    </>
  )
}