"use client"

import React from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { services, Service } from '@/data/ser'
import { 
  Activity,
  TrendingUp,
  Settings,
  AlertTriangle,
  Zap,
  Users
} from 'lucide-react'

const iconComponents = {
  "activity": Activity,
  "trending-up": TrendingUp,
  "settings": Settings,
  "alert-triangle": AlertTriangle,
  "zap": Zap,
  "users": Users,
}

// Animated wave SVG for industrial feel
const WaveBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
    <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <motion.path
        initial={{ d: "M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,197.3C672,192,768,224,864,213.3C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160" }}
        animate={{
          d: [
            "M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,197.3C672,192,768,224,864,213.3C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160",
            "M0,64L48,90.7C96,117,192,171,288,197.3C384,224,480,224,576,192C672,160,768,96,864,80C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192"
          ]
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
          repeatType: "reverse"
        }}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  </div>
)

// Data points animation
const DataPoints = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-px bg-gradient-to-r from-blue-500 to-transparent"
        style={{
          width: Math.random() * 100 + 50,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          scaleX: [1, 0],
          opacity: [0.5, 0],
          x: [0, 100],
        }}
        transition={{
          duration: Math.random() * 2 + 1,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
)

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
    const IconComponent = iconComponents[service.icon as keyof typeof iconComponents]
    const [isHovered, setIsHovered] = React.useState(false)
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="h-full relative group"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl"
          animate={{
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="h-full bg-white/90 backdrop-blur-sm border border-blue-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative p-6">
          {/* Digital circuit pattern background */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px w-full bg-blue-500"
                style={{ top: `${i * 25}%` }}
                animate={{
                  opacity: [0, 1, 0],
                  scaleX: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
  
          <div className="relative z-10">
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={false}
              animate={isHovered ? { x: 10 } : { x: 0 }}
            >
              <motion.div
                className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-3"
                animate={{
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-white"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
                {service.title}
              </h3>
            </motion.div>
  
            <div className="relative"> {/* Changed from motion.p to div */}
              <motion.div
                className="text-gray-600"
                initial={false}
                animate={isHovered ? { y: 0, opacity: 1 } : { y: 0, opacity: 0.8 }}
              >
                {service.description}
              </motion.div>
              {/* Highlight line effect on hover */}
              <motion.div
                className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-blue-500 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
  
          {/* Card highlight effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-cyan-400/5"
            initial={false}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    )
  }

export default function Services() {
    const { scrollYProgress } = useScroll()
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1])
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])
    const y = useTransform(scrollYProgress, [0, 0.2], [50, 0])
  
    return (
      <section className="py-24 relative bg-gradient-to-b from-slate-50 via-blue-50/30 to-white overflow-hidden">
        <WaveBackground />
        <DataPoints />
        
        <motion.div 
          className="container mx-auto px-4 relative"
          style={{ opacity, scale, y }}
        >
          {/* Header Section */}
          <motion.div
            className="relative max-w-4xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Top Badge */}
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <span className="relative inline-flex items-center px-6 py-2 text-blue-700 font-semibold text-sm rounded-full bg-blue-50/50 backdrop-blur-sm border border-blue-100">
                <motion.span
                  className="absolute inset-0 rounded-full bg-blue-100/50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="relative">Advanced Industrial Solutions</span>
              </span>
            </motion.div>
  
            {/* Main Title */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-700 bg-clip-text text-transparent">
                  Predictive Maintenance
                </span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl text-gray-700">
                  Services
                </span>
              </h1>
  
              {/* Animated Underline */}
              <motion.div
                className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
  
            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Leverage advanced analytics and real-time monitoring to optimize equipment performance and prevent failures before they occur
            </motion.p>
  
            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">99.9%</h3>
                <p className="text-sm text-gray-500">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">60%</h3>
                <p className="text-sm text-gray-500">Cost Reduction</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
                <p className="text-sm text-gray-500">Monitoring</p>
              </div>
            </motion.div>
          </motion.div>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
  
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 w-full h-24 opacity-10">
          <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
            <motion.path
              fill="currentColor"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160"
              animate={{
                d: [
                  "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160",
                  "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,192C672,213,768,203,864,170.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
                repeatType: "reverse"
              }}
            />
          </svg>
        </div>
      </section>
    )
  }