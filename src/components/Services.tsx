import { useEffect, useRef } from 'react';
import { Code, TrendingUp, MessageSquare, Palette } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "WEB DEVELOPMENT",
      description: "Custom web solutions tailored to your brand's needs, ensuring seamless functionality and stunning design across all devices.",
      icon: <Code className="w-8 h-8" />,
      gridClass: "md:col-span-1 md:row-span-2"
    },
    {
      id: 2,
      title: "SEARCH ENGINE OPTIMIZATION",
      description: "Boost your website’s visibility with our expert SEO services, designed to drive organic traffic and increase conversions. We help you rank higher, attract the right audience, and grow your business online.",
      icon: <TrendingUp className="w-8 h-8" />,
      gridClass: "md:col-span-2 md:row-span-1"
    },
    {
      id: 3,
      title: "CREATIVE DESIGN SERVICE",
      description: "From branding visuals to intuitive user experiences, we craft distinctive designs that resonate with your audience.",
      icon: <Palette className="w-8 h-8" />,
      gridClass: "md:col-span-1 md:row-span-1",
      isHighlighted: true
    },
    {
  id: 4,
  title: "AI CHATBOT",
  description: "Intelligent AI chatbot integration to provide instant, 24/7 customer support, improve engagement, and automate common queries for better user experience.",
  icon: <MessageSquare className="w-8 h-8" />,
  gridClass: "md:col-span-1 md:row-span-1"
    }
  ];

  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      serviceRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible = rect.top >= 0 && rect.top < window.innerHeight * 0.75;
          if (isVisible && !ref.classList.contains('animate')) {
            setTimeout(() => {
              ref.classList.add('animate');
            }, index * 200); // Stagger animation by 200ms
          }
        }
      });
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
    <section className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden " id="services">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full opacity-15 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16 gap-8">
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight">
              OUR SERVICES
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
              Explore our array of services, from web development to e-commerce 
              solutions. Designed to elevate your online presence and drive success in 
              the digital landscape.
            </p>
          </div>
          
          {/* Contact Us Button */}
          <div className="flex-shrink-0 lg:mt-4">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group">
              Contact us
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => { serviceRefs.current[index] = el; }}
              className={`
                ${service.gridClass}
                ${service.isHighlighted 
                  ? 'bg-white text-black' 
                  : 'bg-gray-900/50 border border-gray-800 hover:border-gray-700'
                }
                rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer group
                backdrop-blur-sm opacity-0 translate-y-10
              `}
            >
              {/* Icon */}
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-300
                ${service.isHighlighted 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black '
                }
              `}>
                {service.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className={`
                  text-xl lg:text-2xl font-bold tracking-tight
                  ${service.isHighlighted ? 'text-black' : 'text-white'}
                `}>
                  {service.title}
                </h3>
                
                <p className={`
                  text-sm lg:text-base leading-relaxed
                  ${service.isHighlighted ? 'text-gray-700' : 'text-gray-400'}
                `}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-end">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full opacity-30 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;