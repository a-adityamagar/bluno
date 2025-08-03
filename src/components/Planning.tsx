// src/components/Planning.tsx
import React, { useEffect, useRef, useState, useContext } from "react";
import { Check } from "lucide-react";
import { RegionContext } from "../context/regionContext"; 

const PricingSection: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const { region } = useContext(RegionContext);
  const [activeTab, setActiveTab] = useState("website");

  // Website packages
  const websitePackages = [
    {
      name: "Foundational Package",
      price: {
        global: "$499",
        india: "₹35000",
        nepal: "NPR 30000",
      },
      description: "Perfect for small businesses getting started",
      features: [
        "1-6 static pages (Home, About, Services, Contact)",
        "Responsive design (mobile-friendly)",
        "Basic contact form",
        "Google Map integration",
        "Domain registration (.com etc. at market rate)",
        "Basic web hosting (e.g., 500MB) for 1 year",
        "Basic SEO setup (title tags, meta descriptions)",
        "1-2 rounds of revisions",
        "$20 for extra page ($50 for 3 pages)",
      ],
    },
    {
      name: "Business Boost",
      price: {
        global: "$899",
        india: "₹55000",
        nepal: "NPR 45000",
      },
      description: "Complete solution for growing businesses",
      features: [
        "Up to 8-15 pages",
        "Responsive design",
        "CMS integration easy content management",
        "Advanced contact forms",
        "Image gallery/portfolio",
        "Blog section",
        "Basic analytics setup (Google Analytics)",
        "Basic on-page SEO optimization",
        "3-4 rounds of revisions",
        "Short training session for CMS usage",
      ],
      popular: true,
    },
    {
      name: "Personal Brand Kit",
      price: {
        global: "Custom",
        india: "Custom",
        nepal: "Custom",
      },
      description: "Tailored for professionals and creators",
      features: [
        "Website audit",
        "Portfolio for devs, creators, and freelancers",
        "Resume + case studies + contact form",
        "Clean, fast, and shareable layout",
        "Advanced AI chatbot for instant support",
        "Advanced Search Engine Optimization",
        "3-4 rounds of revisions",
        "Training session for CMS usage",
      ],
    },
  ];

  // SEO packages
  const seoPackages = [
    {
      name: "Foundational Package",
      price: {
        global: "$299",
        india: "₹25000",
        nepal: "NPR 25000",
      },
      description: "Essential SEO foundation for new websites",
      features: [
        "Website SEO audit",
        "Keyword research (up to 15 keywords)",
        "On-page optimization",
        "Meta tags optimization",
        "Google My Business setup",
        "Basic local SEO setup",
        "Basic technical SEO",
        "Existing blog post update",
        "Monthly performance report",
      ],
    },
    {
      name: "Business Boost",
      price: {
        global: "$599",
        india: "₹40000",
        nepal: "NPR 35000",
      },
      description: "Comprehensive SEO for growing businesses",
      features: [
        "Complete website SEO audit",
        "Advanced keyword research (20+ keywords)",
        "Technical SEO optimization",
        "Content strategy development",
        "Link building campaign (5 quality backlinks)",
        "Local SEO optimization",
        "Google Analytics & Search Console setup",
        "Weekly detailed reports",
        "2-3 new blog posts",
      ],
      popular: true,
    },
    {
      name: "Personal Brand Kit",
      price: {
        global: "Custom",
        india: "Custom",
        nepal: "Custom",
      },
      description: "Advanced SEO solutions for large businesses",
      features: [
        "Comprehensive SEO strategy",
        "Unlimited keyword targeting",
        "Advanced technical SEO",
        "Content marketing strategy",
        "Advanced link building campaign",
        "Competitor analysis & monitoring",
        "Multi-location SEO (if applicable)",
        "Weekly reports & consultations",
        "6+ months of ongoing support",
      ],
    },
  ];

  const currentPackages = activeTab === "website" ? websitePackages : seoPackages;

  // Handle scroll animations and toggle-based animation
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
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger card animations on tab change
  useEffect(() => {
    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.classList.remove("animate");
        setTimeout(() => {
          ref.classList.add("animate");
        }, index * 150);
      }
    });
  }, [activeTab]);

  // Add animation styles
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
      
      @keyframes fadeInScale {
        from {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      
      .animate {
        animation: slideDown 0.8s ease-out forwards;
      }
      
      .animate-card {
        animation: fadeInScale 0.6s ease-out forwards;
      }
      
      .pricing-header {
        opacity: 0;
        transform: translateY(-30px);
      }
      
      .pricing-card {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
      }
      
      .pricing-card.animate {
        animation: fadeInScale 0.6s ease-out forwards;
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
      className="min-h-screen bg-gradient-to-b to-blue-950 from-black text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          ref={headerRef}
          className="pricing-header flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 sm:mb-12 lg:mb-16 gap-6 sm:gap-8"
        >
          <div className="flex-1">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
              PRICING PLANS
            </h2>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg xl:text-xl max-w-xl lg:max-w-2xl leading-relaxed">
              Contact us for custom pricing tailored to your unique
              requirements. We offer flexible solutions for all your needs.
            </p>
          </div>

          {/* Contact Us Button */}
          <div className="flex-shrink-0 lg:mt-4">
            <button className="bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base">
              Get Custom Quote
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform duration-300"
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

        {/* Toggle Button */}
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-0.5 border border-white/20">
            <div className="flex">
              <button
                onClick={() => setActiveTab("website")}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
                  activeTab === "website"
                    ? "bg-white text-black shadow-md"
                    : "text-white hover:text-gray-300"
                }`}
              >
                Website
              </button>
              <button
                onClick={() => setActiveTab("seo")}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
                  activeTab === "seo"
                    ? "bg-white text-black shadow-md"
                    : "text-white hover:text-gray-300"
                }`}
              >
                SEO
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {currentPackages.map((pkg, index) => (
            <div
              key={`${activeTab}-${index}`}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`pricing-card relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:bg-white/10 group ${
                pkg.popular
                  ? "ring-1 sm:ring-2 ring-white/20 shadow-xl sm:shadow-2xl shadow-white/10"
                  : "hover:border-white/20"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-2 sm:mb-3 lg:mb-4">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    {pkg.price[region as keyof typeof pkg.price]}
                  </span>
                  {pkg.price[region as keyof typeof pkg.price] !== "Custom" && (
                    <span className="text-gray-400 text-sm sm:text-base lg:text-lg ml-1">
                      /{activeTab === "seo" ? "month" : "project"}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed px-2">
                  {pkg.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 sm:space-y-3 lg:space-y-4 mb-6 sm:mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-2.5 sm:gap-3"
                  >
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black" />
                    </div>
                    <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;