import React, { useRef, useCallback, useEffect } from 'react';

const HeroImage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: MouseEvent) => {
    const { current } = ref;
    if (!current) return;

    const rect = current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    current.style.setProperty('--rotate-x', `${-yPct * 10}deg`);
    current.style.setProperty('--rotate-y', `${xPct * 10}deg`);
  }, []);

  const onMouseLeave = useCallback(() => {
    const { current } = ref;
    if (!current) return;
    current.style.setProperty('--rotate-x', '0deg');
    current.style.setProperty('--rotate-y', '0deg');
  }, []);

  useEffect(() => {
    const { current } = ref;
    if (!current) return;

    current.addEventListener('mousemove', onMouseMove);
    current.addEventListener('mouseleave', onMouseLeave);

    return () => {
      if (current) {
        current.removeEventListener('mousemove', onMouseMove);
        current.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, [onMouseMove, onMouseLeave]);

  return (
    <div
      ref={ref}
      style={{
        transform: 'perspective(1000px) rotateX(var(--rotate-x, 0)) rotateY(var(--rotate-y, 0))',
        transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
        willChange: 'transform',
      }}
    >
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(96, 165, 250, 0.5)" />
            <stop offset="100%" stopColor="rgba(167, 139, 250, 0.5)" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="140" fill="url(#hero-grad)" opacity="0.3" filter="url(#blur-filter)" />
        <path d="M120 150 L200 100 L280 150 L280 250 L200 300 L120 250 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="rgba(14, 165, 233, 0.1)" />
        <text x="155" y="215" fontFamily="monospace" fontSize="48" fill="rgba(255, 255, 255, 0.6)">
          &lt;/&gt;
        </text>
      </svg>
    </div>
  );
};

export default HeroImage;