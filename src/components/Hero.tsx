import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import RotatingText from './RotatingText';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 flex flex-row items-center justify-center gap-4">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Creative
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text ">
              <RotatingText
                texts={["coding", "components!", "thinking", "development"]}
                rotationInterval={3500}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                staggerDuration={0.05}
                splitBy="characters"
                mainClassName="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text "
              />
            </span>
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, functional digital experiences with modern web technologies.
            Passionate about clean code, user experience, and innovative solutions.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href="#"
              className="interactive p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full transition-all duration-200 hover:scale-110 group"
            >
              <Github className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="#"
              className="interactive p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full transition-all duration-200 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="#"
              className="interactive p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full transition-all duration-200 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>

          <button
            onClick={scrollToProjects}
            className="interactive bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown
          className="w-6 h-6 text-slate-400 animate-bounce cursor-pointer interactive"
          onClick={scrollToProjects}
        />
      </div>
    </section>
  );
};

export default Hero;