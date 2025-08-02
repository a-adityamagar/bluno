import { useEffect, useRef } from "react";
import { Calendar, Search, Laptop, Rocket } from "lucide-react";

const WhyChooseUs = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Animate header
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top < window.innerHeight * 0.75;
        if (isVisible && !headerRef.current.classList.contains("animate")) {
          headerRef.current.classList.add("animate");
        }
      }

      // Animate cards
      if (cardsRef.current) {
        const rect = cardsRef.current.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top < window.innerHeight * 0.75;
        if (isVisible && !cardsRef.current.classList.contains("animate-cards")) {
          cardsRef.current.classList.add("animate-cards");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const styles = `
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate {
        animation: slideDown 0.8s ease-out forwards;
      }
      
      .animate-cards .feature-card {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      .animate-cards .feature-card:nth-child(1) {
        animation-delay: 0.1s;
      }
      
      .animate-cards .feature-card:nth-child(2) {
        animation-delay: 0.2s;
      }
      
      .animate-cards .feature-card:nth-child(3) {
        animation-delay: 0.3s;
      }
      
      .animate-cards .feature-card:nth-child(4) {
        animation-delay: 0.4s;
      }
      
      .why-header {
        opacity: 0;
        transform: translateY(-30px);
      }
      
      .feature-card {
        opacity: 0;
        transform: translateY(40px);
        min-height: 280px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      
      @media (min-width: 640px) {
        .feature-card {
          min-height: 320px;
        }
      }
      
      @media (min-width: 1024px) {
        .feature-card {
          min-height: 350px;
        }
      }
      
      .feature-card:hover {
        transform: translateY(-5px);
        transition: all 0.3s ease;
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

  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-black" />,
      title: "Flexible\nDevelopment",
      description: "We offer flexible development options that fit your business timeline. Whether you need rapid prototyping, custom solutions, or enterprise-level applications.",
      bgColor: "bg-gray-900/50 border border-gray-800 hover:border-gray-700",
      textColor: "text-white",
      buttonStyle: "bg-white text-black hover:bg-gray-100"
    },
    {
      icon: <Search className="w-8 h-8 text-black" />,
      title: "Personalized\nSolutions",
      description: "We understand that every business is unique. Our personalized web solutions are tailored to your specific requirements and goals.",
      bgColor: "bg-gray-900/50 border border-gray-800 hover:border-gray-700",
      textColor: "text-white",
      buttonStyle: "bg-white text-black hover:bg-gray-100"
    },
    {
      icon: <Laptop className="w-8 h-8 text-black" />,
      title: "Expert\nDevelopers",
      description: "Our team of certified and experienced developers is dedicated to delivering cutting-edge web solutions that drive your business forward.",
      bgColor: "bg-gray-900/50 border border-gray-800 hover:border-gray-700",
      textColor: "text-white",
      buttonStyle: "bg-white text-black hover:bg-gray-100"
    },
    {
      icon: <Rocket className="w-8 h-8 text-black" />,
      title: "Comprehensive\nTech Approach",
      description: "Our services go beyond web development. We offer SEO optimization, CMS integration, and complete digital transformation solutions.",
      bgColor: "bg-gray-900/50 border border-gray-800 hover:border-gray-700",
      textColor: "text-white",
      buttonStyle: "bg-white text-black hover:bg-gray-100"
    }
  ];

  return (
    <section
      className="relative min-h-screen bg-gradient-to-b from-black to-blue-950 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="why-choose-us"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full opacity-15 blur-2xl animate-pulse-slow delay-1000"></div>
      <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full opacity-30 blur-xl animate-pulse-slow delay-2000"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          ref={headerRef}
          className="why-header flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 sm:mb-20"
        >
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight text-white">
              Why Choose Us?
            </h2>
            <p className="text-white text-base sm:text-lg lg:text-xl xl:text-xl max-w-2xl leading-relaxed opacity-90">
              Our commitment to your wellness goes beyond just classes and training sessions. Discover the unique benefits that set us apart and ensure you have the best experience on your wellness journey.
            </p>
          </div>
          <div className="lg:w-1/3 lg:flex lg:justify-end">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 group">
              Join us
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${feature.bgColor} ${feature.textColor} p-6 sm:p-8 lg:p-7 xl:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 flex-shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl font-bold mb-4 sm:mb-5 leading-tight whitespace-pre-line">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-sm xl:text-base leading-relaxed opacity-90 flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;