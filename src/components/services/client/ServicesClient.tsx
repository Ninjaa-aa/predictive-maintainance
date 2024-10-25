// services/client/ServicesClient.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { type Service } from '@/data/service';
import { ScrollProgress } from '@/components/services/client/ScrollProgress';
import { ServiceCard } from './ServiceCard';
import { BackgroundEffects } from '@/components/services/client/BackgroundEffect';
import { FlipText } from '@/components/services/client/FlipText';

interface ServicesClientProps {
  services: Service[];
  headerContent: {
    tag: string;
    title: string;
    description: string;
  };
}

export function ServicesClient({ services, headerContent }: ServicesClientProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section className="min-h-screen py-24 bg-gradient-to-b from-red-50 via-white to-red-50 relative overflow-hidden">
      <ScrollProgress />
      <BackgroundEffects />

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ y, opacity }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 text-red-600 font-semibold bg-red-50 px-6 py-2 rounded-full shadow-sm"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <FlipText text={headerContent.tag} />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
            <FlipText text={headerContent.title} />
          </h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-gray-700 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {headerContent.description}
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-red-600 mx-auto mt-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-red-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ChevronRight className="w-6 h-6 rotate-90" />
        </motion.div>
        <span className="text-sm font-medium mt-2">Scroll to explore</span>
      </motion.div>
    </section>
  );
}