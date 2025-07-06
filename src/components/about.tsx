import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-100 py-12 px-6 text-gray-800 flex just">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">🎓 Education</h2>
            <p className="text-gray-700">
              Graduated with a B.Sc. in [BZC] from Sanjay Gandhi Government Degree College, affiliated with SV University, scoring 85%.
            </p>
            <p className="mt-2 text-gray-700">
              Gained a strong foundation in programming, data structures, and full-stack development during my bootcamp.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-purple-600 mb-2">🛠 Skills</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS, Vite</li>
              <li>Backend: Node.js, Express.js, PostgreSQL</li>
              <li>Others: Git, GitHub, VS Code, Render, Aiven</li>
              <li>Problem Solving: Data Structures & Algorithms, Python</li>
            </ul>
          </div>

          {/* Projects */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">💼 Projects</h2>
            <p className="text-gray-700">
              I’ve built 12+ projects including:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>E-commerce Platform (React + Node)</li>
              <li>Swiggy Clone (Full Stack)</li>
              <li>BookMyShow-style Ticket Booking App</li>
              <li>Recipe App, Movie Search App, Clock, Drum Kit, Calendar</li>
            </ul>
          </div>

          {/* Career Goal */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-pink-600 mb-2">🚀 Career Goal</h2>
            <p className="text-gray-700">
              I aspire to work on meaningful, high-impact projects and grow into a senior web developer role at a top-tier tech company like Google.
            </p>
            <p className="mt-2 text-gray-700">
              My focus is on continuous learning, contributing to team success, and building innovative solutions.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a href="#contact">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:from-purple-600 hover:to-blue-600 transition duration-300">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
