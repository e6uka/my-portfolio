import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './ScrollToTopButton.css';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled beyond hero section
  const toggleVisibility = () => {
    // Assuming the hero section is roughly the height of the viewport
    // A more robust solution would involve measuring the actual hero component height
    if (window.scrollY > window.innerHeight * 0.8) { // Adjust this threshold as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'show' : ''}`}>
      <button onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
