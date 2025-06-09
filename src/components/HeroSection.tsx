import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16" id="home">
      <AnimatedBackground />
      
      {/* Centered content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_50%)] leading-tight tracking-wide mb-6">
          Future-Ready Solutions for Modern Businesses
        </h1>
        
        {/* Subtext */}
        <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
          We build intelligent web solutions, AI agents, and automation systems that help modern businesses streamline operations, boost efficiency, and scale with confidence.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-indigo-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-lg">
            BUILD WITH BLUNO
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-200">
            EXPLORE SERVICES
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;