import React, { useState } from 'react';
import { FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi'; 
import { projectData } from '../data/projects';
import SectionHeader from './SectionHeader';
import { Link } from 'react-router-dom'; 

const ProjectCard = ({ id, title, description, imageUrl, liveDemoUrl, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 text-left h-full" // h-full agar tinggi kartu seragam
  >
    <img src={imageUrl} alt={`Tampilan Proyek ${title}`} className="w-full h-48 object-cover"/>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold tracking-wide mb-2 text-darkRed dark:text-red-400">
        {title}
      </h3>
      <p className="text-darkBlue dark:text-offWhite flex-grow leading-relaxed">
        {description}
      </p>
      <div className="mt-6 flex justify-between items-center">

        {liveDemoUrl !== '#' ? (
          <a 
            href={liveDemoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-darkRed dark:hover:text-red-400 transition-colors"
          >
            Live Demo <FiExternalLink />
          </a>
        ) : (
          <span className="text-gray-400 cursor-not-allowed inline-flex items-center gap-2 font-semibold">
            Live Demo <FiExternalLink />
          </span>
        )}
        
        <Link 
          to={`/project/${id}`} 
          className="px-4 py-2 rounded-md text-sm font-semibold transition-colors
                     bg-darkRed text-offWhite hover:bg-red-500 
                     dark:bg-darkRed dark:hover:bg-red-500"
        >
          Details →
        </Link>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const handleLoadMore = () => {
    setVisibleProjects((prevValue) => prevValue + 3);
  };
  const handleShowLess = () => {
    setVisibleProjects(3);
  };

  return (
    <section id="projects" className="py-20 scroll-mt-28">
      <div className="container mx-auto px-6">
        <SectionHeader title="My Projects" />
        
        {/* Grid Project */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectData.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>

        <div className="text-center">
          {visibleProjects < projectData.length ? (
            <button 
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 bg-darkBlue dark:bg-slate-800 text-offWhite px-8 py-3 rounded-full font-bold shadow-lg hover:bg-darkRed dark:hover:bg-red-500 transition-all transform hover:scale-105"
            >
              View More Projects <FiChevronDown />
            </button>
          ) : (
            projectData.length > 3 && (
              <button 
                onClick={handleShowLess}
                className="inline-flex items-center gap-2 bg-gray-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-700 transition-all transform hover:scale-105"
              >
                Show Less <FiChevronUp />
              </button>
            )
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;