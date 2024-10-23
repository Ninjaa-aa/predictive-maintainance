'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Service } from '@/types/service.types';

interface Props {
  service: Service;
  index: number;
  onSelect?: (service: Service, rect: DOMRect) => void;
}

export default function ClientServiceCard({ service, index, onSelect }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (cardRef.current && onSelect) {
      const rect = cardRef.current.getBoundingClientRect();
      onSelect(service, rect);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Glowing effect on hover */}
      <motion.div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-300 to-red-400 opacity-0 blur-xl group-hover:opacity-30 transition-all duration-500"
        animate={{
          scale: isHovered ? 1 : 0.8,
          opacity: isHovered ? 0.2 : 0
        }}
      />

<motion.div
        className={`
          relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-8 
          border border-white/20 cursor-pointer transition-all duration-500
          hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:bg-white/90
          backdrop-saturate-[1.8]
        `}
        whileHover={{ y: -6, scale: 1.01 }}
        onClick={handleClick}
      >
        {/* Animated background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <motion.div
          className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]"
          animate={{
            backgroundPosition: isHovered ? ['0px 0px', '20px 20px'] : '0px 0px',
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10">
          {/* Animated Icon Container */}
          <motion.div 
            className="w-16 h-16 mb-6 relative"
            whileHover={{ scale: 1.05, rotate: 360 }}
            transition={{ duration: 1, type: "spring" }}
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-red-500 rounded-xl opacity-20 blur-xl" />
            
            {/* Icon background with gradient */}
            <div className="relative h-full bg-gradient-to-br from-blue-500 to-red-500 rounded-xl flex items-center justify-center overflow-hidden">
              {/* Animated background patterns */}
              <motion.div
                className="absolute inset-0 bg-grid-white/10"
                animate={{
                  backgroundPosition: ['0px 0px', '20px 20px'],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <Icon icon={service.icon} className="text-white w-8 h-8 relative z-10" />
            </div>
          </motion.div>

          {/* Content with enhanced typography */}
          <motion.h3 
            className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700"
            animate={{ color: isHovered ? '#1d4ed8' : '#1e293b' }}
          >
            {service.name}
          </motion.h3>
          <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
            {service.description}
          </p>

          {/* Enhanced Button */}
          <motion.button
            className="group/btn px-6 py-2.5 rounded-xl font-medium relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover/btn:from-red-500 group-hover/btn:to-red-600" />
            <div className="absolute inset-0 bg-grid-white/10 bg-[size:10px_10px]" />
            <span className="relative text-white flex items-center gap-2">
              Learn More
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};