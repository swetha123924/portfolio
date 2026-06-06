import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2 } from 'lucide-react';
import BackgroundLines from './BackgroundLines';

const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      },
    },
  };

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'var(--theme-bg)' }}>
      {/* Animated Background Lines */}
      <BackgroundLines />

      {/* Simple Background Elements */}
      <div className="absolute inset-0 dots-background opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]"></div>

      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        {/* Header */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-32 bg-white mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Passionate Developer | Problem Solver | Lifelong Learner
          </p>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          variants={cardVariants}
          className="max-w-5xl mx-auto"
        >
          <div className="relative glass rounded-3xl p-10 sm:p-14 backdrop-blur-xl border border-white/20 overflow-hidden">
            {/* Decorative Icon */}
            <div className="absolute top-8 right-8 opacity-5">
              <Code2 className="w-32 h-32" />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-16 h-16 flex items-center justify-center bg-white text-black rounded-2xl">
                  <Code2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white">Full Stack Developer</h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Full Stack Developer with experience building <span className="font-semibold text-white">scalable web and mobile applications</span> using React.js, React Native, Node.js, Laravel, and PostgreSQL/MySQL databases. Skilled in developing <span className="font-semibold text-white">RESTful APIs</span>, responsive UI components, and deploying production-ready applications on cloud platforms. Experienced in JavaScript and TypeScript development with strong knowledge of <span className="font-semibold text-white">Data Structures</span>, API integration, authentication systems, and modern software engineering practices.
              </p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          variants={cardVariants} 
          className="flex justify-center mt-16"
        >
          <a href="#feedback">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full shadow-2xl hover:shadow-white/20 transition-all"
            >
              <span className="flex items-center gap-3">
                Let's Connect
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
