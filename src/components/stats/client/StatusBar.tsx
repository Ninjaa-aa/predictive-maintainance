// components/client/StatusBar.tsx
'use client';

import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatusBarProps {
  lastUpdated: Date;
  formatTimeAgo: (date: Date) => string;
}

export function StatusBar({ lastUpdated, formatTimeAgo }: StatusBarProps) {
  return (
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
  );
}