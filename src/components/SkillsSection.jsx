import React from 'react';

export default function SkillsSection() {
  const skillGroups = [
    {
      category: "Languages",
      icon: "code",
      colSpan: "lg:col-span-4",
      skills: ["Python", "SQL", "C++", "C"]
    },
    {
      category: "Analytics",
      icon: "insights",
      colSpan: "lg:col-span-8",
      skills: [
        "Data Cleaning", 
        "Data Wrangling", 
        "EDA", 
        "Statistical Analysis", 
        "KPI Analysis", 
        "Data Visualization", 
        "Dashboard Development"
      ]
    },
    {
      category: "BI & Visualization",
      icon: "monitoring",
      colSpan: "lg:col-span-6",
      skills: ["Power BI", "Excel", "Tableau", "Google Data Studio"]
    },
    {
      category: "Libraries",
      icon: "data_object",
      colSpan: "lg:col-span-6",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"]
    },
    {
      category: "Databases",
      icon: "database",
      colSpan: "lg:col-span-5",
      skills: ["MySQL", "PostgreSQL"]
    },
    {
      category: "Tools & AI",
      icon: "smart_toy",
      colSpan: "lg:col-span-7",
      skills: [
        "Jupyter Notebook", 
        "VS Code", 
        "MySQL Workbench", 
        "Git/GitHub", 
        "AI-Assisted Analytics", 
        "Prompt Engineering"
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="relative py-28 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/[0.06]"
    >
      <div className="space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></span>
              <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest">
                02 // Technical Arsenal
              </span>
            </div>
            <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-[#D9E2FF] tracking-tight">
              Skills & Methodologies
            </h2>
          </div>
          <p className="font-mono text-xs text-[#8892B0] uppercase tracking-wider max-w-xs md:text-right">
            Curated toolkit for end-to-end data pipelines & machine learning workflows.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {skillGroups.map((group, idx) => (
            <div
              key={group.category}
              className={`${group.colSpan} glass-panel p-7 rounded-2xl flex flex-col justify-between group relative overflow-hidden border border-[#00F0FF]/20`}
            >
              {/* Subtle background glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00F0FF]/[0.03] rounded-full blur-2xl group-hover:bg-[#00F0FF]/[0.08] transition-colors pointer-events-none"></div>

              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#00F0FF] text-xl">
                      {group.icon}
                    </span>
                    <h3 className="font-headline font-semibold text-lg text-white tracking-wide">
                      {group.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-[#8892B0]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="glass-pill px-3.5 py-1.5 rounded-lg font-mono text-xs text-[#CCD6F6] cursor-default select-none transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
