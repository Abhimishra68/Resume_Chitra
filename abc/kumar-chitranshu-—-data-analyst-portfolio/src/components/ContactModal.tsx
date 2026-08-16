import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      // open mailto as fallback
      window.location.href = `mailto:${personalInfo.email}?subject=Collaboration%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#080e1a] border border-slate-700/80 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-[#0b1322]">
          <div className="flex items-center gap-2">
            <Mail className="text-cyan-400" size={20} />
            <h3 className="text-lg font-bold text-white">Get in Touch</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quick email display */}
          <div className="bg-[#0d1626] border border-slate-800 rounded-xl p-3.5 flex items-center justify-between">
            <div className="text-xs">
              <span className="text-slate-400 block font-mono">DIRECT INBOX</span>
              <span className="text-cyan-300 font-medium">{personalInfo.email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1 bg-[#15233c] hover:bg-[#1d3052] text-xs text-slate-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer border border-slate-700/50"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 size={48} className="text-cyan-400 mx-auto animate-bounce" />
              <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
              <p className="text-xs text-slate-300 max-w-xs mx-auto">
                Opening your email client to send directly to {personalInfo.name}...
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 bg-[#00e5ff] text-slate-950 font-semibold text-xs px-5 py-2 rounded-xl"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full bg-[#050912] border border-slate-700/80 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@company.com"
                  className="w-full bg-[#050912] border border-slate-700/80 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Message / Project Scope
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Kumar, we would like to discuss a data analyst opportunity..."
                  className="w-full bg-[#050912] border border-slate-700/80 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00e5ff] hover:bg-[#1ee6ff] text-slate-950 font-semibold py-2.5 rounded-xl text-sm transition-all shadow-[0_0_15px_rgba(0,229,255,0.35)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={15} />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
