// components/industry-benefits/industry-content.tsx
"use client"

import { motion, Variants } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Industry } from '@/types/industry.types'

interface IndustryContentProps {
  industry: Industry
  containerVariants: Variants
  itemVariants: Variants
}

export function IndustryContent({ industry, containerVariants, itemVariants }: IndustryContentProps) {
  return (
    <motion.div
      key={industry.id}
      className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex items-center mb-8"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4 shadow-md">
          <Icon icon={industry.icon} width="32" height="32" className="text-red-600" />
        </div>
        <h3 className="text-3xl font-bold text-red-800">{industry.name}</h3>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 md:grid-cols-2"
      >
        {industry.benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100"
            whileHover={{ y: -5 }}
          >
            <h4 className="text-xl font-semibold mb-3 text-red-700">{benefit.title}</h4>
            <p className="text-gray-700">{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}