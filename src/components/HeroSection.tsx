import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-12 sm:pt-14 md:pt-16 lg:pt-16" id="home">
      <AnimatedBackground />
      
      {/* Centered content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_50%)] leading-tight tracking-wide mb-4 sm:mb-5 md:mb-6 lg:mb-6">
          Future-Ready Solutions for Modern Businesses
        </h1>
        
        {/* Subtext */}
        <p className="text-white/80 text-base sm:text-lg md:text-lg lg:text-xl max-w-xl sm:max-w-2xl md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-6 lg:mb-8">
          We build intelligent web solutions, AI agents, and automation systems<br className="hidden sm:inline" /> that help modern businesses streamline operations, boost efficiency,<br className="hidden sm:inline" /> and scale with confidence.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 md:gap-4 lg:gap-4 justify-center items-center">
          <button className="bg-white text-indigo-900 px-4 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-3 md:py-3 lg:py-4 rounded-full font-semibold text-sm sm:text-sm md:text-base lg:text-base hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300">
            BUILD WITH BLUNO
          </button>
          <button className="border-2 border-white text-white px-4 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-3 md:py-3 lg:py-4 rounded-full font-semibold text-sm sm:text-sm md:text-base lg:text-base hover:bg-white hover:text-indigo-900 transition-all duration-300">
            EXPLORE SERVICES
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;