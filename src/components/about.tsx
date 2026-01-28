import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Briefcase, Target, Award, Zap } from 'lucide-react';
import BackgroundLines from './BackgroundLines';

const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const cards = [
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: 'Education',
      content: (
        <>
          <div className="space-y-3">
            <div className="border-l-2 border-white pl-4">
              <h3 className="font-semibold text-lg">B.Sc. in BZC</h3>
              <p className="text-sm text-gray-400">Sanjay Gandhi Govt. Degree College</p>
              <p className="text-sm text-gray-400">SV University | Score: <span className="font-semibold text-white">85%</span></p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Strong foundation in programming and full-stack development through intensive training.
            </p>
          </div>
        </>
      ),
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: 'Core Skills',
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-white mt-1">▹</span>
            <p className="text-sm text-gray-400"><strong className="text-white">Frontend:</strong> React.js, JavaScript, Tailwind CSS</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-white mt-1">▹</span>
            <p className="text-sm text-gray-400"><strong className="text-white">Backend:</strong> Node.js, Express.js, PostgreSQL</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-white mt-1">▹</span>
            <p className="text-sm text-gray-400"><strong className="text-white">Tools:</strong> Git, GitHub, VS Code, Vite</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-white mt-1">▹</span>
            <p className="text-sm text-gray-400"><strong className="text-white">Problem Solving:</strong> DSA, Algorithms, Python</p>
          </div>
        </div>
      ),
    },
    {
      icon: <Briefcase className="w-7 h-7" />,
      title: 'Projects',
      content: (
        <>
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-5 h-5" />
            <p className="font-semibold">12+ Full-Stack Applications</p>
          </div>
          <ul className="space-y-2">
            {['E-commerce Platform', 'Swiggy Clone', 'BookMyShow App', 'Finance Tracker'].map((project, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span className="text-sm text-gray-400">{project}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: 'Career Goal',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-gray-400 leading-relaxed">
            Aspiring to work on <strong className="text-white">high-impact projects</strong> and grow into a <strong className="text-white">Senior Developer</strong> role at top tech companies.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Focused on continuous learning and building innovative solutions.
          </p>
        </div>
      ),
    },
  ];

  const strengths = [
    'Quick Learner',
    'Problem Solver',
    'Team Player',
    'Detail Oriented',
    'Responsive Design',
    'Clean Code',
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: '#0f0b1f' }}>
      {/* Animated Background Lines */}
      <BackgroundLines />

      {/* Background Elements */}
      <div className="absolute inset-0 dots-background opacity-20"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate Developer | Problem Solver | Lifelong Learner
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 card-hover group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-xl group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
              </div>
              <div className="text-white">{card.content}</div>
            </motion.div>
          ))}
        </div>

        {/* Strengths Section */}
        <motion.div variants={cardVariants} className="glass p-8 rounded-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-xl">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white">Key Strengths</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {strengths.map((strength, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors"
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm text-gray-300">{strength}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={cardVariants} className="flex justify-center mt-12">
          <a href="#feedback">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-3"
            >
              Let's Connect
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
