import { useEffect, useState, useRef } from "react";
import logo from "../assets/logo.png";
import startup from "../assets/startup.png";
import sbipl from "../assets/SBIPL.png";
import gurkha from "../assets/gurkha.png";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Partnering with Bluno Tech Team has been a construction delight to align with SBIPL's construction focus and maintain a positive tone.",
      author: "SURAMVEER",
      title: "CEO at SBIPL Project ltd. ",
      logo: sbipl,
    },
    {
      id: 2,
      quote:
        "The Bluno Tech Team's exceptional commitment shines through, delivering flawless solutions that elevate our business effortlessly.",
      author: "Debyaraj Koirala",
      title: "Founder of Startupgenic",
      logo: startup,
    },
    {
      id: 3,
      quote:
        "Collaborating with Bluno Tech Team has been a game-changer. Their relentless drive for quality crafts outstanding solutions for us.",
      author: "Arjun Satyal",
      title: "Owner of The GUrkha Khukuri",
      logo: gurkha,
    },
  ];

  // Duplicate testimonials for infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoSlideTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slideWidth = 100;

  // Handle section visibility with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto slide when section gets in viewport
  useEffect(() => {
    if (isSectionVisible) {
      if (autoSlideTimeout.current) {
        clearTimeout(autoSlideTimeout.current);
      }
      
      autoSlideTimeout.current = setTimeout(() => {
        moveToNext();
      }, Math.floor(Math.random() * 1000) + 3000); // 3-4 seconds
    } else if (autoSlideTimeout.current) {
      clearTimeout(autoSlideTimeout.current);
      autoSlideTimeout.current = null;
    }

    // Cleanup
    return () => {
      if (autoSlideTimeout.current) {
        clearTimeout(autoSlideTimeout.current);
        autoSlideTimeout.current = null;
      }
    };
  }, [currentIndex, isSectionVisible]);

  const moveToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  const moveToPrev = () => {
    if (currentIndex === 0) {
      // Jump to the last duplicate without transition
      setIsTransitioning(false);
      setCurrentIndex(testimonials.length);
      // Then move to the previous slide with transition
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(testimonials.length - 1);
      }, 10);
    } else {
      setIsTransitioning(true);
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex === testimonials.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        // Immediately re-enable transitions for the next slide
        setTimeout(() => {
          setIsTransitioning(true);
        }, 10);
      }, 500); 
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, testimonials.length]);

  // Reset auto slide when manually sliding
  const handleSlide = (direction: "left" | "right") => {
    if (autoSlideTimeout.current) {
      clearTimeout(autoSlideTimeout.current);
      autoSlideTimeout.current = null;
    }
    
    if (direction === "right") {
      moveToNext();
    } else {
      moveToPrev();
    }
    
    // Restart auto slide after manual interaction
    if (isSectionVisible) {
      setTimeout(() => {
        if (autoSlideTimeout.current) {
          clearTimeout(autoSlideTimeout.current);
        }
        autoSlideTimeout.current = setTimeout(() => {
          moveToNext();
        }, Math.floor(Math.random() * 1000) + 6000);
      }, 100);
    }
  };

  // Scroll-triggered appearance
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top < window.innerHeight * 0.75;
        if (isVisible && !sliderRef.current.classList.contains('animate')) {
          sliderRef.current.classList.add('animate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const styles = `
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate {
        animation: slideDown 0.6s ease-out forwards;
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.appendChild(document.createTextNode(styles));
    document.head.appendChild(styleSheet);
    return () => {
      if (styleSheet.parentNode) {
        styleSheet.parentNode.removeChild(styleSheet);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b to-blue-950 from-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="testimonials"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full opacity-15 blur-2xl animate-pulse-slow delay-1000"></div>
      <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full opacity-30 blur-xl animate-pulse-slow delay-2000"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_50%)]">
            Testimonials
          </h2>
          <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Hear what our clients say about their experience with us.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div ref={sliderRef} className="relative overflow-hidden opacity-0 translate-y-10">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-full flex-shrink-0 p-6 lg:p-8"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 lg:p-10 text-white relative max-w-4xl mx-auto">
                  {/* User avatar positioned at top-left */}
                  <div className="absolute -top-8 left-8">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-white/20 shadow-lg">
                      <img
                        src={testimonial.logo}
                        className="rounded-full"
                        alt={`${testimonial.author} company logo`}
                      />
                    </div>
                  </div>

                  {/* Main content area */}
                  <div className="pt-8">
                    {/* Quote text */}
                    <div className="mb-8">
                      <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-white/90 font-light">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Author info and company logo container */}
                    <div className="flex justify-between items-end">
                      {/* Author information */}
                      <div>
                        <p className="font-semibold text-white text-lg lg:text-xl mb-1">
                          {testimonial.author}
                        </p>
                        <p className="text-white/60 text-sm lg:text-base">
                          {testimonial.title}
                        </p>
                      </div>

                      {/* Company logo placeholder - positioned at bottom-right */}
                      <div className="flex items-center rounded-full justify-center">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/20">
                          <img src={logo} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-12 gap-4">
          <button
            onClick={() => handleSlide("left")}
            className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => handleSlide("right")}
            className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;