import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { allSkillsData } from '../data/allSkills'; 
import { FiCode, FiUser, FiTool, FiMessageSquare, FiTarget, FiAward, FiRefreshCw, FiUsers, FiEye, FiServer, FiCloud, FiEdit, FiSettings } from 'react-icons/fi';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical'); 
  
  const activeTabClass = "bg-darkBlue dark:bg-darkRed text-offWhite shadow-md"; 
  const inactiveTabClass = "bg-offWhite dark:bg-slate-900 text-darkBlue dark:text-offWhite hover:bg-gray-100 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-700";
  const tabIconClass = "mr-2 text-xl";

  const IconMap = {
    Code: FiCode, Server: FiServer, Cloud: FiCloud,
    MessageSquare: FiMessageSquare, Target: FiTarget, Award: FiAward, RefreshCw: FiRefreshCw, Users: FiUsers, Eye: FiEye,
    Tool: FiTool, Edit: FiEdit, Settings: FiSettings
  };

  const getIconComponent = (iconName) => {
    const IconComponent = IconMap[iconName];
    return IconComponent ? <IconComponent size={24} className="text-darkBlue dark:text-offWhite" /> : <FiCode size={24} className="text-darkBlue dark:text-offWhite" />;
  };

  const renderSkillsContent = () => {
    const data = allSkillsData[activeTab];

    if (!data) return <p className="text-center text-gray-500 dark:text-gray-400 font-body">No skills to display.</p>;

    if (activeTab === 'softSkills') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div 
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 font-body"
            >
              <div className="mb-4">{getIconComponent(item.icon)}</div>
              <h4 className="text-xl font-bold mb-2 text-darkBlue dark:text-offWhite font-heading">{item.categoryTitle}</h4>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div 
            key={item.id} 
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center mb-4 text-darkBlue dark:text-offWhite">
              {getIconComponent(item.icon)}
              <h4 className="text-xl font-bold ml-2 font-heading">{item.categoryTitle}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="bg-gray-100 dark:bg-darkRed text-darkBlue dark:text-offWhite px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="pb-20 scroll-mt-28">
      <div className="container mx-auto px-6 text-center">
        <SectionHeader title="My Skills" />

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button onClick={() => setActiveTab('technical')} className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${activeTab === 'technical' ? activeTabClass : inactiveTabClass}`}>
            <FiCode className={tabIconClass} /> Technical
          </button>
          <button onClick={() => setActiveTab('softSkills')} className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${activeTab === 'softSkills' ? activeTabClass : inactiveTabClass}`}>
            <FiUser className={tabIconClass} /> Soft Skills
          </button>
          <button onClick={() => setActiveTab('tools')} className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${activeTab === 'tools' ? activeTabClass : inactiveTabClass}`}>
            <FiTool className={tabIconClass} /> Tools
          </button>
        </div>

        {renderSkillsContent()}
      </div>
    </section>
  );
};

export default Skills;