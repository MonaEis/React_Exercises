import React from 'react';
import { Users, Sparkles, Shield, Gift, Heart, MessageSquare } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'pink' | 'blue';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="card group">
      <div className={`w-16 h-16 flex items-center justify-center rounded-lg mb-6 ${
        color === 'pink' ? 'bg-[#FF2D95]/10' : 'bg-[#00F9FF]/10'
      }`}>
        <div className={`${
          color === 'pink' ? 'text-[#FF2D95]' : 'text-[#00F9FF]'
        } transform group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
      </div>
      <h3 className={`text-xl font-bold mb-3 retro-text group-hover:${
        color === 'pink' ? 'neon-text-pink' : 'neon-text-blue'
      }`}>
        {title}
      </h3>
      <p className="text-[#AAA] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "SMART MATCHING",
      description: "Our algorithm finds your perfect match based on shared interests, goals, and digital vibe compatibility.",
      color: "pink" as const
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "RETRO PROFILES",
      description: "Create your unique 80s-inspired digital persona with custom avatars and synth-wave backgrounds.",
      color: "blue" as const
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SECURE CONNECTIONS",
      description: "Advanced encryption and verification ensures your data stays private and matches are real people.",
      color: "pink" as const
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "DIGITAL GIFTS",
      description: "Send virtual cassette mixtapes, arcade tokens, and other 80s themed gifts to your matches.",
      color: "blue" as const
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "COMPATIBILITY TEST",
      description: "Our 80s-inspired personality quiz matches you with people who share your retro sensibilities.",
      color: "pink" as const
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "THEMED CHATS",
      description: "Customizable chat rooms with different 80s themes from neon clubs to arcade hangouts.",
      color: "blue" as const
    }
  ];

  return (
    <section id="features" className="section bg-[#0A0A0A]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl uppercase mb-3 bg-gradient-to-r from-[#FF2D95] to-[#00F9FF] bg-clip-text text-transparent inline-block">
            Features you'll love
          </h2>
          <h3 className="text-2xl md:text-4xl neon-text-blue mb-8">TOTALLY RADICAL <span className="neon-text-pink">DATING TECH</span></h3>
          <p className="text-lg text-[#CCC] max-w-2xl mx-auto">
            Experience dating like it's 1985, with the technology of 2025. Our app combines nostalgic aesthetics with cutting-edge features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};