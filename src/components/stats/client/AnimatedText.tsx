// components/stats/client/AnimatedText.tsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function AnimatedText() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  const titleWords = "Predictive Maintenance Analytics".split(" ");

  return (
    <div className="relative">
      <motion.div 
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-8"
      >
        {/* Enhanced Title */}
        <div className="relative inline-flex flex-wrap justify-center gap-x-4 px-8 py-3">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-700/20 via-red-800/20 to-red-900/20 blur-xl opacity-50" />
          {titleWords.map((word, wordIndex) => (
            <div key={wordIndex} className="relative">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={letterVariants}
                  className="relative inline-block text-lg font-medium tracking-wider uppercase bg-gradient-to-r from-red-700 to-red-800 text-transparent bg-clip-text"
                  style={{ 
                    perspective: "1000px",
                    transformStyle: "preserve-3d"
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </div>

        {/* Enhanced Headline */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1]
              }
            }
          }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-800 to-red-900">
              Revolutionizing
            </span>
            <br />
            <span className="inline-block text-neutral-800 mt-3">
              Through Advanced Analytics
            </span>
          </h2>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.8,
                  ease: [0.215, 0.61, 0.355, 1]
                }
              }
            }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed"
          >
            Our predictive maintenance solutions combine real-time monitoring with 
            advanced analytics to optimize equipment performance and reliability.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-red-50/50 via-transparent to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}