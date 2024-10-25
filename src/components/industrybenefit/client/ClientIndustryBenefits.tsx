// components/industry-benefits/client-industry-benefits.tsx
"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Industry } from '@/types/industry.types'
import { IndustryContent } from '@/components/industrybenefit/client/IndustryContent'
import { FloatingParticles } from '@/components/industrybenefit/client/FloatingParticles'

interface ClientIndustryBenefitsProps {
  initialIndustries: Industry[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
}

export default function ClientIndustryBenefits({ initialIndustries }: ClientIndustryBenefitsProps) {
  const [selectedIndustry, setSelectedIndustry] = useState(initialIndustries[0])

  return (
    <>
      <motion.div 
        className="flex flex-wrap justify-center mb-12 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {initialIndustries.map((industry) => (
          <motion.button
            key={industry.id}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
              selectedIndustry.id === industry.id
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-white text-red-600 hover:bg-red-100 shadow-md'
            }`}
            onClick={() => setSelectedIndustry(industry)}
            whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(239, 68, 68, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            {industry.name}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <IndustryContent 
          key={selectedIndustry.id} 
          industry={selectedIndustry} 
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
      </AnimatePresence>

      <FloatingParticles />
    </>
  )
}