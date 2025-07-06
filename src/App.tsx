import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Feedback from './components/feedback';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;











// import { useState } from 'react';
// import './App.css';
// import main from "./images/main.jpeg"
// import band from './images/band_web.png';
// import e_commerce from './images/e-commerce.png';
// import expenses from './images/expenses-splitter.png';
// import finance from './images/finance_tracker.png';
// import movie from './images/movie_web.png';
// import recipe from './images/recipe_web.png';
// import { Instagram, Github, Linkedin,SquareMenuIcon } from 'lucide-react';

// function App() {
//   const [menubar,setmenuBar]=useState(false)
//   return (
//     <>
//       <section className='all'>
//         {/* Header */}
//         <header className='flex items-center justify-between p-4 sm:p-6 md:p-4 bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 sm:justify-between sticky top-0 z-30 shadow-lg'>
//           <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white hover:text-blue-300 transition duration-300 hover:animate-pulse'>
//             Swetha Sree
//           </h1>
//           <SquareMenuIcon className='block md:hidden h-9 w-9 text-white hover:cursor-pointer' onClick={()=>setmenuBar(!menubar)} />
//           <nav className={`${
//             menubar ? 'flex' : 'hidden'
//           } sm:flex md:flex gap-6 text-orange-400 sm:static md:static absolute top-16 right-0 bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 p-4 rounded-lg shadow-lg sm:bg-transparent md:bg-transparent sm:shadow-none md:shadow-none transition-all duration-300 ease-in-out`}>

//             <a href="#home" className='hover:text-orange-200 transition duration-300 hover:underline'>Home</a>
//             <a href="#about" className='hover:text-orange-200 transition duration-300 hover:underline'>About</a>
//             <a href="#skills" className='hover:text-orange-200 transition duration-300 hover:underline'>Skills</a>
//             <a href="#projects" className='hover:text-orange-200 transition duration-300 hover:underline'>Projects</a>
//             <a href="#feedback" className='hover:text-orange-200 transition duration-300 hover:underline'>Feedback</a>
//           </nav>
//         </header>

//         {/* Home Section */}
//         <article id="home" className='home  lg:h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col-reverse p-3 md:flex-row items-center justify-center px-4 sm:px-6 md:px-8'>
//           <div className='text-center md:text-left max-w-lg sm:max-w-2xl'>
//             <p className='text-xl sm:text-2xl md:text-3xl font-bold animate-bounce'>HELLO, I'M</p>
//             <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mt-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
//               Swetha Sree
//             </h1>
//             <p className='text-lg sm:text-xl md:text-2xl font-semibold mt-4 animate-pulse'>
//               A Passionate <span className='text-blue-400'>Full-Stack Developer</span>
//             </p>
//             <p className='text-base sm:text-lg md:text-xl mt-4 text-gray-300'>
//               I specialize in building scalable, user-friendly web applications using modern technologies like React, Python, and Tailwind CSS. Let's create something amazing together!
//             </p>

//             {/* Social Media Links */}
//             <section className='flex justify-center md:justify-start gap-4 mt-6'>
//               <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//                 <Github className='p-2 sm:p-3 border-2 rounded-full h-10 sm:h-12 w-10 sm:w-12 hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer hover:animate-spin' />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                 <Instagram className='p-2 sm:p-3 border-2 rounded-full h-10 sm:h-12 w-10 sm:w-12 hover:bg-pink-600 hover:text-white transition duration-300 cursor-pointer hover:animate-spin' />
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <Linkedin className='p-2 sm:p-3 border-2 rounded-full h-10 sm:h-12 w-10 sm:w-12 hover:bg-blue-700 hover:text-white transition duration-300 cursor-pointer hover:animate-spin' />
//               </a>
//             </section>

//             {/* Call-to-Action Buttons */}
//             <section className='flex flex-col md:flex-row gap-4 mt-8'>
//               <button className='px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
//                 Download CV
//               </button>
//               <button className=' px-8 py-3 sm:px-10 sm:py-4 border-2 border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
//                 View Projects
//               </button>
//             </section>
//           </div>

