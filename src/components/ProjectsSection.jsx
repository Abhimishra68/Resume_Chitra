import React, { useState } from 'react';

export default function ProjectsSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const projects = [
    {
      id: "t20-cricket",
      title: "T20 World Cup Cricket Analytics: Best Playing XI",
      tags: ["Python", "Web Scraping", "Power BI", "DAX"],
      synopsis: "Web-scraped live tournament data into analysis-ready datasets, defined batting/bowling/role-based player KPIs, and built an interactive Power BI dashboard with DAX measures to data-drive a Best Playing XI selection.",
      github: "https://github.com/chitranshu07-coder",
      accent: "#00F0FF",
      category: "Sports Analytics / KPI Modeling",
      details: [
        "Collected over 45 matches of ball-by-ball data using Python BeautifulSoup & Scrapy pipelines.",
        "Engineered custom DAX measures for Strike Rate in Death Overs (16-20), Boundary Frequency %, and Dot Ball Ratios.",
        "Built dynamic Power BI dashboard allowing coaches to simulate XI balance against pace vs spin matchups.",
        "Final model selected a balanced XI with a projected 24% higher win probability based on Monte Carlo match simulations."
      ],
      svgMock: (
        <svg viewBox="0 0 500 260" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="p1-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="500" height="260" fill="#070E1E" />
          {/* Header Bar */}
          <rect x="20" y="15" width="460" height="30" rx="4" fill="#0F1B33" />
          <circle cx="35" cy="30" r="4" fill="#ef4444" />
          <circle cx="48" cy="30" r="4" fill="#f59e0b" />
          <circle cx="61" cy="30" r="4" fill="#10b981" />
          <text x="80" y="34" fill="#8892B0" fontSize="10" fontFamily="monospace">ICC_T20_ANALYSIS_DASHBOARD.pbix</text>
          
          {/* KPI Cards */}
          <rect x="20" y="55" width="105" height="50" rx="6" fill="#0C162C" stroke="#00F0FF" strokeOpacity="0.3" className="transition-all duration-300 group-hover:stroke-opacity-80" />
          <text x="30" y="72" fill="#00F0FF" fontSize="9" fontFamily="monospace">AVG STRIKE RATE</text>
          <text x="30" y="93" fill="#ffffff" fontSize="16" fontFamily="sans-serif" fontWeight="bold">148.6</text>

          <rect x="135" y="55" width="115" height="50" rx="6" fill="#0C162C" stroke="rgba(255,255,255,0.1)" className="transition-all duration-300 group-hover:stroke-[#00F0FF]/40" />
          <text x="145" y="72" fill="#8892B0" fontSize="9" fontFamily="monospace">ECONOMY (DEATH)</text>
          <text x="145" y="93" fill="#ffffff" fontSize="16" fontFamily="sans-serif" fontWeight="bold">7.82 rpo</text>

          <rect x="260" y="55" width="105" height="50" rx="6" fill="#0C162C" stroke="rgba(255,255,255,0.1)" className="transition-all duration-300 group-hover:stroke-[#00F0FF]/40" />
          <text x="270" y="72" fill="#8892B0" fontSize="9" fontFamily="monospace">DOT BALL %</text>
          <text x="270" y="93" fill="#ffffff" fontSize="16" fontFamily="sans-serif" fontWeight="bold">42.1%</text>

          <rect x="375" y="55" width="105" height="50" rx="6" fill="#0C162C" stroke="#64FFDA" strokeOpacity="0.4" className="transition-all duration-300 group-hover:stroke-opacity-85" />
          <text x="385" y="72" fill="#64FFDA" fontSize="9" fontFamily="monospace">WIN PROB</text>
          <text x="385" y="93" fill="#ffffff" fontSize="16" fontFamily="sans-serif" fontWeight="bold">78.4%</text>

          {/* Chart View */}
          <rect x="20" y="115" width="280" height="130" rx="6" fill="#0A1326" />
          <path d="M 35 220 L 75 180 L 115 200 L 155 150 L 195 170 L 235 140 L 275 160" fill="none" stroke="#00F0FF" strokeWidth="2.5" className="chart-line-draw" />
          <path d="M 35 220 L 75 180 L 115 200 L 155 150 L 195 170 L 235 140 L 275 160 V 230 H 35 Z" fill="url(#p1-grad)" className="chart-fill-fade" />
          
          {/* Scatter Points on player matrix */}
          <rect x="310" y="115" width="170" height="130" rx="6" fill="#0A1326" />
          <circle cx="340" cy="150" r="5" fill="#00F0FF" className="scatter-dot-pulse scatter-dot-pulse-glow" style={{ transformOrigin: '340px 150px' }} />
          <circle cx="390" cy="140" r="7" fill="#64FFDA" className="scatter-dot-pulse scatter-dot-pulse-glow" style={{ transformOrigin: '390px 140px', transitionDelay: '60ms' }} />
          <circle cx="440" cy="170" r="4" fill="#00F0FF" className="scatter-dot-pulse scatter-dot-pulse-glow" style={{ transformOrigin: '440px 170px', transitionDelay: '120ms' }} />
          <circle cx="360" cy="200" r="6" fill="#f59e0b" className="scatter-dot-pulse" style={{ transformOrigin: '360px 200px', transitionDelay: '180ms' }} />
          <circle cx="420" cy="210" r="5" fill="#8892B0" className="scatter-dot-pulse" style={{ transformOrigin: '420px 210px', transitionDelay: '240ms' }} />
        </svg>
      )
    },
    {
      id: "customer-shopping",
      title: "Customer Shopping Behavior Analysis",
      tags: ["Python", "SQL", "Power BI"],
      synopsis: "Cleaned and modeled shopping data with Python/Pandas, used SQL to surface customer segments, loyalty patterns and purchase drivers, then built a Power BI dashboard tracking the resulting KPIs.",
      github: "https://github.com/chitranshu07-coder",
      accent: "#00F0FF",
      category: "Customer Analytics / RFM Segmentation",
      details: [
        "Engineered SQL queries to calculate RFM (Recency, Frequency, Monetary) metrics across 60k+ customer transactions.",
        "Applied K-Means clustering in Python to identify 4 high-value customer personas.",
        "Discovered that targeted retention strategies on the 'At-Risk Champions' group boosted retention by 18%.",
        "Exported curated datasets into interactive dashboards with automated weekly refresh schedules."
      ],
      svgMock: (
        <svg viewBox="0 0 500 260" className="w-full h-full object-cover">
          <rect width="500" height="260" fill="#070E1E" />
          {/* Header Bar */}
          <rect x="20" y="15" width="460" height="30" rx="4" fill="#0F1B33" />
          <text x="35" y="34" fill="#00F0FF" fontSize="10" fontFamily="monospace">RFM_SEGMENTATION_PIPELINE.sql</text>
          
          {/* Segment Blocks */}
          <rect x="20" y="55" width="220" height="90" rx="6" fill="#0C162C" stroke="rgba(0, 240, 255, 0.3)" className="transition-all duration-300 group-hover:stroke-opacity-80" />
          <text x="35" y="78" fill="#00F0FF" fontSize="11" fontFamily="monospace">VIP CHAMPIONS (28%)</text>
          <text x="35" y="98" fill="#ffffff" fontSize="18" fontFamily="sans-serif" fontWeight="bold">$482 Avg Order</text>
          <text x="35" y="125" fill="#8892B0" fontSize="10" fontFamily="sans-serif">High Frequency / Low Churn</text>

          <rect x="255" y="55" width="225" height="90" rx="6" fill="#0C162C" stroke="rgba(255, 255, 255, 0.1)" className="transition-all duration-300 group-hover:stroke-[#00F0FF]/40" />
          <text x="270" y="78" fill="#64FFDA" fontSize="11" fontFamily="monospace">LOYAL CUSTOMERS (34%)</text>
          <text x="270" y="98" fill="#ffffff" fontSize="18" fontFamily="sans-serif" fontWeight="bold">$215 Avg Order</text>
          <text x="270" y="125" fill="#8892B0" fontSize="10" fontFamily="sans-serif">Regular Repeat Purchases</text>

          {/* Bar Visuals */}
          <rect x="20" y="155" width="460" height="90" rx="6" fill="#0A1326" />
          <rect x="40" y="175" width="120" height="16" rx="3" fill="#00F0FF" opacity="0.9" className="bar-grow-x" style={{ transformOrigin: '40px 0px' }} />
          <rect x="40" y="198" width="80" height="16" rx="3" fill="#00F0FF" opacity="0.6" className="bar-grow-x" style={{ transformOrigin: '40px 0px', transitionDelay: '80ms' }} />
          <rect x="40" y="221" width="45" height="16" rx="3" fill="#00F0FF" opacity="0.3" className="bar-grow-x" style={{ transformOrigin: '40px 0px', transitionDelay: '160ms' }} />
          
          <rect x="240" y="175" width="190" height="16" rx="3" fill="#64FFDA" opacity="0.9" className="bar-grow-x" style={{ transformOrigin: '240px 0px' }} />
          <rect x="240" y="198" width="130" height="16" rx="3" fill="#64FFDA" opacity="0.6" className="bar-grow-x" style={{ transformOrigin: '240px 0px', transitionDelay: '80ms' }} />
          <rect x="240" y="221" width="90" height="16" rx="3" fill="#64FFDA" opacity="0.3" className="bar-grow-x" style={{ transformOrigin: '240px 0px', transitionDelay: '160ms' }} />
        </svg>
      )
    },
    {
      id: "meta-ads",
      title: "Meta Ad Performance Analysis",
      tags: ["SQL", "Python", "Excel", "Power BI"],
      synopsis: "Cleaned Meta advertising data with Python and Excel, used SQL to evaluate campaign KPIs and performance patterns, and consolidated everything into a stakeholder-ready Power BI dashboard.",
      github: "https://github.com/chitranshu07-coder",
      accent: "#818cf8",
      category: "Marketing Analytics / Paid Media",
      details: [
        "Extracted campaign performance metrics across Facebook and Instagram placements.",
        "Modeled Cost-Per-Acquisition (CPA), Return-on-Ad-Spend (ROAS), and Click-Through-Rate (CTR) across ad sets.",
        "Built automated anomaly detection alerting stakeholders to budget fatigue and creative decay.",
        "Reallocated 20% of underperforming ad spend towards top ROAS demographics, yielding an overall 2.8x ROAS lift."
      ],
      svgMock: (
        <svg viewBox="0 0 500 260" className="w-full h-full object-cover">
          <rect width="500" height="260" fill="#070E1E" />
          {/* Header Bar */}
          <rect x="20" y="15" width="460" height="30" rx="4" fill="#0F1B33" />
          <text x="35" y="34" fill="#818cf8" fontSize="10" fontFamily="monospace">META_CAMPAIGN_ROAS_INSIGHTS</text>
          
          {/* Funnel Flow */}
          <rect x="20" y="55" width="140" height="85" rx="6" fill="#0C162C" stroke="rgba(129, 140, 248, 0.3)" className="transition-all duration-300 origin-center group-hover:-translate-y-1" />
          <text x="30" y="75" fill="#818cf8" fontSize="9" fontFamily="monospace">IMPRESSIONS</text>
          <text x="30" y="96" fill="#ffffff" fontSize="18" fontFamily="sans-serif" fontWeight="bold">1.42M</text>
          <text x="30" y="122" fill="#10b981" fontSize="10" fontFamily="monospace">+14.2% MoM</text>

          <rect x="180" y="55" width="140" height="85" rx="6" fill="#0C162C" stroke="rgba(129, 140, 248, 0.3)" className="transition-all duration-300 origin-center group-hover:-translate-y-1" style={{ transitionDelay: '60ms' }} />
          <text x="190" y="75" fill="#818cf8" fontSize="9" fontFamily="monospace">CTR (LINK)</text>
          <text x="190" y="96" fill="#ffffff" fontSize="18" fontFamily="sans-serif" fontWeight="bold">3.85%</text>
          <text x="190" y="122" fill="#00F0FF" fontSize="10" fontFamily="monospace">Benchmark: 2.1%</text>

          <rect x="340" y="55" width="140" height="85" rx="6" fill="#0C162C" stroke="rgba(100, 255, 218, 0.4)" className="transition-all duration-300 origin-center group-hover:-translate-y-1" style={{ transitionDelay: '120ms' }} />
          <text x="350" y="75" fill="#64FFDA" fontSize="9" fontFamily="monospace">OVERALL ROAS</text>
          <text x="350" y="96" fill="#ffffff" fontSize="18" fontFamily="sans-serif" fontWeight="bold">3.48x</text>
          <text x="350" y="122" fill="#10b981" fontSize="10" fontFamily="monospace">+$42.5K Net</text>

          {/* Real-time bar lines */}
          <rect x="20" y="150" width="460" height="95" rx="6" fill="#0A1326" />
          <line x1="35" y1="180" x2="465" y2="180" stroke="rgba(255,255,255,0.05)" />
          <line x1="35" y1="210" x2="465" y2="210" stroke="rgba(255,255,255,0.05)" />
          
          <path d="M 40 220 Q 140 160 240 190 T 440 160" fill="none" stroke="#818cf8" strokeWidth="2.5" className="chart-line-draw" />
          <path d="M 40 230 Q 140 200 240 210 T 440 180" fill="none" stroke="#64FFDA" strokeWidth="2" strokeDasharray="4 4" className="chart-line-draw" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="projects" 
      className="relative py-28 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/[0.06]"
    >
      <style>{`
        /* Draw Line Chart Animation */
        .chart-line-draw {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          transition: stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .group:hover .chart-line-draw {
          stroke-dashoffset: 0;
        }
        
        /* Fade-in Area Fills */
        .chart-fill-fade {
          opacity: 0;
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .group:hover .chart-fill-fade {
          opacity: 0.25;
        }

        /* Bar Grow ScaleX */
        .bar-grow-x {
          transform: scaleX(0);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .group:hover .bar-grow-x {
          transform: scaleX(1);
        }

        /* Scatter Points Scale */
        .scatter-dot-pulse {
          transform: scale(1);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.3s ease;
        }
        .group:hover .scatter-dot-pulse {
          transform: scale(1.4);
        }
        .group:hover .scatter-dot-pulse-glow {
          filter: drop-shadow(0 0 4px #00F0FF);
        }
      `}</style>
      <div className="space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></span>
              <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest">
                04 // Centerpiece Projects
              </span>
            </div>
            <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-[#D9E2FF] tracking-tight">
              Featured Case Studies
            </h2>
          </div>
          <p className="font-mono text-xs text-[#8892B0] uppercase tracking-wider max-w-xs md:text-right">
            Outcome-led analytics architectures, predictive models & BI solutions.
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {projects.map((project) => (
            <article
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 border border-[#00F0FF]/20"
            >
              <div>
                {/* SVG Visual Dashboard Thumbnail */}
                <div className="w-full h-52 relative border-b border-white/[0.06] overflow-hidden bg-[#07122A]">
                  {project.svgMock}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07122A] via-transparent to-transparent opacity-40"></div>
                </div>

                {/* Content Body */}
                <div className="p-7 space-y-4">
                  {/* Category Pill */}
                  <span className="font-mono text-[10px] text-[#00F0FF] uppercase tracking-widest block">
                    {project.category}
                  </span>

                  {/* Title in Literata */}
                  <h3 className="font-headline font-bold text-xl text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 rounded bg-[#101B33] border border-white/5 font-mono text-[11px] text-[#CCD6F6]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Outcome Synopsis in Hanken Grotesk */}
                  <p className="font-body text-sm text-[#C5C6CD] leading-relaxed pt-2">
                    {project.synopsis}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-7 pt-0 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 rounded-lg border border-[#00F0FF]/40 bg-[#00F0FF]/5 text-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#0A192F] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>View on GitHub</span>
                  <span className="material-symbols-outlined text-[15px]">code</span>
                </a>

                <button
                  onClick={() => setSelectedCaseStudy(project)}
                  className="p-2.5 rounded-lg bg-[#101B33] border border-white/10 text-[#8892B0] hover:text-white hover:border-white/30 transition-all"
                  title="View Deep Dive"
                  aria-label="View Project Deep Dive"
                >
                  <span className="material-symbols-outlined text-lg">visibility</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07122A]/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-2xl glass-panel rounded-2xl p-8 max-h-[85vh] overflow-y-auto border border-[#00F0FF]/30 shadow-[0_0_50px_rgba(0,240,255,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-6 right-6 p-2 text-[#8892B0] hover:text-white transition-colors rounded-lg bg-[#101B33] border border-white/10"
              aria-label="Close Case Study"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest block mb-2">
              {selectedCaseStudy.category}
            </span>

            <h3 className="font-headline font-bold text-2xl sm:text-3xl text-white mb-4 leading-tight">
              {selectedCaseStudy.title}
            </h3>

            <p className="font-body text-[#C5C6CD] text-sm sm:text-base leading-relaxed mb-6 pb-6 border-b border-white/[0.08]">
              {selectedCaseStudy.synopsis}
            </p>

            <h4 className="font-mono text-xs uppercase tracking-wider text-[#D9E2FF] mb-4">
              Key Technical Deliverables & Methodology
            </h4>

            <ul className="space-y-3.5 mb-8">
              {selectedCaseStudy.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#C5C6CD]">
                  <span className="material-symbols-outlined text-[#00F0FF] text-base mt-0.5">
                    check_circle
                  </span>
                  <span className="leading-relaxed font-body">{detail}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedCaseStudy.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 font-mono text-xs text-[#00F0FF]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-end gap-3">
              <a
                href={selectedCaseStudy.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#00F0FF] text-[#0A192F] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all"
              >
                Inspect Repository
              </a>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="px-6 py-2.5 rounded-full bg-[#101B33] border border-white/10 text-[#8892B0] hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
