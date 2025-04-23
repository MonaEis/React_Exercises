import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#121212]/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Zap className="w-8 h-8 text-[#FF2D95] neon-pulse" />
          <span className="text-2xl font-bold neon-text-pink retro-text">NEON<span className="neon-text-blue">CRUSH</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Features', 'Testimonials', 'Download'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="retro-text text-xl hover:neon-text-blue transition-all duration-300"
            >
              {item}
            </a>
          ))}
          <button className="neon-button">
            Sign Up
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-300"></div>
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-[#1A1A1A] transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {['Home', 'Features', 'Testimonials', 'Download'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="retro-text text-xl py-2 hover:neon-text-blue transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="neon-button w-full">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};