//           {/* Right Section: Image */}
//           <div className='flex justify-center p-1 mt-8 md:mt-0'>
//             <div className='relative'>
//               <img 
//                 src={main} 
//                 alt="Swetha Sree" 
//                 className='h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] rounded-full border-4 border-blue-600 shadow-2xl hover:border-purple-500 transition duration-300 transform' 
//               />
//               <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-400 opacity-20 blur-2xl animate-pulse'></div>
//             </div>
//           </div>
//         </article>

//         {/* About Section */}
//         <article id="about" className='about  bg-gradient-to-r from-gray-100 to-gray-200 text-black p-4 sm:p-6 md:p-8'>
//           <h1 className='text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
//             About Me
//           </h1>
//           <div className='flex flex-col items-center justify-center'>
//             <div className='relative w-full max-w-2xl'>
//               {/* Vertical Timeline Line */}
//               <div className='absolute left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600'></div>
//               <div className='flex items-start w-full mb-8'>
//                 <div className='w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg transform hover:scale-50 transition duration-300'></div>
//                 <div className='ml-8 flex-1'>
//                   <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
//                     <h2 className='text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
//                       Education
//                     </h2>
//                     <p className='text-gray-600 mt-2'>Graduated with a BSC[MSCc] from SV University.</p>
//                     <p className='text-gray-600 mt-2'>Completed my Bachelor's degree in Computer Science and Engineering with a strong foundation in programming languages, data structures, and algorithms.</p>
//                   </div>
//                 </div>
//               </div>
//               <div className='flex items-start w-full mb-8'>
//                 <div className='w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg transform hover:scale-110 transition duration-300'></div>
//                 <div className='ml-8 flex-1'>
//                   <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
//                     <h2 className='text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
//                       Skills
//                     </h2>
//                     <p className='text-gray-600 mt-2'>Skilled in Python, Data Structures, Front End Development, and React.js.</p>
//                     <p className='text-gray-600 mt-2'>Proficient in using various tools and technologies such as Git, GitHub, and Visual Studio Code.</p>
//                   </div>
//                 </div>
//               </div>
//               <div className='flex items-start w-full mb-8'>
//                 <div className='w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg transform hover:scale-110 transition duration-300'></div>
//                 <div className='ml-8 flex-1'>
//                   <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
//                     <h2 className='text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
//                       Projects
//                     </h2>
//                     <p className='text-gray-600 mt-2'>Passionate about building web applications that solve real-world problems.</p>
//                     <p className='text-gray-600 mt-2'>Developed multiple projects using React, Node.js, and MongoDB, showcasing my skills in full-stack development.</p>
//                   </div>
//                 </div>
//               </div>
//               <div className='flex items-start w-full mb-8'>
//                 <div className='w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg transform hover:scale-110 transition duration-300'></div>
//                 <div className='ml-8 flex-1'>
//                   <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
//                     <h2 className='text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
//                       Goal
//                     </h2>
//                     <p className='text-gray-600 mt-2'>Aspiring to contribute to innovative projects and grow as a developer.</p>
//                     <p className='text-gray-600 mt-2'>Aiming to become a senior web developer at Google and work on projects that make a positive impact on society.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button className='mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition duration-300 transform hover:scale-105 shadow-lg'>
//               Contact Me
//             </button>
//           </div>
//         </article>

