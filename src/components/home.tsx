import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import main from './images/main.jpeg';
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';
import BackgroundLines from './BackgroundLines';

const Home: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
      style={{ background: '#0f0b1f' }}
    >
      {/* Animated Background Lines */}
      <BackgroundLines />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Content */}
        <div className='space-y-8'>
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-white" />
            <span className='text-sm font-medium text-gray-400 tracking-widest uppercase'>Welcome to my portfolio</span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-4'>
              Swetha Sree
            </h1>
            <div className="h-1 w-24 bg-[#6049ea]"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300'>
              Full-Stack Developer
            </h2>
            <p className='text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed'>
              Crafting elegant digital experiences through clean code and innovative solutions. 
              Specialized in React, Node.js, and modern web technologies.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className='flex flex-wrap gap-4'>
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-[#6049ea] text-white font-semibold rounded-full hover:bg-[#4a3bb8] transition-colors flex items-center gap-2'
              >
                View My Work
                <ArrowDown size={20} />
              </motion.button>
            </a>
            <a href="#feedback">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 border-2 border-[#6049ea] text-[#6049ea] font-semibold rounded-full hover:bg-[#6049ea] hover:text-white transition-all'
              >
                Get In Touch
              </motion.button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className='flex gap-4 pt-4'>
            <motion.a
              href="https://github.com/swetha123924"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className='w-12 h-12 flex items-center justify-center border border-[#6049ea]/30 rounded-full hover:bg-[#6049ea] hover:text-white transition-all'
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className='w-12 h-12 flex items-center justify-center border border-[#6049ea]/30 rounded-full hover:bg-[#6049ea] hover:text-white transition-all'
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ y: -5 }}
              className='w-12 h-12 flex items-center justify-center border border-[#6049ea]/30 rounded-full hover:bg-[#6049ea] hover:text-white transition-all'
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center items-center"
        >
          <div className="relative">
            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Decorative Border */}
              <div className="absolute -inset-4 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute -inset-8 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
              
              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={main}
                  alt="Swetha Sree"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#6049ea]/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-[#6049ea] rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;

