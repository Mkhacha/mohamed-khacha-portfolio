import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const About = () => {
  const containerRef = useScrollReveal();

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="w-full py-32 md:py-48 px-6 md:px-12 lg:px-16 bg-surface text-text-primary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top row: Section Label */}
        <div className="reveal flex mb-16 md:mb-24">
          <span className="inline-flex items-center gap-2 text-caption tracking-widest text-text-tertiary uppercase">
            <span className="w-8 h-[1px] bg-accent inline-block animate-hairline" />
            The Philosophy
          </span>
        </div>

        {/* The Thesis - Massive and cinematic */}
        <div className="max-w-5xl mb-24 md:mb-32">
          <h2 className="text-[2.25rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-semibold text-text-primary leading-[1.05] tracking-tight reveal-blur">
            Every dataset tells a story, every model hides an assumption, and every algorithm has a{' '}
            <span 
              className="text-gradient-accent block sm:inline mt-2 sm:mt-0" 
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}
            >
              limit worth finding.
            </span>
          </h2>
        </div>

        {/* The Body - Editorial 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 max-w-6xl ml-auto border-t border-text-tertiary/15 pt-16">
          
          <div className="md:col-span-5 space-y-8 reveal reveal-delay-2">
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light">
              I am <span className="text-text-primary font-medium">Mohamed Khacha</span>, a curious mind with a genuine love for science, technology, and innovation. 
            </p>
            <p className="text-lg text-text-tertiary leading-relaxed">
              My path has taken me deep into the world of data-driven problem-solving, machine learning, and artificial intelligence, currently as an engineering student in Data Science, Big Data, and AI.
            </p>
          </div>

          <div className="md:col-span-7 space-y-6 md:space-y-8 reveal reveal-delay-3 md:pl-8">
            <p className="text-lg text-text-secondary leading-relaxed">
              What drives me isn't just building things that work — it's understanding why they work, and where they don't. I spend my time exploring how raw data can be transformed into smart, reliable solutions: systems that don't just process information, but hold up under real-world conditions and create genuine impact.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              That's the space where I do my best work — testing ideas, questioning results, and pushing past the surface to see what's actually there.
            </p>
          </div>

        </div>

        {/* The Motto / 3 Pillars */}
        <div className="mt-32 md:mt-48 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 reveal reveal-delay-4">
            <div className="group border-l-[2px] border-accent/40 hover:border-accent pl-6 py-2 transition-all duration-300 hover:translate-x-1 cursor-default">
              <h3 className="text-display-sm font-semibold text-text-primary mb-2 tracking-tight group-hover:text-accent transition-colors">Build</h3>
              <p className="text-text-secondary tracking-wide text-lg">to understand.</p>
            </div>
            <div className="group border-l-[2px] border-accent/40 hover:border-accent pl-6 py-2 transition-all duration-300 hover:translate-x-1 cursor-default">
              <h3 className="text-display-sm font-semibold text-text-primary mb-2 tracking-tight group-hover:text-accent transition-colors">Experiment</h3>
              <p className="text-text-secondary tracking-wide text-lg">to question.</p>
            </div>
            <div className="group border-l-[2px] border-accent/40 hover:border-accent pl-6 py-2 transition-all duration-300 hover:translate-x-1 cursor-default">
              <h3 className="text-display-sm font-semibold text-text-primary mb-2 tracking-tight group-hover:text-accent transition-colors">Look</h3>
              <p className="text-text-secondary tracking-wide text-lg">for the edges.</p>
            </div>
          </div>

          <div className="reveal reveal-delay-5 mt-16 md:mt-24 border-t border-text-tertiary/15 pt-8 flex justify-end">
            <p className="text-sm md:text-base text-text-tertiary uppercase tracking-widest font-medium">
              Because that's where real learning happens.
            </p>
          </div>
        </div>

        <div className="section-divider mt-24 md:mt-32 max-w-7xl mx-auto" />
      </div>
    </section>
  );
};

export default About;
