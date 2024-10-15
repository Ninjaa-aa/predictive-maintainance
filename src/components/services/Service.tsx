import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Service, services } from '@/data/service';

const InsightAIServices = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-red-200 to-red-300 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-6xl font-extrabold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Insight AI Services
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-gradient-to-br from-red-400 to-red-500 rounded-xl p-6 h-full cursor-pointer transform transition-all duration-300 group-hover:scale-105 border border-red-300 hover:border-white"
                whileHover={{ boxShadow: '0 0 25px rgba(255, 255, 255, 0.3)' }}
                onClick={() => setSelectedService(service)}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-red-300 to-red-400 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Icon icon={service.icon} width="32" height="32" className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-red-100 mb-4">{service.description}</p>
                <motion.button
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View More
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                className="bg-red-400 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-3xl font-bold mb-4 text-white">{selectedService.title}</h2>
                <p className="text-red-100 mb-6">{selectedService.description}</p>
                {selectedService.subServices && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold mb-2 text-red-200">Sub Services</h3>
                    {selectedService.subServices.map((subService, index) => (
                      <motion.div
                        key={index}
                        className="bg-red-500 rounded-lg p-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h4 className="text-xl font-semibold mb-2 text-white">{subService.title}</h4>
                        <p className="text-red-100">{subService.description}</p>
                      </motion.div>
                    ))}
                  </div>
                )}
                <motion.button
                  className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InsightAIServices;
