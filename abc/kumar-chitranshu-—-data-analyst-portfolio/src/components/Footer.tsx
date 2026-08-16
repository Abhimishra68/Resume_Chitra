import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer id="contact" className="pt-12 pb-14 text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        {/* Banner Callout Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
          Let's turn your data into decisions.
        </h2>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-4 pt-1">
          {/* GitHub Icon */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-300 transition-colors p-1"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>

          {/* LinkedIn Icon */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-300 transition-colors p-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>

          {/* Mail Icon */}
          <button
            onClick={onOpenContact}
            className="text-slate-300 hover:text-cyan-300 transition-colors p-1 cursor-pointer"
            aria-label="Email Contact"
          >
            <Mail size={20} />
          </button>
        </div>

        {/* Copyright */}
        <p className="text-[11px] sm:text-xs text-slate-400 font-normal pt-2">
          © 2024 Kumar Chitranshu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
