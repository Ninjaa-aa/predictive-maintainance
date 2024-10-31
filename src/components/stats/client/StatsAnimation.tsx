// components/stats/StatsAnimation.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { StatsCard } from './StatsCard';
import { Stat } from '@/types/stats.types';

interface StatsAnimationProps {
  stats: Stat[];
}

export const StatsAnimation = ({ stats }: StatsAnimationProps) => {
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(stats.map(stat => [stat.id, 0]))
  );
  
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    const incrementValues = stats.map(stat => stat.value / steps);
    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep === steps) {
        clearInterval(timer);
        return;
      }

      setCounts(prevCounts => {
        const newCounts: Record<string, number> = {};
        stats.forEach((stat, index) => {
          newCounts[stat.id] = prevCounts[stat.id] + incrementValues[index];
        });
        return newCounts;
      });

      currentStep += 1;
    }, interval);

    const timeUpdater = setInterval(() => {
      setLastUpdated(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(timeUpdater);
    };
  }, [stats]);

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return 'Just now';
    if (seconds < 120) return '1 minute ago';
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
    if (seconds < 7200) return '1 hour ago';
    return `${Math.floor(seconds / 3600)} hours ago`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="w-full p-8 bg-gradient-to-br from-white via-slate-50/40 to-red-50/40 rounded-2xl relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    > 
      {/* Background patterns */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="xMidYMid slice">
          <pattern id="modernGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0L0 0L0 20" stroke="rgb(239, 68, 68)" strokeWidth="0.2" fill="none"/>
            <path d="M0 20L20 20L20 0" stroke="rgb(239, 68, 68)" strokeWidth="0.2" fill="none"/>
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#modernGrid)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
        >
          <div className="inline-block mb-3 px-6 py-2 rounded-full bg-white/80 text-red-600 text-sm font-medium backdrop-blur-sm border border-red-100 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
            AI-Powered Predictive Maintenance
          </div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-rose-500 mb-2 hover:scale-105 transition-transform duration-300">
            Real-Time Performance Metrics
          </h2>
          <div className="flex items-center justify-center mt-3 space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-sm text-red-600/80">Live System Analysis</span>
          </div>
        </motion.div>
        
        <motion.div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatsCard 
                key={stat.id} 
                stat={stat} 
                count={counts[stat.id]} 
              />
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="max-w-6xl mx-auto mt-8 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-red-100/50 hover:bg-white/80 transition-colors duration-300"
        >
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                <span>All Systems Operational</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-ping" />
                <span>Predictive Analysis Active</span>
              </div>
            </div>
            <div className="text-red-600/80 font-medium flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              Last updated: {formatTimeAgo(lastUpdated)}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </motion.div>
  );
};
