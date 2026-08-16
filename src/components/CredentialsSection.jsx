import React from 'react';

export default function CredentialsSection() {
  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      code: "GDA-8921",
      icon: "verified"
    },
    {
      title: "Retrieving, Processing and Visualizing Data with Python — Capstone",
      issuer: "University of Michigan",
      code: "UMICH-PY-CAP",
      icon: "school"
    },
    {
      title: "Using Databases with Python",
      issuer: "University of Michigan",
      code: "UMICH-SQL-PY",
      icon: "database"
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "NPTEL",
      code: "NPTEL-ML-2024",
      icon: "psychology"
    }
  ];

  const education = [
    {
      institution: "Chandigarh University",
      degree: "B.E., Computer Science & Engineering",
      period: "2022–2026",
      isPrimary: true,
      focus: "Specialization in Data Science, Algorithms & Distributed Computing"
    },
    {
      institution: "Jeewan Public School",
      degree: "Senior Secondary, Science (PCM)",
      period: "2021",
      isPrimary: false,
      focus: null
    },
    {
      institution: "Jeewan Public School",
      degree: "Secondary School Certificate",
      period: "2019",
      isPrimary: false,
      focus: null
    }
  ];

  return (
    <section 
      id="credentials" 
      className="relative py-28 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/[0.06]"
    >
      <div className="space-y-12">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></span>
            <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest">
              05 // Qualifications
            </span>
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-[#D9E2FF] tracking-tight">
            Credentials & Academics
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-mono text-xs text-[#8892B0] uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00F0FF] text-sm">workspace_premium</span>
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-3.5">
              {certifications.map((cert) => (
                <div 
                  key={cert.title}
                  className="glass-panel p-5 rounded-xl flex items-start gap-4 group hover:border-[#00F0FF]/40 transition-all border border-[#00F0FF]/15"
                >
                  <div className="p-2.5 rounded-lg bg-[#101B33] border border-white/10 text-[#00F0FF] mt-0.5 group-hover:bg-[#00F0FF]/10 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      {cert.icon}
                    </span>
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <h4 className="font-headline font-semibold text-sm sm:text-base text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
                      {cert.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs font-mono text-[#8892B0]">
                      <span className="font-body">{cert.issuer}</span>
                      <span className="text-[10px] text-[#8892B0] font-mono">{cert.code}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-mono text-xs text-[#8892B0] uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00F0FF] text-sm">account_balance</span>
              <span>Academic Foundation</span>
            </h3>

            <div className="space-y-4">
              {education.map((edu) => (
                <div 
                  key={edu.institution + edu.period}
                  className={`glass-panel p-6 rounded-xl transition-all ${
                    edu.isPrimary 
                      ? 'border-[#00F0FF]/40 bg-[#0F1B33]/80 shadow-[0_0_25px_rgba(0,240,255,0.1)]' 
                      : 'border-white/[0.06] opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className={`font-headline font-bold ${
                        edu.isPrimary ? 'text-lg sm:text-xl text-[#00F0FF]' : 'text-base text-white'
                      }`}>
                        {edu.institution}
                      </h4>
                      <p className="font-body text-sm text-[#CCD6F6] mt-0.5">
                        {edu.degree}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#8892B0] px-2.5 py-1 rounded bg-[#101B33] border border-white/5 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  {edu.focus && (
                    <p className="font-mono text-xs text-[#8892B0] pt-2 border-t border-white/[0.06] mt-3">
                      {edu.focus}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
