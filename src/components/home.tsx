import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import main from './images/main.jpeg';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Briefcase, Globe2, Palette, Download } from 'lucide-react';
import BackgroundLines from './BackgroundLines';

const Home: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const resumeDownloadUrl = 'https://drive.google.com/uc?export=download&id=1uQirhCPHoHLVp7DE-iaTNPcNWG805Eml';

  const easing = [0.25, 0.1, 0.25, 1] as const;

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
      transition: { duration: 0.6, ease: easing },
    },
  };

  const heroStats = [
    { value: '1+', label: 'Year at Bermer Software' },
    { value: '2', label: 'Live business websites' },
    { value: '4', label: 'Web applications' },
  ];

  const expertise = [
    { icon: <Briefcase className="w-4 h-4" />, text: 'Software Developer at Bermer Software' },
    { icon: <Globe2 className="w-4 h-4" />, text: 'Worked on bermer.in and niyantha.in' },
    { icon: <Palette className="w-4 h-4" />, text: 'Real-time apps with dynamic color themes' },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
      style={{ background: 'var(--theme-bg)' }}
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
        className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16"
      >
        {/* Image Section - Right Side on Desktop */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center items-center lg:flex-shrink-0"
        >
          <div className="relative">
            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
            >
              {/* Decorative Border */}
              <div className="absolute -inset-4 border border-[var(--theme-accent)]/40 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute -inset-8 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
             
              
              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={main}
                  alt="Swetha Sree"
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-[var(--theme-accent-soft)] blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section - Left Side on Desktop */}
        <div className='space-y-6 lg:space-y-8 w-full text-center lg:text-left flex-1'>
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Sparkles className="w-5 h-5 text-[var(--theme-accent)]" />
            <span className='text-sm font-medium text-gray-300 tracking-widest uppercase'>Professional developer portfolio</span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4'>
              Swetha Sree
            </h1>
            <div className="h-1 w-24 bg-[var(--theme-accent)] mx-auto lg:mx-0"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className='text-xl sm:text-2xl lg:text-3xl font-light text-gray-300'>
              Full-Stack Developer · React UI Engineer
            </h2>
            <p className='text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
              I build advanced, stylish, and responsive digital products. Currently working as a Software Developer at Bermer Software with experience on bermer.in, niyantha.in, and real-time applications with live color-theme interactions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto lg:mx-0">
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-[var(--theme-accent)]">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {expertise.map((item) => (
              <span key={item.text} className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-gray-300">
                <span className="text-[var(--theme-accent)]">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className='flex flex-wrap gap-4 justify-center lg:justify-start'>
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-[var(--theme-accent)] text-white font-semibold rounded-full hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-black/20'
              >
                View My Work
                <ArrowDown size={20} />
              </motion.button>
            </a>

            <a href={resumeDownloadUrl}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-white text-[var(--theme-accent)] font-semibold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg shadow-black/20'
              >
                Download Resume
                <Download size={20} />
              </motion.button>
            </a>

            <a href="#feedback">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 border-2 border-[var(--theme-accent)] text-[var(--theme-accent)] font-semibold rounded-full hover:bg-[var(--theme-accent)] hover:text-white transition-all'
              >
                Get In Touch
              </motion.button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className='flex gap-4 pt-4 justify-center lg:justify-start'>
            <motion.a
              href="https://github.com/swetha123924"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className='w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-[var(--theme-accent)] hover:text-white transition-all'
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/c-swetha-sree-2585a7301"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className='w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-[var(--theme-accent)] hover:text-white transition-all'
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:cswetha061@gmail.com"
              whileHover={{ y: -5 }}
              className='w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-[var(--theme-accent)] hover:text-white transition-all'
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>
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
          className="w-6 h-10 border-2 border-[var(--theme-accent)]/40 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-[var(--theme-accent)] rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;

