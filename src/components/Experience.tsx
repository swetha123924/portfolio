import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, CheckCircle2, ExternalLink, Globe2, Palette, Rocket } from 'lucide-react';
import BackgroundLines from './BackgroundLines';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });

  const highlights = [
    '1 year of hands-on development experience at Bermer Software',
    'Built and improved production websites including bermer.in and niyantha.in',
    'Worked on responsive UI, reusable React components, API integration, and deployment-ready pages',
    'Developed real-time application interfaces with interactive color-theme experiences',
  ];

  const work = [
    {
      title: 'Bermer Software Website',
      domain: 'bermer.in',
      href: 'https://bermer.in',
      icon: <Globe2 className="w-6 h-6" />,
      description: 'Contributed to a professional company website focused on clean presentation, responsive layouts, and smooth user experience.',
      tags: ['React UI', 'Responsive Design', 'Performance', 'SEO-ready Pages'],
    },
    {
      title: 'Niyantha Website',
      domain: 'niyantha.in',
      href: 'https://niyantha.in',
      icon: <Rocket className="w-6 h-6" />,
      description: 'Worked on website sections, visual consistency, modern component styling, and production-focused frontend improvements.',
      tags: ['Web Development', 'Tailwind CSS', 'Components', 'Deployment'],
    },
    {
      title: 'Real-Time Applications',
      domain: 'Interactive theme systems',
      icon: <Palette className="w-6 h-6" />,
      description: 'Implemented live UI interactions including dynamic color-theme switching, polished states, and user-friendly application flows.',
      tags: ['Real-time UI', 'Theme Switcher', 'UX', 'State Management'],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden theme-section">
      <BackgroundLines />
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute -top-24 right-10 w-96 h-96 bg-[var(--theme-accent)]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Briefcase className="w-10 h-10 text-[var(--theme-accent)]" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Professional Experience
            </h2>
          </div>
          <div className="h-1 w-24 bg-[var(--theme-accent)] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Frontend-focused full-stack developer building real business websites and interactive applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 sticky top-28"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300 mb-6">
              <Calendar className="w-4 h-4 text-[var(--theme-accent)]" />
              2025 - Present · 1 Year
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Software Developer</h3>
            <p className="text-[var(--theme-accent)] font-semibold mb-6">Bermer Software</p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I work on production-ready websites and real-time application screens, transforming ideas into modern, responsive, and user-friendly digital products.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + idx * 0.08 }}
                  className="flex gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--theme-accent)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300 leading-relaxed">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {work.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.16, duration: 0.55 }}
                className="group relative glass rounded-3xl p-7 card-hover overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--theme-accent)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col sm:flex-row sm:items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--theme-accent)] text-white flex items-center justify-center shadow-lg shadow-black/20 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <div>
                        <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.domain}</p>
                      </div>
                      {item.href && (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-[var(--theme-accent)] hover:text-white transition-colors"
                        >
                          Visit Site <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-5">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
