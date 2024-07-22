import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const skillsData = [
  { name: 'HTML', description: 'Markup language for web pages.' },
  { name: 'CSS', description: 'Stylesheet language for designing.' },
  { name: 'JavaScript', description: 'Programming language for web development.' },
  { name: 'React', description: 'Library for building user interfaces.' },
  { name: 'Node.js', description: 'JavaScript runtime for server-side programming.' },
  { name: 'Express', description: 'Web framework for Node.js.' },
  { name: 'MongoDB', description: 'NoSQL database for modern apps.' },
  { name: 'PostgreSQL', description: 'Advanced relational database system.' },
  { name: 'Tailwind CSS', description: 'Utility-first CSS framework.' }
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const skillsRef = useRef([]);
  
  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: 'power2.out', stagger: 0.3 }
    );
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredSkill(index);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section className="bg-[#C4C4C1] text-gray-900 dark:bg-[#111111] dark:text-gray-100 py-20 h-screen ">

      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (skillsRef.current[index] = el)}
              className="relative text-center p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-2xl font-bold dark:text-gray-900">{skill.name}</h3>
              {hoveredSkill === index && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 text-white p-4 rounded-lg">
                  <p className="text-sm">{skill.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
