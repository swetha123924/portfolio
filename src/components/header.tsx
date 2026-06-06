import React, { useState, useEffect } from 'react';
import { Menu, Palette, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PortfolioTheme } from '../App';

interface HeaderProps {
  themes: PortfolioTheme[];
  activeTheme: string;
  onThemeChange: (theme: PortfolioTheme) => void;
}

const Header: React.FC<HeaderProps> = ({ themes, activeTheme, onThemeChange }) => {
  const [menubar, setMenuBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Feedback', href: '#feedback' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Find which section is in view
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 150; // offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll(); // run once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-lg border-b shadow-lg' 
          : 'bg-transparent'
      }`}
      style={scrolled ? {
        backgroundColor: 'rgba(255, 245, 248, 0.9)',
        borderColor: 'var(--theme-accent-soft)'
      } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <motion.a 
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='relative group'
          >
            <h1 className='text-2xl sm:text-3xl font-bold text-white tracking-tight'>
              <span className="font-light">Swetha</span>
              <span className="ml-2 font-bold">Sree</span>
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-1'>
            {navItems.map((item, idx) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                    isActive
                      ? 'text-[var(--theme-accent)]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setMenuBar(false)}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[var(--theme-accent)] transition-all duration-300 ${
                      isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`}
                  ></span>
                </motion.a>
              );
            })}
           
            <motion.a
              href="#feedback"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='ml-4 px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors'
            >
              Contact
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuBar(!menubar)}
            className='md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors'
          >
            {menubar ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menubar && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden backdrop-blur-lg border-t'
            style={{
              backgroundColor: 'rgba(255, 245, 248, 0.95)',
              borderColor: 'var(--theme-accent-soft)'
            }}
          >
            <nav className='flex flex-col px-4 py-6 space-y-2'>
              {navItems.map((item, idx) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={idx}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setMenuBar(false)}
                    className={`relative px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'text-[var(--theme-accent)] bg-[var(--theme-accent-soft)] border-l-4 border-[var(--theme-accent)]'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
              <div className="px-4 py-3 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                  <Palette className="w-4 h-4 text-[var(--theme-accent)]" />
                  Change color theme
                </div>
                <div className="flex gap-3">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => onThemeChange(theme)}
                      className={`w-8 h-8 rounded-full border transition-all ${activeTheme === theme.id ? 'border-white scale-110' : 'border-white/20'}`}
                      style={{ background: theme.accent }}
                      aria-label={`Switch to ${theme.name} theme`}
                    />
                  ))}
                </div>
              </div>
              <motion.a
                href="#feedback"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={() => setMenuBar(false)}
                className='px-4 py-3 bg-white text-black text-center font-semibold rounded-lg hover:bg-gray-200 transition-colors'
              >
                Contact Me
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;