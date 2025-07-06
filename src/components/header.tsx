import React, { useState } from 'react';
import { SquareMenuIcon } from 'lucide-react';

const Header: React.FC = () => {
  const [menubar, setMenuBar] = useState(false);

  return (
    <header className='flex items-center justify-between p-4 sm:p-6 md:p-4 bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 sticky top-0 z-30 shadow-lg'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white hover:text-blue-300 transition duration-300 hover:animate-pulse'>
        Swetha Sree
      </h1>
      <SquareMenuIcon className='block md:hidden h-9 w-9 text-white hover:cursor-pointer' onClick={() => setMenuBar(!menubar)} />
      <nav className={`${menubar ? 'flex' : 'hidden'} sm:flex md:flex gap-6 text-orange-400 absolute  right-0 bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out`}>
        <a href="#home" className='hover:text-orange-200 transition duration-300 hover:underline'>Home</a>
        <a href="#about" className='hover:text-orange-200 transition duration-300 hover:underline'>About</a>
        <a href="#skills" className='hover:text-orange-200 transition duration-300 hover:underline'>Skills</a>
        <a href="#projects" className='hover:text-orange-200 transition duration-300 hover:underline'>Projects</a>
        <a href="#feedback" className='hover:text-orange-200 transition duration-300 hover:underline'>Feedback</a>
      </nav>
    </header>
  );
};

export default Header;