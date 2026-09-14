import React, { useEffect, useRef } from 'react';

const DEFAULT_PARTICLE_COUNT = 65;
const MAX_DISTANCE = 130;
const MAX_DIST_SQ = MAX_DISTANCE * MAX_DISTANCE;

export function ParticleCanvas({ className = '', particleCount = DEFAULT_PARTICLE_COUNT }) {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const mediaQuery = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;
    let prefersReducedMotion = mediaQuery ? mediaQuery.matches : false;

    let width = 0;
    let height = 0;
    let dpr = 1;

    // Particles array
    const particles = [];

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        let vx = (Math.random() - 0.5) * 0.3;
        let vy = (Math.random() - 0.5) * 0.3;
        if (Math.abs(vx) < 0.05) vx = vx < 0 ? -0.08 : 0.08;
        if (Math.abs(vy) < 0.05) vy = vy < 0 ? -0.08 : 0.08;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx,
          vy,
          radius: Math.random() * 0.6 + 1.1,
        });
      }
    };

    const updateSize = () => {
      const rect = canvas.parentElement
        ? canvas.parentElement.getBoundingClientRect()
        : canvas.getBoundingClientRect();

      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      if (particles.length === 0) {
        initParticles();
      } else {
        particles.forEach((p) => {
          if (p.x > width) p.x = Math.random() * width;
          if (p.y > height) p.y = Math.random() * height;
        });
      }
    };

    updateSize();

    // High performance batched render loop
    const render = () => {
      if (!isVisibleRef.current) {
        animFrameRef.current = requestAnimationFrame(render);
        return;
      }

      if (width === 0 || height === 0) {
        animFrameRef.current = requestAnimationFrame(render);
        return;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const count = particles.length;

      // 1. Draw connecting lines in ONE single batch
      ctx.beginPath();
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = 'rgba(100, 116, 139, 0.15)';

      for (let i = 0; i < count; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < count; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < MAX_DIST_SQ) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
      ctx.stroke();

      // 2. Draw all particles in ONE single batch
      ctx.beginPath();
      ctx.fillStyle = 'rgba(100, 116, 139, 0.5)';

      for (let i = 0; i < count; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -10) p.x = width + 10;
          else if (p.x > width + 10) p.x = -10;

          if (p.y < -10) p.y = height + 10;
          else if (p.y > height + 10) p.y = -10;
        }

        ctx.moveTo(p.x + p.radius, p.y);
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      }
      ctx.fill();

      if (!prefersReducedMotion) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    // Pause when offscreen to free 100% CPU/GPU for the rest of the site
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    visibilityObserver.observe(canvas);

    render();

    window.addEventListener('resize', updateSize, { passive: true });

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      visibilityObserver.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export default ParticleCanvas;
