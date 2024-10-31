import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useInView } from 'react-intersection-observer';
import { CountUp } from '@/components/stats/client/CountUp';

interface Stat {
  id: string;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  description: string;
  icon: string;
  trend?: {
    value: number;
    isPositive: boolean;
    description: string;
  };
}

interface ClientStatsProps {
  initialStats: Stat[];
}

interface StatCardProps {
  stat: Stat;
  index: number;
  isInView: boolean;
}

export default function ClientStats({ initialStats }: ClientStatsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2"
    >
      {initialStats.map((stat, index) => (
        <StatCard
          key={stat.id}
          stat={stat}
          index={index}
          isInView={inView}
        />
      ))}
    </motion.div>
  );
}

function StatCard({ stat, isInView }: StatCardProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.35,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative bg-gradient-to-br from-gray-50 to-gray-100 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 opacity-90 rounded-xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative p-8 space-y-6">
        {/* Icon and Trend Section */}
        <div className="flex justify-between items-center mb-6">
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-md"
          >
            <Icon icon={stat.icon} className="w-6 h-6 text-white" />
          </motion.div>

          {/* Trend Indicator */}
          {stat.trend && (
            <div
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                stat.trend.isPositive
                  ? 'bg-emerald-100 text-emerald-600'
                  : 'bg-red-100 text-red-600'
              }`}
            >
              <Icon
                icon={
                  stat.trend.isPositive
                    ? 'fluent:arrow-trending-up-24-filled'
                    : 'fluent:arrow-trending-down-24-filled'
                }
                className="w-4 h-4"
              />
              {stat.trend.value}%
            </div>
          )}
        </div>

        {/* Value and Label Section */}
        <div className="text-center space-y-2">
          <div className="text-5xl font-semibold text-gray-800">
            {stat.prefix && <span className="text-xl text-gray-500">{stat.prefix}</span>}
            <CountUp
              end={stat.value}
              isInView={isInView}
              duration={2.5}
              decimals={stat.id === 'uptime' ? 1 : 0}
            />
            {stat.suffix && <span className="text-xl text-gray-500 ml-1">{stat.suffix}</span>}
          </div>
          <h3 className="text-lg font-semibold text-gray-600">
            {stat.label}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed text-center">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
}
