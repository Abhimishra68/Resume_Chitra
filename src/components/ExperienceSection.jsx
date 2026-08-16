import React from 'react';

export default function ExperienceSection({ onResumeClick }) {
  const achievements = [
    "Applied Python, Pandas, NumPy and Scikit-learn for preprocessing, analysis and visualization.",
    "Built a full data-analysis project spanning cleaning, EDA, feature engineering and insight generation.",
    "Applied ML workflows for dataset preparation, model development and evaluation.",
    "Documented findings into clear, project-level recommendations."
  ];

  return (
    <section 
      id="experience" 
      className="relative py-28 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/[0.06]"
    >
      <div className="space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></span>
            <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest">
              03 // Experience
            </span>
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-[#D9E2FF] tracking-tight">
            Professional Trajectory
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-[#00F0FF]/30 space-y-12">
          
          {/* Timeline Node Icon */}
          <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-[#07122A] border-2 border-[#00F0FF] flex items-center justify-center shadow-[0_0_12px_#00F0FF]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping"></div>
          </div>

          {/* Timeline Card */}
          <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-2xl relative overflow-hidden group border border-[#00F0FF]/20">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.06]">
              
              <div>
                <h3 className="font-headline font-bold text-xl sm:text-2xl text-white tracking-tight">
                  Machine Learning with Python — Internship Training
                </h3>
                <p className="font-mono text-sm text-[#00F0FF] mt-1">
                  Prernagati Technology
                </p>
              </div>

              {/* Date & Duration Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-[#101B33] border border-white/10 font-mono text-xs text-[#8892B0]">
                  May–June 2024
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 font-mono text-xs text-[#00F0FF] font-medium">
                  120 Hours Intensive
                </span>
                <button
                  onClick={onResumeClick}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#101B33] hover:bg-white/10 border border-white/10 font-mono text-xs text-[#D9E2FF] transition-colors"
                >
                  <span className="material-symbols-outlined text-sm text-[#64FFDA]">military_tech</span>
                  <span>Certificate Verified</span>
                </button>
              </div>

            </div>

            {/* Achievements Bullet Points */}
            <ul className="space-y-4 font-body text-sm sm:text-base text-[#C5C6CD]">
              {achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <span className="font-mono text-[#00F0FF] text-xs mt-1 select-none">
                    [0{idx + 1}]
                  </span>
                  <span className="leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tech stack badge footer */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-[#8892B0] mr-2 uppercase">Core Tech:</span>
              {["Python", "Pandas", "NumPy", "Scikit-learn", "EDA", "Model Evaluation"].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded bg-[#101B33] border border-white/5 font-mono text-[11px] text-[#CCD6F6]">
                  {tech}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
