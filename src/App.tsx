import React, { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ScrollReveal from './components/ScrollReveal';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <>
      {showLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <CustomCursor />
      <Header />
      
      <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        
        <ScrollReveal>
          <About />
        </ScrollReveal>
        
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
    </div>
    </>
  );
}

export default App;