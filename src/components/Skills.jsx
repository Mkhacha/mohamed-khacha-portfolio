import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const skillGroups = [
  {
    name: 'AI & Machine Learning',
    domain: 'Deep Learning, Transformers & Statistical Learning',
    skills: [
      'Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'CNN',
      'Swin Transformers', 'Transfer Learning', 'NLP', 'PINNs',
    ],
  },
  {
    name: 'Data Engineering & Big Data',
    domain: 'Distributed Pipelines & High-Throughput Storage',
    skills: [
      'Hadoop', 'Spark', 'Kafka', 'MySQL', 'Oracle DB',
      'MongoDB', 'PL/SQL', 'Power BI',
    ],
  },
  {
    name: 'Languages',
    domain: 'Core Algorithmic & Systems Programming',
    skills: ['Python', 'Java', 'C / C++', 'JavaScript', 'SQL'],
  },
  {
    name: 'Frameworks & Infrastructure',
    domain: 'Full-Stack Deployment & Cloud Tooling',
    skills: [
      'React.js', 'Laravel', 'Node.js', 'Flutter',
      'Docker', 'Git / GitHub', 'Linux / Unix',
    ],
  },
  {
    name: 'Methods & System Design',
    domain: 'Architectural Rigor & Scientific Benchmarking',
    skills: [
      'UML', 'Merise', 'Supervised Learning',
      'Feature Engineering', 'Benchmarking Protocols',
    ],
  },
]

function PlusMinusIcon({ isOpen }) {
  return (
    <div className="relative w-4 h-4 flex items-center justify-center">
      <span
        className="absolute w-3.5 h-[1.5px] bg-text-secondary group-hover:bg-accent transition-colors duration-300"
      />
      <span
        className={`absolute w-3.5 h-[1.5px] bg-text-secondary group-hover:bg-accent transition-all duration-300 ease-apple ${
          isOpen ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100'
        }`}
      />
    </div>
  )
}

export default function Skills() {
  const sectionRef = useScrollReveal()
  const [openGroups, setOpenGroups] = useState(new Set([0]))

  const toggleGroup = (index) => {
    setOpenGroups((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="w-full py-20 md:py-32 px-6 md:px-12 lg:px-16 bg-surface text-text-primary relative overflow-hidden"
    >
      {/* Ambient background light wash */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header matching About & Feature */}
        <div className="reveal flex items-center justify-between border-b border-text-tertiary/15 pb-6 mb-12">
          <span className="inline-flex items-center gap-3 text-caption tracking-widest text-text-tertiary uppercase font-mono">
            <span className="w-8 h-[1px] bg-accent inline-block animate-hairline" />
            03 / Technical Stack
          </span>
          <span className="text-caption text-text-tertiary tracking-widest uppercase hidden sm:inline-block font-mono text-xs">
            5 Core Domains · ML, Big Data, Systems & Architecture
          </span>
        </div>

        {/* Cinematic Headline & Thesis */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-text-primary tracking-tight leading-[1.08] reveal reveal-delay-1">
            Capabilities & Stack.
            <span 
              className="block text-gradient-accent mt-3 text-2xl sm:text-4xl md:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}
            >
              Tools are means. Understanding is the end.
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed font-light max-w-3xl reveal reveal-delay-2">
            An applied engineering foundation spanning distributed computing, deep neural modeling, industrial ETL pipelines, and low-latency full-stack interfaces.
          </p>
        </div>

        {/* Open Editorial Capability Accordions */}
        <div className="reveal reveal-delay-2 divide-y divide-text-tertiary/15 border-b border-text-tertiary/15">
          {skillGroups.map((group, index) => {
            const isOpen = openGroups.has(index)
            return (
              <div
                key={group.name}
                className="transition-colors duration-200 hover:bg-surface-elevated/20 px-2 sm:px-4 rounded-xl"
              >
                <button
                  onClick={() => toggleGroup(index)}
                  className="flex justify-between items-center w-full py-5 sm:py-6 text-left group cursor-pointer focus:outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-base sm:text-xl font-medium text-text-primary group-hover:text-accent transition-colors duration-300 block">
                      {group.name}
                    </span>
                    <span className="text-xs text-text-tertiary font-mono block">
                      {group.domain}
                    </span>
                  </div>
                  <PlusMinusIcon isOpen={isOpen} />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-apple ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-wrap gap-2 pb-6 pt-1">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-surface-subtle/70 text-xs sm:text-sm text-text-secondary hover:text-text-primary hover:bg-accent/10 hover:text-accent transition-all duration-200 cursor-default font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Section Divider matching About & Feature */}
        <div className="section-divider mt-24 md:mt-32 max-w-7xl mx-auto" />
      </div>
    </section>
  )
}
