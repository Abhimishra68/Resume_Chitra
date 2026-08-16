import React from 'react';
import { Hero } from './Hero';
import { AboutSection } from './AboutSection';
import { SkillsSection } from './SkillsSection';
import { ExperienceSection } from './ExperienceSection';
import { ProjectsSection } from './ProjectsSection';
import { CredentialsSection } from './CredentialsSection';
import { Footer } from './Footer';
import { ProjectItem } from '../types';
import { Navbar } from './Navbar';

interface StitchDualScreenViewProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onOpenContact: () => void;
}

export const StitchDualScreenView: React.FC<StitchDualScreenViewProps> = ({
  activeSection,
  onNavigate,
  onOpenResume,
  onSelectProject,
  onOpenContact,
}) => {
  return (
    <div className="max-w-[1440px] mx-auto px-3 sm:px-6 py-6 sm:py-8">
      {/* Stitch Design Banner */}
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
          <h2 className="text-xs sm:text-sm font-semibold text-slate-200 tracking-wide">
            Stitch Design Presentation — Screen 1 & Screen 2 Side-by-Side
          </h2>
        </div>
        <span className="text-[11px] text-cyan-400 font-mono">
          Dual Artboard Render
        </span>
      </div>

      {/* Side-by-Side Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Screen 1: Top Navigation, Hero with 3D Canvas, About & Stats, Skills Bento */}
        <div className="bg-[#050811] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
          {/* Mock Browser Header for Screen 1 */}
          <div className="bg-[#090e1a] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-[11px] text-slate-400">Screen 1 — Hero & Skills</span>
            <div className="w-8" />
          </div>

          <div className="flex-1 flex flex-col">
            <Navbar
              activeSection={activeSection}
              onNavigate={onNavigate}
              onOpenResume={onOpenResume}
            />
            <Hero onViewProjects={() => onNavigate('projects')} onOpenResume={onOpenResume} />
            <AboutSection />
            <SkillsSection />
          </div>
        </div>

        {/* Screen 2: Experience Timeline, 3 Projects Cards, Credentials, Callout & Footer */}
        <div className="bg-[#050811] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
          {/* Mock Browser Header for Screen 2 */}
          <div className="bg-[#090e1a] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-[11px] text-slate-400">Screen 2 — Experience & Projects</span>
            <div className="w-8" />
          </div>

          <div className="flex-1 flex flex-col pt-4">
            <ExperienceSection />
            <ProjectsSection onSelectProject={onSelectProject} />
            <CredentialsSection />
            <Footer onOpenContact={onOpenContact} />
          </div>
        </div>
      </div>
    </div>
  );
};
