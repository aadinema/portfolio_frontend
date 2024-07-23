import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import img from "../assets/mypic.jpeg"

const Hero = () => {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      imgRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 2 }
    ).fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2 },
      "-=1.0"
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-[#C4C4C1] text-gray-950 dark:bg-[#111111] dark:text-slate-100 h-screen flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 p-4"
    >
      <img
        ref={imgRef}
        src={img}
        alt="Aaditya Nema"
        className="w-72 h-auto md:w-80 md:h-auto rounded-full border-4 border-white shadow-lg"
      />
      <div ref={textRef} className="text-center md:text-left ">
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold dark:text-[#AAA9A8] mb-2">
          Hi, I'm{" "}
        </h1>
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl md:text-6xl lg:text-8xl text-gray-950 dark:text-[#AAA9A8] font-bold">
          Aaditya Nema
        </h1>
        <p className="text-xl md:text-2xl lg:text-5xl mt-4 font-bold dark:text-[#AAA9A8]">
          A passionate Full stack developer
        </p>
      </div>
    </section>
  );
};

export default Hero;
