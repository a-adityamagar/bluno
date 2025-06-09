import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Darker gradient background inspired by the image */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950"></div>
      
      {/* Additional dark overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950/60"></div>
      
      {/* Animated wave layers with continuous effect */}
      <div className="absolute inset-0">
        {/* First wave layer */}
        <svg
          className="absolute bottom-0 left-0 w-[150%] h-full opacity-20"
          viewBox="0 0 1800 600"
          preserveAspectRatio="none"
        >
          <path
            d="M-300,320 C0,250 300,390 600,320 C900,250 1200,390 1500,320"
            fill="url(#wave1)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 100 -10; 0 0"
              dur="12s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="d"
              values="M-300,320 C0,250 300,390 600,320 C900,250 1200,390 1500,320;
                      M-300,340 C0,270 300,410 600,340 C900,270 1200,410 1500,340;
                      M-300,320 C0,250 300,390 600,320 C900,250 1200,390 1500,320"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(30, 58, 138, 0.4)" /> {/* Dark blue */}
              <stop offset="50%" stopColor="rgba(67, 56, 202, 0.4)" /> {/* Dark purple */}
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.4)" /> {/* Lighter blue */}
            </linearGradient>
          </defs>
        </svg>
        
        {/* Second wave layer */}
        <svg
          className="absolute bottom-0 left-0 w-[150%] h-full opacity-15"
          viewBox="0 0 1800 600"
          preserveAspectRatio="none"
        >
          <path
            d="M-400,380 C200,330 600,450 1000,380 C1400,330 1700,450 1800,380"
            fill="url(#wave2)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; -80 5; 0 0"
              dur="15s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="d"
              values="M-400,380 C200,330 600,450 1000,380 C1400,330 1700,450 1800,380;
                      M-400,400 C200,350 600,470 1000,400 C1400,350 1700,470 1800,400;
                      M-400,380 C200,330 600,450 1000,380 C1400,330 1700,450 1800,380"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(29, 78, 216, 0.3)" /> {/* Darker blue */}
              <stop offset="50%" stopColor="rgba(79, 70, 229, 0.3)" /> {/* Purple hint */}
              <stop offset="100%" stopColor="rgba(147, 197, 253, 0.3)" /> {/* Subtle orange-blue blend */}
            </linearGradient>
          </defs>
        </svg>
        
        {/* Third wave layer */}
        <svg
          className="absolute bottom-0 left-0 w-[150%] h-full opacity-12"
          viewBox="0 0 1800 600"
          preserveAspectRatio="none"
        >
          <path
            d="M-500,420 C100,380 500,460 900,420 C1300,380 1700,460 1800,420"
            fill="url(#wave3)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 60 -5; 0 0"
              dur="18s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="d"
              values="M-500,420 C100,380 500,460 900,420 C1300,380 1700,460 1800,420;
                      M-500,440 C100,400 500,480 900,440 C1300,400 1700,480 1800,440;
                      M-500,420 C100,380 500,460 900,420 C1300,380 1700,460 1800,420"
              dur="14s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(37, 99, 235, 0.2)" /> {/* Deep blue */}
              <stop offset="50%" stopColor="rgba(88, 80, 236, 0.2)" /> {/* Dark purple */}
              <stop offset="100%" stopColor="rgba(252, 165, 165, 0.2)" /> {/* Subtle orange hint */}
            </linearGradient>
          </defs>
        </svg>
        
        {/* Fourth wave layer */}
        <svg
          className="absolute bottom-0 left-0 w-[150%] h-full opacity-10"
          viewBox="0 0 1800 600"
          preserveAspectRatio="none"
        >
          <path
            d="M-600,360 C0,320 400,440 800,360 C1200,320 1600,440 1800,360"
            fill="url(#wave4)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; -50 10; 0 0"
              dur="20s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="d"
              values="M-600,360 C0,320 400,440 800,360 C1200,320 1600,440 1800,360;
                      M-600,380 C0,340 400,460 800,380 C1200,340 1600,460 1800,380;
                      M-600,360 C0,320 400,440 800,360 C1200,320 1600,440 1800,360"
              dur="16s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="wave4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(23, 37, 84, 0.3)" /> {/* Very dark blue */}
              <stop offset="50%" stopColor="rgba(56, 49, 158, 0.3)" /> {/* Deep purple */}
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.3)" /> {/* Subtle orange */}
            </linearGradient>
          </defs>
        </svg>
        
        {/* Fifth wave layer */}
        <svg
          className="absolute bottom-0 left-0 w-[150%] h-full opacity-8"
          viewBox="0 0 1800 600"
          preserveAspectRatio="none"
        >
          <path
            d="M-700,400 C200,360 600,480 1000,400 C1400,360 1700,480 1800,400"
            fill="url(#wave5)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 70 -15; 0 0"
              dur="22s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="d"
              values="M-700,400 C200,360 600,480 1000,400 C1400,360 1700,480 1800,400;
                      M-700,420 C200,380 600,500 1000,420 C1400,380 1700,500 1800,420;
                      M-700,400 C200,360 600,480 1000,400 C1400,360 1700,480 1800,400"
              dur="18s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="wave5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(15, 23, 42, 0.2)" /> {/* Darkest blue */}
              <stop offset="50%" stopColor="rgba(44, 38, 126, 0.2)" /> {/* Deep purple */}
              <stop offset="100%" stopColor="rgba(252, 165, 165, 0.2)" /> {/* Soft orange */}
            </linearGradient>
          </defs>
        </svg>
      </div>
      

      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/20 rounded-full shadow-sm shadow-blue-400/20 animate-pulse"
            style={{
              left: `${10 + (i * 10)}%`,
              top: `${15 + (i * 7)}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>
      
      {/* overlay for texture */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
    </div>
  );
};

export default AnimatedBackground;