import React from 'react';

export default function HeroSection({ onResumeClick, onContactClick }) {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 max-w-7xl mx-auto px-6 md:px-12 z-10"
    >
      <style>{`
        @keyframes float-card-1 {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes float-card-2 {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(12px) rotate(-1deg); }
        }
        @keyframes radar-sweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-float-1 {
          animation: float-card-1 6s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-card-2 7s ease-in-out infinite;
        }
        .animate-sweep {
          animation: radar-sweep 8s linear infinite;
        }
      `}</style>

      {/* Decorative ambient background spotlight */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Column: Headline and Pitch (Cols 1-7) */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Availability / Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#101B33]/80 border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
            </span>
            <span className="font-mono text-[11px] text-[#64FFDA] uppercase tracking-widest font-medium">
              Elite Global Specialist · Data Analyst
            </span>
          </div>

          {/* Main Display Headline in Literata Serif */}
          <div className="space-y-3">
            <h1 className="font-headline font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#D9E2FF] leading-[1.05]">
              KUMAR <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9E2FF] via-[#CCD6F6] to-[#00F0FF]">
                CHITRANSHU
              </span>
            </h1>

            {/* Signature Monospace Discipline Label */}
            <div className="flex items-center gap-2 pt-2">
              <span className="font-mono text-sm sm:text-base md:text-lg text-[#00F0FF] font-medium tracking-wide">
                Data Analyst
              </span>
              <span className="text-[#8892B0] font-mono">—</span>
              <span className="font-mono text-xs sm:text-sm md:text-base text-[#8892B0] tracking-wide">
                Python · SQL · Power BI · PostgreSQL
              </span>
            </div>
          </div>

          {/* One-line Pitch in Hanken Grotesk */}
          <p className="font-body text-base sm:text-lg md:text-xl text-[#C5C6CD] font-normal max-w-2xl leading-relaxed">
            Turning raw data into clean, actionable business insight through EDA, KPI analysis and dashboards.
          </p>

          {/* Action CTAs and Social Row */}
          <div className="flex flex-wrap items-center gap-5 pt-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-[#00F0FF] text-[#0A192F] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 active:scale-95"
            >
              View Projects
            </a>

            <button
              onClick={onResumeClick}
              className="px-7 py-3.5 rounded-full border border-[#00F0FF]/50 bg-[#00F0FF]/5 text-[#00F0FF] hover:bg-[#00F0FF]/15 hover:border-[#00F0FF] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95"
            >
              Download Résumé
            </button>

            {/* Social Quick Links */}
            <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-white/10">
              <a
                href="https://github.com/chitranshu07-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#101B33] border border-white/10 text-[#8892B0] hover:text-[#00F0FF] hover:border-[#00F0FF]/40 transition-all"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#101B33] border border-white/10 text-[#8892B0] hover:text-[#00F0FF] hover:border-[#00F0FF]/40 transition-all"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <button
                onClick={onContactClick}
                className="p-2.5 rounded-full bg-[#101B33] border border-white/10 text-[#8892B0] hover:text-[#00F0FF] hover:border-[#00F0FF]/40 transition-all"
                aria-label="Send Email"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 3.847v-8.314l4.623 4.467zm-3.832-4.929h18.418l-9.209 7.728-9.209-7.728zm9.209 9.385l8.761-7.351v8.895h-17.522v-8.895l8.761 7.351zm5.377-1.456l4.623-3.879v8.314l-4.623-4.435z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Data Lab Graphic (Cols 8-12) */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[350px] lg:min-h-[480px]">
          
          {/* Subtle Graphic Glow Backdrop */}
          <div className="absolute w-72 h-72 bg-[#00F0FF]/[0.08] rounded-full blur-[80px] pointer-events-none z-0"></div>

          {/* Central Rotating HUD / Cyber Radar Rings */}
          <svg viewBox="0 0 320 320" className="w-72 h-72 sm:w-80 sm:h-80 opacity-70 z-0">
            {/* Outer Dotted Spin Ring */}
            <circle 
              cx="160" 
              cy="160" 
              r="140" 
              stroke="rgba(0, 240, 255, 0.22)" 
              strokeWidth="1.2" 
              strokeDasharray="4,8"
              fill="none"
              className="origin-center animate-[spin_60s_linear_infinite]"
            />
            {/* Middle Segmented Counter-Spin Ring */}
            <circle 
              cx="160" 
              cy="160" 
              r="115" 
              stroke="rgba(0, 240, 255, 0.16)" 
              strokeWidth="2" 
              strokeDasharray="140,24,60,18"
              fill="none"
              className="origin-center animate-[spin_35s_linear_infinite_reverse]"
            />
            {/* Inner Ticked Spin Ring */}
            <circle 
              cx="160" 
              cy="160" 
              r="85" 
              stroke="rgba(100, 255, 218, 0.2)" 
              strokeWidth="1.5" 
              strokeDasharray="8,16"
              fill="none"
              className="origin-center animate-[spin_20s_linear_infinite]"
            />
            {/* Radar Scanning Line */}
            <line 
              x1="160" 
              y1="160" 
              x2="160" 
              y2="20" 
              stroke="rgba(0, 240, 255, 0.4)" 
              strokeWidth="1.5"
              className="origin-center animate-sweep"
            />
            {/* Core Target Dot */}
            <circle cx="160" cy="160" r="6" fill="#00F0FF" className="animate-ping opacity-30" />
            <circle cx="160" cy="160" r="3" fill="#00F0FF" />
          </svg>

          {/* Floating Widget 1: Ingestion Data Trend Card */}
          <div className="absolute top-0 left-2 sm:left-4 w-52 glass-panel p-3.5 rounded-xl border border-white/10 shadow-xl backdrop-blur-md animate-float-1 z-10 select-none">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#8892B0]">
              <span>INGESTION_STREAM</span>
              <span className="text-[#00F0FF]">LIVE</span>
            </div>
            <div className="mt-1.5 flex items-baseline gap-1">
              <span className="text-lg font-mono font-bold text-white tracking-tight">84.9</span>
              <span className="text-[10px] font-mono text-[#8892B0]">MB/S</span>
            </div>
            {/* Micro Area Chart */}
            <svg viewBox="0 0 100 30" className="w-full h-8 mt-2 overflow-visible">
              <defs>
                <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path d="M 0 25 Q 15 5, 35 22 T 70 8 T 100 3" fill="none" stroke="#00F0FF" strokeWidth="1.5" />
              <path d="M 0 25 Q 15 5, 35 22 T 70 8 T 100 3 L 100 30 L 0 30 Z" fill="url(#chart-glow)" />
            </svg>
          </div>

          {/* Floating Widget 2: Scan Status target */}
          <div className="absolute top-1/3 -right-2 sm:-right-4 w-44 glass-panel p-3 rounded-xl border border-white/10 shadow-xl backdrop-blur-md animate-float-2 z-10 select-none">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64FFDA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#64FFDA]"></span>
              </span>
              <span className="text-[9px] font-mono text-[#8892B0] uppercase">ANOMALY_SCANNER</span>
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-white tracking-wide">STATUS // SECURE</span>
              <span className="text-[10px] font-mono text-[#64FFDA]">OK</span>
            </div>
            <div className="w-full bg-white/[0.06] h-[2px] rounded-full mt-2 overflow-hidden">
              <div className="bg-[#64FFDA] h-full w-full rounded-full origin-left animate-[pulse_1.5s_ease-in-out_infinite]"></div>
            </div>
          </div>

          {/* Floating Widget 3: Metrics & KPI vertical bars */}
          <div className="absolute -bottom-4 left-6 sm:left-12 w-48 glass-panel p-3 rounded-xl border border-white/10 shadow-xl backdrop-blur-md animate-float-2 z-10 select-none">
            <div className="text-[9px] font-mono text-[#8892B0] uppercase tracking-wide">
              ACCURACY_DISTRIBUTION
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-base font-mono font-bold text-white">99.84%</span>
              <span className="text-[9px] font-mono text-[#64FFDA]">▲ 0.02%</span>
            </div>
            {/* Dynamic CSS Visual bars */}
            <div className="flex items-end gap-2 h-7 mt-2 justify-between">
              <div className="w-2.5 bg-[#00F0FF]/30 rounded-t h-[40%]"></div>
              <div className="w-2.5 bg-[#00F0FF]/60 rounded-t h-[65%]"></div>
              <div className="w-2.5 bg-[#64FFDA] rounded-t h-[88%]"></div>
              <div className="w-2.5 bg-[#00F0FF]/80 rounded-t h-[55%]"></div>
              <div className="w-2.5 bg-[#64FFDA]/70 rounded-t h-[75%]"></div>
            </div>
          </div>

        </div>

      </div>

      {/* Floating Scroll Cue */}
      <div className="absolute bottom-8 right-6 md:right-12 hidden sm:flex items-center gap-3 text-[#8892B0] font-mono text-xs">
        <span className="uppercase tracking-widest">Scroll to explore</span>
        <div className="w-8 h-[1px] bg-white/20"></div>
      </div>
    </section>
  );
}
