import React, { useEffect, useState } from "react";

const AnimatedBackground: React.FC = () => {
  const [isSafari, setIsSafari] = useState<boolean>(false);

  // Set CSS custom properties for animations
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--wave-speed-1", "8s");
    root.style.setProperty("--wave-speed-2", "12s");
    root.style.setProperty("--wave-speed-3", "10s");
  }, []);

  // Detect Safari for filter compatibility
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsSafari(/safari/.test(userAgent) && !/chrome|android/.test(userAgent));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Inline CSS for animations */}
      <style jsx>{`
        :root {
          --wave-speed-1: 8s;
          --wave-speed-2: 12s;
          --wave-speed-3: 10s;
        }

        @keyframes waveFlow1 {
          0% {
            background-position: 50% 0%, 50% 100%, 50% 50%;
          }
          50% {
            background-position: 50% 100%, 50% 0%, 50% 50%;
          }
          100% {
            background-position: 50% 0%, 50% 100%, 50% 50%;
          }
        }

        @keyframes waveFlow2 {
          0% {
            background-position: 50% 25%, 50% 75%, 50% 50%;
          }
          50% {
            background-position: 50% 75%, 50% 25%, 50% 50%;
          }
          100% {
            background-position: 50% 25%, 50% 75%, 50% 50%;
          }
        }

        @keyframes waveFlow3 {
          0% {
            background-position: 50% 10%, 50% 90%, 50% 50%;
          }
          50% {
            background-position: 50% 90%, 50% 10%, 50% 50%;
          }
          100% {
            background-position: 50% 10%, 50% 90%, 50% 50%;
          }
        }

        @keyframes grainShift {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(0, 0) scale(1.05);
          }
        }

        .wavy-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
              90deg,
              #30030f 0%,
              #4a0f29 20%,
              #1a1a7e 40%,
              #4a0f29 60%,
              #30030f 80%,
              #4a0f29 100%
            );
          background-size: 200% 200%;
          animation: waveFlow1 var(--wave-speed-1) ease-in-out infinite;
        }

        .wave-layer-2 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
              90deg,
              #1a1a7e 0%,
              #4a0f29 25%,
              #30030f 50%,
              #4a0f29 75%,
              #1a1a7e 100%
            );
          background-size: 250% 250%;
          animation: waveFlow2 var(--wave-speed-2) ease-in-out infinite;
          opacity: 0.6;
          mix-blend-mode: overlay;
        }

        .wave-layer-3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
              90deg,
              #4a0f29 0%,
              #30030f 30%,
              #1a1a7e 60%,
              #30030f 90%,
              #4a0f29 100%
            );
          background-size: 300% 300%;
          animation: waveFlow3 var(--wave-speed-3) ease-in-out infinite;
          opacity: 0.4;
          mix-blend-mode: overlay;
        }

        .noise {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.2;
          z-index: 10;
          animation: grainShift 3s ease infinite;
          filter: url(#noiseFilter);
        }

        .particle {
          position: absolute;
          width: 5px;
          height: 5px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent);
          border-radius: 50%;
          animation: float 4s ease-in-out infinite;
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
          pointer-events: none;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        .blur-xl {
          filter: blur(12px);
        }
      `}</style>

      {/* Base wavy gradient background */}
      <div className="absolute inset-0 wavy-background">
        {/* Additional wave layers */}
        <div className="wave-layer-2" />
        <div className="wave-layer-3" />

        {/* SVG filter for noise */}
        <svg
          aria-hidden="true"
          style={{ position: "absolute", width: 0, height: 0 }}
        >
          <defs>
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="5"
                stitchTiles="stitch"
                result="noise"
              />
              <feColorMatrix in="noise" type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="3.0" intercept="-0.4" />
              </feComponentTransfer>
            </filter>
          </defs>
        </svg>

   

       

        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default AnimatedBackground;