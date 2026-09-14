import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

export default function FeaturedWork() {
  const containerRef = useScrollReveal();
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('process');

  const { count: articleCount, ref: articleCountRef } = useCountUp(11000, 2000, true);
  const { count: archCount, ref: archCountRef } = useCountUp(10, 1400, true);

  const architectures = [
    { name: 'TF-IDF + SVM', tier: 'Classical Baseline', score: '61.2%', type: 'content' },
    { name: 'Word2Vec + LogReg', tier: 'Dense Embeddings', score: '68.4%', type: 'content' },
    { name: 'BiLSTM', tier: 'Recurrent Neural Net', score: '77.8%', type: 'content' },
    { name: 'Clinical BERT', tier: 'Transformer Base', score: '88.5%', type: 'content' },
    { name: 'SciBERT', tier: 'Domain Transformer', score: '93.1%', type: 'content' },
    { name: 'PubMedBERT', tier: 'SOTA Biomedical', score: '94.6%', type: 'content' },
    { name: 'PubMedBERT on Process Fraud', tier: 'The Breakthrough Test', score: '52.4%', type: 'ceiling' },
  ];

  const handleToggle = () => {
    if (isExpanded) {
      handleCollapse();
    } else {
      setIsExpanded(true);
    }
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    const section = document.getElementById('featured');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="featured" 
      ref={containerRef} 
      className="w-full py-20 md:py-32 px-6 md:px-12 lg:px-16 bg-surface text-text-primary relative overflow-hidden transition-all duration-500"
    >
      {/* Ambient background light wash (Atmospheric & borderless) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[350px] bg-gradient-to-r from-accent/10 via-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Minimalist Section Label */}
        <div className="reveal flex items-center justify-between pb-6 mb-12">
          <span className="inline-flex items-center gap-3 text-caption tracking-widest text-text-tertiary uppercase font-mono">
            <span className="w-8 h-[1px] bg-accent inline-block animate-hairline" />
            01 / Flagship Project
          </span>
          <span className="text-caption text-text-tertiary tracking-widest uppercase hidden sm:inline-block font-mono text-xs">
            CPM-11K Benchmark · DPSP Tinghir
          </span>
        </div>

        {/* Floating Typography & Core Thesis (Open Canvas) */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-text-primary tracking-tight leading-[1.08] reveal reveal-delay-1">
            The Semantic Ceiling.
            <span 
              className="block text-gradient-accent mt-3 text-2xl sm:text-4xl md:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}
            >
              When science is rigged, but the text is clean.
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed font-light max-w-3xl reveal reveal-delay-2">
            Most NLP fraud detectors assume scientific misconduct leaves linguistic scars. At DPSP Tinghir, I curated 11,000+ publications to expose where transformer models hit a mathematical dead-end against organized paper mills.
          </p>
        </div>

        {/* Minimalist Open Numbers Bar (No boxed cards, no borders) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 py-4 my-8 reveal reveal-delay-2">
          <div className="space-y-1.5">
            <div ref={articleCountRef} className="text-4xl sm:text-5xl font-bold text-accent stat-glow tracking-tight font-mono">
              {articleCount.toLocaleString()}+
            </div>
            <div className="text-sm font-medium text-text-primary">Curated Oncology Papers</div>
            <p className="text-xs text-text-tertiary leading-relaxed">Cross-referenced for content and operational integrity</p>
          </div>

          <div className="space-y-1.5">
            <div ref={archCountRef} className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight font-mono">
              {archCount}
            </div>
            <div className="text-sm font-medium text-text-primary">NLP Architectures Tested</div>
            <p className="text-xs text-text-tertiary leading-relaxed">From n-gram baselines to PubMedBERT transformers</p>
          </div>

          <div className="space-y-1.5">
            <div className="text-4xl sm:text-5xl font-bold text-accent stat-glow tracking-tight font-mono">
              0.52 AUC
            </div>
            <div className="text-sm font-medium text-text-primary">The Semantic Barrier</div>
            <p className="text-xs text-text-tertiary leading-relaxed">Random chance limit on linguistically pristine cartels</p>
          </div>
        </div>

        {/* Creative Kinetic Trigger (No bulky rectangular box!) */}
        <div className="flex flex-wrap items-center gap-6 pt-4 pb-2 reveal reveal-delay-3">
          <button
            onClick={handleToggle}
            className="group inline-flex items-center gap-3.5 text-sm font-medium text-text-primary hover:text-accent transition-all duration-300 cursor-pointer"
          >
            <span className="w-9 h-9 rounded-full bg-accent/10 group-hover:bg-accent group-hover:text-white flex items-center justify-center transition-all duration-300 text-accent shadow-sm">
              <svg 
                className={`w-4 h-4 transition-transform duration-500 ease-apple ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2.2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <span className="tracking-wide">
              {isExpanded ? 'Fold benchmark breakdown' : 'Unfold complete benchmark analysis & model spectrum'}
            </span>
            <span className="w-8 h-[1px] bg-text-tertiary/25 group-hover:w-14 group-hover:bg-accent transition-all duration-300 inline-block" />
          </button>

          <a
            href="https://github.com/0khacha/semantic-ceiling"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-tertiary hover:text-accent transition-colors"
          >
            <span>github.com/0khacha/semantic-ceiling</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Expandable Benchmark Breakdown (Fluid, Open & Borderless) */}
        <div
          className={`transition-all duration-700 ease-apple overflow-hidden ${
            isExpanded 
              ? 'max-h-[3000px] opacity-100 mt-14 pointer-events-auto' 
              : 'max-h-0 opacity-0 mt-0 pointer-events-none'
          }`}
        >
          {isExpanded && (
            <div className="space-y-12 animate-modal-enter pt-4">
              
              {/* Minimalist Line Tabs */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-10 border-b border-text-tertiary/10 pb-3">
                <button
                  onClick={() => setActiveTab('process')}
                  className={`text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 cursor-pointer relative pb-3 ${
                    activeTab === 'process'
                      ? 'text-accent font-semibold'
                      : 'text-text-tertiary hover:text-text-primary'
                  }`}
                >
                  01 / The Process Fraud Ceiling
                  {activeTab === 'process' && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('content')}
                  className={`text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 cursor-pointer relative pb-3 ${
                    activeTab === 'content'
                      ? 'text-emerald-400 font-semibold'
                      : 'text-text-tertiary hover:text-text-primary'
                  }`}
                >
                  02 / Content Fraud Signatures
                  {activeTab === 'content' && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  )}
                </button>
              </div>

              {/* Dynamic Tab Body & Model Spectrum Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                
                {/* Left: Tab Text Narrative */}
                <div className="lg:col-span-6 space-y-6">
                  {activeTab === 'process' ? (
                    <div className="space-y-5 animate-modal-enter">
                      <div className="inline-flex items-center gap-2 text-accent text-xs font-mono tracking-wider uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Hard Ceiling at ~50% (Random Chance)
                      </div>
                      <h3 className="text-xl sm:text-2xl font-medium text-text-primary leading-snug">
                        Rigged peer review, citation rings, and commercial paper mills.
                      </h3>
                      <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                        The paper is authored by real humans or elite editing rings. The prose is flawless. The vocabulary is indistinguishable from Nobel-winning oncological studies. The crime is in the coordination—not the vocabulary. No amount of NLP model scaling can solve this without network-level provenance graphs.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {['Reviewer Cartels', 'Editorial Compromise', 'Clean Text Signature', 'Network-Level Vulnerability'].map((tag) => (
                          <span key={tag} className="text-xs px-3 py-1 rounded-full bg-surface-subtle text-text-secondary font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-5 animate-modal-enter">
                      <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono tracking-wider uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Semantic Signature Detectable (~94% Precision)
                      </div>
                      <h3 className="text-xl sm:text-2xl font-medium text-text-primary leading-snug">
                        Fabricated data, plagiarized phrasing, and synthetic hallucination.
                      </h3>
                      <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                        When researchers fake results or clone abstracts, they introduce syntactic patterns, unusual synonym substitution (tortured phrases), or stylometric anomalies. Deep contextual transformers like SciBERT and PubMedBERT easily lock onto these micro-signals.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {['Tortured Phrases', 'Duplicated Hypotheses', 'Hallucinated Citations', 'High Perplexity'].map((tag) => (
                          <span key={tag} className="text-xs px-3 py-1 rounded-full bg-surface-subtle text-text-secondary font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Floating Architecture Accuracy Spectrum (No Box!) */}
                <div className="lg:col-span-6 space-y-4 pt-1">
                  <div className="text-xs font-mono text-text-tertiary uppercase tracking-wider pb-2 flex justify-between items-center">
                    <span>Benchmark Architecture Spectrum</span>
                    <span className="text-[11px] text-text-tertiary/70">Macro AUC</span>
                  </div>

                  <div className="space-y-3.5">
                    {architectures.map((arch, idx) => {
                      const isCeiling = arch.type === 'ceiling';
                      const highlight = activeTab === 'process' ? isCeiling : !isCeiling;
                      return (
                        <div 
                          key={idx} 
                          className={`transition-all duration-300 ${highlight ? 'opacity-100' : 'opacity-25'}`}
                        >
                          <div className="flex justify-between items-center text-xs mb-1 font-mono">
                            <span className={isCeiling ? 'text-accent font-semibold' : 'text-text-secondary'}>
                              {arch.name}
                            </span>
                            <span className={isCeiling ? 'text-accent font-bold' : 'text-text-primary'}>
                              {arch.score}
                            </span>
                          </div>
                          <div className="w-full h-1 bg-surface-subtle rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-1000 ease-apple ${
                                isCeiling 
                                  ? 'bg-accent shadow-[0_0_8px_rgba(59,130,246,0.8)]' 
                                  : 'bg-text-secondary/60'
                              }`}
                              style={{ width: arch.score }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Supervision Footnote & Fold Trigger (Clean & Open) */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-text-tertiary/10 pt-8 mt-12">
                <div className="text-xs text-text-tertiary space-y-1">
                  <p className="text-text-secondary font-medium">
                    Provincial Health Delegation (DPSP Tinghir)
                  </p>
                  <p>
                    Academic Supervisor: Mohammed Kasri · On-site Supervisor: Aya El-Ommal · Summer 2026
                  </p>
                </div>

                <button
                  onClick={handleCollapse}
                  className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-secondary hover:text-accent transition-colors cursor-pointer"
                >
                  <svg 
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1 text-accent" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                  <span>Fold breakdown</span>
                </button>
              </div>

            </div>
          )}
        </div>

        <div className="section-divider mt-20 max-w-7xl mx-auto" />
      </div>
    </section>
  );
}
