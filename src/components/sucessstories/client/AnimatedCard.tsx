'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CardProps } from '@/types/success-story.types';

const AnimatedCard = ({ children, className = '', index }: CardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.8, 
          delay: index * 0.1,
          ease: [0.21, 0.85, 0.45, 0.95] 
        } 
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative rounded-2xl border bg-gradient-to-br from-white/80 via-white/90 to-red-50/80 
        backdrop-blur-sm border-red-100 group transition-all duration-500 
        hover:border-red-200 hover:shadow-[0_8px_30px_rgb(251,113,133,0.12)]
        hover:-translate-y-1 ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-white to-red-50/50 
        group-hover:from-red-50/90 group-hover:via-red-50/90 group-hover:to-rose-50/90 
        transition-all duration-500 opacity-0 group-hover:opacity-100" />
      
      <div className="absolute inset-[-2px] rounded-2xl bg-gradient-to-r from-red-100/0 via-red-200/50 to-red-100/0 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      <div className="relative z-10">
        {children}
      </div>

      <div className="absolute -right-2 -bottom-2 w-20 h-20 bg-gradient-to-r from-red-100/0 to-red-200/30 
        rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 
        group-hover:scale-150" />
    </motion.div>
  );
};

export default AnimatedCard;