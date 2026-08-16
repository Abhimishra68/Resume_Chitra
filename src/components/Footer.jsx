import React from 'react';

export default function Footer({ onContactClick }) {
  return (
    <footer class="w-full py-16 bg-[#040811] border-t border-white/5 relative z-10 text-center">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col items-center">
        {/* Banner text */}
        <h3 class="font-headline-md text-headline-md md:text-3xl text-on-surface mb-8 max-w-lg leading-relaxed select-none">
          Let's turn your data into decisions.
        </h3>

        {/* Social Icons */}
        <div class="flex items-center gap-6 mb-8 text-on-surface-variant">
          <a 
            href="https://github.com/chitranshu07-coder" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hover:text-secondary transition-colors"
            title="GitHub"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hover:text-secondary transition-colors"
            title="LinkedIn"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          
          <button 
            onClick={onContactClick} 
            class="hover:text-secondary transition-colors"
            title="Email"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 3.847v-8.314l4.623 4.467zm-3.832-4.929h18.418l-9.209 7.728-9.209-7.728zm9.209 9.385l8.761-7.351v8.895h-17.522v-8.895l8.761 7.351zm5.377-1.456l4.623-3.879v8.314l-4.623-4.435z" />
            </svg>
          </button>
        </div>

        {/* Copyright */}
        <p class="font-label-caps text-label-caps text-on-surface-variant select-none">
          © 2024 Kumar Chitranshu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
