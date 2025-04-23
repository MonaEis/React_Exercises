import React, { useState } from 'react';
import { Smartphone, ArrowDown } from 'lucide-react';

export const CallToAction: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email');
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    
    // Simulate form submission
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="download" className="section bg-gradient-to-b from-[#121212] to-[#0A0A0A] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iI0ZGMkQ5NSIgc3Ryb2tlLXdpZHRoPSIxIj48cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iNTgiIGhlaWdodD0iNTgiIHJ4PSIyOSIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] rounded-2xl p-8 md:p-12 neon-border-pink">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 neon-text-pink retro-text">
                  READY TO FIND YOUR DIGITAL SOULMATE?
                </h2>
                <p className="text-[#CCC] mb-6">
                  Download the app now and step into a neon-lit world of meaningful connections. Your perfect match is just a download away.
                </p>
                
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF2D95]/20 flex items-center justify-center mr-4">
                      <ArrowDown className="w-5 h-5 text-[#FF2D95]" />
                    </div>
                    <p className="text-[#CCC]">Sign up for our waitlist to get early access</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#00F9FF]/20 flex items-center justify-center mr-4">
                      <Smartphone className="w-5 h-5 text-[#00F9FF]" />
                    </div>
                    <p className="text-[#CCC]">Available soon on iOS and Android</p>
                  </div>
                </div>
                
                {submitted ? (
                  <div className="p-4 rounded bg-[#00F9FF]/10 border border-[#00F9FF] text-[#00F9FF]">
                    Thanks for joining our waitlist! We'll keep you updated.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-grow">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="input-field w-full"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {error && (
                          <p className="text-sm text-[#FF2D95] mt-1">{error}</p>
                        )}
                      </div>
                      <button type="submit" className="neon-button whitespace-nowrap">
                        Join Waitlist
                      </button>
                    </div>
                  </form>
                )}
              </div>
              
              <div className="relative hidden md:block">
                <div className="w-64 h-96 mx-auto relative">
                  <div className="absolute inset-0 rounded-3xl neon-border-blue overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg" 
                      alt="NeonCrush App" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-[#000]/80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};