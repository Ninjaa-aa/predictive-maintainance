"use client"

import React, { useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { services, Service } from '@/data/ser'
import { Activity, TrendingUp, Settings, AlertTriangle, Zap, Users, ChevronRight } from 'lucide-react'

const iconComponents = {
  activity: Activity,
  "trending-up": TrendingUp,
  settings: Settings,
  "alert-triangle": AlertTriangle,
  zap: Zap,
  users: Users,
}

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const IconComponent = iconComponents[service.icon as keyof typeof iconComponents]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full perspective"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="h-full bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group relative"
        animate={{ rotateY: isHovered ? 10 : 0, z: isHovered ? 50 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="p-6 relative z-10">
          <div className="flex items-center space-x-3 text-blue-600 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="bg-blue-100 rounded-full p-3"
            >
              <IconComponent className="w-8 h-8" />
            </motion.div>
            <h3 className="text-2xl font-bold text-blue-700">
              {service.title}
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
          <motion.div
            className="mt-6 flex items-center text-blue-600 font-semibold"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          >
            Explore <ChevronRight className="ml-1 w-5 h-5" />
          </motion.div>
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-blue-200/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.3 : 0.1,
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden relative">
      <motion.div 
        className="container mx-auto px-4 relative"
        style={{ opacity, scale, y }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-2 text-blue-600 font-semibold bg-blue-50 px-4 py-1 rounded-full shadow-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Smart Industry Solutions
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-blue-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Predictive Maintenance Services
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transform your maintenance strategy with AI-powered insights and real-time monitoring
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </motion.div>
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${(hoveredIndex % 3) * 33 + 16}% ${Math.floor(hoveredIndex / 3) * 33 + 16}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
              }}
            />
          )}
        </AnimatePresence>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}