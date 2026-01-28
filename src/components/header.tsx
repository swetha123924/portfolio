import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [menubar, setMenuBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Feedback', href: '#feedback' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}
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
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group'
                onClick={() => setMenuBar(false)}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-white group-hover:w-3/4 transition-all duration-300"></span>
              </motion.a>
            ))}
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
            className='md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10'
          >
            <nav className='flex flex-col px-4 py-6 space-y-2'>
              {navItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setMenuBar(false)}
                  className='px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors'
                >
                  {item.name}
                </motion.a>
              ))}
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