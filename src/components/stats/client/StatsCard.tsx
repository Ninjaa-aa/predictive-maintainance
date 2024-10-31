// components/client/StatCard.tsx
'use client';

import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { Stat } from '@/types/stats.types';
import { ProgressBar } from '@/components/stats/client/ProgressBar';

interface StatCardProps {
  stat: Stat;
  count: number;
  variants: import('framer-motion').Variants;
}

export function StatCard({ stat, count, variants }: StatCardProps) {
  return (
    <motion.div
      variants={variants}
      className="group relative overflow-hidden rounded-xl border border-red-100/50 
                transition-all duration-500 hover:shadow-xl hover:shadow-red-300/30 
                hover:-translate-y-2 bg-white 
                hover:bg-gradient-to-br hover:from-red-100 hover:via-red-200 hover:to-red-300"
    >
      <div className="relative p-6 transition-colors duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-red-50/80 group-hover:bg-white/50 
                        transition-all duration-500 group-hover:scale-110">
            <Activity className="w-6 h-6 text-red-500 group-hover:text-red-600 
                            transition-colors duration-300" />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-2xl font-bold text-gray-800 group-hover:text-red-700 
                         transition-all duration-300 group-hover:scale-110">
              {count.toFixed(1)}{stat.suffix}
            </span>
            <div className={`flex items-center text-sm ${
              stat.trend?.isPositive ? 'text-emerald-500' : 'text-red-500'
            } group-hover:text-red-700/90 transition-all duration-300`}>
              {stat.trend?.isPositive ? '↑' : '↓'} {stat.trend?.value}% {stat.trend?.description}
            </div>
          </div>
        </div>
        
        <h3 className="text-gray-700 font-semibold mb-1 group-hover:text-red-700 
                    transition-colors duration-300">
          {stat.label}
        </h3>
        
        <p className="text-sm text-gray-500 group-hover:text-red-700/80 
                  transition-colors duration-300">
          {stat.description}
        </p>

        <ProgressBar count={count} maxValue={stat.value} />
      </div>
    </motion.div>
  );
}