import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/service';

const Services = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-red-900 via-red-700 to-red-500 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
              <p className="text-gray-200 mb-4">{service.description}</p>
              {service.subServices && (
                <ul className="space-y-2">
                  {service.subServices.map((subService, subIndex) => (
                    <motion.li
                      key={subIndex}
                      className="bg-red-800 bg-opacity-50 rounded p-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <h4 className="font-semibold mb-1">{subService.name}</h4>
                      <p className="text-sm text-gray-300">{subService.description}</p>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;