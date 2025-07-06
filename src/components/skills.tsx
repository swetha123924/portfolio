import React from 'react';

const Skills: React.FC = () => {
  return (
    <article
      id="skills"
      className="skills bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center py-16 px-4"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-16 text-center">
        Technical Skills
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 max-w-6xl w-full">
        {/* HTML */}
        <SkillCard
          bgColor="bg-white"
          shadowColor="hover:shadow-red-400/50"
          logo="https://cdn.worldvectorlogo.com/logos/html-1.svg"
          alt="HTML Logo"
        />

        {/* CSS */}
        <SkillCard
          bgColor="bg-sky-100"
          shadowColor="hover:shadow-blue-400/50"
          logo="https://cdn.worldvectorlogo.com/logos/css-3.svg"
          alt="CSS Logo"
        />

        {/* JavaScript */}
        <SkillCard
          bgColor="bg-yellow-100"
          shadowColor="hover:shadow-yellow-500/50"
          logo="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
          alt="JavaScript Logo"
        />

        {/* React */}
        <SkillCard
          bgColor="bg-white"
          shadowColor="hover:shadow-blue-500/50"
          logo="https://cdn.worldvectorlogo.com/logos/react-2.svg"
          alt="React Logo"
        />

        {/* Tailwind */}
        <SkillCard
          bgColor="bg-sky-100"
          shadowColor="hover:shadow-cyan-500/50"
          logo="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
          alt="Tailwind CSS Logo"
        />

        {/* Python */}
        <SkillCard
          bgColor="bg-white"
          shadowColor="hover:shadow-yellow-500/50"
          logo="https://cdn.worldvectorlogo.com/logos/python-5.svg"
          alt="Python Logo"
        />

        {/* Node.js */}
        <SkillCard
          bgColor="bg-green-100"
          shadowColor="hover:shadow-green-500/50"
          logo="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
          alt="Node.js Logo"
        />

        {/* PostgreSQL */}
        <SkillCard
          bgColor="bg-blue-100"
          shadowColor="hover:shadow-blue-600/50"
          logo="https://cdn.worldvectorlogo.com/logos/postgresql.svg"
          alt="PostgreSQL Logo"
        />

        {/* Git */}
        <SkillCard
          bgColor="bg-orange-100"
          shadowColor="hover:shadow-orange-500/50"
          logo="https://cdn.worldvectorlogo.com/logos/git-icon.svg"
          alt="Git Logo"
        />
      </div>
    </article>
  );
};

interface SkillCardProps {
  logo: string;
  alt: string;
  bgColor: string;
  shadowColor: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ logo, alt, bgColor, shadowColor }) => (
  <div
    className={`p-6 ${bgColor} text-black rounded-2xl shadow-xl ${shadowColor} transition duration-300 transform hover:scale-110`}
  >
    <div className="flex items-center justify-center">
      <img src={logo} alt={alt} className="w-28 h-28" />
    </div>
  </div>
);

export default Skills;
