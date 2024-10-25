"use client"

import { motion } from 'framer-motion'

export function LoadingState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full min-h-[400px] flex items-center justify-center"
    >
      <div className="space-y-6 w-full max-w-md">
        {/* Shimmer effect containers */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-xl bg-neutral-100 h-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}