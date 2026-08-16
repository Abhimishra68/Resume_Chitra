import React from 'react';
import logoImg from '../assets/logo.png';

export default function KcLogo({ className = 'h-9 w-auto', showText = false, textClassName = '' }) {
  return (
    <div className="inline-flex items-center gap-3 select-none group">
      <img
        src={logoImg}
        alt="KC Cyber Circuit Logo"
        className={`${className} transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_6px_rgba(0,240,255,0.3)] object-contain`}
      />

      {showText && (
        <div className={`flex flex-col text-left leading-none tracking-tight ${textClassName}`}>
          <div className="flex items-center gap-1.5">
            <span className="font-headline font-extrabold text-white text-[14px] sm:text-[15px] tracking-[0.06em] group-hover:text-[#00F0FF] transition-colors">
              KUMAR CHITRANSHU
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]" />
          </div>
          <span className="text-[10px] font-mono font-medium text-[#8892B0] tracking-[0.14em] uppercase mt-1">
            Data Analyst
          </span>
        </div>
      )}
    </div>
  );
}
