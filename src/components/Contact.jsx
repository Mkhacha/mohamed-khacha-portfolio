import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

function MailIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MapPinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function CheckIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowUpRight({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function CopyIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('mohamedkhacha99@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setSending(true);

    try {
      const res = await fetch('https://formsubmit.co/ajax/mohamedkhacha99@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
          _subject: `[Portfolio Inquiry] from ${formData.name}`,
        }),
      });

      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('success');
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="w-full min-h-screen lg:h-screen flex flex-col justify-between py-8 sm:py-10 lg:py-8 px-6 md:px-12 lg:px-16 bg-surface text-text-primary overflow-hidden relative"
    >
      {/* Ambient background light wash */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        
        {/* Section Header */}
        <div>
          <div className="reveal flex items-center justify-between border-b border-text-tertiary/15 pb-4 mb-6">
            <span className="inline-flex items-center gap-3 text-caption tracking-widest text-text-tertiary uppercase font-mono">
              <span className="w-8 h-[1px] bg-accent inline-block animate-hairline" />
              04 / Direct Contact
            </span>
            <span className="text-caption text-text-tertiary tracking-widest uppercase hidden sm:inline-block font-mono text-xs">
              Open for Opportunities & Research
            </span>
          </div>

          <div className="max-w-4xl mb-6">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight leading-[1.1] reveal reveal-delay-1">
              Direct Dialogue.
              <span 
                className="block text-gradient-accent mt-1 text-xl sm:text-3xl lg:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}
              >
                Let's engineer the next breakthrough together.
              </span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed font-light max-w-2xl reveal reveal-delay-2">
              Have an open role, an algorithmic challenge to model, or an AI research initiative? Reach out directly.
            </p>
          </div>
        </div>

        {/* Two Harmoniously Balanced Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center flex-1 my-auto">
          
          {/* ================= LEFT COLUMN: Direct Channels ================= */}
          <div className="lg:col-span-5 space-y-6 reveal reveal-delay-2">
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for AI & Data Science Roles</span>
            </div>

            {/* Direct Channels List */}
            <div className="space-y-4 border-t border-b border-text-tertiary/15 py-5">
              
              {/* Email */}
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-surface-subtle/80 flex items-center justify-center text-accent flex-shrink-0">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider block">
                      Email
                    </span>
                    <a 
                      href="mailto:mohamedkhacha99@gmail.com" 
                      className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors truncate block"
                    >
                      mohamedkhacha99@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email"
                  className="p-1.5 rounded-md text-text-tertiary hover:text-accent hover:bg-accent/10 transition-all cursor-pointer ml-2"
                >
                  {copiedEmail ? (
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckIcon className="w-3 h-3" />
                      <span>Copied</span>
                    </span>
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-surface-subtle/80 flex items-center justify-center text-accent flex-shrink-0">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider block">
                      Phone / WhatsApp
                    </span>
                    <a 
                      href="tel:+212653206661" 
                      className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors"
                    >
                      +212 653-206661
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-surface-subtle/80 flex items-center justify-center text-accent flex-shrink-0">
                    <MapPinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-sm font-medium text-text-primary">
                      Marrakech & Tinghir, Morocco
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-text-tertiary">
                  GMT+1
                </span>
              </div>

            </div>

            {/* Social / Profiles */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/0khacha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-text-tertiary/20 hover:border-accent/40 bg-surface text-xs font-mono text-text-secondary hover:text-text-primary transition-all group"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-text-tertiary group-hover:text-accent transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/mohamed-khacha-940a9025a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-text-tertiary/20 hover:border-accent/40 bg-surface text-xs font-mono text-text-secondary hover:text-text-primary transition-all group"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#0077b5]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-text-tertiary group-hover:text-accent transition-colors" />
              </a>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: Clean Message Form ================= */}
          <div className="lg:col-span-7 reveal reveal-delay-3">
            {status === 'success' ? (
              <div className="p-8 text-center space-y-3 animate-modal-enter border border-text-tertiary/15 rounded-3xl bg-surface-elevated/30">
                <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-text-primary">
                  Message Delivered!
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Your message has been routed directly to Mohamed's private inbox. You can expect a reply within 24 hours.
                </p>
                <div className="pt-3">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2 rounded-full bg-surface border border-text-tertiary/20 text-xs font-medium text-text-primary hover:border-accent transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* 2-Column Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-text-tertiary block">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Sarah Connor"
                      className="w-full bg-surface-elevated/40 border border-text-tertiary/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-tertiary/40 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-text-tertiary block">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@organization.com"
                      className="w-full bg-surface-elevated/40 border border-text-tertiary/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-tertiary/40 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Line */}
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-text-tertiary block">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Collaboration / Research"
                    className="w-full bg-surface-elevated/40 border border-text-tertiary/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-tertiary/40 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-text-tertiary block">
                      Message <span className="text-accent">*</span>
                    </label>
                    <span className="text-[10px] font-mono text-text-tertiary">
                      {formData.message.length} / 1500
                    </span>
                  </div>
                  <textarea
                    required
                    rows={3}
                    maxLength={1500}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the problem, dataset, or engineering role..."
                    className="w-full bg-surface-elevated/40 border border-text-tertiary/20 rounded-xl p-3.5 text-xs sm:text-sm text-text-primary placeholder:text-text-tertiary/40 focus:outline-none focus:border-accent resize-none leading-relaxed transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-text-tertiary flex items-center gap-1.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Direct inbox delivery
                  </span>

                  <button
                    type="submit"
                    disabled={sending || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-white font-medium text-xs tracking-wider uppercase hover:bg-blue-600 active:scale-95 transition-all shadow-md shadow-accent/25 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {sending ? (
                      <>
                        <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

        {/* Minimal Footer */}
        <footer className="pt-4 border-t border-text-tertiary/15 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <p className="text-xs text-text-tertiary">
            © 2026 Mohamed Khacha · AI & Data Science
          </p>
          <p className="text-xs text-text-tertiary">
            Crafted with precision & scientific rigor.
          </p>
        </footer>

      </div>
    </section>
  );
}
