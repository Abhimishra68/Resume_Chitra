import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';
import { personalInfo, skillCategories, experienceData, certificationsData, educationData, projectsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${personalInfo.name}
${personalInfo.title}
Email: ${personalInfo.email} | Location: ${personalInfo.location}

SUMMARY:
${personalInfo.about}

EXPERIENCE:
${experienceData
  .map(
    (e) => `• ${e.company} — ${e.role} (${e.period})
  ${e.bullets.map((b) => `  - ${b}`).join('\n')}`
  )
  .join('\n\n')}

PROJECTS:
${projectsData.map((p) => `• ${p.title} (${p.tags.join(', ')})
  ${p.description}`).join('\n\n')}

EDUCATION:
${educationData.map((ed) => `• ${ed.institution} — ${ed.degree}`).join('\n')}

CERTIFICATIONS:
${certificationsData.map((c) => `• ${c.title}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#080d19] border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header Bar */}
        <div className="bg-[#0b1322] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#00e5ff]" />
            <h3 className="text-lg font-bold text-white tracking-wide">
              Kumar Chitranshu — Curriculum Vitae
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 bg-[#101b2f] hover:bg-[#162540] border border-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              title="Copy Plain Text"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-[#00e5ff] hover:bg-[#20e9ff] text-slate-950 font-semibold text-xs px-3.5 py-1.5 rounded-lg shadow-[0_0_12px_rgba(0,229,255,0.3)] transition-all cursor-pointer"
            >
              <Printer size={14} />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#070b14] text-slate-200 space-y-8 font-sans">
          {/* Top CV Header */}
          <div className="border-b border-slate-800 pb-6 text-center space-y-2">
            <h1 className="text-3xl font-extrabold text-white tracking-wide">
              {personalInfo.name}
            </h1>
            <p className="text-cyan-400 font-medium text-sm">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-2 font-mono">
              <span className="flex items-center gap-1">
                <Mail size={12} className="text-cyan-400" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-cyan-400" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Globe size={12} className="text-cyan-400" />
                github.com/kumarchitranshu
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.about}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
              Professional Experience
            </h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-bold text-white">
                    {exp.company} — <span className="font-normal text-slate-300">{exp.role}</span>
                  </span>
                  <span className="text-xs font-mono text-cyan-400">{exp.period}</span>
                </div>
                <ul className="list-disc list-outside pl-5 space-y-1 text-xs text-slate-300">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills Bento / Summary */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="bg-[#0c1424] p-3 rounded-lg border border-slate-800">
                  <span className="font-semibold text-white block mb-1">{cat.title}:</span>
                  <span className="text-slate-300">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
              Key Projects
            </h2>
            <div className="space-y-3">
              {projectsData.map((p, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-white">{p.title}</span>
                    <span className="text-xs font-mono text-slate-400">[{p.tags.join(' · ')}]</span>
                  </div>
                  <p className="text-xs text-slate-300">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
                Education
              </h2>
              {educationData.map((edu, idx) => (
                <div key={idx} className="text-xs space-y-0.5">
                  <div className="font-bold text-white">{edu.institution}</div>
                  <div className="text-slate-300">{edu.degree}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
                Certifications
              </h2>
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="text-xs text-slate-300">
                  • {cert.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
