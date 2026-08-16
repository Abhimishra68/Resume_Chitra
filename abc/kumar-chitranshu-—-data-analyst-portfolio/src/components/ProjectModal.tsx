import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink, Code2, BarChart3, Database, CheckCircle, Copy, Check } from 'lucide-react';
import { DashboardMockup, ChurnModelMockup, MarketBasketMockup } from './ProjectMockups';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'interactive'>('overview');
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#080e1a] border border-slate-700/80 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#080e1a]/95 backdrop-blur-md p-5 border-b border-slate-800 flex items-center justify-between z-10">
          <div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800 transition-colors"
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-800 px-6 pt-3 gap-6 text-sm">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 font-medium transition-colors border-b-2 ${
              activeTab === 'overview'
                ? 'text-cyan-300 border-cyan-400'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            Overview & Metrics
          </button>
          <button
            onClick={() => setActiveTab('interactive')}
            className={`pb-3 font-medium transition-colors border-b-2 ${
              activeTab === 'interactive'
                ? 'text-cyan-300 border-cyan-400'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            Visual Architecture
          </button>
          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`pb-3 font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'text-cyan-300 border-cyan-400'
                  : 'text-slate-400 border-transparent hover:text-slate-200'
              }`}
            >
              <Code2 size={14} />
              <span>Source Query / Code</span>
            </button>
          )}
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* Detailed Overview */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Executive Summary
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.fullOverview || project.description}
                </p>
              </div>

              {/* Key Metrics Grid */}
              {project.keyMetrics && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Key Performance Indicators & Impact
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.keyMetrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="bg-[#0d1626] border border-slate-800 rounded-xl p-3 text-center"
                      >
                        <div className="text-xl font-bold text-cyan-300">{metric.value}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Breakdown */}
              {project.techStack && (
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Tooling & Infrastructure
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-[#0b1424] border border-slate-700/80 text-slate-300 text-xs px-3 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {activeTab === 'interactive' && (
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                High Fidelity System Rendering
              </h4>
              <div className="p-2 bg-[#050811] rounded-2xl border border-slate-800 shadow-inner">
                {project.type === 'dashboard' && <DashboardMockup />}
                {project.type === 'pipeline' && <ChurnModelMockup />}
                {project.type === 'basket' && <MarketBasketMockup />}
              </div>
            </div>
          )}

          {activeTab === 'code' && project.codeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">
                  {project.tags.includes('SQL') ? 'queries.sql' : 'model_pipeline.py'}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 cursor-pointer"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="bg-[#040711] border border-slate-800 rounded-xl p-4 text-xs font-mono text-cyan-200 overflow-x-auto leading-relaxed shadow-inner">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#080e1a]/95 backdrop-blur-md p-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-sm px-4 py-2"
          >
            Close
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00e5ff] hover:bg-[#1fe3ff] text-slate-950 font-semibold text-sm px-5 py-2 rounded-xl shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
          >
            <span>View Full Repository on GitHub</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};
