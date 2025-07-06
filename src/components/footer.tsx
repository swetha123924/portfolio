import React from 'react';

const Footer: React.FC= () => {
  return (
    <footer className='bg-gray-800 flex-col md:flex gap-4 justify-center text-white p-4 text-center'>
      <p className='font-bold text-blue-500'>Contact:</p>
      <span>swethasree630@gmail.com</span>
      <div className='flex justify-center space-x-4'>
        <a href="#" className='text-orange-500 hover:text-orange-300'>LinkedIn</a>
        <a href="https://github.com/swetha123924" className='text-orange-500 hover:text-orange-300'>GitHub</a>
        <a href="https://devsnest.in/dashboard" className='text-orange-500 hover:text-orange-300'>Devsnest</a>
      </div>
    </footer>
  );
};

export default Footer;