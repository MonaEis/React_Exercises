import React from 'react';
import { HeartPulse } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient relative overflow-hidden">
      {/* Background grid lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzAwRjlGRiIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMzAgNjBWME0wIDMwaDYwIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 p-2 rounded-full bg-[#1A1A1A] border border-[#333]">
            <span className="px-4 py-1 text-sm font-medium bg-gradient-to-r from-[#FF2D95] to-[#00F9FF] bg-clip-text text-transparent">
              DATING IN THE DIGITAL AGE
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            <span className="neon-text-pink block">FIND YOUR</span>
            <span className="neon-text-blue block">DIGITAL SOULMATE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#CCC] mb-8 max-w-2xl mx-auto leading-relaxed">
            Step into the retro-future of dating where neon lights guide you to meaningful connections. Experience a nostalgic journey with modern matching technology.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="neon-button w-full sm:w-auto">
              Get Started <span className="ml-2">→</span>
            </button>
            
            <a href="#features" className="group flex items-center gap-2 py-3 px-6 rounded-md border border-[#333] bg-[#1A1A1A] transition-all duration-300 w-full sm:w-auto justify-center hover:border-[#00F9FF]">
              <HeartPulse className="w-5 h-5 text-[#00F9FF] group-hover:animate-pulse" />
              <span className="text-lg">How It Works</span>
            </a>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <div className="w-16 h-16 rounded-full neon-border-pink float opacity-75"></div>
        </div>
        <div className="absolute bottom-20 right-10 hidden lg:block">
          <div className="w-20 h-20 rounded-full neon-border-blue float" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="absolute top-40 right-20 hidden lg:block">
          <div className="w-12 h-12 rounded-full neon-border-pink float" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};