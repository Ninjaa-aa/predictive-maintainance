import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { industryBenefits } from '@/data/benefit';

const IndustryBenefits = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industryBenefits[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
  };

  return (
    <section className="py-24 bg-gradient-to-br from-red-50 to-white text-gray-900 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center text-red-800 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Benefits for Different Industries
        </motion.h2>

        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {industryBenefits.map((industry) => (
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
          <motion.div
            key={selectedIndustry.id}
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
                <Icon icon={selectedIndustry.icon} width="32" height="32" className="text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-red-800">{selectedIndustry.name}</h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 md:grid-cols-2"
            >
              {selectedIndustry.benefits.map((benefit, index) => (
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
        </AnimatePresence>
      </div>

      {/* Enhanced futuristic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {[...Array(30)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-red-400 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default IndustryBenefits;