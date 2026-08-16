import React from 'react';
import { HeroCanvas } from './HeroCanvas';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onViewProjects: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects, onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[440px] sm:min-h-[480px] lg:min-h-[500px] flex items-center justify-center overflow-hidden pt-10 pb-12 px-4 sm:px-6"
    >
      {/* 3D Undulating Perspective Wireframe Grid */}
      <HeroCanvas />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 sm:space-y-5">
        {/* Main Name Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-[3.25rem] font-extrabold text-white tracking-[0.08em] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          {personalInfo.name}
        </h1>

        {/* Roles & Technologies */}
        <p className="text-sm sm:text-base md:text-lg font-medium text-slate-100 tracking-wide flex flex-wrap items-center justify-center gap-1 sm:gap-1.5">
          <span className="font-semibold text-white">Data Analyst</span>
          <span className="text-slate-400 mx-0.5">—</span>
          <span className="font-medium text-slate-200">Python</span>
          <span className="text-slate-500 font-bold">·</span>
          <span className="font-medium text-slate-200">SQL</span>
          <span className="text-slate-500 font-bold">·</span>
          <span className="font-medium text-slate-200">Power BI</span>
          <span className="text-slate-500 font-bold">·</span>
          <span className="font-medium text-slate-200">PostgreSQL</span>
        </p>

        {/* Tagline */}
        <p className="text-xs sm:text-sm md:text-[0.95rem] text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* View Projects: Solid Cyan Pill */}
          <button
            onClick={onViewProjects}
            className="bg-[#00e5ff] hover:bg-[#25e8ff] active:bg-[#00c9e0] text-black font-semibold px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm tracking-tight transition-all duration-150 shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_24px_rgba(0,229,255,0.65)] cursor-pointer"
          >
            View Projects
          </button>

          {/* Download Résumé: Outlined Cyan Pill */}
          <button
            onClick={onOpenResume}
            className="bg-transparent hover:bg-cyan-950/20 active:bg-cyan-950/40 text-[#00e5ff] hover:text-[#52eeff] border border-[#00e5ff]/70 hover:border-[#00e5ff] font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm tracking-tight transition-all duration-150 cursor-pointer backdrop-blur-xs shadow-[0_0_8px_rgba(0,229,255,0.15)]"
          >
            Download Résumé
          </button>
        </div>
      </div>
    </section>
  );
};
