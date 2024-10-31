// StatsClient.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Stat } from '@/types/stats.types';
import { StatCard } from '@/components/stats/client/StatsCard';
import { StatusBar } from '@/components/stats/client/StatusBar';
interface StatsClientProps {
  stats: Stat[];
}

export function StatsClient({ stats }: StatsClientProps) {
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(stats.map(stat => [stat.id, 0]))
  );
  
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Counter animation effect
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard 
              key={stat.id}
              stat={stat}
              count={counts[stat.id]}
              variants={cardVariants}
            />
          ))}
        </div>
      </motion.div>

      <StatusBar lastUpdated={lastUpdated} formatTimeAgo={formatTimeAgo} />
    </>
  );
}