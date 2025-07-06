import React from 'react';
import band from './images/band.png';
import e_commerce from './images/e-commerce.png';
import finance from './images/finance_tracker.png';
import movie from './images/movie_web.png';
import recipe from './images/recipe_web.png';
import bullwork from './images/bullwork.png';
import currency from './images/currency.png';
import bookmyshow from './images/bookmyshow.png';
import swiggy from './images/swiggy.png';
import calculator from './images/calculator.png';
import calender from './images/calender.png';
import digitalClock from './images/digitl_clock.png';

const Projects: React.FC = () => {
  return (
    <article id="projects" className='projects text-white py-20'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>My Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            { img: band, link: "https://strong-liger-fdf0f5.netlify.app/", desc: "A responsive band website built with React and Tailwind CSS." },
            { img: e_commerce, link: "https://silver-dragon-cd256d.netlify.app/", desc: "An e-commerce platform with a modern UI and seamless user experience." },
            { img: finance, link: "https://sprightly-pothos-71ae2f.netlify.app/", desc: "A finance tracker to help users manage their budgets effectively." },
            { img: bullwork, link: "https://harmonious-mousse-8f19ec.netlify.app/", desc: "BULL WORK MOBILITY" },
            { img: bookmyshow, link: "https://bucolic-narwhal-6c9cc9.netlify.app/", desc: "BOOK MY SHOW" },
            { img: swiggy, link: "https://kaleidoscopic-mandazi-d08669.netlify.app/", desc: "SWIGGY" },
            { img: currency, link: "https://deluxe-panda-cb3bb0.netlify.app/", desc: "CURRENCY CONVERTER" },
            { img: calculator, link: "https://mellow-chebakia-aea4b7.netlify.app/", desc: "CALCULATOR" },
            { img: calender, link: "https://mellow-chebakia-aea4b7.netlify.app/", desc: "CALENDER" },
            { img: digitalClock, link: "https://thunderous-salmiakki-908ed4.netlify.app/", desc: "DIGITAL CLOCK" },
            { img: movie, link: "https://idyllic-sopapillas-4d4e5b.netlify.app", desc: "A movie database application to explore and track your favorite films." },
            { img: recipe, link: "https://grand-chebakia-acf92e.netlify.app/", desc: "A recipe app to discover and share delicious meals." },
          ].map((project, idx) => (
            <div key={idx} className='relative group overflow-hidden rounded-xl shadow-2xl hover:shadow-purple-500/50 transition duration-300 transform hover:scale-105'>
              <img src={project.img} alt={`Project ${idx + 1}`} className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110' />
              <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <p className='text-lg mb-4'>{project.desc}</p>
                <a href={project.link} className='font-semibold'>View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Projects;
