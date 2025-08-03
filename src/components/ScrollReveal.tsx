import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    
    switch (direction) {
      case 'up':
        return 'translate3d(0, 50px, 0)';
      case 'down':
        return 'translate3d(0, -50px, 0)';
      case 'left':
        return 'translate3d(50px, 0, 0)';
      case 'right':
        return 'translate3d(-50px, 0, 0)';
      default:
        return 'translate3d(0, 50px, 0)';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;