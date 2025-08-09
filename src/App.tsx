import React, { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollReveal from './components/ScrollReveal';
import ClickSpark from './components/ClickSpark';
import { useTheme } from './components/ThemeProvider';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const { theme } = useTheme();

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
      
      <ClickSpark sparkColor="#3b82f6" sparkCount={12} sparkRadius={20} duration={600}>
        <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-slate-900 text-white'} overflow-x-hidden overflow-y-auto`}>
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
      </ClickSpark>
    </>
  );
}

export default App;