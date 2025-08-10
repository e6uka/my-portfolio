import ThemeToggle from './ThemeToggle';
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import GlassSurface from './GlassSurface';
import { useTheme } from './ThemeProvider';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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
        height={isMobile ? (isScrolled ? 50 : 60) : (isScrolled ? 55 : 70)}
        borderRadius={18}
        borderWidth={0}
        brightness={60}
        opacity={0.5}
        blur={1}
        displace={0}
        backgroundOpacity={0}
        saturation={1.2}
        distortionScale={2}
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

            {!isMobile && (
              <div className='mr-auto pl-2 mt-2 hover:rounded' >
                <ThemeToggle />
              </div>
            )}

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
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>

          </nav>
      </GlassSurface>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`fixed top-0 right-0 h-full w-32 transform transition-transform duration-300 ease-in-out z-50
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            ${theme === 'light' ? 'bg-gray-100/95' : 'bg-slate-900/95'} backdrop-blur-md border-l border-slate-700/50`}
        >
          <div className="px-6 py-4 space-y-4 pt-20 relative"> {/* Added pt-20 for spacing from top */}
            <button
              className={`absolute top-4 right-4 interactive p-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
            
            {['home', 'projects', 'about me', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.replace(' ', ''))}
                className={`block w-full text-left capitalize hover:text-blue-400 transition-colors duration-200 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                {item}
              </button>
            ))}
            {isMobile && (
              <div className="py-2">
                <ThemeToggle />
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
