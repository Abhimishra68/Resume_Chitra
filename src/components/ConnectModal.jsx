import React, { useState } from 'react';

export default function ConnectModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Analytics Opportunity', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', subject: 'Analytics Opportunity', message: '' });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#07122A]/90 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg glass-panel rounded-2xl p-5 sm:p-8 border border-cyan/30 shadow-[0_0_60px_rgba(0,240,255,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-surface border border-white/10 text-muted hover:text-white transition-colors"
          aria-label="Close Contact Modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-cyan/10 border border-cyan/40 text-cyan flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              <span className="material-symbols-outlined text-3xl">mark_email_read</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white">Transmission Received</h3>
            <p className="text-muted text-sm max-w-sm mx-auto font-sans leading-relaxed">
              Thank you for reaching out. I'll review your message and reply within 24 hours.
            </p>
            <button 
              onClick={handleReset}
              className="mt-6 px-8 py-3 rounded-full bg-cyan text-void font-mono text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="font-mono text-[10px] text-cyan uppercase tracking-widest block mb-1">
                Direct Communication
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                Initiate Dialogue
              </h3>
            </div>

            <div>
              <label className="block font-mono text-xs text-muted mb-2 uppercase tracking-wider">
                Your Name
              </label>
              <input 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-sm placeholder:text-subtle focus:outline-none focus:border-cyan transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-muted mb-2 uppercase tracking-wider">
                Work Email
              </label>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@company.com"
                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-sm placeholder:text-subtle focus:outline-none focus:border-cyan transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-muted mb-2 uppercase tracking-wider">
                Message & Scope
              </label>
              <textarea 
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about the role, dataset, or project you'd like to collaborate on..."
                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-sm placeholder:text-subtle focus:outline-none focus:border-cyan transition-colors resize-none"
              ></textarea>
            </div>

            {error && (
              <p className="text-red-400 font-mono text-xs">Please complete all fields to send your message.</p>
            )}

            <button 
              type="submit"
              className="w-full py-3.5 rounded-xl bg-cyan text-void font-mono text-xs font-semibold uppercase tracking-wider hover:bg-white hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-2"
            >
              <span>Transmit Message</span>
              <span className="material-symbols-outlined text-base">send</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
