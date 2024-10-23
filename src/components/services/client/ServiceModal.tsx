// components/ServiceModal.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { createPortal } from 'react-dom';
import { Service } from '@/types/service.types';

interface Props {
  service: Service;
  onClose: () => void;
  originRect?: DOMRect | null;
}

export default function ServiceModal({ service, onClose, originRect }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [modalRect, setModalRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      setModalRect(modalRef.current.getBoundingClientRect());
    }

    const handleScroll = () => {
      // Close modal if user scrolls significantly
      if (window.scrollY > window.innerHeight) {
        onClose();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onClose]);

  // Calculate initial and final positions
  const getInitialPosition = () => {
    if (!originRect || !modalRect) return { x: 0, y: 0, scale: 0.5 };

    const currentViewportMidY = window.scrollY + (window.innerHeight / 2);
    const targetY = currentViewportMidY - (modalRect.height / 2);

    return {
      x: originRect.left - (modalRect?.width ?? 0) / 2 + originRect.width / 2,
      y: originRect.top - targetY,
      scale: originRect.width / (modalRect?.width ?? 1)
    };
  };

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div 
        className="absolute inset-0 bg-slate-900/10 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Container */}
      <div className="relative w-full flex items-center justify-center p-4">
        <motion.div
          ref={modalRef}
          className="relative w-full max-w-3xl bg-white/90 backdrop-blur-lg rounded-2xl 
                     shadow-2xl border border-slate-200/60"
          initial={getInitialPosition()}
          animate={{ x: 0, y: 0, scale: 1 }}
          exit={getInitialPosition()}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Background patterns */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />

          {/* Content */}
          <div className="relative">
            {/* Header */}
            <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl px-8 pt-8 pb-4 
                          border-b border-slate-200/60">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-6">
                  <motion.div 
                    className="w-16 h-16 relative flex-shrink-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-red-500 
                                  rounded-xl opacity-20 blur-xl" />
                    <div className="relative h-full bg-gradient-to-br from-blue-500 to-red-500 
                                  rounded-xl flex items-center justify-center">
                      <Icon icon={service.icon} className="text-white w-8 h-8" />
                    </div>
                  </motion.div>
                  
                  <div>
                    <motion.h2 
                      className="text-3xl font-bold bg-clip-text text-transparent 
                                bg-gradient-to-r from-slate-900 to-slate-700 mb-2"
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
                
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-slate-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="px-8 py-6 relative z-10">
              {service.subServices && (
                <div className="space-y-4">
                  <motion.h3 
                    className="text-2xl font-semibold bg-clip-text text-transparent 
                              bg-gradient-to-r from-slate-900 to-slate-700 mb-6"
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

            {/* Footer */}
            <div className="sticky bottom-0 bg-white/80 backdrop-blur-xl px-8 py-6 
                          border-t border-slate-200/60">
              <div className="flex gap-4 justify-end">
                <motion.button
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 
                            rounded-xl font-medium transition-all duration-300"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 
                                transition-all duration-300 hover:from-red-500 hover:to-red-600" />
                  <span className="relative text-white">Get Started</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>,
    document.body
  );
}