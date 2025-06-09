import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 animate-gradient-x"></div>
      
      {/* Animated wave layers */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-full opacity-20"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0,300 C300,200 600,400 1200,300 L1200,600 L0,600 Z"
            fill="url(#wave1)"
            className="animate-wave-slow"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 100 0; 0 0"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(219, 39, 119, 0.3)" />
            </linearGradient>
          </defs>
        </svg>
        
        <svg
          className="absolute bottom-0 left-0 w-full h-full opacity-15"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0,400 C400,300 800,500 1200,400 L1200,600 L0,600 Z"
            fill="url(#wave2)"
            className="animate-wave-medium"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; -50 0; 0 0"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.4)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.4)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/20 rounded-full animate-float-${i % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;