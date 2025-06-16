import { useEffect, useRef } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top < window.innerHeight * 0.75;
        if (isVisible && !footerRef.current.classList.contains('animate')) {
          footerRef.current.classList.add('animate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add animation styles
  useEffect(() => {
    const styles = `
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      .footer-section {
        opacity: 0;
        transform: translateY(50px);
      }
      
      .footer-section.animate {
        animation: slideUp 0.8s ease-out forwards;
      }
      
      .footer-section.animate .logo-section {
        animation: scaleIn 0.8s ease-out 0.2s forwards;
        opacity: 0;
      }
      
      .footer-section.animate .nav-section {
        animation: fadeInUp 0.8s ease-out 0.4s forwards;
        opacity: 0;
      }
      
      .footer-section.animate .social-section {
        animation: fadeInUp 0.8s ease-out 0.6s forwards;
        opacity: 0;
      }
      
      .footer-section.animate .bottom-section {
        animation: fadeInUp 0.8s ease-out 0.8s forwards;
        opacity: 0;
      }
      
      .footer-section.animate .nav-link {
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;
      }
      
      .footer-section.animate .social-icon {
        animation: scaleIn 0.6s ease-out forwards;
        opacity: 0;
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
    <footer className="bg-black relative py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </div>

      <div ref={footerRef} className="container mx-auto px-6 relative z-10 footer-section">
        {/* Company Logo and Name */}
        <div className="flex items-center justify-center mb-12 group logo-section">
          <div className="flex items-center space-x-4 ">
            <div className="relative">
              <img 
                src={logo} 
                className="w-16 h-16 rounded-full border-2 border-transparent shadow-lg"
                alt="Bluno Tech Logo"
              />
              <div className="absolute inset-0 rounded-full "></div>
            </div>
            <h1 className="text-4xl font-bold text-white tracking-wide ">
              BLUNO TECH
            </h1>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-center mb-12 nav-section">
          <nav className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {[
              { href: "/", label: "HOME" },
              { href: "/about", label: "ABOUT US" },
              { href: "/services", label: "SERVICES" },
              { href: "/contact", label: "CONTACT US" }
            ].map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium tracking-wider relative group nav-link"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center space-x-6 mb-12 social-section">
          {[
            { Icon: FaFacebook, href: "https://facebook.com", color: "hover:bg-blue-600" },
            { Icon: FaInstagram, href: "https://www.instagram.com/blunotech/", color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500" },
            { Icon: FaTwitter, href: "https://x.com/BlunoTech", color: "hover:bg-blue-400" },
            { Icon: FaTiktok, href: "https://www.tiktok.com/@blunotech", color: "hover:bg-gray-800" },
            { Icon: FaLinkedin, href: "https://linkedin.com", color: "hover:bg-blue-700" }
          ].map(({ Icon, href, color }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white/90 backdrop-blur-sm rounded-full p-4 hover:scale-110 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 ${color} group social-icon`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <Icon size={22} className="text-black group-hover:text-white transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Language Selector and Bottom Section */}
        <div className="bottom-section">
          <div className="flex justify-center mb-8">
            <button className="border border-white rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300">
              English
            </button>
          </div>

          {/* Decorative line */}
          <div className="flex justify-center mb-10">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm tracking-wide hover:text-gray-300 transition-colors duration-300">
              © {new Date().getFullYear()} BLUNO TECH. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;