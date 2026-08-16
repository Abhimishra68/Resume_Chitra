import React from 'react';
import { projectsData } from '../data/portfolioData';
import { DashboardMockup, ChurnModelMockup, MarketBasketMockup } from './ProjectMockups';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const renderMockup = (type: ProjectItem['type']) => {
    switch (type) {
      case 'dashboard':
        return <DashboardMockup />;
      case 'pipeline':
        return <ChurnModelMockup />;
      case 'basket':
        return <MarketBasketMockup />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-6">
          Projects
        </h2>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-[#090f1c]/90 border border-slate-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-4.5 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* Visual Thumbnail Mockup */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="cursor-pointer overflow-hidden rounded-lg sm:rounded-xl"
                  title="Click to view details"
                >
                  {renderMockup(project.type)}
                </div>

                {/* Project Title */}
                <div>
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-sm sm:text-base font-bold text-white tracking-tight cursor-pointer hover:text-cyan-300 transition-colors"
                  >
                    {project.title}
                  </h3>

                  {/* Tech Tags / Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-normal px-2 py-0.5 rounded bg-[#0e1627] border border-slate-700/60 text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Action Button: Solid Cyan Pill with black text */}
              <div className="pt-4 mt-auto">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full bg-[#00e5ff] hover:bg-[#2ae7ff] active:bg-[#00c9e0] text-black font-semibold py-2 px-4 rounded-xl text-xs sm:text-sm text-center transition-all duration-150 shadow-[0_0_12px_rgba(0,229,255,0.3)] hover:shadow-[0_0_18px_rgba(0,229,255,0.55)] cursor-pointer"
                >
                  View on GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