//         {/* Skills Section */}
//         <article id="skills" className='skills  bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center py-12'>
//           <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8'>
//             Technical Skills
//           </h1>
//           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4 sm:px-6 md:px-8'>
//             <div className='p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-2xl hover:shadow-purple-500/50 transition duration-300 transform hover:scale-105'>
//               <div className='flex items-center gap-4 mb-4'>
//                 <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/html5.svg" alt="HTML Logo" className='w-10 h-10' />
//                 <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/css3.svg" alt="CSS Logo" className='w-10 h-10' />
//                 <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/javascript.svg" alt="JavaScript Logo" className='w-10 h-10' />
//               </div>
//               <p className='text-xl font-semibold mb-2'>HTML, CSS, JavaScript</p>
//               <p className='text-gray-300 mb-4'>
//                 Proficient in building responsive and interactive user interfaces using modern web technologies.
//               </p>
//               <div className='w-full bg-gray-700 rounded-full h-3'>
//                 <div className='bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full' style={{ width: '90%' }}></div>
//               </div>
//             </div>
//             <div className='p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition duration-300 transform hover:scale-105'>
//               <div className='flex items-center gap-4 mb-4'>
//                 <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React Logo" className='w-10 h-10' />
//               </div>
//               <p className='text-xl font-semibold mb-2'>React.js</p>
//               <p className='text-gray-300 mb-4'>
//                 Experienced in developing dynamic and scalable single-page applications using React and its ecosystem.
//               </p>
//               <div className='w-full bg-gray-700 rounded-full h-3'>
//                 <div className='bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full' style={{ width: '85%' }}></div>
//               </div>
//             </div>
//             <div className='p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-2xl hover:shadow-yellow-500/50 transition duration-300 transform hover:scale-105'>
//               <div className='flex items-center gap-4 mb-4'>
//                 <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="Python Logo" className='w-10 h-10' />
//               </div>
//               <p className='text-xl font-semibold mb-2'>Python</p>
//               <p className='text-gray-300 mb-4'>
//                 Skilled in Python for backend development, data analysis, and automation tasks.
//               </p>
//               <div className='w-full bg-gray-700 rounded-full h-3'>
//                 <div className='bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full' style={{ width: '80%' }}></div>
//               </div>
//             </div>
//             <div className='p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-2xl hover:shadow-green-500/50 transition duration-300 transform hover:scale-105'>
//               <p className='text-xl font-semibold mb-2'>Data Structures & Algorithms</p>
//               <p className='text-gray-300 mb-4'>
//                 Strong foundation in problem-solving and optimizing algorithms for efficient code.
//               </p>
//               <div className='w-full bg-gray-700 rounded-full h-3'>
//                 <div className='bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full' style={{ width: '75%' }}></div>
//               </div>
//             </div>
//             <div className='p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-2xl hover:shadow-pink-500/50 transition duration-300 transform hover:scale-105'>
//               <div className='flex items-center gap-4 mb-4'>
//                 <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" alt="Tailwind CSS Logo" className='w-10 h-10' />
//               </div>
//               <p className='text-xl font-semibold mb-2'>Tailwind CSS</p>
//               <p className='text-gray-300 mb-4'>
//                 Proficient in using Tailwind CSS for rapid UI development and creating responsive designs.
//               </p>
//               <div className='w-full bg-gray-700 rounded-full h-3'>
//                 <div className='bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full' style={{ width: '95%' }}></div>
//               </div>
//             </div>
//           </div>
//         </article>
//         {/* Projects Section */}
//         <article id="projects" className='projects bg-gradient-to-br from-gray-900 to-black text-white py-20'>
//           <div className='container mx-auto px-4 sm:px-6 md:px-8'>
//             <h1 className='text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
//               My Projects
//             </h1>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//               {/* Project 1 */}
//               <div className='relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-purple-500/50 transition duration-300 transform hover:scale-105'>
//                 <img src={band} alt="Project 1" className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110' />
//                 <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
//                 <div className='absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                   <h2 className='text-2xl font-bold text-yellow-300 mb-2'>Project 1</h2>
//                   <p className='text-lg text-yellow-500 mb-4'>A responsive band website built with React and Tailwind CSS.</p>
//                   <a href="#" className='text-yellow-400 hover:text-yellow-300 font-semibold'>View Project →</a>
//                 </div>
//               </div>

//               {/* Project 2 */}
//               <div className='relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-blue-500/50 transition duration-300 transform hover:scale-105'>
//                 <img src={e_commerce} alt="Project 2" className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110' />
//                 <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
//                 <div className='absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                   <h2 className='text-2xl font-bold text-yellow-300 mb-2'>Project 2</h2>
//                   <p className='text-lg text-yellow-500 mb-4'>An e-commerce platform with a modern UI and seamless user experience.</p>
//                   <a href="https://silver-dragon-cd256d.netlify.app/" className='text-yellow-400 hover:text-yellow-300 font-semibold'>View Project →</a>
//                 </div>
//               </div>

//               {/* Project 3 */}
//               <div className='relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-green-500/50 transition duration-300 transform hover:scale-105'>
//                 <img src={expenses} alt="Project 3" className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110' />
//                 <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
//                 <div className='absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                   <h2 className='text-2xl font-bold text-yellow-300 mb-2'>Project 3</h2>
//                   <p className='text-lg text-yellow-500 mb-4'>An expense splitter app to manage shared finances efficiently.</p>
//                   <a href="#" className='text-yellow-400 hover:text-yellow-300 font-semibold'>View Project →</a>
//                 </div>
//               </div>

