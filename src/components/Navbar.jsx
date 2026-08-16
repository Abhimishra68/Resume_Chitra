import React, { useState, useEffect } from 'react';
import KcLogo from './KcLogo';

export default function Navbar({ activeSection, onResumeClick, scrollProgress }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Glass Nav Bar */}
      <div 
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-[#07122A]/85 backdrop-blur-xl border-white/[0.08] shadow-2xl shadow-black/40 py-3.5' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* KC Cyber Circuit Logo Emblem */}
          <a 
            href="#home" 
            className="group flex items-center gap-3 select-none cursor-pointer"
            aria-label="Kumar Chitranshu Home"
          >
            <KcLogo className="h-8 sm:h-9" showText={true} />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#101B33]/60 border border-white/5 rounded-full p-1.5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all duration-200 ${
                    isActive 
                      ? 'text-white bg-white/10 shadow-sm' 
                      : 'text-[#8892B0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-[#00F0FF] rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Résumé Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onResumeClick}
              className="relative group overflow-hidden px-5 py-2 rounded-full bg-[#00F0FF] text-[#0A192F] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Résumé</span>
              <span className="material-symbols-outlined text-[15px] group-hover:translate-y-[-1px] group-hover:translate-x-[1px] transition-transform">
                arrow_outward
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#101B33] border border-white/10 text-[#8892B0] hover:text-white"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Thin Scroll Progress Bar */}
      <div className="w-full h-[2px] bg-white/[0.04]">
        <div 
          className="h-full bg-gradient-to-r from-[#00B8C8] via-[#00F0FF] to-[#64FFDA] shadow-[0_0_10px_#00F0FF] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07122A]/95 border-b border-white/10 px-6 py-6 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm text-[#8892B0] hover:text-[#00F0FF] py-2 border-b border-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
