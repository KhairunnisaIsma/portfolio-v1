import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../data/projects';
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheckCircle } from 'react-icons/fi';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className="h-screen flex items-center justify-center text-darkRed">Project not found!</div>;
  }

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 font-body">
      <div className="container mx-auto max-w-6xl">
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-darkBlue dark:text-offWhite mb-8 hover:text-darkRed dark:hover:text-red-400 transition-colors font-bold"
        >
          <FiArrowLeft /> Back to Projects
        </Link>

        <div data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-bold text-darkRed dark:text-red-400 font-heading mb-4">
            {project.title}
          </h1>
          <div className="h-1 w-20 bg-darkBlue dark:bg-offWhite mb-12"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-8" data-aos="fade-right">
            
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href={project.liveDemoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-darkRed text-offWhite px-6 py-4 rounded-xl font-bold text-center hover:bg-red-700 transition-all shadow-lg flex justify-center items-center gap-2"
              >
                <FiExternalLink /> Live Demo
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-darkBlue text-offWhite px-6 py-4 rounded-xl font-bold text-center hover:bg-blue-900 transition-all shadow-lg flex justify-center items-center gap-2"
              >
                <FiGithub /> Source Code
              </a>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-darkBlue dark:text-offWhite font-heading mb-4">Overview</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </div>

          </div>

          <div className="lg:col-span-5 space-y-10" data-aos="fade-left">
            
            {/* Technologies Used */}
            <div>
              <h3 className="text-2xl font-bold text-darkBlue dark:text-offWhite font-heading mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 rounded-lg text-sm font-bold shadow-sm
                               bg-gray-100 text-darkBlue 
                               dark:bg-darkRed dark:text-offWhite"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-offWhite dark:bg-slate-900/50 p-8 rounded-2xl border-l-4 border-darkRed">
              <h3 className="text-2xl font-bold text-darkBlue dark:text-offWhite font-heading mb-6">Key Features</h3>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <FiCheckCircle className="text-darkRed mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;