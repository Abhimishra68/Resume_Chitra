import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CredentialsSection from './components/CredentialsSection';
import FooterSection from './components/FooterSection';
import ResumeModal from './components/ResumeModal';
import ConnectModal from './components/ConnectModal';
import './App.css';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (isResumeOpen || isConnectOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isResumeOpen, isConnectOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollRatio = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scrollRatio));

      // Active section detection
      const sections = ['about', 'skills', 'experience', 'projects', 'credentials', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (window.scrollY < 150) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-[#D9E2FF] selection:bg-[#00F0FF]/20 selection:text-[#00F0FF] font-body overflow-x-hidden">
      
      {/* 1. Bespoke Cursor */}
      <CustomCursor />

      {/* 2. Interactive Background Canvas (Sine Waves + Data Particles) */}
      <CanvasBackground />

      {/* 3. Ambient Structural Grid Texture */}
      <div className="ambient-grid fixed inset-0 pointer-events-none z-0 opacity-30"></div>

      {/* 3.1 Premium Ambient Lighting Orbs */}
      <div className="fixed top-[-10%] left-[-15%] w-[60vw] h-[60vh] bg-gradient-to-br from-[#00F0FF]/[0.025] to-transparent rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed top-[35%] right-[-15%] w-[50vw] h-[55vh] bg-gradient-to-br from-[#64FFDA]/[0.015] to-transparent rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[10%] w-[70vw] h-[45vh] bg-gradient-to-br from-[#00F0FF]/[0.02] to-transparent rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* 4. Top Navigation with Scroll Progress */}
      <Navbar 
        activeSection={activeSection}
        onResumeClick={() => setIsResumeOpen(true)}
        scrollProgress={scrollProgress}
      />

      {/* 5. Main Single-Page Content Flow */}
      <main className="relative z-10">
        <HeroSection 
          onResumeClick={() => setIsResumeOpen(true)}
          onContactClick={() => setIsConnectOpen(true)}
        />
        
        <AboutSection />

        <SkillsSection />

        <ExperienceSection 
          onResumeClick={() => setIsResumeOpen(true)}
        />

        <ProjectsSection />

        <CredentialsSection />
      </main>

      {/* 6. Contact & Footer */}
      <FooterSection 
        onContactClick={() => setIsConnectOpen(true)}
      />

      {/* 7. Interactive Modals */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
      
      <ConnectModal 
        isOpen={isConnectOpen} 
        onClose={() => setIsConnectOpen(false)} 
      />

    </div>
  );
}

export default App;
