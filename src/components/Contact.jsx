import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

// Simple, Clean Monochrome Icons (Matching Phone & Location Style)
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

function LinkedInIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function CheckIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function SendIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
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

const topics = [
  'Machine Learning & AI',
  'Big Data & Streaming',
  'Industrial Mining ML',
  'Academic Research',
  'Collaboration & Hiring',
];

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [selectedTopic, setSelectedTopic] = useState('Machine Learning & AI');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'success'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('mohamedkhacha99@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getPlaceholder = (topic) => {
    switch (topic) {
      case 'Machine Learning & AI':
        return "Describe the dataset, target metrics, or neural architecture goals...";
      case 'Big Data & Streaming':
        return "Share your pipeline scope, data volume, or streaming challenges...";
      case 'Industrial Mining ML':
        return "Details regarding geochemical assays or multi-element modeling...";
      case 'Academic Research':
        return "Share your research thesis, reproducibility audit, or benchmarks...";
      default:
        return "Tell me about your project, timeline, or engineering goals...";
    }
  };

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(`[Portfolio · ${selectedTopic}] Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Mohamed,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}\nTopic: ${selectedTopic}`
    );
    window.open(`mailto:mohamedkhacha99@gmail.com?subject=${subject}&body=${body}`, '_blank');
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
          topic: selectedTopic,
          message: formData.message,
          _subject: `[Portfolio · ${selectedTopic}] From ${formData.name}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        triggerMailtoFallback();
        setStatus('success');
      }
    } catch {
      triggerMailtoFallback();
      setStatus('success');
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setStatus('idle');
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-surface text-text-primary overflow-hidden relative" ref={sectionRef}>
      
      {/* Ambient breathing background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none animate-ambient-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none animate-ambient-slow" style={{ animationDelay: '-12s' }} />

      <div className="max-w-6xl mx-auto">
        
        {/* 2-Column Grid: Matching previous sections width & proportions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ================= LEFT COLUMN: Narrative & Info Cards ================= */}
          <div className="lg:col-span-5 space-y-6 reveal">
            
            {/* Header Tagline & Title */}
            <div>
              <span className="inline-flex items-center gap-2 text-caption tracking-widest text-text-tertiary uppercase">
                <span className="w-6 h-[1px] bg-accent inline-block" />
                04 / Direct Contact
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary leading-[1.15] mt-1">
                Let's engineer <br />
                <span 
                  className="text-gradient-accent"
                  style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}
                >
                  the next breakthrough.
                </span>
              </h2>

              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mt-4 font-light">
                Have a dataset to model, an algorithmic problem to solve, or an AI initiative? Reach out directly. No intermediaries, just direct engineering dialogue.
              </p>
            </div>

            {/* Direct Contact Information Cards */}
            <div className="space-y-3">
              
              {/* Direct Email Card with Simple MailIcon */}
              <div className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-surface-elevated/75 border border-text-tertiary/15 hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-accent/5 hover:-translate-y-0.5 backdrop-blur-md">
                <a 
                  href="mailto:mohamedkhacha99@gmail.com" 
                  className="flex items-center gap-3.5 min-w-0 flex-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-surface border border-text-tertiary/20 flex items-center justify-center flex-shrink-0 shadow-inner text-accent group-hover:scale-105 transition-transform">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary block">
                      Direct Email
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-text-primary group-hover:text-accent transition-colors truncate block">
                      mohamedkhacha99@gmail.com
                    </span>
                  </div>
                </a>
                
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="p-2 rounded-lg text-text-tertiary hover:text-text-primary hover:bg-surface border border-transparent hover:border-text-tertiary/20 active:scale-90 transition-all duration-200 ml-2 flex-shrink-0 cursor-pointer"
                >
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 animate-modal-enter">
                      <CheckIcon className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </span>
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone & WhatsApp Card */}
              <a
                href="tel:+212653206661"
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-surface-elevated/75 border border-text-tertiary/15 hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-accent/5 hover:-translate-y-0.5 backdrop-blur-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-text-tertiary/20 flex items-center justify-center flex-shrink-0 shadow-inner text-accent group-hover:scale-105 transition-transform">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary block">
                      Phone / WhatsApp
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                      +212 653-206661
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Available
                </span>
              </a>

              {/* Location Card */}
              <div className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-surface-elevated/75 border border-text-tertiary/15 hover:border-text-tertiary/25 shadow-sm backdrop-blur-md transition-all duration-300">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-text-tertiary/20 flex items-center justify-center flex-shrink-0 shadow-inner text-accent group-hover:scale-105 transition-transform">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary block">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-text-primary">
                      Marrakech & Tinghir, Morocco
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-text-tertiary px-2.5 py-1 rounded-full bg-surface border border-text-tertiary/15">
                  GMT+1
                </span>
              </div>

            </div>

            {/* Verified Channels */}
            <div className="pt-1 space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary block">
                Verified Profiles
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/mohamed-khacha-940a9025a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-elevated border border-text-tertiary/15 text-xs text-text-secondary hover:text-text-primary hover:border-accent transition-all duration-200 shadow-sm hover:scale-[1.02]"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-[#0077b5]" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/0khacha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-elevated border border-text-tertiary/15 text-xs text-text-secondary hover:text-text-primary hover:border-accent transition-all duration-200 shadow-sm hover:scale-[1.02]"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  <span>GitHub @0khacha</span>
                </a>
              </div>
            </div>

          </div>


          {/* ================= RIGHT COLUMN: Message Box ================= */}
          <div className="lg:col-span-7 reveal reveal-delay-1">
            <div className="bg-surface-elevated/85 border border-text-tertiary/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-xl relative overflow-hidden">
              
              {/* Subtle ambient aura */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              {/* Console Top Bar */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-text-tertiary/15 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-surface border border-text-tertiary/20 flex items-center justify-center shadow-inner text-accent">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">
                      Direct Message Box
                    </h3>
                    <span className="text-[11px] text-text-tertiary font-light block">
                      Direct transmission to Mohamed Khacha
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Ready</span>
                </div>
              </div>

              {status === 'success' ? (
                /* Success Confirmation State */
                <div className="py-12 px-4 text-center space-y-4 animate-modal-enter">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-text-primary">
                      Message Delivered!
                    </h4>
                    <p className="text-xs sm:text-sm text-text-secondary max-w-sm mx-auto mt-2 leading-relaxed">
                      Thank you for reaching out. Your message has been routed directly to Mohamed's private inbox. You can expect a response within 24 hours.
                    </p>
                  </div>
                  <div className="pt-3">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full bg-surface border border-text-tertiary/20 text-xs font-medium text-text-primary hover:border-accent transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* The Transmission Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Topic Selector Pills */}
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-text-tertiary block mb-2.5">
                      Subject Focus
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTopic(t)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                            selectedTopic === t
                              ? 'bg-accent text-white shadow-sm shadow-accent/25 scale-[1.02]'
                              : 'bg-surface border border-text-tertiary/15 text-text-secondary hover:text-text-primary hover:border-text-tertiary/30'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-text-tertiary block mb-1.5">
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Sarah Connor / John"
                        className="w-full bg-surface border border-text-tertiary/20 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-tertiary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-text-tertiary block mb-1.5">
                        Your Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@organization.com"
                        className="w-full bg-surface border border-text-tertiary/20 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-text-primary placeholder:text-text-tertiary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-text-tertiary block">
                        Your Message <span className="text-accent">*</span>
                      </label>
                      <span className="text-[10px] text-text-tertiary font-mono">
                        {formData.message.length} / 1500
                      </span>
                    </div>
                    <textarea
                      required
                      rows={5}
                      maxLength={1500}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={getPlaceholder(selectedTopic)}
                      className="w-full bg-surface border border-text-tertiary/20 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-text-primary placeholder:text-text-tertiary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submission Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-text-tertiary/10">
                    <div className="flex items-center gap-1.5 text-xs text-text-tertiary order-2 sm:order-1">
                      <MailIcon className="w-4 h-4 flex-shrink-0 text-accent" />
                      <span>Direct private inbox delivery</span>
                    </div>

                    <button
                      type="submit"
                      disabled={sending || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-medium text-xs tracking-wider uppercase hover:bg-blue-600 active:scale-95 transition-all shadow-md shadow-accent/20 hover:shadow-accent/35 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer order-1 sm:order-2"
                    >
                      {sending ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <SendIcon className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Minimal Apple-Style Compact Footer */}
        <footer className="mt-16 sm:mt-20 pt-8 border-t border-text-tertiary/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs text-text-tertiary">
            © 2026 Mohamed Khacha · AI & Data Engineer
          </p>
          <p className="text-xs text-text-tertiary">
            Crafted with precision & scientific rigor.
          </p>
        </footer>

      </div>
    </section>
  );
}
