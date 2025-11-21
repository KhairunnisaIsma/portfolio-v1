import React, { useState, useEffect } from 'react';
// Impor Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'; 
import ProjectDetail from './components/ProjectDetail'; 

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [theme, setTheme] = useState(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const lightBg = 'bg-offWhite';
  const darkBg = 'bg-[#020617]';
  const sectionBg = theme === 'dark' ? darkBg : lightBg;

  return (
    <Router>
      <div className={`${sectionBg} text-darkBlue dark:text-offWhite min-h-screen font-sans transition-colors duration-300 overflow-x-hidden`}>
        
        <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;