import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center">
      <div className="max-w-5xl mx-auto px-6">
        
        <h1 
          data-aos="fade-down" 
          className="text-3xl md:text-5xl font-extrabold mb-4"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-darkBlue to-darkRed dark:from-blue-400 dark:to-red-400">
            Khairunnisa
          </span>{' '}
          Isma Hanifah
        </h1>

        <p 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="text-lg md:text-xl text-darkRed dark:text-offWhite mb-8 max-w-2xl mx-auto"
        >
          "Web Developer passionate about building responsive, user-focused web applications with clean and efficient code."
        </p>
        
        <div 
          data-aos="zoom-in" 
          data-aos-delay="400"
        >
          <a 
            href="#projects"
            className="inline-block bg-darkRed text-offWhite px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
