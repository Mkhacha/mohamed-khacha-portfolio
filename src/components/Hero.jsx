import { useState, useEffect } from 'react';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    // Dampen heavily so it's a subtle, whisper-quiet atmospheric parallax
    setMouseOffset({
      x: (clientX - centerX) * 0.03,
      y: (clientY - centerY) * 0.03,
    });
  };

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-end overflow-hidden bg-surface select-none"
    >
      {/* Particle Background with gentle soft-focus blur */}
      <div className="absolute inset-0 z-0 transform-gpu filter blur-[1.5px]">
        <ParticleCanvas />
      </div>

      {/* Atmospheric dynamic glow behind content */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] z-[1] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mouseOffset.x}px), ${mouseOffset.y}px)`,
          background: 'radial-gradient(ellipse at center bottom, rgb(var(--color-accent) / 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Ambient slow floating orb for depth */}
      <div 
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/4 filter blur-3xl pointer-events-none animate-ambient-slow"
        aria-hidden="true"
      />

      {/* Content — pinned to bottom-left, Apple editorial style */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pb-24 md:pb-32">
        {/* Headline — Massive elegant Hello */}
        <h1
          className={`transition-all duration-1000 ease-apple ${
            mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.99]'
          }`}
          style={{ transitionDelay: '0.35s' }}
        >
          <span 
            className="block text-[5.5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] text-text-primary leading-[0.9] tracking-tight hover:text-accent/90 transition-colors duration-500 cursor-default"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}
          >
            Hello.
          </span>
        </h1>

        {/* Subtitle */}
        <div
          className={`mt-6 md:mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 transition-all duration-700 ease-apple ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ transitionDelay: '0.7s' }}
        >
          <span 
            className={`h-[1px] bg-accent hidden sm:inline-block transition-all duration-700 ease-apple ${
              mounted ? 'w-8 opacity-100' : 'w-0 opacity-0'
            }`}
            style={{ transitionDelay: '0.9s' }}
          />
          <span className="text-xl md:text-2xl text-text-secondary font-light tracking-wide">
            It's <span className="text-text-primary font-medium">Mohamed Khacha</span>, AI & Data Engineer.
          </span>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-surface/0 to-surface pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Scroll cue — right side */}
      <div
        className={`absolute bottom-8 right-8 md:right-12 z-20 transition-all duration-700 ease-apple ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        <button
          type="button"
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-2 text-text-tertiary hover:text-accent transition-colors duration-300 focus:outline-none cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-overline tracking-widest text-[10px] [writing-mode:vertical-lr]">SCROLL</span>
          <svg
            className="w-4 h-4 animate-scroll-cue"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
