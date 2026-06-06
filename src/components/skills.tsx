import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Layers, Server, Database, Zap } from 'lucide-react';
import BackgroundLines from './BackgroundLines';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skillCategories = [
    {
      name: 'Frontend',
      icon: <Layers className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: ['React.js', 'React Native', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      name: 'Backend',
      icon: <Server className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: ['Node.js', 'Laravel', 'Go', 'Express.js', 'Python', 'RESTful APIs']
    },
    {
      name: 'Database',
      icon: <Database className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL']
    },
    {
      name: 'Tools',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: ['Git', 'GitHub', 'VS Code', 'Vite']
    }
  ];

  const activeSkills = skillCategories.find(cat => cat.name === activeCategory);

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center" style={{ background: 'var(--theme-bg)' }}>
      {/* Animated Background Lines */}
      <BackgroundLines />

      {/* Dynamic Background Blurs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
        animate={{
          background: activeCategory === 'Frontend' ? 'rgba(59, 130, 246, 0.15)' :
                     activeCategory === 'Backend' ? 'rgba(168, 85, 247, 0.15)' :
                     activeCategory === 'Database' ? 'rgba(249, 115, 22, 0.15)' :
                     'rgba(34, 197, 94, 0.15)'
        }}
        transition={{ duration: 0.8 }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
        animate={{
          background: activeCategory === 'Frontend' ? 'rgba(6, 182, 212, 0.15)' :
                     activeCategory === 'Backend' ? 'rgba(236, 72, 153, 0.15)' :
                     activeCategory === 'Database' ? 'rgba(239, 68, 68, 0.15)' :
                     'rgba(16, 185, 129, 0.15)'
        }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="w-12 h-12 text-white" />
            <h2 className="text-5xl text-white sm:text-6xl lg:text-7xl font-bold">
              Skills & Expertise
            </h2>
          </motion.div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Crafting exceptional digital experiences
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {skillCategories.map((category, idx) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.name)}
              className={`group relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                activeCategory === category.name
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {/* Background */}
              {activeCategory === category.name && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color}`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              {/* Border */}
              <div className={`absolute inset-0 rounded-2xl border-2 transition-colors duration-300 ${
                activeCategory === category.name
                  ? 'border-transparent'
                  : 'border-white/10 group-hover:border-white/30'
              }`} />

              {/* Content */}
              <span className="relative flex items-center gap-2">
                {category.icon}
                {category.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative glass rounded-3xl p-8 sm:p-12 backdrop-blur-2xl border border-white/10 overflow-hidden">
              {/* Animated Gradient Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${activeSkills?.color} opacity-5`}
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Skills Grid */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {activeSkills?.skills.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20, rotateX: -30 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      delay: idx * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      z: 50,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative"
                    style={{ perspective: '1000px' }}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${activeSkills?.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    {/* Card */}
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 group-hover:border-white/30 transition-all duration-300 h-full flex items-center justify-center">
                      <h3 className={`text-lg sm:text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r ${activeSkills?.color} group-hover:scale-110 transition-transform duration-300`}>
                        {skill}
                      </h3>
                    </div>

                    {/* Floating Particles */}
                    <motion.div
                      className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.2
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl" />
            </div>

            {/* Bottom Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-500 text-sm">
                {activeSkills?.skills.length} technologies in {activeCategory}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
