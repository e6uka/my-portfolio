import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import RotatingText from './RotatingText';
import Tilt from 'react-parallax-tilt';
import { useTheme } from './ThemeProvider';
import Terminal from './Terminal';
import LetterGlitch from './LetterGlitch';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView();
  };

  const heroBgClass = theme === 'light' ? 'bg-gray-100' : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900';

  const socialIconBgClass = theme === 'light' ? 'bg-gray-200/50 hover:bg-gray-300/50' : 'bg-slate-800/50 hover:bg-slate-700/50';

  const creativeTextClass = theme === 'light' ? 'text-black' : 'text-white';

  const rotatingTextClass = theme === 'light' ? 'text-black' : 'text-white';


  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative ${heroBgClass}`}>
      <div className="absolute inset-0 z-0 opacity-50">
        <LetterGlitch
          glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      <div className="max-w-6xl relative  z-10 flex flex-col items-center justify-center min-h-screen w-full">
        <div
          className={`transition-all duration-1000 delay-300 w-full flex flex-col items-center ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-asimovian font-bold mb-6 flex flex-col items-center gap-4 text-center">
            <span className={creativeTextClass}>
              I don't just build products, I build
            </span>
            <span >
              <RotatingText 
                texts={[ "Trust",  "Results", "Experiences", "Brand Identity", "Impressions", "Consistency", 'Solutions', 'Impact', 'Value', 'Possibilities']}
                rotationInterval={3500}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                staggerDuration={0.05}
                splitBy="characters"
                mainClassName={`${rotatingTextClass} font-asimovian`}
              />
            </span>
          </h1>
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#ffffff"
            glarePosition="all"
            className={`w-full max-w-lg transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className='mt-5'>
            <Terminal />
            </div>
          </Tilt>
        </div>
      </div>
      <div
        className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 pointer-events-auto`}
      >
        <div className="flex items-center mt-3 justify-center gap-6">
          <a
            href="https://github.com/e6uka"
            className={`interactive p-3 ${socialIconBgClass} rounded-full transition-all duration-200 hover:scale-110 group`}
          >
            <Github className={`w-6 h-6 ${creativeTextClass} transition-colors hover:text-blue-400`} />
          </a>
          <a
            href="https://www.linkedin.com/in/chukwuebuka-okeke-3ba66123a/"
            className={`interactive p-3 ${socialIconBgClass} rounded-full transition-all duration-200 hover:scale-110 group`}
          >
            <Linkedin className={`w-6 h-6 ${creativeTextClass} transition-colors hover:text-blue-400`} />
          </a>
          <a
            href="https://x.com/e6uka"
            className={`interactive p-3 ${socialIconBgClass} rounded-full transition-all duration-200 hover:scale-110 group`}
          >
            <Twitter className={`w-6 h-6 ${creativeTextClass} transition-colors hover:text-blue-400`} />
          </a>
          <a
            href="mailto:clintonokeke56@gmail.com"
            className={`interactive p-3 ${socialIconBgClass} rounded-full transition-all duration-200 hover:scale-110 group`}
          >
            <Mail className={`w-6 h-6 ${creativeTextClass} transition-colors hover:text-blue-400`} />
          </a>
        </div>
        <button
          onClick={scrollToProjects}
          className="interactive bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
        >
          View My Work
        </button>
      </div>


      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ChevronDown
          className="w-6 h-6 text-slate-400 animate-bounce cursor-pointer interactive"
          onClick={scrollToProjects}
        />
      </div>
    </section>
  );
};

export default Hero;