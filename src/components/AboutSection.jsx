import React, { useEffect, useState, useRef } from 'react';
import AboutWaveCanvas from './AboutWaveCanvas';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  function StatCounter({ target, suffix = '', label }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      let start = 0;
      const duration = 1600;
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(ease * target));

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(updateCount);
    }, [isVisible, target]);

    return (
      <div className="bg-[#090f1c]/90 hover:bg-[#0d1628] border border-slate-800/80 hover:border-cyan-500/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center transition-all duration-200 flex flex-col justify-center items-center shadow-lg relative overflow-hidden group">
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-2xl sm:text-3xl md:text-[2.2rem] font-bold text-white tracking-tight font-headline">
            {count}
          </span>
          {suffix && (
            <span className="text-xl sm:text-2xl font-bold text-[#00e5ff]">
              {suffix}
            </span>
          )}
        </div>
        <p className="text-[10px] sm:text-[11px] font-semibold text-slate-400 tracking-wider uppercase mt-1 font-mono">
          {label}
        </p>
      </div>
    );
  }

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-24 sm:py-28 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/[0.06] overflow-hidden"
    >
      {/* 3D Undulating Perspective Wireframe Canvas from abc project */}
      <AboutWaveCanvas />

      {/* Ambient background glow backdrop */}
      <div 
        className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 bg-[#00e5ff]/5 rounded-full blur-3xl pointer-events-none z-0" 
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Editorial Profile */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]"></span>
            <span className="font-mono text-xs text-[#00e5ff] uppercase tracking-widest">
              01 // Profile
            </span>
          </div>

          <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-[#D9E2FF] tracking-tight leading-tight">
            Transforming complex data <br className="hidden sm:inline" />
            <span className="text-[#8892B0]">into strategic certainty.</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#C5C6CD] font-normal leading-relaxed text-justify sm:text-left">
            Hands-on data analyst experienced in Python, SQL, Power BI, Excel and PostgreSQL, focused on data cleaning, EDA, KPI analysis and dashboards, who builds end-to-end analytics projects that turn raw data into decisions.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-6 text-[#8892B0] font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00e5ff] text-sm">verified</span>
              <span>Data-Driven Decision Making</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#64FFDA] text-sm">model_training</span>
              <span>Predictive Intelligence</span>
            </div>
          </div>
        </div>

        {/* Right Column: 2x2 Stats Grid with Cyan Ambient Glow Backdrop from abc project */}
        <div className="lg:col-span-5 relative">
          {/* Soft Ambient Cyan Glow Backdrop */}
          <div
            className="absolute -bottom-6 -right-4 w-52 h-44 bg-[#00e5ff]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 gap-3 sm:gap-3.5 relative z-10">
            <StatCounter 
              target={6} 
              suffix="" 
              label="End-to-End Projects" 
            />
            <StatCounter 
              target={25} 
              suffix="+" 
              label="Certifications" 
            />
            <StatCounter 
              target={120} 
              suffix="-hr" 
              label="ML Internship" 
            />
            <StatCounter 
              target={5} 
              suffix="" 
              label="Core Data Tools" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}

