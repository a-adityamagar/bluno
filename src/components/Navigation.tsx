import { useState, useEffect } from 'react';
import Logo from "../assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact Us', href: '#contact' },
  ];

  // Handle scroll and mouse movement events
  useEffect(() => {
    let timeoutId = 0;
    
    const handleActivity = () => {
      // Clear any existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Show the navbar
      setIsVisible(true);
      
      // Set a new timeout to hide the navbar after 3 seconds of inactivity
      timeoutId = window.setTimeout(() => {
        // Don't hide if menu is open
        if (!isMenuOpen) {
          setIsVisible(false);
        }
      }, 3000);
    };

    // Add event listeners for user activity
    window.addEventListener('scroll', handleActivity);
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('keypress', handleActivity);
    
    // Initial activity trigger
    handleActivity();
    
    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('keypress', handleActivity);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Ensure navbar stays visible when menu is open
      setIsVisible(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
        <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-full pl-1 sm:pl-1.5 md:pl-2 lg:pl-3 pr-4 sm:pr-6 md:pr-8 lg:pr-10 py-2 sm:py-3 md:py-2 max-w-4xl mx-auto border border-white/20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-0.5 sm:space-x-1 md:space-x-1.5" >
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
                <img src={Logo} alt="Logo" className="w-full h-full rounded-full object-cover" />
              </div>
              <span className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide">
                bluno tech
              </span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white transition-all duration-300 text-sm md:text-base lg:text-lg xl:text-xl font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white transition-colors duration-200 p-1 sm:p-2"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-5 sm:w-6 md:w-7 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1 sm:translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-5 sm:w-6 md:w-7 bg-current transition-all duration-300 mt-0.5 sm:mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-5 sm:w-6 md:w-7 bg-current transition-all duration-300 mt-0.5 sm:mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1 sm:-translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Background overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Sliding menu - full width on small devices */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-96 md:w-1/2 max-w-md bg-white bg-opacity-10 backdrop-blur-xl border-l border-white border-opacity-20 shadow-2xl transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu content */}
          <div className="flex flex-col h-full p-4 sm:p-6 md:p-8">
            {/* Close button */}
            <div className="flex justify-end mb-6 sm:mb-8 md:mb-10">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-colors duration-200 p-1 sm:p-2"
                aria-label="Close menu"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8">
                  <span className="block h-0.5 w-5 sm:w-6 md:w-8 bg-current rotate-45 translate-y-2 sm:translate-y-3 md:translate-y-4"></span>
                  <span className="block h-0.5 w-5 sm:w-6 md:w-8 bg-current -rotate-45"></span>
                </div>
              </button>
            </div>
            {/* Navigation links */}
            <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 text-left">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-white hover:text-gray-300 transition-all duration-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide relative group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? 'slideInLeft 0.6s ease-out forwards' : 'none'
                  }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-12 sm:group-hover:w-16 md:group-hover:w-20"></span>
                </a>
              ))}
            </div>
            {/* Additional content area */}
            <div className="mt-auto mb-6 sm:mb-8 md:mb-10">
              <div className="text-white text-opacity-70 text-xs sm:text-sm md:text-base">
                <p>Ready to transform your ideas?</p>
                <p className="mt-1 sm:mt-2 text-2xs sm:text-xs md:text-sm">Get in touch with bluno tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
