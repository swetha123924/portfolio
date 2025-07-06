import React from 'react';
import main from './images/main.jpeg';
import { Instagram, Github, Linkedin } from 'lucide-react';

const Home: React.FC = () => {
  return (
    // <article id="home" className='home bg-pan-left  lg:h-screen bg-gradient-to-br from-blue-500 via-gray-400 to-blue-500 text-white flex flex-col-reverse p-5 md:flex-row items-center justify-center'>
    <article id="home" className="home lg:h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white flex flex-col-reverse p-5 md:flex-row items-center justify-center">
      <div className='text-center md:text-left md:max-w-screen-sm'>
        <p className='text-xl sm:text-2xl md:text-3xl font-bold animate-bounce'>HELLO, I'M</p>
        <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mt-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-blue-500 focus-in-contract-bck text-shadow'>
          Swetha Sree
        </h1>

        <p className='text-lg sm:text-xl md:text-2xl font-semibold mt-4 animate-pulse'>A Passionate <span className='text-blue-400'>Full-Stack Developer</span></p>
        <p className='text-base sm:text-lg md:text-xl mt-4 text-gray-300 animate-fadeIn'>I specialize in building scalable, user-friendly web applications using modern technologies like React, Python, and Tailwind CSS. Let's create something amazing together!</p>

        {/* Social Media Links */}
        <section className='flex justify-center md:justify-start gap-6 mt-6 bounce-top'>
          <a href="https://github.com/swetha123924" target="_blank" rel="noopener noreferrer">
            <Github className='p-2 border-2 rounded-full h-12 w-12 hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-110 animate-fadeIn' />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className='p-2 border-2 rounded-full h-12 w-12 hover:bg-pink-600 hover:text-white transition duration-300 transform hover:scale-110 animate-fadeIn' />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className='p-2 border-2 rounded-full h-12 w-12 hover:bg-blue-700 hover:text-white transition duration-300 transform hover:scale-110 animate-fadeIn' />
          </a>
        </section>

        {/* Call-to-Action Buttons */}
        <section className='flex flex-col md:flex-row gap-6 mt-8'>
          <button className='px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition duration-300 transform hover:scale-105 shadow-lg animate-fadeIn'>
            Download CV
          </button>
          <button className='px-8 py-3 border-2 border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg animate-fadeIn'>
            View Projects
          </button>
        </section>
      </div>

<div className="flex justify-center md:justify-end p-4 mt-10 md:mt-0 w-full md:w-1/2">
  <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
    <img
      src={main}
      alt="Swetha Sree"
      className="w-full h-full object-cover rounded-full border-4 border-blue-600 shadow-2xl hover:border-purple-500 transition duration-300 transform hover:scale-105"
    />
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-400 opacity-20 blur-2xl"></div>
  </div>
</div>

    </article>
  );
};

export default Home;
