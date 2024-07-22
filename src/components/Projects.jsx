import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    title: "Horse Ride Booking System",
    description:
      "Description of project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubLink: "https://github.com/aadinema/HORSE-RIDE-BOOKING-SYSTEM",
    liveLink: "https://aadinema.github.io/HORSE-RIDE-BOOKING-SYSTEM/",
  },
  {
    title: "TO-DO-List",
    description:
      "Description of project 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    githubLink: "https://github.com/yourusername/project2",
    liveLink: "https://example.com/project2",
  },
  {
    title: "Docs_using_React ",
    description:
      "Description of project 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    githubLink: "https://github.com/aadinema/Docs_using_React",
    liveLink: "https://example.com/project3",
  },
  {
    title: "password_generator_using_react",
    description:
      "Description of project 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    githubLink: "https://github.com/aadinema/password_generator_using_react",
    liveLink: "https://example.com/project3",
  },
];

const Projects = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out", stagger: 0.2 }
    );
  }, []);

  const handleCardHover = (index) => {
    gsap.to(cardRefs.current[index], { scale: 1.05, duration: 0.3 });
  };

  const handleCardLeave = (index) => {
    gsap.to(cardRefs.current[index], { scale: 1, duration: 0.3 });
  };

  return (
    <section className="bg-[#C4C4C1] text-gray-900 py-20 dark:text-gray-100 dark:bg-[#111111] max-w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-[#000000] text-gray-100 dark:text-gray-900 dark:bg-[#EEEEEE] p-4 rounded-xl cursor-pointer  transition-transform transform hover:scale-105 hover:shadow-lg shadow-inner shadow-red-300 dark:shadow-black min-w-fit"
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardLeave(index)}
            >
              <h3 className="sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">{project.title}</h3>
              {/* <p className="text-lg mb-4">{project.description}</p> */}
              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white bg-gray-900 hover:bg-gray-700 py-2 px-4 rounded-full flex items-center  transition duration-300"
                >
                  <FaGithub className="mr-2" />
                </a>
                <a
                  href={project.liveLink}
                  class=" text-xl text-white bg-gray-900 px-4 py-2 hover:bg-gray-700 rounded-full flex items-center"
                >
                  <FaExternalLinkAlt className="mr-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
