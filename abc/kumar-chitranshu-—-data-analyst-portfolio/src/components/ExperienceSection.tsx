import React from 'react';
import { experienceData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-5 sm:mb-6">
          Experience
        </h2>

        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="space-y-2.5">
              {/* Header row with cyan node indicator, company — role, and dates */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-3">
                  {/* Cyan Glowing Timeline Marker */}
                  <div className="relative flex items-center justify-center shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    <span>{exp.company}</span>
                    <span className="text-slate-400 font-normal mx-2">—</span>
                    <span className="font-semibold text-slate-100">{exp.role}</span>
                  </h3>
                </div>

                <span className="text-xs sm:text-sm text-slate-400 pl-5.5 sm:pl-0 font-normal">
                  {exp.period}
                </span>
              </div>

              {/* Indented Bullet Points */}
              <ul className="pl-6 sm:pl-7 space-y-1.5 text-slate-300 text-xs sm:text-sm leading-relaxed list-disc marker:text-slate-400">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="pl-1">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

