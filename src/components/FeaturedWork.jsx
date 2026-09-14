import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

export default function FeaturedWork() {
  const containerRef = useScrollReveal();
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

  return (
    <section 
      id="featured" 
      ref={containerRef} 
      className="w-full py-32 md:py-48 px-6 md:px-12 lg:px-16 bg-surface text-text-primary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Tag */}
        <div className="reveal flex items-center justify-between border-b border-text-tertiary/15 pb-8 mb-16 md:mb-24">
          <span className="inline-flex items-center gap-2 text-caption tracking-widest text-text-tertiary uppercase">
            <span className="w-8 h-[1px] bg-accent inline-block" />
            01 / Flagship Project
          </span>
          <span className="text-caption text-text-tertiary tracking-widest uppercase hidden sm:inline-block">
            CPM-11K Benchmark · DPSP Tinghir
          </span>
        </div>

        {/* Title & Core Thesis */}
        <div className="max-w-5xl mb-20 md:mb-28">
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-semibold text-text-primary leading-[1.05] tracking-tight reveal reveal-delay-1">
            The Semantic Ceiling.
            <span 
              className="block text-gradient-accent mt-3 text-[2rem] sm:text-[2.75rem] md:text-[3.5rem]"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}
            >
              When science is rigged, but the text is clean.
            </span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-text-secondary leading-relaxed font-light max-w-3xl reveal reveal-delay-2">
            Most NLP fraud detectors operate under a flawed assumption: that scientific deceit always betrays itself through words. This internship benchmark project explores where that assumption breaks down.
          </p>
        </div>

        {/* Key Metrics Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 reveal reveal-delay-2">
          <div className="group bg-surface-elevated/70 border border-text-tertiary/15 hover:border-accent/40 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-caption text-text-tertiary tracking-widest uppercase block mb-3">Corpus Built</span>
            <div ref={articleCountRef} className="text-4xl md:text-5xl font-bold text-accent stat-glow tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
              {articleCount.toLocaleString()}+
            </div>
            <p className="text-sm text-text-secondary mt-3 leading-relaxed">
              Curated oncology publications in CPM-11K, cross-referenced for content and operational integrity.
            </p>
          </div>

          <div className="group bg-surface-elevated/70 border border-text-tertiary/15 hover:border-accent/40 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-caption text-text-tertiary tracking-widest uppercase block mb-3">Models Evaluated</span>
            <div ref={archCountRef} className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
              {archCount}
            </div>
            <p className="text-sm text-text-secondary mt-3 leading-relaxed">
              Architectures tested under identical benchmark conditions, from n-gram TF-IDF to specialized PubMedBERT.
            </p>
          </div>

          <div className="group bg-surface-elevated/70 border border-text-tertiary/15 hover:border-accent/40 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-caption text-text-tertiary tracking-widest uppercase block mb-3">Discovery</span>
            <div className="text-4xl md:text-5xl font-bold text-accent stat-glow tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
              0.52 AUC
            </div>
            <p className="text-sm text-text-secondary mt-3 leading-relaxed">
              Random chance barrier. Transformers cannot detect paper mill cartels that generate linguistically pristine text.
            </p>
          </div>
        </div>

        {/* Core Comparative Matrix (Interactive Tab) */}
        <div className="border border-text-tertiary/15 bg-surface-elevated/40 rounded-3xl p-8 md:p-12 mb-24 backdrop-blur-md reveal reveal-delay-3 hover:border-text-tertiary/25 transition-colors duration-300">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-text-tertiary/15">
            <div>
              <span className="text-caption text-accent tracking-widest uppercase font-medium">Comparative Analysis</span>
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs uppercase tracking-wider">
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs uppercase tracking-wider">
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
              <span className="text-xs text-text-tertiary uppercase tracking-wider block mb-4">
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

        {/* Supervision & Repository Footer Row */}
        <div className="reveal reveal-delay-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-text-tertiary/15 pt-10">
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
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-text-primary text-surface font-medium text-sm hover:bg-accent hover:text-white transition-all duration-300 group"
          >
            <span>View Project on GitHub</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="section-divider mt-24 max-w-7xl mx-auto" />
      </div>
    </section>
  );
}
