import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.8, 
          delay: index * 0.1,
          ease: [0.21, 0.85, 0.45, 0.95] 
        } 
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative rounded-2xl border bg-gradient-to-br from-white/80 via-white/90 to-red-50/80 
        backdrop-blur-sm border-red-100 group transition-all duration-500 
        hover:border-red-200 hover:shadow-[0_8px_30px_rgb(251,113,133,0.12)]
        hover:-translate-y-1 ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-white to-red-50/50 
        group-hover:from-red-50/90 group-hover:via-red-50/90 group-hover:to-rose-50/90 
        transition-all duration-500 opacity-0 group-hover:opacity-100" />
      
      <div className="absolute inset-[-2px] rounded-2xl bg-gradient-to-r from-red-100/0 via-red-200/50 to-red-100/0 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      <div className="relative z-10">
        {children}
      </div>

      <div className="absolute -right-2 -bottom-2 w-20 h-20 bg-gradient-to-r from-red-100/0 to-red-200/30 
        rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 
        group-hover:scale-150" />
    </motion.div>
  );
};

// Updated Futuristic background animation component
const FuturisticBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; // Increased particle size
        this.speedX = Math.random() * 3 - 1.5; // Increased speed
        this.speedY = Math.random() * 3 - 1.5;
        this.life = Math.random() * 100;
        this.opacity = Math.random() * 0.5 + 0.3; // Increased opacity
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 0.2; // Faster life reduction

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, `rgba(255, 100, 100, ${this.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 100, 100, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 150; i++) { // Increased number of particles
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add subtle background glow
      const grd = ctx.createRadialGradient(
        canvas.width/2, canvas.height/2, 0,
        canvas.width/2, canvas.height/2, canvas.width/2
      );
      grd.addColorStop(0, 'rgba(255, 100, 100, 0.05)');
      grd.addColorStop(1, 'rgba(255, 100, 100, 0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.life <= 0) {
          particles.splice(index, 1);
          particles.push(new Particle());
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

// Enhanced Grid Animation Component
const GridAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff000010_1px,transparent_1px),linear-gradient(to_bottom,#ff000010_1px,transparent_1px)] 
        bg-[size:40px_40px]">
        {/* Multiple scan lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-400/30 to-transparent"
            animate={{
              top: ['0%', '100%'],
            }}
            transition={{
              duration: 8,
              delay: i * 2,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        ))}
        
        {/* Pulsing glow effects */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute w-[200px] h-[200px] rounded-full bg-red-500/5"
            style={{
              left: `${25 * (i + 1)}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              delay: i * 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};
const IndustryBenefits = () => {
  const industryBenefits = [
    {
      industry: "Manufacturing",
      category: "Case Study",
      icon: "🏭",
      company: "Global Automotive Manufacturer",
      metrics: {
        primary: "92%",
        context: "reduction in unplanned downtime"
      },
      implementation: [
        "Automated production line monitoring",
        "Predictive quality control system",
        "Real-time equipment diagnostics"
      ],
      impact: "$4.5M annual maintenance savings"
    },
    {
      industry: "Oil & Gas",
      category: "Success Story",
      icon: "⛽",
      company: "Major Pipeline Operator",
      metrics: {
        primary: "75%",
        context: "fewer critical failures"
      },
      implementation: [
        "Pipeline integrity monitoring",
        "Pressure anomaly detection",
        "Preventive maintenance scheduling"
      ],
      impact: "Zero safety incidents in 18 months"
    },
    {
      industry: "Healthcare",
      category: "Implementation",
      icon: "🏥",
      company: "Regional Hospital Network",
      metrics: {
        primary: "99.9%",
        context: "medical equipment uptime"
      },
      implementation: [
        "Critical equipment monitoring",
        "Regulatory compliance automation",
        "Service life optimization"
      ],
      impact: "100% compliance with maintenance standards"
    },
    {
      industry: "Power Generation",
      category: "Case Study",
      icon: "⚡",
      company: "Renewable Energy Provider",
      metrics: {
        primary: "85%",
        context: "improved turbine efficiency"
      },
      implementation: [
        "Wind turbine performance analysis",
        "Weather-based maintenance planning",
        "Component lifetime prediction"
      ],
      impact: "32% increase in power output"
    },
    {
      industry: "Aviation",
      category: "Success Story",
      icon: "✈️",
      company: "International Airlines",
      metrics: {
        primary: "60%",
        context: "reduction in delays"
      },
      implementation: [
        "Aircraft systems monitoring",
        "Predictive maintenance scheduling",
        "Parts inventory optimization"
      ],
      impact: "Annual savings of $8.2M in operations"
    },
    {
      industry: "Transportation",
      category: "Implementation",
      icon: "🚂",
      company: "National Rail Service",
      metrics: {
        primary: "45%",
        context: "fewer service disruptions"
      },
      implementation: [
        "Track and signal monitoring",
        "Fleet condition assessment",
        "Automated maintenance alerts"
      ],
      impact: "95% improvement in on-time performance"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-red-50 via-white to-red-50 overflow-hidden">
            {/* Enhanced background elements */}
            <FuturisticBackground />
      <GridAnimation />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, delay: 0.2 }
          }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-red-200 
              rounded-full bg-red-50/50 hover:bg-red-50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-medium bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
              Industry Success Stories
            </span>
          </motion.div>

          <motion.h2 
            className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, delay: 0.3 }
            }}
            viewport={{ once: true }}
          >
            Transforming Industries Through Predictive Maintenance
          </motion.h2>

          <motion.p 
            className="mt-6 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, delay: 0.4 }
            }}
            viewport={{ once: true }}
          >
            Discover how leading organizations across different sectors achieve operational excellence
          </motion.p>
        </motion.div>

        {/* Industry Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryBenefits.map((benefit, index) => (
            <Card key={index} index={index}>
              <div className="p-8">
                <motion.div 
                  className="flex justify-between items-center mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="px-3 py-1 text-sm font-medium text-red-600 bg-red-50 rounded-full
                    group-hover:bg-red-100/50 transition-colors duration-300">
                    {benefit.industry}
                  </span>
                  <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </span>
                </motion.div>

                <div className="mb-6 transform group-hover:translate-x-1 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {benefit.company}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-red-500 to-rose-500 
                      bg-clip-text text-transparent group-hover:from-red-600 group-hover:to-rose-600 
                      transition-all duration-300">
                      {benefit.metrics.primary}
                    </span>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      {benefit.metrics.context}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {benefit.implementation.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start text-gray-600 group-hover:text-gray-900 transition-all duration-300"
                      whileHover={{ x: 4 }}
                    >
                      <svg
                        className="mr-3 h-5 w-5 text-red-400 flex-shrink-0 transform group-hover:scale-110 
                          group-hover:rotate-12 transition-all duration-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-red-100 group-hover:border-red-200 transition-colors duration-300">
                  <p className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {benefit.impact}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryBenefits;