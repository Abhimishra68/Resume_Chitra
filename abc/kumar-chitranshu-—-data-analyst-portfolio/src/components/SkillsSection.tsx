import React from 'react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-1 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Skills
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-normal">
            Comprehente bento grid layout:
          </p>
        </div>

        {/* Bento Grid: 2 rows of 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#090f1c]/90 border border-slate-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-4.5 flex flex-col justify-start"
            >
              <h3 className="text-sm font-semibold text-white mb-3 tracking-tight">
                {cat.title}
              </h3>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] sm:text-xs px-2.5 py-0.5 sm:py-1 rounded-md bg-[#0e1627] border border-slate-700/60 text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
