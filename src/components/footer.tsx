import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import BackgroundLines from './BackgroundLines';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden theme-section">
      {/* Animated Background Lines */}
      <BackgroundLines className="opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="font-light">Swetha</span>
              <span className="ml-2 font-bold">Sree</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer at Bermer Software, building production websites and real-time application interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Feedback'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:swethasree630@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                cswetha061@gmail.com
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/swetha123924"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/c-swetha-sree-2585a7301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Swetha Sree. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-gray-400 text-sm">
              Made with <Heart className="w-4 h-4 text-white" fill="white" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;