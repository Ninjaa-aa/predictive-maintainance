"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Component() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });
  const [isMounted, setIsMounted] = useState(false);

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

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-red-100">
      {/* Animated background grid */}
      <svg className="absolute inset-0 z-0 opacity-20" xmlns="http://www.w3.org/2000/svg">
        {[...Array(20)].map((_, i) => (
          <motion.line
            key={`h${i}`}
            x1="0%"
            y1={`${i * 5}%`}
            x2="100%"
            y2={`${i * 5}%`}
            stroke="#3B82F6"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
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
            stroke="#3B82F6"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          />
        ))}
      </svg>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left side: Text content */}
        <motion.div 
          className="flex flex-col w-full lg:w-1/2 justify-center items-start text-left mb-8 lg:mb-0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h1 
            className="mb-4 text-4xl lg:text-6xl font-bold leading-tight text-blue-600"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Predictive
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-red-500"
            >
              Maintenance
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Solutions
            </motion.span>
          </motion.h1>
          <motion.p 
            className="leading-normal text-xl mb-8 text-gray-700"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            Revolutionizing Industry with Advanced AI and IoT Integration
          </motion.p>
          <motion.ul
            className="list-none mb-8 text-gray-700 space-y-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            {[
              "Real-time equipment health monitoring",
              "AI-driven failure prediction algorithms",
              "IoT sensor integration for data collection",
              "Customizable maintenance schedules"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Solutions
          </motion.button>
        </motion.div>

        {/* Right side: Visual element */}
        <div className="w-full lg:w-1/2 py-6 text-center">
          <motion.div 
            className="relative w-full h-64 lg:h-96 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Central gear */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
              style={{ 
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <svg className="w-24 h-24 lg:w-36 lg:h-36 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </motion.div>

            {/* Orbiting data points */}
            {['AI', 'ML', 'IoT', 'Data', 'Pred', 'Maint'].map((text, index) => (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2 w-full h-full"
                style={{
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 15 + index * 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <motion.div
                  className="absolute w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-md"
                  style={{
                    top: `${50 + 40 * Math.cos((index * 2 * Math.PI) / 6)}%`,
                    left: `${50 + 40 * Math.sin((index * 2 * Math.PI) / 6)}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <span className="text-sm lg:text-base font-bold text-white">
                    {text}
                  </span>
                </motion.div>
              </motion.div>
            ))}

            {/* Connecting lines */}
            <svg className="absolute top-0 left-0 w-full h-full">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <motion.line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`${50 + 40 * Math.cos((index * 2 * Math.PI) / 6)}%`}
                  y2={`${50 + 40 * Math.sin((index * 2 * Math.PI) / 6)}%`}
                  stroke="rgba(59, 130, 246, 0.5)"
                  strokeWidth="2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.7, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Data particles */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md"
              initial={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
              }}
              animate={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              {i % 2 === 0 ? '1' : '0'}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}