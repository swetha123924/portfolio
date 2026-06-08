import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Folder } from 'lucide-react';
import BackgroundLines from './BackgroundLines';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const projects = [
    {
      img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80",
      link: "https://benevolent-croquembouche-b0289f.netlify.app/",
      title: "Band Website",
      desc: "A responsive band website built with React and Tailwind CSS.",
      tech: ["React", "Tailwind", "Vite"]
    },
    {
      img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&q=80",
      link: "https://swetha123924.github.io/E-commerce/",
      title: "E-Commerce Platform",
      desc: "An e-commerce platform with modern UI and seamless UX.",
      tech: ["React", "Node.js", "PostgreSQL"]
    },
    {
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80",
      link: "https://harmonious-mousse-8f19ec.netlify.app/",
      title: "Bull Work Mobility",
      desc: "Professional mobility solutions platform.",
      tech: ["React", "TypeScript", "Tailwind"]
    },
    {
      img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop&q=80",
      link: "https://splendorous-horse-914e97.netlify.app/",
      title: "BookMyShow Clone",
      desc: "Ticket booking platform with seat selection.",
      tech: ["React", "Node.js", "Express"]
    },
    {
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop&q=80",
      link: "https://kaleidoscopic-mandazi-d08669.netlify.app/",
      title: "Swiggy Clone",
      desc: "Food delivery app with cart functionality.",
      tech: ["React", "REST API", "CSS"]
    },
    {
      img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop&q=80",
      link: "https://starlit-belekoy-36ef82.netlify.app/",
      title: "Currency Converter",
      desc: "Real-time currency converter using live rates API.",
      tech: ["JavaScript", "API", "CSS"]
    },
    {
      img: "https://images.unsplash.com/photo-1611462985358-60d3498e0364?w=800&h=600&fit=crop&q=80",
      link: "https://willowy-chaja-ec2ec4.netlify.app/",
      title: "Calculator App",
      desc: "Functional calculator with scientific operations.",
      tech: ["JavaScript", "HTML", "CSS"]
    },
    {
      img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&q=80",
      link: "https://prismatic-beijinho-36aa03.netlify.app/",
      title: "Calendar Widget",
      desc: "Interactive calendar with event management.",
      tech: ["React", "Date-fns", "CSS"]
    },
    {
      img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&h=600&fit=crop&q=80",
      link: "https://magnificent-paprenjak-2be860.netlify.app/",
      title: "Digital Clock",
      desc: "Real-time digital clock with timezone support.",
      tech: ["JavaScript", "CSS", "HTML"]
    },
    {
      img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop&q=80",
      link: "https://willowy-bunny-87d6c2.netlify.app/",
      title: "Movie Database",
      desc: "Movie database to explore and track favorites.",
      tech: ["React", "TMDB API", "Tailwind"]
    },
    {
      img: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop&q=80",
      link: "https://sprightly-piroshki-a47347.netlify.app/",
      title: "Recipe Finder",
      desc: "Recipe app to discover and share meals.",
      tech: ["React", "API", "Bootstrap"]
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden theme-section">
      {/* Animated Background Lines */}
      <BackgroundLines />

      {/* Background */}
      <div className="absolute inset-0 dots-background opacity-20"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
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
            <Folder className="w-10 h-10 text-white" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Featured Projects
            </h2>
          </div>
          <div className="h-1 w-24 bg-[var(--theme-accent)] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production websites, real-time UI features, and full-stack applications demonstrating modern web development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative glass-strong rounded-2xl overflow-hidden card-hover shadow-professional"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20 hover:bg-white/20 hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--theme-accent)] text-white font-semibold rounded-lg hover:brightness-110 transition-all duration-300 btn-primary focus-ring"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/swetha123924"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--theme-accent)] text-white font-semibold rounded-full hover:brightness-110 transition-all"
            >
              <Github className="w-6 h-6" />
              View More on GitHub
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
