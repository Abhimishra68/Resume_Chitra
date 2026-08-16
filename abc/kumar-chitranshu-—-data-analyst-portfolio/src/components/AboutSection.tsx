import React from 'react';
import { personalInfo, stats } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: About Narrative */}
          <div className="lg:col-span-7 space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              About
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              {personalInfo.about}
            </p>
          </div>

          {/* Right Column: 2x2 Stats Grid with Cyan Ambient Glow */}
          <div className="lg:col-span-5 relative">
            {/* Soft Ambient Cyan Glow Backdrop */}
            <div
              className="absolute -bottom-6 -right-4 w-52 h-44 bg-[#00e5ff]/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="grid grid-cols-2 gap-3 sm:gap-3.5 relative z-10">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#090f1c]/90 hover:bg-[#0d1628] border border-slate-800/80 hover:border-cyan-500/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center transition-all duration-200 flex flex-col justify-center items-center shadow-lg"
                >
                  <div className="text-2xl sm:text-3xl md:text-[2.2rem] font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 tracking-wider uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
