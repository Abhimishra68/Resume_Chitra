import React, { useState } from 'react';
import { Menu, X, LayoutGrid, Columns } from 'lucide-react';
import { KcLogo } from './KcLogo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  viewMode?: 'continuous' | 'dual-screen';
  onToggleViewMode?: (mode: 'continuous' | 'dual-screen') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenResume,
  viewMode = 'continuous',
  onToggleViewMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'credentials', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050811]/90 backdrop-blur-md border-b border-slate-800/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Monogram Logo */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavClick('hero')}
            className="group flex items-center gap-1 focus:outline-none cursor-pointer py-1"
            aria-label="Kumar Chitranshu Home"
          >
            <KcLogo
              className="h-8 sm:h-9"
              showText={false}
              allowSwitch={true}
            />
          </button>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-7 text-sm font-normal text-slate-300">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 transition-colors duration-150 cursor-pointer ${
                  isActive ? 'text-white font-medium' : 'text-slate-300 hover:text-cyan-300'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00e5ff] rounded-full shadow-[0_0_6px_#00e5ff]"
                  />
                )}
              </button>
            );
          })}

          {/* Résumé Pill Button */}
          <button
            onClick={onOpenResume}
            className="ml-1 bg-[#00e5ff] hover:bg-[#2ae7ff] active:bg-[#00c9e0] text-black font-semibold px-4.5 py-1 rounded-full text-xs sm:text-sm tracking-tight transition-all duration-150 shadow-[0_0_12px_rgba(0,229,255,0.35)] hover:shadow-[0_0_18px_rgba(0,229,255,0.55)] cursor-pointer"
          >
            Résumé
          </button>

          {/* Dual-Screen Stitch Mode Switcher (Optional Visual Switcher) */}
          {onToggleViewMode && (
            <div className="flex items-center bg-[#0d1526] border border-slate-700/60 rounded-full p-0.5 ml-2 text-xs">
              <button
                onClick={() => onToggleViewMode('continuous')}
                title="Continuous Flow View"
                className={`px-2.5 py-0.5 rounded-full flex items-center gap-1 transition-all ${
                  viewMode === 'continuous'
                    ? 'bg-cyan-500/20 text-cyan-300 font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Columns size={12} />
                <span>Flow</span>
              </button>
              <button
                onClick={() => onToggleViewMode('dual-screen')}
                title="Stitch Dual-Screen Side-by-Side View"
                className={`px-2.5 py-0.5 rounded-full flex items-center gap-1 transition-all ${
                  viewMode === 'dual-screen'
                    ? 'bg-cyan-500/20 text-cyan-300 font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <LayoutGrid size={12} />
                <span>Stitch 2-Screen</span>
              </button>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onOpenResume}
            className="bg-[#00e5ff] text-black font-semibold px-3 py-1 rounded-full text-xs"
          >
            Résumé
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-white p-1.5 rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070c18] border-b border-slate-800 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-1.5 text-sm transition-colors ${
                activeSection === item.id ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          {onToggleViewMode && (
            <div className="pt-2 border-t border-slate-800 flex gap-2">
              <button
                onClick={() => {
                  onToggleViewMode(viewMode === 'continuous' ? 'dual-screen' : 'continuous');
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-[#0e1728] border border-slate-700 text-xs text-cyan-300 py-2 rounded-lg text-center"
              >
                Toggle Stitch 2-Screen / Flow View
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
