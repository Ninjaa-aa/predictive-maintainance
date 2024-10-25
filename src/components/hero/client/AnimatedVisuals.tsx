// components/animated-visuals.tsx
"use client"

import { motion } from 'framer-motion'

type AnimatedVisualsProps = {
  dimensions: { width: number; height: number }
  isMounted: boolean
}

export function AnimatedVisuals({ dimensions, isMounted }: AnimatedVisualsProps) {
  return (
    <>
      <motion.div 
        className="w-full lg:w-1/2 py-6 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="relative w-full h-64 lg:h-96 mx-auto"
          whileHover={{ scale: 1.05 }}
        >
          {/* Central gear */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg"
            style={{ transform: 'translate(-50%, -50%)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
              style={{ transform: 'translate(-50%, -50%)' }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 15 + index * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                className="absolute w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-md"
                style={{
                  top: `${50 + 40 * Math.cos((index * 2 * Math.PI) / 6)}%`,
                  left: `${50 + 40 * Math.sin((index * 2 * Math.PI) / 6)}%`,
                }}
                whileHover={{ scale: 1.2 }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
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
                stroke="rgba(239, 68, 68, 0.5)"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.7, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </svg>
        </motion.div>
      </motion.div>

      {/* Data particles */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-br from-red-300 to-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md"
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
                repeatType: "reverse",
              }}
            >
              {i % 2 === 0 ? '1' : '0'}
            </motion.div>
          ))}
        </div>
      )}
    </>
  )
}