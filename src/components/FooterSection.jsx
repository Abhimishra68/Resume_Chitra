import React, { useState } from 'react';
import KcLogo from './KcLogo';

export default function FooterSection({ onContactClick }) {
  const [copied, setCopied] = useState(false);
  const email = "chitranshu.analytics@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer 
      id="contact"
      className="relative py-28 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/[0.06] text-center"
    >
      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00F0FF]/[0.04] rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-3xl mx-auto space-y-10">
        
        <div className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></span>
          <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest">
            06 // Initiate Contact
          </span>
        </div>

        {/* Closing Tagline in Literata */}
        <h2 className="font-headline font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
          Let's turn your data <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9E2FF] via-[#CCD6F6] to-[#00F0FF]">
            into decisions.
          </span>
        </h2>

        <p className="font-body text-[#C5C6CD] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Open to data analyst, BI engineering, and machine learning opportunities. Let's discuss how data rigor can drive your business goals.
        </p>

        {/* Contact Icon & Action Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          
          {/* Email Direct Trigger */}
          <button
            onClick={onContactClick}
            className="px-8 py-4 rounded-full bg-[#00F0FF] text-[#0A192F] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">mail</span>
            <span>Send Direct Message</span>
          </button>

          {/* Quick Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="px-6 py-4 rounded-full glass-panel font-mono text-xs text-[#CCD6F6] hover:text-[#00F0FF] border border-white/10 hover:border-[#00F0FF]/40 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
            title="Copy email to clipboard"
          >
            <span className="material-symbols-outlined text-base text-[#00F0FF]">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
          </button>

        </div>

        {/* Social Icon Channels */}
        <div className="flex items-center justify-center gap-4 pt-6 text-[#8892B0]">
          <a
            href="https://github.com/Abhimishra68"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#101B33] border border-white/10 text-[#8892B0] hover:text-[#00F0FF] hover:border-[#00F0FF]/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#101B33] border border-white/10 text-[#8892B0] hover:text-[#00F0FF] hover:border-[#00F0FF]/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a
            href="tel:+919876543210"
            className="p-3 rounded-full bg-[#101B33] border border-white/10 text-[#8892B0] hover:text-[#00F0FF] hover:border-[#00F0FF]/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
            aria-label="Phone"
          >
            <span className="material-symbols-outlined text-xl">call</span>
          </a>
        </div>

        {/* Signature & Copyright */}
        <div className="pt-12 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8892B0]">
          <div className="flex items-center gap-3">
            <KcLogo className="h-6 w-auto" showText={false} />
            <p>© 2024 Kumar Chitranshu. All rights reserved.</p>
          </div>
          <p className="flex items-center gap-1.5">
            <span>Crafted with data-native precision</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] inline-block"></span>
          </p>
        </div>

      </div>
    </footer>
  );
}

