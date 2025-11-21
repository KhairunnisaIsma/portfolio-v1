import React from 'react';
import { FaCode, FaDatabase, FaGitAlt, FaGlobe } from 'react-icons/fa';
import { FiLayout, FiFileText, FiSend } from 'react-icons/fi'; 
import profileImage from '../assets/images/profic-cartoon.png'; 
import SectionHeader from './SectionHeader';

const OrbitingIcon = ({ icon, positionClasses, animationDelay }) => (
  <div 
    className={`absolute ${positionClasses} bg-offWhite dark:bg-slate-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-slate-700 animate-soft-bounce`}
    style={{ animationDelay }}
  >
    {icon}
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-6">
        <SectionHeader title="About Me" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <div 
            data-aos="fade-right"
            className="relative flex justify-center items-center h-80 w-80 mx-auto"
          >
            <div className="absolute w-full h-full rounded-full border-2 border-dashed border-gray-300 dark:border-slate-700 animate-spin-slow"></div>
            <div className="relative w-[75%] h-[75%]">
              <img 
                src={profileImage} 
                alt="Foto Profil Khairunnisa"
                className="rounded-full w-full h-full object-cover shadow-2xl bg-white"
              />
            </div>
            <OrbitingIcon icon={<FaCode size={20} />} positionClasses="-top-4 left-1/2 -translate-x-1/2 -translate-y-1/2" animationDelay="0s" />
            <OrbitingIcon icon={<FaGlobe size={20} />} positionClasses="top-1/4 -left-2" animationDelay="0.2s" />
            <OrbitingIcon icon={<FaGitAlt size={20} />} positionClasses="bottom-1/4 -left-2" animationDelay="0.4s" />
            <OrbitingIcon icon={<FaDatabase size={20} />} positionClasses="-bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2" animationDelay="0.6s" />
            <OrbitingIcon icon={<FiLayout size={20} />} positionClasses="bottom-1/4 -right-2" animationDelay="0.8s" />
          </div>

          <div 
            data-aos="fade-left"
            className="flex flex-col gap-6 text-center md:text-left"
          >
            <p className="text-xl md:text-2xl text-darkRed dark:text-offWhite leading-relaxed">
              I’m a self-taught Web Developer with experience improving user interfaces, fixing bugs, and developing features for real-world web applications.
            </p>
            <p className="text-xl md:text-2xl text-darkRed dark:text-offWhite leading-relaxed">
              I enjoy creating solutions that are functional, accessible, and visually consistent. Let's connect.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
              <a href="#contact" className="inline-flex items-center gap-2 bg-darkBlue text-offWhite px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
                <FiSend /> Get in touch
              </a>
              <a href="https://drive.google.com/file/d/1y1BpVP4SjXqBCb514fjDYlNls2V8nQy7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-darkRed text-offWhite px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
                <FiFileText /> CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;