import  { useState, useEffect } from 'react';
import Logo from "../assets/logo.png"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-4 left-4 right-4 z-50">
        <div className="bg-white shadow-lg rounded-full px-6 sm:px-8 lg:px-10 py-3 sm:py-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 sm:w-10 sm:h-10rounded-full flex items-center justify-center">
                 <img src={Logo} alt="Logo" className="w-full h-full rounded-full object-cover " />

              </div>
              <span className="text-gray-900 font-bold text-lg sm:text-xl md:text-2xl tracking-wide">
                bluno tech
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-900 transition-all duration-300 text-base xl:text-lg font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-900 transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 sm:w-7 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 sm:w-7 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 sm:w-7 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        {/* Background overlay */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Sliding menu */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-96 md:w-1/2 max-w-md bg-white bg-opacity-10 backdrop-blur-xl border-l border-white border-opacity-20 shadow-2xl transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu content */}
          <div className="flex flex-col h-full p-6 sm:p-8 md:p-10">
            {/* Close button */}
            <div className="flex justify-end mb-8 sm:mb-12">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
                aria-label="Close menu"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8">
                  <span className="block h-0.5 w-6 sm:w-8 bg-current rotate-45 translate-y-3 sm:translate-y-4"></span>
                  <span className="block h-0.5 w-6 sm:w-8 bg-current -rotate-45"></span>
                </div>
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col space-y-6 sm:space-y-8 text-left">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-white hover:text-gray-300 transition-all duration-300 text-2xl sm:text-3xl md:text-4xl font-light tracking-wide relative group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? 'slideInLeft 0.6s ease-out forwards' : 'none'
                  }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-16 sm:group-hover:w-20"></span>
                </a>
              ))}
            </div>

            {/* Additional content area */}
            <div className="mt-auto mb-8 sm:mb-12">
              <div className="text-white text-opacity-70 text-sm sm:text-base">
                <p>Ready to transform your ideas?</p>
                <p className="mt-2 text-xs sm:text-sm">Get in touch with bluno tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Navigation;