import React, { useEffect } from "react";

const AnimatedBackground: React.FC = () => {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--wave-speed-1", "10s");
    root.style.setProperty("--wave-speed-2", "14s");
    root.style.setProperty("--wave-speed-3", "18s");
  }, []);

  return (
    <>
      <style>{`
        :root {
          --wave-speed-1: 10s;
          --wave-speed-2: 14s;
          --wave-speed-3: 18s;
        }

        @keyframes waveFlow1 {
          0%, 100% {
            background-position: 50% 0%;
          }
          50% {
            background-position: 50% 100%;
          }
        }

        @keyframes waveFlow2 {
          0%, 100% {
            background-position: 50% 25%;
          }
          50% {
            background-position: 50% 75%;
          }
        }

        @keyframes waveFlow3 {
          0%, 100% {
            background-position: 50% 10%;
          }
          50% {
            background-position: 50% 90%;
          }
        }

        @keyframes grainShift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-1px, 1px) scale(1.03);
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
            #0A192F 0%,
            #0A192F 15%,
            #112240 30%,
            #112240 45%,
            #0A192F 60%,
            #0A192F 100%
          );
          background-size: 200% 200%;
          animation: waveFlow1 var(--wave-speed-1) ease-in-out infinite;
        }

        .wave-layer-2 {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            #0A192F 0%,
            #112240 20%,
            #112240 40%,
            #0A192F 70%,
            #0A192F 100%
          );
          background-size: 250% 250%;
          animation: waveFlow2 var(--wave-speed-2) ease-in-out infinite;
          opacity: 0.5;
          mix-blend-mode: multiply;
        }

        .wave-layer-3 {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            #0A192F 0%,
            #112240 25%,
            #112240 50%,
            #0A192F 75%,
            #0A192F 100%
          );
          background-size: 300% 300%;
          animation: waveFlow3 var(--wave-speed-3) ease-in-out infinite;
          opacity: 0.35;
          mix-blend-mode: soft-light;
        }

        .noise {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.1;
          animation: grainShift 3s infinite ease-in-out;
          filter: url(#noiseFilter);
          z-index: 10;
          pointer-events: none;
        }

        .overlay-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.2),
            transparent
          );
          z-index: 5;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden z-[-1]">
        <div className="absolute inset-0 wavy-background">
          <div className="wave-layer-2" />
          <div className="wave-layer-3" />
          <div className="overlay-gradient" />
          <div className="noise" />

          {/* SVG noise filter */}
          <svg
            aria-hidden="true"
            style={{ position: "absolute", width: 0, height: 0 }}
          >
            <defs>
              <filter id="noiseFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.6"
                  numOctaves="4"
                  result="noise"
                />
                <feColorMatrix in="noise" type="saturate" values="0" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="1.8" intercept="-0.3" />
                </feComponentTransfer>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default AnimatedBackground;