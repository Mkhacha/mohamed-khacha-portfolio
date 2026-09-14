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
      className="w-full py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-surface text-text-primary overflow-hidden transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="reveal flex items-center justify-between border-b border-text-tertiary/15 pb-6 mb-12">
          <span className="inline-flex items-center gap-2 text-caption tracking-widest text-text-tertiary uppercase font-mono">
            <span className="w-8 h-[1px] bg-accent inline-block" />
            01 / Flagship Project
          </span>
          <span className="text-caption text-text-tertiary tracking-widest uppercase hidden sm:inline-block font-mono">
            CPM-11K Benchmark · DPSP Tinghir
          </span>
        </div>

        {/* Compact Spotlight Card (Default State) */}
        <div className="reveal reveal-delay-1 relative bg-surface-elevated/80 border border-text-tertiary/15 hover:border-accent/40 rounded-3xl p-8 sm:p-10 lg:p-12 backdrop-blur-xl transition-all duration-500 shadow-2xl shadow-black/5 overflow-hidden group">
          {/* Animated top shimmer border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Ambient radial blur glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/20 transition-all duration-700" />
          
          <div className="relative z-10">
            {/* Top row: Badges & Live Metrics */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-mono tracking-wide">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping inline-block" />
                <span>Flagship Benchmark · Biomedical NLP</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-text-tertiary">
                <span className="px-2.5 py-1 rounded-md bg-surface border border-text-tertiary/15">
                  11,000+ Papers
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface border border-text-tertiary/15">
                  10 Architectures
                </span>
                <span className="px-2.5 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-semibold">
                  0.52 AUC Limit
                </span>
              </div>
            </div>

            {/* Middle Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8">
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary tracking-tight leading-[1.1]">
                  The Semantic Ceiling.
                  <span 
                    className="block text-gradient-accent mt-2 text-2xl sm:text-3xl md:text-[2.25rem]"
                    style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}
                  >
                    When science is rigged, but the text is clean.
                  </span>
                </h2>
                
                <p className="mt-5 text-base sm:text-lg text-text-secondary leading-relaxed font-light">
                  Most NLP fraud detectors operate under the flawed premise that scientific misconduct always exposes itself in vocabulary.
                  Benchmarked across 11,000+ curated oncology publications at DPSP Tinghir, this project proves where transformer models encounter a hard semantic limit against organized paper mill cartels.
                </p>
              </div>

              {/* Creative Visual Mini-Comparison Widget */}
              <div className="lg:col-span-5 bg-surface/90 rounded-2xl p-5 sm:p-6 border border-text-tertiary/20 shadow-inner space-y-4">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-text-tertiary/15">
                  <span className="text-text-tertiary uppercase tracking-wider font-mono">Detection Paradox</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-text-secondary border border-text-tertiary/10">
                    CPM-11K Core Finding
                  </span>
                </div>

                {/* Content Fraud Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-text-primary font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Content Fraud (Caught)
                    </span>
                    <span className="font-mono font-semibold text-emerald-400">94.6%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-elevated rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[94.6%] shadow-sm shadow-emerald-400/50 transition-all duration-1000" />
                  </div>
                  <p className="text-[11px] text-text-tertiary">Syntactic anomalies & tortured phrases detected by PubMedBERT</p>
                </div>

                {/* Process Fraud Bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-accent font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      Process Fraud (The Ceiling)
                    </span>
                    <span className="font-mono font-semibold text-accent">52.4%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-elevated rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full w-[52.4%] shadow-sm shadow-accent/50 transition-all duration-1000" />
                  </div>
                  <p className="text-[11px] text-text-tertiary">Reviewer cartels produce pristine text: NLP drops to random chance</p>
                </div>
              </div>
            </div>

            {/* Bottom Interactive Actions Bar */}
            <div className="pt-6 border-t border-text-tertiary/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {/* Main Toggle Button */}
                <button
                  onClick={handleToggle}
                  aria-expanded={isExpanded}
                  className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer shadow-lg active:scale-95 ${
                    isExpanded 
                      ? 'bg-surface text-text-primary border border-accent/40 hover:bg-accent/10 shadow-accent/10' 
                      : 'bg-accent text-white hover:bg-accent/90 shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02]'
                  }`}
                >
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isExpanded ? 'bg-text-secondary' : 'bg-white'}`} />
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${isExpanded ? 'bg-text-secondary' : 'bg-white'}`} />
                  </span>
                  <span>{isExpanded ? 'Collapse Full Benchmark' : 'Explore Full Case Study & Benchmark'}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-500 ease-apple ${isExpanded ? 'rotate-180 text-accent' : 'translate-y-0.5'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2.2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Secondary GitHub Button */}
                <a
                  href="https://github.com/0khacha/semantic-ceiling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-surface border border-text-tertiary/20 text-text-primary text-sm font-medium hover:border-accent/40 hover:text-accent transition-all duration-300 group"
                >
                  <span>GitHub Repository</span>
                  <svg 
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <span className="text-xs text-text-tertiary font-mono hidden md:inline-block">
                {isExpanded ? 'Interactive deep dive active' : 'Click to reveal 3 bento metrics & comparative matrix'}
              </span>
            </div>
          </div>
        </div>

        {/* Animated Deep Dive Container (Smooth Reveal) */}
        <div
          className={`transition-all duration-700 ease-apple overflow-hidden ${
            isExpanded 
              ? 'max-h-[4000px] opacity-100 mt-10 pointer-events-auto' 
              : 'max-h-0 opacity-0 mt-0 pointer-events-none'
          }`}
        >
          {isExpanded && (
            <div className="space-y-12 animate-modal-enter pt-4">
              
              {/* Key Metrics Bento */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group bg-surface-elevated/70 border border-text-tertiary/15 hover:border-accent/40 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-caption text-text-tertiary tracking-widest uppercase block mb-3 font-mono">Corpus Built</span>
                  <div ref={articleCountRef} className="text-4xl md:text-5xl font-bold text-accent stat-glow tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                    {articleCount.toLocaleString()}+
                  </div>
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                    Curated oncology publications in CPM-11K, cross-referenced for content and operational integrity.
                  </p>
                </div>

                <div className="group bg-surface-elevated/70 border border-text-tertiary/15 hover:border-accent/40 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-caption text-text-tertiary tracking-widest uppercase block mb-3 font-mono">Models Evaluated</span>
                  <div ref={archCountRef} className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                    {archCount}
                  </div>
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                    Architectures tested under identical benchmark conditions, from n-gram TF-IDF to specialized PubMedBERT.
                  </p>
                </div>

                <div className="group bg-surface-elevated/70 border border-text-tertiary/15 hover:border-accent/40 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-caption text-text-tertiary tracking-widest uppercase block mb-3 font-mono">Discovery</span>
                  <div className="text-4xl md:text-5xl font-bold text-accent stat-glow tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                    0.52 AUC
                  </div>
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                    Random chance barrier. Transformers cannot detect paper mill cartels that generate linguistically pristine text.
                  </p>
                </div>
              </div>

              {/* Core Comparative Matrix (Interactive Tab) */}
              <div className="border border-text-tertiary/15 bg-surface-elevated/40 rounded-3xl p-8 md:p-12 backdrop-blur-md hover:border-text-tertiary/25 transition-colors duration-300">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-text-tertiary/15">
                  <div>
                    <span className="text-caption text-accent tracking-widest uppercase font-mono font-medium">Comparative Analysis</span>
                    <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mt-1">Content Fraud vs. Process Fraud</h3>
                  </div>
                  <div className="flex bg-surface rounded-full p-1 border border-text-tertiary/20 self-start md:self-auto shadow-inner">
                    <button
                      onClick={() => setActiveTab('content')}
                      className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer active:scale-95 ${
                        activeTab === 'content'
                          ? 'bg-accent text-white shadow-md shadow-accent/25 scale-[1.02]'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      Content Fraud (Caught)
                    </button>
                    <button
                      onClick={() => setActiveTab('process')}
                      className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer active:scale-95 ${
                        activeTab === 'process'
                          ? 'bg-accent text-white shadow-md shadow-accent/25 scale-[1.02]'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      Process Fraud (The Ceiling)
                    </button>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  <div className="lg:col-span-7 space-y-6">
                    {activeTab === 'content' ? (
                      <div className="space-y-6 animate-modal-enter">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs uppercase tracking-wider font-mono">
                          ● Semantic Signature Detectable (~94% Precision)
                        </div>
                        <h4 className="text-2xl font-medium text-text-primary">
                          Fabricated data, plagiarized phrasing, synthetic hallucination.
                        </h4>
                        <p className="text-text-secondary text-base leading-relaxed">
                          When researchers fake results or clone abstracts, they introduce syntactic patterns, unusual synonym substitution (tortured phrases), or stylometric anomalies. Deep contextual transformers like SciBERT and PubMedBERT easily lock onto these micro-signals.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {['Tortured Phrases', 'Duplicated Hypotheses', 'Hallucinated Citations', 'High Perplexity'].map((tag) => (
                            <span key={tag} className="text-xs px-3 py-1.5 rounded-lg bg-surface border border-text-tertiary/20 text-text-secondary hover:border-accent/40 hover:text-text-primary transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6 animate-modal-enter">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs uppercase tracking-wider font-mono">
                          ● Zero Semantic Residual (Hard Ceiling at ~50%)
                        </div>
                        <h4 className="text-2xl font-medium text-text-primary">
                          Rigged peer review, citation rings, and commercial paper mills.
                        </h4>
                        <p className="text-text-secondary text-base leading-relaxed">
                          The paper is authored by real humans or elite editing rings. The prose is flawless. The vocabulary is indistinguishable from Nobel-winning oncological studies. The crime is in the coordination—not the vocabulary. No amount of NLP model scaling can solve this without network-level provenance graphs.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {['Reviewer Cartels', 'Editorial Compromise', 'Clean Text Signature', 'Network-Level Vulnerability'].map((tag) => (
                            <span key={tag} className="text-xs px-3 py-1.5 rounded-lg bg-surface border border-accent/20 text-text-primary hover:border-accent/50 transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Visual Metric Spectrum Card */}
                  <div className="lg:col-span-5 bg-surface rounded-2xl p-6 border border-text-tertiary/15 shadow-sm">
                    <span className="text-xs text-text-tertiary uppercase tracking-wider block mb-4 font-mono">
                      Architecture Accuracy Spectrum
                    </span>
                    <div className="space-y-4">
                      {architectures.map((arch, idx) => {
                        const isCeiling = arch.type === 'ceiling';
                        const highlight = activeTab === 'process' ? isCeiling : !isCeiling;
                        return (
                          <div 
                            key={idx} 
                            className={`transition-all duration-300 ${highlight ? 'opacity-100' : 'opacity-30'}`}
                          >
                            <div className="flex justify-between items-center text-xs mb-1">
                              <span className={`font-medium transition-colors ${isCeiling ? 'text-accent' : 'text-text-primary'}`}>
                                {arch.name}
                              </span>
                              <span className="font-mono text-text-secondary">{arch.score}</span>
                            </div>
                            <div className="w-full h-1.5 bg-surface-elevated rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full transition-all duration-1000 ease-apple ${
                                  isCeiling ? 'bg-accent shadow-sm shadow-accent/50' : 'bg-text-secondary'
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

              </div>

              {/* Supervision & Institutional Context */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-text-tertiary/15 pt-8">
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Provincial Health Delegation (DPSP Tinghir)
                  </p>
                  <p className="text-caption text-text-tertiary mt-1">
                    Internship Project · Supervised by Mohammed Kasri (Academic) & Aya El-Ommal (On-site) · Summer 2026
                  </p>
                </div>

                <a
                  href="https://github.com/0khacha/semantic-ceiling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:underline"
                >
                  <span>github.com/0khacha/semantic-ceiling</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Bottom Collapse Action */}
              <div className="flex justify-center pt-4 pb-2">
                <button
                  onClick={handleCollapse}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-surface border border-text-tertiary/20 text-xs font-mono uppercase tracking-wider text-text-secondary hover:text-text-primary hover:border-accent/40 transition-all duration-300 shadow-sm cursor-pointer active:scale-95 group"
                >
                  <svg 
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 text-accent" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                  <span>Collapse Full Benchmark</span>
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
