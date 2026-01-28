import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Server, Palette, Terminal, Layers } from 'lucide-react';
import BackgroundLines from './BackgroundLines';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layers className="w-8 h-8" />,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vite", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "Git", level: 88 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 }
      ]
    }
  ];

  const additionalSkills = [
    "Responsive Design",
    "RESTful APIs",
    "Data Structures",
    "Algorithms",
    "Problem Solving",
    "Agile Methodology",
    "Team Collaboration",
    "Deployment"
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: '#0f0b1f' }}>
      {/* Animated Background Lines */}
      <BackgroundLines />

      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Code2 className="w-10 h-10 text-white" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Technical Skills
            </h2>
          </div>
          <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building modern, scalable applications with cutting-edge technologies
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12 mb-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: idx * 0.2 + skillIdx * 0.1, duration: 0.4 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: idx * 0.2 + skillIdx * 0.1 + 0.5, duration: 1, ease: 'easeOut' }}
                        className="h-full bg-white rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="glass p-8 rounded-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-xl">
              <Terminal className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Additional Competencies</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + idx * 0.05, duration: 0.3 }}
                className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors"
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm text-gray-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