//               {/* Project 4 */}
//               <div className='relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-purple-500/50 transition duration-300 transform hover:scale-105'>
//                 <img src={finance} alt="Project 4" className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110' />
//                 <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
//                 <div className='absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                   <h2 className='text-2xl font-bold text-yellow-300 mb-2'>Project 4</h2>
//                   <p className='text-lg text-yellow-500 mb-4'>A finance tracker to help users manage their budgets effectively.</p>
//                   <a href="https://earnest-marigold-d70769.netlify.app/" className='text-yellow-400 hover:text-yellow-300 font-semibold'>View Project →</a>
//                 </div>
//               </div>

//               {/* Project 5 */}
//               <div className ='relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-pink-500/50 transition duration-300 transform hover:scale-105'>
//                 <img src={movie} alt="Project 5" className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110' />
//                 <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
//                 <div className='absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                   <h2 className='text-2xl font-bold text-yellow-300 mb-2'>Project 5</h2>
//                   <p className='text-lg text-yellow-500 mb-4'>A movie database application to explore and track your favorite films.</p>
//                   <a href="#" className='text-yellow-400 hover:text-yellow-300 font-semibold'>View Project →</a>
//                 </div>
//               </div>

//               {/* Project 6 */}
//               <div className='relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-yellow-500/50 transition duration-300 transform hover:scale-105'>
//                 <img src={recipe} alt="Project 6" className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110' />
//                 <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
//                 <div className='absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                   <h2 className='text-2xl font-bold text-yellow-300 mb-2'>Project 6</h2>
//                   <p className='text-lg text-yellow-500 mb-4'>A recipe app to discover and share delicious meals.</p>
//                   <a href="https://grand-chebakia-acf92e.netlify.app/" className='text-yellow-400 hover:text-yellow-300 font-semibold'>View Project →</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </article>

//         {/* Feedback Section */}
//         <article id="feedback" className='feedback bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8'>
//           <h1 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
//             Feedback
//           </h1>
//           <p className='text-lg text-center max-w-2xl mb-8 text-gray-300'>
//             Your feedback is invaluable to me! Whether it's a suggestion, a compliment, or constructive criticism, I'd love to hear your thoughts. Let's grow together!
//           </p>
//           <div className='w-full max-w-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl'>
//             <div className='mb-6'>
//               <label htmlFor="name" className='block text-sm font-medium text-gray-300 mb-2'>
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Enter your name"
//                 className='w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
//               />
//             </div>

//             <div className='mb-6'>
//               <label htmlFor="email" className='block text-sm font-medium text-gray-300 mb-2'>
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 className='w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
//               />
//             </div>

//             <div className='mb-6'>
//               <label htmlFor="feedback" className='block text-sm font-medium text-gray-300 mb-2'>
//                 Your Feedback
//               </label>
//               <textarea
//                 id="feedback"
//                 placeholder="Share your thoughts..."
//                 className='w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
//                 rows={5}
//               ></textarea>
//             </div>

//             <button
//               className='w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
//             >
//               Submit Feedback
//             </button>
//           </div>

//           <p className='mt-8 text-sm text-gray-400 text-center max-w-2xl'>
//             Your feedback will help me improve my skills and deliver better projects. Thank you for taking the time to share your thoughts!
//           </p>
//         </article>

//         {/* Footer */}
//         <footer className='bg-gray-800 flex-col md:flex gap-4 justify-center text-white p-4 text-center'>
//           <p className='font-bold text-blue-500'>Contact:</p> <span>swethasree630@gmail.com</span>
//           <div className='flex justify-center space-x-4'>
//             <a href="#" className='text-orange-500 hover:text-orange-300'>LinkedIn</a>
//             <a href="#" className='text-orange-500 hover:text-orange-300'>GitHub</a>
//             <a href="#" className='text-orange-500 hover:text-orange-300'>Twitter</a>
//           </div>
//         </footer>
//       </section>
//     </>
//   )
// }

// export default App