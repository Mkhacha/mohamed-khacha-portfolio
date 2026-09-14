import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const industryData = [
  {
    company: 'DPSP Tinghir (Health Ministry)',
    period: 'Summer 2026',
    role: 'AI & Data Science Intern',
    location: 'Tinghir',
    badge: 'Internship Project',
    highlight: 'CPM-11K Benchmark & Fraud Analysis',
    summary:
      'Curated an oncology corpus of 11,000+ papers, benchmarked 10 NLP models, and analyzed semantic limits in identifying scientific process fraud.',
    tags: ['NLP', 'PubMedBERT', 'SciBERT', 'Benchmarking', 'Python'],
  },
  {
    company: 'Managem Group (SMI Mining)',
    period: 'Aug – Sep 2025',
    role: 'Data Science Intern',
    location: 'Tinghir',
    badge: 'Industrial ML',
    highlight: 'Predictive Geochemistry ML',
    summary:
      'Engineered supervised ML models across 36 geochemical variables to forecast silver-ore deposit potential in drill samples.',
    tags: ['Scikit-learn', 'Feature Eng.', 'Geochemistry', 'Classification'],
  },
  {
    company: 'Expert Sud Agency',
    period: 'Apr – May 2024',
    role: 'Full-Stack Developer Intern',
    location: 'Agadir',
    badge: 'Web Systems',
    highlight: 'Centralized Logistics Platform',
    summary:
      'Architected full-stack inventory management web app with React.js & Laravel, reducing operational processing delays by 20%.',
    tags: ['React.js', 'Laravel', 'REST APIs', 'MySQL'],
  },
  {
    company: 'Managem Group (SMI Mining)',
    period: 'Aug 2023',
    role: 'Database Systems Intern',
    location: 'Tinghir',
    badge: 'Database Admin',
    highlight: 'Oracle ETL & Automation',
    summary:
      'Optimized schema normalization, wrote automated weekly extraction pipelines with PL/SQL, improving query efficiency by 15%.',
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
    highlight: 'Advanced Deep Learning & Big Data Systems',
    summary:
      'Advanced specialization in neural architectures, distributed computing (Spark, Kafka, Hadoop), mathematical optimization, and applied artificial intelligence research.',
    tags: ['Deep Learning', 'Distributed Systems', 'Transformers', 'Big Data'],
  },
  {
    school: 'EST Guelmim — Superior School of Technology',
    period: '2022 – 2024',
    degree: 'University Diploma of Technology (DUT)',
    major: 'Computer Engineering (Génie Informatique)',
    location: 'Guelmim',
    badge: 'Graduated',
    highlight: 'Software Architecture & Algorithmic Foundations',
    summary:
      'Comprehensive curriculum covering data structures, object-oriented programming (C++, Java), relational database management, and network architecture.',
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
      className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-surface text-text-primary"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Compact Header with Integrated Segmented Switch */}
        <div className="reveal flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-text-tertiary/15 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-caption tracking-widest text-text-tertiary uppercase">
              <span className="w-6 h-[1px] bg-accent inline-block" />
              03 / Trajectory
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight mt-1">
              Experience & Education
            </h2>
          </div>

          {/* Segmented Switcher */}
          <div className="inline-flex bg-surface-elevated p-1 rounded-full border border-text-tertiary/15 self-start sm:self-auto backdrop-blur-sm">
            <button
              onClick={() => setTab('industry')}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                tab === 'industry'
                  ? 'bg-accent text-white shadow-md shadow-accent/25'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Industry ({industryData.length})
            </button>
            <button
              onClick={() => setTab('education')}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                tab === 'education'
                  ? 'bg-accent text-white shadow-md shadow-accent/25'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Education ({educationData.length})
            </button>
          </div>
        </div>

        {/* Dynamic Display Area — Fits completely on-screen with zero section scrolling */}
        <div className="reveal reveal-delay-1 min-h-[380px]">
          {tab === 'industry' ? (
            /* Industry: Clean 2x2 Grid with Staggered Entrance */
            <div key="industry" className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-modal-enter">
              {industryData.map((item, idx) => (
                <div
                  key={idx}
                  style={{ animationDelay: `${idx * 60}ms` }}
                  className="group bg-surface-elevated/70 border border-text-tertiary/15 hover:border-accent/40 rounded-2xl p-6 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between space-y-4 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs mb-2">
                      <span className="font-mono text-accent font-medium">
                        {item.period}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-surface border border-text-tertiary/20 text-text-tertiary">
                        📍 {item.location}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {item.company}
                    </h3>
                    <p className="text-xs font-medium text-text-secondary mt-0.5">
                      {item.role}
                    </p>

                    <p className="text-xs text-text-tertiary leading-relaxed mt-3">
                      {item.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-text-tertiary/10">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-surface text-text-secondary border border-text-tertiary/15 hover:border-accent/30 hover:text-text-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Education: Clean 2-Column Grid with Staggered Entrance */
            <div key="education" className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-modal-enter">
              {educationData.map((item, idx) => (
                <div
                  key={idx}
                  style={{ animationDelay: `${idx * 80}ms` }}
                  className="group bg-surface-elevated/70 border border-text-tertiary/15 hover:border-blue-500/40 rounded-2xl p-7 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between space-y-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-mono text-blue-400 font-medium">
                        {item.period}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium">
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-text-primary group-hover:text-blue-400 transition-colors">
                        {item.school}
                      </h3>
                      <p className="text-sm font-medium text-text-primary mt-1">
                        {item.degree}
                      </p>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {item.major}
                      </p>
                    </div>

                    <p className="text-xs text-text-tertiary leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-text-tertiary/10">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-surface text-text-secondary border border-text-tertiary/15 hover:border-blue-500/40 hover:text-text-primary transition-colors"
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

        <div className="section-divider mt-16 max-w-6xl mx-auto" />
      </div>
    </section>
  );
}
