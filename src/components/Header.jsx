import React from 'react';
import KcLogo from './KcLogo';

export default function Header({ activeSection, onResumeClick, onContactClick }) {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#credentials' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="bg-surface/85 backdrop-blur-xl border-b border-white/10 fixed top-0 w-full z-50 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Logo */}
        <a 
          href="#home"
          className="flex items-center transition-transform hover:scale-105 select-none"
        >
          <KcLogo className="h-9 w-auto" showText={true} />
        </a>

        {/* Navigation links */}
        <nav class="hidden md:flex gap-6 items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                class={`font-body-md text-body-md px-3 py-1 transition-all ${
                  isActive 
                    ? 'text-secondary font-medium' 
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Résumé CTA */}
        <button 
          onClick={onResumeClick}
          class="bg-secondary text-background px-6 py-2.5 rounded font-label-caps text-label-caps tracking-widest hover:bg-secondary-fixed transition-colors active:scale-95"
        >
          Résumé
        </button>
      </div>
    </header>
  );
}
