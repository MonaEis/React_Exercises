import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

interface TestimonialCardProps {
  name: string;
  avatar: string;
  text: string;
  rating: number;
  location: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, avatar, text, rating, location }) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-4">
          <div className="w-16 h-16 rounded-full overflow-hidden neon-border-pink">
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <h4 className="text-xl retro-text neon-text-pink">{name}</h4>
          <p className="text-[#AAA] text-sm">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-[#FF2D95] fill-[#FF2D95]' : 'text-[#444]'}`}
          />
        ))}
      </div>
      
      <blockquote className="flex-grow">
        <p className="text-[#CCC] italic leading-relaxed mb-3">"{text}"</p>
      </blockquote>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const itemsPerPage = { mobile: 1, tablet: 2, desktop: 3 };
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage.desktop);
  const slideCount = Math.ceil(testimonials.length / itemsToShow);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(itemsPerPage.mobile);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(itemsPerPage.tablet);
      } else {
        setItemsToShow(itemsPerPage.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide, slideCount]);

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl uppercase mb-3 bg-gradient-to-r from-[#FF2D95] to-[#00F9FF] bg-clip-text text-transparent inline-block">
            Success Stories
          </h2>
          <h3 className="text-2xl md:text-4xl neon-text-pink mb-8">WHAT OUR <span className="neon-text-blue">USERS SAY</span></h3>
          <p className="text-lg text-[#CCC] max-w-2xl mx-auto">
            Join thousands of singles who've found their perfect match in our neon-lit digital world.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100 / itemsToShow}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-4 transition-all duration-300"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-[#1A1A1A] neon-border-blue"
          >
            <ChevronLeft className="w-6 h-6 text-[#00F9FF]" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-[#1A1A1A] neon-border-pink"
          >
            <ChevronRight className="w-6 h-6 text-[#FF2D95]" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                activeSlide === index 
                  ? 'bg-[#FF2D95] w-8' 
                  : 'bg-[#333]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};