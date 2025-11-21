import React from 'react';

const SectionHeader = ({ title }) => {
  const lineColor = "bg-darkRed dark:bg-red-500";
  const accentColor = "text-darkBlue dark:text-blue-400";

  return (
    <div className="flex items-center gap-4 md:gap-8 mb-12">
      <div className={`flex-grow h-px ${lineColor}`}></div>
      <h2 className="flex items-center gap-3 shrink-0">
        <span className={`${accentColor} text-2xl font-bold`}>&lt;</span>
        {/* HAPUS: font-heading */}
        <span className="font-bold text-2xl md:text-3xl text-darkBlue dark:text-offWhite">
          {title}
        </span>
        <span className={`${accentColor} text-2xl font-bold`}>&gt;</span>
      </h2>
      <div className={`flex-grow h-px ${lineColor}`}></div>
    </div>
  );
};
export default SectionHeader;