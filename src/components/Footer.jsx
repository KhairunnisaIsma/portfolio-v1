import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-offWhite dark:bg-[#020617] py-10 border-t border-gray-200 dark:border-slate-800">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold mb-2 text-darkBlue dark:text-offWhite">
          Get In Touch
        </h2>
        
        <div className="w-24 h-1 bg-darkRed mx-auto mb-6"></div>
        
        <p className="text-darkBlue dark:text-offWhite mb-6">
          I am always open to discussions, collaborations, or new opportunities.
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/KhairunnisaIsma" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-3xl hover:text-darkRed transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/khairunnisa-isma-h" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-3xl hover:text-darkRed transition-colors">
            <FaLinkedin />
          </a>
          <a 
            href="mailto:hai.khairunnisaisma@gmail.com?subject=Collaboration%20Opportunity&body=Hi%20Khairunnisa,"
            aria-label="Email" 
            className="text-3xl hover:text-darkRed transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
        
        <p className="text-darkRed dark:text-red-400 text-sm">
          © {new Date().getFullYear()} Khairunnisa Isma Hanifah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;