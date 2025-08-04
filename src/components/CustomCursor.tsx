import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseOut = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseout', handleMouseOut);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseout', handleMouseOut);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-transform duration-200 ${
        isHovering ? 'scale-150' : 'scale-100'
      }`}
      style={{
        left: position.x - 10,
        top: position.y - 10,
      }}
    >
      <div className="w-5 h-5 bg-white rounded-full opacity-80 blur-sm" />
      <div 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white rounded-full transition-all duration-300 ${
          isHovering ? 'scale-150 opacity-100' : 'scale-100 opacity-50'
        }`}
      />
    </div>
  );
};

export default CustomCursor;