import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const industryData = [
  {
    company: 'DPSP Tinghir (Health Ministry)',
    period: 'Summer 2026',
    role: 'AI & Data Science Intern',
    location: 'Tinghir',
    summary:
      'Curated an oncology corpus of 11,000+ papers, benchmarked 10 NLP models, and uncovered semantic limits in detecting scientific paper mills.',
    tags: ['NLP', 'PubMedBERT', 'SciBERT', 'Benchmarking'],
  },
  {
    company: 'Managem Group (SMI Mining)',
    period: 'Aug – Sep 2025',
    role: 'Data Science Intern',
    location: 'Tinghir',
    summary:
      'Engineered supervised ML pipelines across 36 geochemical variables to forecast silver-ore deposit potential in exploration drill assays.',
    tags: ['Scikit-learn', 'Feature Eng.', 'Geochemistry', 'Classification'],
  },
  {
    company: 'Expert Sud Agency',
    period: 'Apr – May 2024',
    role: 'Full-Stack Developer Intern',
    location: 'Agadir',
    summary:
      'Architected full-stack inventory management web platform with React.js & Laravel, reducing operational processing delays by 20%.',
    tags: ['React.js', 'Laravel', 'REST APIs', 'MySQL'],
  },
  {
    company: 'Managem Group (SMI Mining)',
    period: 'Aug 2023',
    role: 'Database Systems Intern',
    location: 'Tinghir',
    summary:
      'Optimized schema normalization and automated weekly ETL extraction pipelines with PL/SQL, boosting query execution efficiency by 15%.',
    tags: ['Oracle DB', 'PL/SQL', 'ETL', 'Automation'],
  },
];

const educationData = [
  {
    school: 'ENSIASDT — National School of AI & Data Sciences',
    period: '2024 – Present',
    degree: 'State Engineering Degree (Bac+5)',
    major: 'Data Science, Big Data & Artificial Intelligence',
    location: 'Taroudant',
    badge: 'Current Degree',
    summary:
      'Advanced specialization in neural architectures, distributed computing (Spark, Kafka, Hadoop), mathematical optimization, and applied AI research.',
    tags: ['Deep Learning', 'Distributed Systems', 'Transformers', 'Big Data'],
  },
  {
    school: 'EST Guelmim — Superior School of Technology',
    period: '2022 – 2024',
    degree: 'University Diploma of Technology (DUT)',
    major: 'Computer Engineering (Génie Informatique)',
    location: 'Guelmim',
    badge: 'Graduated',
    summary:
      'Comprehensive foundation covering data structures, object-oriented programming (C++, Java), relational database administration, and network architecture.',
    tags: ['Data Structures', 'Algorithms', 'C/C++', 'Java', 'SQL'],
  },
];

export default function Timeline() {
  const sectionRef = useScrollReveal();
  const [tab, setTab] = useState('industry');

  return (
    <section 
      id="journey" 
      ref={sectionRef} 
      className="w-full min-h-screen lg:h-screen flex flex-col justify-between py-8 sm:py-10 lg:py-8 px-6 md:px-12 lg:px-16 bg-surface text-text-primary relative overflow-hidden"
    >
      {/* Ambient background light wash */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        
        {/* Top Block: Label & Cinematic Headline */}
        <div>
          {/* Section Header */}
          <div className="reveal flex items-center justify-between border-b border-text-tertiary/15 pb-4 mb-6">
            <span className="inline-flex items-center gap-3 text-caption tracking-widest text-text-tertiary uppercase font-mono">
              <span className="w-8 h-[1px] bg-accent inline-block animate-hairline" />
              03 / Trajectory
            </span>
            <span className="text-caption text-text-tertiary tracking-widest uppercase hidden sm:inline-block font-mono text-xs">
              Industrial ML & Academic Foundation
            </span>
          </div>

          {/* Cinematic Headline & Thesis */}
          <div className="max-w-4xl mb-6">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight leading-[1.1] reveal reveal-delay-1">
              Experience & Education.
              <span 
                className="block text-gradient-accent mt-1.5 text-xl sm:text-3xl lg:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}
              >
                The path from fundamental engineering to applied AI.
              </span>
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed font-light max-w-2xl reveal reveal-delay-2">
              Engineering internships across healthcare benchmarks, industrial geochemistry, and logistics platforms, grounded in graduate training in Data Science & Big Data.
            </p>
          </div>

          {/* Minimalist Line Switcher */}
          <div className="reveal reveal-delay-2 flex flex-wrap items-center gap-8 border-b border-text-tertiary/10 pb-2 mb-6">
            <button
              onClick={() => setTab('industry')}
              className={`text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 cursor-pointer relative pb-2 ${
                tab === 'industry'
                  ? 'text-accent font-semibold'
                  : 'text-text-tertiary hover:text-text-primary'
              }`}
            >
              01 / Industry Experience ({industryData.length})
              {tab === 'industry' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              )}
            </button>
            <button
              onClick={() => setTab('education')}
              className={`text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 cursor-pointer relative pb-2 ${
                tab === 'education'
                  ? 'text-accent font-semibold'
                  : 'text-text-tertiary hover:text-text-primary'
              }`}
            >
              02 / Academic Foundation ({educationData.length})
              {tab === 'education' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              )}
            </button>
          </div>
        </div>

        {/* Middle Block: Open Trajectory Grid (Fits on Screen) */}
        <div className="reveal reveal-delay-3 flex-1 flex items-center my-auto">
          {tab === 'industry' ? (
            <div key="industry" className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 animate-modal-enter">
              {industryData.map((item, idx) => (
                <div
                  key={idx}
                  style={{ animationDelay: `${idx * 50}ms` }}
                  className="group py-3 px-1 sm:px-3 border-b border-text-tertiary/15 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between space-y-2 relative"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs mb-1 font-mono">
                      <span className="text-accent font-medium">
                        {item.period}
                      </span>
                      <span className="text-text-tertiary text-[11px]">
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug">
                      {item.company}
                    </h3>
                    <p className="text-xs font-medium text-text-secondary">
                      {item.role}
                    </p>

                    <p className="text-xs text-text-tertiary leading-relaxed mt-1.5 line-clamp-2">
                      {item.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-surface-subtle/70 text-text-secondary font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div key="education" className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 animate-modal-enter py-4">
              {educationData.map((item, idx) => (
                <div
                  key={idx}
                  style={{ animationDelay: `${idx * 80}ms` }}
                  className="group py-4 px-2 sm:px-4 border-b border-text-tertiary/15 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between space-y-3 relative"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2 text-xs font-mono">
                      <span className="text-accent font-medium">
                        {item.period}
                      </span>
                      <span className="text-accent text-[11px] font-medium px-2 py-0.5 rounded-full bg-accent/10">
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                        {item.school}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-text-primary mt-0.5">
                        {item.degree}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {item.major}
                      </p>
                    </div>

                    <p className="text-xs text-text-tertiary leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-0.5 rounded-full bg-surface-subtle/70 text-text-secondary font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Hairline Divider */}
        <div className="section-divider mt-4 max-w-7xl mx-auto w-full" />
      </div>
    </section>
  );
}
