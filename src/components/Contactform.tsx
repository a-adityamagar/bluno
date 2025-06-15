import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Refs for scroll animations
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://getform.io/f/ajjodkwa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Form submitted successfully:", formData);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      // Animate title
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top < window.innerHeight * 0.75;
        if (isVisible && !titleRef.current.classList.contains("animate")) {
          titleRef.current.classList.add("animate");
        }
      }

      // Animate form with delay
      if (formRef.current) {
        const rect = formRef.current.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top < window.innerHeight * 0.75;
        if (isVisible && !formRef.current.classList.contains("animate")) {
          setTimeout(() => {
            formRef.current?.classList.add("animate");
          }, 200);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add animation styles
  useEffect(() => {
    const styles = `
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
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
      
      .contact-title {
        opacity: 0;
        transform: translateX(-50px);
      }
      
      .contact-title.animate {
        animation: slideInLeft 0.8s ease-out forwards;
      }
      
      .contact-form {
        opacity: 0;
        transform: translateX(50px);
      }
      
      .contact-form.animate {
        animation: slideInRight 0.8s ease-out forwards;
      }
      
      .form-field {
        opacity: 0;
        transform: translateY(20px);
      }
      
      .contact-form.animate .form-field {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      .contact-form.animate .form-field:nth-child(1) {
        animation-delay: 0.1s;
      }
      
      .contact-form.animate .form-field:nth-child(2) {
        animation-delay: 0.2s;
      }
      
      .contact-form.animate .form-field:nth-child(3) {
        animation-delay: 0.3s;
      }
      
      .contact-form.animate .form-field:nth-child(4) {
        animation-delay: 0.4s;
      }
      
      .contact-form.animate .form-button {
        animation: fadeInUp 0.6s ease-out forwards;
        animation-delay: 0.5s;
      }
      
      .form-button {
        opacity: 0;
        transform: translateY(20px);
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
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-blue-950 to-black text-white overflow-hidden"
    >
      <div className="flex min-h-screen flex-col md:flex-row">
        {/* Left Side - Let's Get in Touch */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-0">
          <div ref={titleRef} className="contact-title max-w-lg">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-4 sm:mb-6 md:mb-8 tracking-wide">
              LET'S
              <br />
              <span className="block">GET IN</span>
              <span className="block">TOUCH<span className="inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white ml-2">.</span></span>
            </h1>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-0">
          <div ref={formRef} className="contact-form w-full max-w-md">
            {isSubmitted ? (
              <div className="text-center py-8">
                <h2 className="text-2xl sm:text-3xl font-light text-green-400 mb-4">
                  Thank you for your submission!
                </h2>
                <p className="text-gray-400">
                  We'll get in touch with you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="form-field relative">
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider mb-1 sm:mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-gray-600 text-white text-base sm:text-lg py-2 sm:py-3 px-0 focus:outline-none focus:border-white transition-colors duration-300 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="form-field grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider mb-1 sm:mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-gray-600 text-white text-base sm:text-lg py-2 sm:py-3 px-0 focus:outline-none focus:border-white transition-colors duration-300 placeholder-gray-500"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider mb-1 sm:mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-gray-600 text-white text-base sm:text-lg py-2 sm:py-3 px-0 focus:outline-none focus:border-white transition-colors duration-300 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div className="form-field relative">
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider mb-1 sm:mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-transparent border-0 border-b border-gray-600 text-white text-base sm:text-lg py-2 sm:py-3 px-0 focus:outline-none focus:border-white transition-colors duration-300 placeholder-gray-500 resize-none"
                    required
                  ></textarea>
                </div>

                <div className="form-button flex justify-end pt-4 sm:pt-6">
                  <button
                    type="submit"
                    className="group flex items-center space-x-2 sm:space-x-3 text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg font-light">
                      Send Message
                    </span>
                    <div className="w-10 sm:w-12 h-10 sm:h-12 border border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                      <ArrowRight className="w-4 sm:w-5" />
                    </div>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
