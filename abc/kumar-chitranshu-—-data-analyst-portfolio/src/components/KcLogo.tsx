import React, { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';

export type LogoStyle = 'monogram' | 'signature' | 'isometric' | 'crest';

interface KcLogoProps {
  className?: string;
  showText?: boolean;
  style?: LogoStyle;
  onStyleChange?: (style: LogoStyle) => void;
  allowSwitch?: boolean;
}

export const KcLogo: React.FC<KcLogoProps> = ({
  className = 'h-8 sm:h-9',
  showText = true,
  style: initialStyle = 'monogram',
  onStyleChange,
  allowSwitch = false,
}) => {
  const [currentStyle, setCurrentStyle] = useState<LogoStyle>(initialStyle);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelectStyle = (s: LogoStyle, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentStyle(s);
    if (onStyleChange) onStyleChange(s);
    setMenuOpen(false);
  };

  return (
    <div className="relative inline-flex items-center gap-2 group select-none">
      {/* Visual Emblem SVG Rendering based on selected style */}
      <div className="relative flex items-center justify-center">
        {/* Style 1: Executive Geometric Interlocking Monogram (Sleek, futuristic, ultra-clean) */}
        {currentStyle === 'monogram' && (
          <svg
            viewBox="0 0 52 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} aspect-[52/40] transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]`}
            aria-label="KC Executive Monogram"
          >
            <defs>
              <linearGradient id="kc_grad_main" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#E2E8F0" />
                <stop offset="100%" stopColor="#00E5FF" />
              </linearGradient>
              <linearGradient id="kc_grad_cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>
            </defs>

            {/* Background subtle hexagon tech frame */}
            <path
              d="M 26 2 L 48 11 L 48 29 L 26 38 L 4 29 L 4 11 Z"
              stroke="#00e5ff"
              strokeWidth="1.2"
              strokeOpacity="0.25"
              fill="#060c18"
              fillOpacity="0.8"
            />

            {/* Bold Stylized 'K' */}
            {/* Vertical stem */}
            <path
              d="M 14 10 L 14 30"
              stroke="url(#kc_grad_main)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Upper arm */}
            <path
              d="M 15 20 L 26 10"
              stroke="url(#kc_grad_main)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Lower arm */}
            <path
              d="M 18 17 L 27 30"
              stroke="url(#kc_grad_main)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />

            {/* Interlocking Modern 'C' Arc */}
            <path
              d="M 40 13.5 C 37 10 30 9.5 25 13.5 C 20 17.5 20 23.5 25 27.5 C 30 31.5 37 31 40 27.5"
              stroke="url(#kc_grad_cyan)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />

            {/* Core Apex Data Energy Node */}
            <circle cx="26" cy="10" r="2.2" fill="#00E5FF" />
            <circle cx="26" cy="10" r="1.1" fill="#FFFFFF" />
            <circle cx="40" cy="13.5" r="1.6" fill="#00E5FF" />
          </svg>
        )}

        {/* Style 2: High-End Fluid Calligraphic Signature Ligature */}
        {currentStyle === 'signature' && (
          <svg
            viewBox="0 0 64 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} aspect-[64/38] transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(0,229,255,0.45)]`}
            aria-label="KC Signature Ligature"
          >
            <defs>
              <linearGradient id="sigGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="70%" stopColor="#F0FDFA" />
                <stop offset="100%" stopColor="#00E5FF" />
              </linearGradient>
            </defs>

            {/* Fluid artistic flourishes */}
            {/* K stem with top loop */}
            <path
              d="M 8 10 C 7 7 10 5 12 7 C 14 9 13 27 12 32"
              stroke="url(#sigGrad)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* K upper loop & swoosh */}
            <path
              d="M 24 9 C 20 8 13 15 12 18"
              stroke="url(#sigGrad)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* K lower leg sweeping into C */}
            <path
              d="M 12 18 C 17 21 21 28 27 30 C 33 32 37 31 41 28 C 47 23 48 13 41 8 C 34 4 25 9 27 20 C 28 27 35 31 42 31 C 48 31 53 28 56 24"
              stroke="url(#sigGrad)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Cyan signature accent dot */}
            <circle cx="58" cy="22" r="2.2" fill="#00E5FF" />
            <circle cx="58" cy="22" r="1.0" fill="#FFFFFF" />
          </svg>
        )}

        {/* Style 3: Isometric 3D Data Cube / Matrix Crest */}
        {currentStyle === 'isometric' && (
          <svg
            viewBox="0 0 46 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} aspect-[46/42] transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(0,229,255,0.45)]`}
            aria-label="KC Isometric Tech Crest"
          >
            <defs>
              <linearGradient id="isoTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>
              <linearGradient id="isoLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#94A3B8" />
              </linearGradient>
              <linearGradient id="isoRight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="100%" stopColor="#0369A1" />
              </linearGradient>
            </defs>

            {/* Isometric 3D Cube Facets */}
            {/* Top Plane */}
            <path d="M 23 3 L 41 12 L 23 21 L 5 12 Z" fill="url(#isoTop)" fillOpacity="0.3" stroke="#00E5FF" strokeWidth="1.5" />
            {/* Left Plane */}
            <path d="M 5 12 L 23 21 L 23 39 L 5 30 Z" fill="url(#isoLeft)" fillOpacity="0.1" stroke="#E2E8F0" strokeWidth="1.5" />
            {/* Right Plane */}
            <path d="M 23 21 L 41 12 L 41 30 L 23 39 Z" fill="url(#isoRight)" fillOpacity="0.2" stroke="#00E5FF" strokeWidth="1.5" />

            {/* Laser Monogram Overlay Lines forming 'K' and 'C' */}
            <path d="M 12 17 L 12 33 M 12 25 L 20 18 M 14 24 L 21 32" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M 36 18 C 32 15 26 17 26 24 C 26 31 32 33 36 30" stroke="#00E5FF" strokeWidth="2.4" strokeLinecap="round" />

            {/* Center Nexus Data Node */}
            <circle cx="23" cy="21" r="2.5" fill="#00E5FF" />
            <circle cx="23" cy="21" r="1.2" fill="#FFFFFF" />
          </svg>
        )}

        {/* Style 4: Minimalist Angular Tech Monogram */}
        {currentStyle === 'crest' && (
          <svg
            viewBox="0 0 48 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} aspect-[48/38] transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]`}
            aria-label="KC Minimalist Tech Monogram"
          >
            <defs>
              <linearGradient id="crestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#00E5FF" />
              </linearGradient>
            </defs>

            {/* Modern bold stylized K */}
            <path d="M 6 6 L 6 32" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="square" />
            <path d="M 7 19 L 21 6" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="square" />
            <path d="M 12 16 L 22 32" stroke="url(#crestGrad)" strokeWidth="3.5" strokeLinecap="square" />

            {/* Sharp geometric C with diagonal chamfer corners */}
            <path
              d="M 42 10 L 32 6 L 27 12 L 27 26 L 32 32 L 42 28"
              stroke="#00E5FF"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Center Data Core */}
            <circle cx="34" cy="19" r="2" fill="#00E5FF" />
          </svg>
        )}
      </div>

      {/* Accompanying Refined Typographic Lockup */}
      {showText && (
        <div className="flex flex-col text-left leading-none tracking-tight pl-1">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-white text-[13px] sm:text-[14px] tracking-[0.06em] group-hover:text-cyan-200 transition-colors">
              KUMAR CHITRANSHU
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_6px_#00e5ff]" />
          </div>
          <span className="text-[9.5px] sm:text-[10px] font-medium text-slate-400 tracking-[0.14em] uppercase mt-0.5">
            Data Analyst & ML
          </span>
        </div>
      )}

      {/* Optional Interactive Style Selector Pill on hover/click */}
      {allowSwitch && (
        <div className="relative ml-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            title="Change Logo Style"
            className="p-1 rounded-full text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors cursor-pointer"
          >
            <Sparkles size={13} className="text-cyan-400" />
          </button>

          {menuOpen && (
            <div
              className="absolute left-0 top-full mt-2 w-48 bg-[#090f1d] border border-slate-700/80 rounded-xl shadow-2xl p-1.5 z-50 text-xs backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-2 py-1 text-[10px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 mb-1">
                Choose Logo Style
              </div>
              {[
                { id: 'monogram', label: 'Executive Crest (Default)' },
                { id: 'signature', label: 'Calligraphic Signature' },
                { id: 'isometric', label: '3D Data Crystal' },
                { id: 'crest', label: 'Angular Cyber Monogram' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => handleSelectStyle(item.id as LogoStyle, e)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between transition-colors ${
                    currentStyle === item.id
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {currentStyle === item.id && <Check size={12} className="text-cyan-400" />}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
