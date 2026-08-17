import React from 'react';
import { getAssetUrl } from '../utils/assetUrl';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const resumeUrl = getAssetUrl('screenshots/resume_a4.jpg');

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#07122A]/90 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl glass-panel rounded-2xl p-4 sm:p-6 md:p-8 max-h-[92vh] flex flex-col border border-cyan/30 shadow-[0_0_60px_rgba(0,240,255,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
          <div>
            <span className="font-mono text-[11px] text-cyan uppercase tracking-widest block">
              Curriculum Vitae
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Kumar Chitranshu — Résumé
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={resumeUrl} 
              download="Kumar_Chitranshu_Resume.jpg"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan text-primary font-mono text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              <span className="material-symbols-outlined text-base">download</span>
              <span>Download A4</span>
            </a>

            <button 
              onClick={onClose}
              className="p-2 rounded-lg bg-surface border border-white/10 text-muted hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>
        
        {/* Document Frame */}
        <div className="flex-grow overflow-y-auto flex justify-center bg-[#02050c] rounded-xl p-4 border border-white/5 shadow-inner">
          <img 
            src={resumeUrl} 
            alt="Kumar Chitranshu Resume Document" 
            className="max-w-full h-auto object-contain rounded shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
