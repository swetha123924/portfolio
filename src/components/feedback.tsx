import React from 'react';

const Feedback :React.FC = () => {
  return (
    <article id="feedback" className='feedback bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center p-4'>
      <h1 className='text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>Feedback</h1>
      <p className='text-lg text-center max-w-2xl mb-8 text-gray-300'>Your feedback is invaluable to me! Whether it's a suggestion, a compliment, or constructive criticism, I'd love to hear your thoughts. Let's grow together!</p>
      <div className='w-full max-w-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl shadow-2xl'>
        <div className='mb-6'>
          <label htmlFor="name" className='block text-sm font-medium text-gray-300 mb-2'>Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" className='w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>

        <div className='mb-6'>
          <label htmlFor="email" className='block text-sm font-medium text-gray-300 mb-2'>Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" className='w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>

        <div className='mb-6'>
          <label htmlFor="feedback" className='block text-sm font-medium text-gray-300 mb-2'>Your Feedback</label>
          <textarea id="feedback" placeholder="Share your thoughts..." className='w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500' rows={5}></textarea>
        </div>

        <button className='w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition duration-300 transform hover:scale-105 shadow-lg'>Submit Feedback</button>
      </div>

      <p className='mt-8 text-sm text-gray-400 text-center max-w-2xl'>Your feedback will help me improve my skills and deliver better projects. Thank you for taking the time to share your thoughts!</p>
    </article>
  );
};

export default Feedback;