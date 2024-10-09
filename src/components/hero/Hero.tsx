import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Animated background grid */}
      <svg className="absolute inset-0 z-0" xmlns="http://www.w3.org/2000/svg">
        {[...Array(20)].map((_, i) => (
          <motion.line
            key={`h${i}`}
            x1="0%"
            y1={`${i * 5}%`}
            x2="100%"
            y2={`${i * 5}%`}
            stroke="#0066cc"
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
            stroke="#0066cc"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          />
        ))}
      </svg>

      <div className="container mx-auto px-6 flex items-center justify-between relative z-10">
        {/* Left side: Text content */}
        <motion.div 
          className="flex flex-col w-1/2 justify-center items-start text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h1 
            className="mb-4 text-5xl font-bold leading-tight text-white"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            Welcome to <span className="text-blue-500">Credo</span>
          </motion.h1>
          <motion.p 
            className="leading-normal text-xl mb-8 text-gray-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            Revolutionizing Predictive Maintenance with AI and Data Science
          </motion.p>
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
        <div className="w-1/2 py-6 text-center">
          <motion.div 
            className="relative w-full h-96 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Central gear */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center"
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
              <svg className="w-32 h-32 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </motion.div>

            {/* Orbiting data points */}
            {[0, 1, 2, 3, 4, 5].map((index) => (
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
                  className="absolute w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center"
                  style={{
                    top: `${50 + 45 * Math.cos((index * 2 * Math.PI) / 6)}%`,
                    left: `${50 + 45 * Math.sin((index * 2 * Math.PI) / 6)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    boxShadow: [
                      '0 0 5px rgba(0, 102, 204, 0.5)',
                      '0 0 15px rgba(0, 102, 204, 0.7)',
                      '0 0 5px rgba(0, 102, 204, 0.5)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: index * 0.3
                  }}
                >
                  <span className="text-xs font-bold text-white">
                    {['AI', 'ML', 'IoT', 'Data', 'Pred', 'Maint'][index]}
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
                  x2={`${50 + 45 * Math.cos((index * 2 * Math.PI) / 6)}%`}
                  y2={`${50 + 45 * Math.sin((index * 2 * Math.PI) / 6)}%`}
                  stroke="#0066cc"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.7, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: index * 0.3
                  }}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Data particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </motion.div>
      ))}
    </div>
  );
};

export default Hero;