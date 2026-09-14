import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const skillGroups = [
  {
    name: 'AI & Machine Learning',
    skills: [
      'Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'CNN',
      'Swin Transformers', 'Transfer Learning', 'NLP', 'PINNs',
    ],
  },
  {
    name: 'Data Engineering',
    skills: [
      'Hadoop', 'Spark', 'Kafka', 'MySQL', 'Oracle',
      'MongoDB', 'PL/SQL', 'Power BI',
    ],
  },
  {
    name: 'Languages',
    skills: ['Python', 'Java', 'C', 'JavaScript', 'SQL'],
  },
  {
    name: 'Frameworks & Tools',
    skills: [
      'React.js', 'Laravel', 'Node.js', 'Flutter',
      'Docker', 'Git/GitHub', 'Linux',
    ],
  },
  {
    name: 'Methods & Design',
    skills: [
      'UML', 'Merise', 'Supervised Learning',
      'Feature Engineering', 'Benchmarking',
    ],
  },
]

function PlusMinusIcon({ isOpen }) {
  return (
    <div className="relative w-5 h-5 flex items-center justify-center">
      <span
        className={`absolute w-4 h-[1.5px] bg-text-secondary transition-transform duration-500 ease-apple ${
          isOpen ? 'rotate-0' : 'rotate-0'
        }`}
      />
      <span
        className={`absolute w-4 h-[1.5px] bg-text-secondary transition-transform duration-500 ease-apple ${
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
    <section id="skills" className="py-32 md:py-48 px-6 md:px-12" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-overline tracking-widest text-accent uppercase">
          Capabilities
        </p>
        <h2 className="reveal-blur text-display-md font-semibold text-text-primary mt-4 mb-16">
          Tools are means.{' '}
          <span className="text-gradient">Understanding is the end.</span>
        </h2>

        <div className="reveal reveal-delay-2">
          {skillGroups.map((group, index) => {
            const isOpen = openGroups.has(index)
            return (
              <div
                key={group.name}
                className="border-b border-text-tertiary/20 px-3 -mx-3 rounded-2xl hover:bg-surface-elevated/30 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleGroup(index)}
                  className="flex justify-between items-center w-full py-6 text-left group cursor-pointer focus:outline-none"
                >
                  <span className="text-xl md:text-2xl font-medium text-text-primary group-hover:text-accent transition-colors duration-300">
                    {group.name}
                  </span>
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
                    <div className="flex flex-wrap gap-2.5 pb-6 pt-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-full border border-text-tertiary/25 bg-surface-elevated/40 text-body text-text-secondary hover:border-accent/60 hover:text-text-primary hover:bg-surface-elevated hover:scale-[1.04] transition-all duration-200 cursor-default shadow-sm hover:shadow-accent/10"
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
      </div>

      <div className="section-divider mt-32 max-w-5xl mx-auto" />
    </section>
  )
}
