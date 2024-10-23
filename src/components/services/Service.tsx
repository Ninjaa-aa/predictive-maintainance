import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Service, services } from '@/data/service';

// Service Card Component
const ServiceCard = ({ service, index, onSelect }: { 
  service: Service;
  index: number;
  onSelect: (service: Service) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glowing effect on hover */}
      <motion.div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-300 to-red-400 opacity-0 blur-xl group-hover:opacity-30 transition-all duration-500"
        animate={{
          scale: isHovered ? 1 : 0.8,
          opacity: isHovered ? 0.2 : 0
        }}
      />

      <motion.div
        className={`
          relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-8 
          border border-slate-200/60 cursor-pointer transition-all duration-500
          hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-blue-200/60
          backdrop-saturate-[1.8]
        `}
        whileHover={{ y: -6, scale: 1.01 }}
        onClick={() => onSelect(service)}
      >
        {/* Animated background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <motion.div
          className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]"
          animate={{
            backgroundPosition: isHovered ? ['0px 0px', '20px 20px'] : '0px 0px',
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10">
          {/* Animated Icon Container */}
          <motion.div 
            className="w-16 h-16 mb-6 relative"
            whileHover={{ scale: 1.05, rotate: 360 }}
            transition={{ duration: 1, type: "spring" }}
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-red-500 rounded-xl opacity-20 blur-xl" />
            
            {/* Icon background with gradient */}
            <div className="relative h-full bg-gradient-to-br from-blue-500 to-red-500 rounded-xl flex items-center justify-center overflow-hidden">
              {/* Animated background patterns */}
              <motion.div
                className="absolute inset-0 bg-grid-white/10"
                animate={{
                  backgroundPosition: ['0px 0px', '20px 20px'],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <Icon icon={service.icon} className="text-white w-8 h-8 relative z-10" />
            </div>
          </motion.div>

          {/* Content with enhanced typography */}
          <motion.h3 
            className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700"
            animate={{ color: isHovered ? '#1d4ed8' : '#1e293b' }}
          >
            {service.name}
          </motion.h3>
          <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
            {service.description}
          </p>

          {/* Enhanced Button */}
          <motion.button
            className="group/btn px-6 py-2.5 rounded-xl font-medium relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover/btn:from-red-500 group-hover/btn:to-red-600" />
            <div className="absolute inset-0 bg-grid-white/10 bg-[size:10px_10px]" />
            <span className="relative text-white flex items-center gap-2">
              Learn More
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Modal Component
const ServiceModal = ({ service, onClose }: { 
  service: Service; 
  onClose: () => void;
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Enhanced Backdrop */}
      <motion.div 
        className="absolute inset-0 bg-slate-900/10 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        className="relative w-full max-w-3xl max-h-[85vh] bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200/60"
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[85vh] overscroll-contain relative">
          {/* Header - Sticky */}
          <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl px-8 pt-8 pb-4 border-b border-slate-200/60">
            <div className="flex items-start gap-6">
              <motion.div 
                className="w-16 h-16 relative flex-shrink-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-red-500 rounded-xl opacity-20 blur-xl" />
                <div className="relative h-full bg-gradient-to-br from-blue-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Icon icon={service.icon} className="text-white w-8 h-8" />
                </div>
              </motion.div>
              
              <div>
                <motion.h2 
                  className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {service.name}
                </motion.h2>
                <motion.p 
                  className="text-slate-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-8 py-6 relative z-10">
            {service.subServices && (
              <div className="space-y-4">
                <motion.h3 
                  className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Advanced Capabilities
                </motion.h3>
                <div className="grid gap-4">
                  {service.subServices.map((subService, index) => (
                    <motion.div
                      key={index}
                      className="group p-4 rounded-xl border border-slate-200/60 bg-white/50 
                               hover:bg-white hover:border-blue-200/60 transition-all duration-300
                               hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="text-xl font-semibold mb-2 bg-clip-text text-transparent 
                                   bg-gradient-to-r from-blue-600 to-red-500">
                        {subService.name}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {subService.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer - Sticky */}
          <div className="sticky bottom-0 bg-white/80 backdrop-blur-xl px-8 py-6 border-t border-slate-200/60">
            <div className="flex gap-4">
              <motion.button
                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium 
                          transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
              >
                Close
              </motion.button>
              <motion.button
                className="px-6 py-2.5 relative overflow-hidden rounded-xl font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 hover:from-red-500 hover:to-red-600" />
                <span className="relative text-white">Get Started</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Component
const InsightAIServices = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-x-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.2]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-red-50/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 text-sm font-medium text-blue-600 rounded-full 
                           border border-blue-200/60 bg-blue-50/50 inline-block mb-6
                           shadow-[0_2px_10px_rgb(0,0,0,0.03)]">
              AI-Powered Solutions
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl font-bold mt-6 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r 
                             from-blue-600 via-blue-500 to-red-500">
                Insight AI Services
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Next-generation AI solutions powering the future of enterprise technology
            </p>
          </motion.div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onSelect={setSelectedService}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedService && (
            <ServiceModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InsightAIServices;