import React from 'react';
import { Zap, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0A0A0A] pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Zap className="w-8 h-8 text-[#FF2D95]" />
              <span className="text-2xl font-bold neon-text-pink retro-text">NEON<span className="neon-text-blue">CRUSH</span></span>
            </a>
            <p className="text-[#AAA] mb-6 max-w-md">
              The most radical dating app of 2025. Find meaningful connections in a nostalgic digital world inspired by the glorious 1980s.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#FF2D95]/20 transition-colors duration-300">
                <Instagram className="w-5 h-5 text-[#FF2D95]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#00F9FF]/20 transition-colors duration-300">
                <Twitter className="w-5 h-5 text-[#00F9FF]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#FF2D95]/20 transition-colors duration-300">
                <Facebook className="w-5 h-5 text-[#FF2D95]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#00F9FF]/20 transition-colors duration-300">
                <Youtube className="w-5 h-5 text-[#00F9FF]" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-bold mb-4 retro-text">Company</h5>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Press', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#AAA] hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-xl font-bold mb-4 retro-text">Support</h5>
            <ul className="space-y-3">
              {['Help Center', 'Safety Tips', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#AAA] hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#777] mb-4 md:mb-0">
            &copy; {currentYear} NeonCrush. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="text-[#AAA] hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-[#AAA] hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-[#AAA] hover:text-white transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};