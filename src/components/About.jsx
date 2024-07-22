import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import axios from 'axios';

const About = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const socialIconsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
    );
    gsap.fromTo(
      [buttonRef.current, cardRef1.current, cardRef2.current, socialIconsRef.current],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: 'power2.out', stagger: 0.4 }
    );
  }, []);

  const handleDownloadResume = async () => {
    try {
      const response = await axios.get('https://portfolio-backend-two-delta.vercel.app/download-resume', {
        responseType: 'blob', // Important
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Aaditya_nema.pdf'); // or any other extension
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  return (
    <section className="bg-[#C4C4C1] text-gray-900 dark:bg-[#111111] dark:text-gray-100 py-20">
      <div className="container mx-auto">
        <h2 ref={textRef} className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div ref={textRef} className="text-lg text-center space-y-4 font-semibold">
          <p>
            I am Aaditya Nema, a B.Tech graduate in Computer Science & Business System from the School of Information and Technology, RGPV Bhopal, with an 8.15 CGPA.
          </p>
          <p>
            Proficient in front-end and back-end technologies like ReactJS, Node.js, and PostgreSQL, I have strong experience in developing user-friendly software solutions. My technical skills are enhanced by using tools such as GitHub, VS Code, and Postman.
          </p>
          <p>
            I aim to contribute to innovative projects in a dynamic organization, leveraging my expertise to achieve company goals with integrity.
          </p>
          <p>
            In addition to my technical skills, I have a keen interest in learning new technologies and staying updated with industry trends. I enjoy collaborating with cross-functional teams to create solutions that provide real value to users.
          </p>
        </div>
        <div className="text-center mt-8">
          <button
            ref={buttonRef}
            onClick={handleDownloadResume}
            className="bg-teal-600 hover:bg-teal-900 dark:bg-[#F2FFBC] dark:text-gray-800 text-white font-bold py-2 px-4 rounded transition"
          >
            Download Resume
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-4" ref={socialIconsRef}>
          <a href="https://wa.me/7470703097" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-900 hover:text-green-600 dark:text-gray-700 transition">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/iadityanema" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-900 dark:text-gray-700 hover:text-red-800 transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/aditya-nema-808684226/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-900 hover:text-blue-600 dark:text-gray-700 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/aadinema" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-900 hover:text-neutral-600 dark:text-gray-700 transition">
            <FaGithub />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div ref={cardRef1} className="bg-white dark:bg-[#F2FFBC] text-gray-800 p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2 flex justify-center gap-2 items-center">{<FaPhoneAlt />}Phone</h3>
            <p>+91-7470703097</p>
          </div>
          <div ref={cardRef2} className="bg-white dark:bg-[#F2FFBC] text-gray-800 p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2 flex justify-center gap-2 items-center">{<SiGmail />}Email</h3>
            <p>aadinema06@example.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
