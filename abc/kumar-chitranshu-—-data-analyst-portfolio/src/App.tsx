/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { StitchDualScreenView } from './components/StitchDualScreenView';
import { ProjectItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'continuous' | 'dual-screen'>('continuous');

  // Intersection observer / scroll spy to update active section in navbar
  useEffect(() => {
    if (viewMode === 'dual-screen') return;

    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'credentials', 'contact'];
      const scrollPos = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId === 'hero' ? 'about' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-[#00e5ff] selection:text-black">
      {viewMode === 'continuous' ? (
        <>
          {/* Top Navigation */}
          <Navbar
            activeSection={activeSection}
            onNavigate={handleNavigate}
            onOpenResume={() => setResumeOpen(true)}
            viewMode={viewMode}
            onToggleViewMode={setViewMode}
          />

          {/* Main Content Flow */}
          <main>
            {/* 1. Hero Section with 3D Canvas */}
            <Hero
              onViewProjects={() => handleNavigate('projects')}
              onOpenResume={() => setResumeOpen(true)}
            />

            {/* 2. About & Stats Section */}
            <AboutSection />

            {/* 3. Skills Bento Grid */}
            <SkillsSection />

            {/* 4. Experience Section */}
            <ExperienceSection />

            {/* 5. Projects Section */}
            <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

            {/* 6. Credentials Section */}
            <CredentialsSection />
          </main>

          {/* 7. Footer */}
          <Footer onOpenContact={() => setContactOpen(true)} />
        </>
      ) : (
        <>
          {/* Top Quick Bar in Dual Screen Mode */}
          <header className="sticky top-0 z-40 bg-[#050811]/95 backdrop-blur-md border-b border-slate-800/60 px-4 py-2.5 flex items-center justify-between">
            <Navbar
              activeSection={activeSection}
              onNavigate={handleNavigate}
              onOpenResume={() => setResumeOpen(true)}
              viewMode={viewMode}
              onToggleViewMode={setViewMode}
            />
          </header>

          <StitchDualScreenView
            activeSection={activeSection}
            onNavigate={handleNavigate}
            onOpenResume={() => setResumeOpen(true)}
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenContact={() => setContactOpen(true)}
          />
        </>
      )}

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
