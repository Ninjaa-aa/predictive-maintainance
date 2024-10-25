// components/company-stats/page.tsx
import { predictiveMaintStats } from '@/data/stats'
import ClientStats from '@/components/stats/client/Stats'
import { AnimatedText } from '@/components/stats/client/AnimatedText'
import { motion } from 'framer-motion'

export default function StatsPage() {
    return (
      <section className="relative min-h-screen overflow-hidden bg-red-100">
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatedText />
          </motion.div>
          <ClientStats initialStats={predictiveMaintStats} />
        </div>
      </section>
    )
  }
