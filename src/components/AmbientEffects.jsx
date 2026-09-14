import { useEffect, useRef } from 'react';

export default function AmbientEffects() {
  const cursorRef = useRef(null);
  const posRef = useRef({ x: -600, y: -600, targetX: -600, targetY: -600 });

  // Buttery-Smooth Lerp Cursor Light (60/120fps hardware accelerated)
  useEffect(() => {
    let animFrame = null;
    let isMoving = false;

    const handleMouseMove = (e) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
      if (!isMoving) {
        isMoving = true;
      }
    };

    const animate = () => {
      const pos = posRef.current;
      // Damped smooth spring/lerp (0.075)
      pos.x += (pos.targetX - pos.x) * 0.075;
      pos.y += (pos.targetY - pos.y) * 0.075;

      if (cursorRef.current && isMoving) {
        cursorRef.current.style.transform = `translate3d(${pos.x - 250}px, ${pos.y - 250}px, 0)`;
      }

      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-[2] hidden md:block will-change-transform transition-opacity duration-700 opacity-60 dark:opacity-75"
      style={{
        background: 'radial-gradient(circle, rgb(var(--color-accent) / 0.05) 0%, rgb(var(--color-accent) / 0.015) 35%, transparent 70%)',
      }}
      aria-hidden="true"
    />
  );
}
