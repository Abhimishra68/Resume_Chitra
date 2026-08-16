import React from 'react';
import { certificationsData, educationData } from '../data/portfolioData';

export const CredentialsSection: React.FC = () => {
  return (
    <section id="credentials" className="py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-5 sm:mb-6">
          Credentials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {/* Left Column: Certifications */}
          <div className="space-y-2.5">
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
              Certifications
            </h3>

            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="leading-relaxed">
                  <p className="font-normal text-slate-200">{cert.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="space-y-2.5">
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
              Education
            </h3>

            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              {educationData.map((edu, idx) => (
                <div key={idx} className="leading-relaxed">
                  <p className="font-normal text-slate-200">
                    <span className="font-semibold text-white">{edu.institution}</span>
                    <span className="text-slate-400 mx-1.5">—</span>
                    <span>{edu.degree}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

