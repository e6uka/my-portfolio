import ThemeToggle from './ThemeToggle';
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import GlassSurface from './GlassSurface';
import { useTheme } from './ThemeProvider';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center items-start pt-4" >
      <GlassSurface
        width="65%"
        height={isScrolled ? 55 : 70}
        borderRadius={18}
        borderWidth={0}
        brightness={60}
        opacity={0.5}
        blur={1}
        displace={0}
        backgroundOpacity={0}
        saturation={1.2}
        distortionScale={0}
        redOffset={0}
        greenOffset={8}
        blueOffset={16}
        mixBlendMode="normal"
        className="transition-all duration-300"
        style={{
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
        }}
      >
        <nav className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              e6uka's Portfolio
            </div>

            <div className='mr-auto pl-2 mt-2 hover:rounded' >
            <ThemeToggle />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'projects', 'about me', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.replace(' ', ''))}
                  className="interactive capitalize hover:text-blue-400 transition-colors duration-200 relative group text-current"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden interactive p-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`md:hidden absolute top-full left-0 right-0 ${theme === 'light' ? 'bg-gray-100/95' : 'bg-slate-900/95'} backdrop-blur-md border-b border-slate-700/50`}>
              <div className="px-6 py-4 space-y-4">
                {['home', 'projects', 'about me', 'skills', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.replace(' ', ''))}
                    className={`block w-full text-left capitalize hover:text-blue-400 transition-colors duration-200 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </GlassSurface>
    </header>
  );
};

export default Header;
