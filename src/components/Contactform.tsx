import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://getform.io/f/ajjodkwa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form submitted successfully:', formData);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5 seconds
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-blue-950 to-black text-white overflow-hidden"
    >
      {/* Background decorative elements - moved to left side */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10 sm:top-10 sm:left-10 md:top-16 md:left-16 lg:top-20 lg:left-20"></div>
      <div className="absolute top-40 left-40 w-4 h-4 bg-white rounded-full opacity-30 sm:hidden md:top-32 md:left-32 lg:top-40 lg:left-40"></div>
      <div className="absolute top-60 left-60 w-2 h-2 bg-white rounded-full opacity-50 sm:hidden md:top-48 md:left-48 lg:top-60 lg:left-60"></div>

      <div className="flex min-h-screen flex-col md:flex-row">
        {/* Left Side - Let's Get in Touch */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-0">
          <div className="max-w-lg">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-4 sm:mb-6 md:mb-8 tracking-wide">
              LET'S<br />
              <span className="block">GET IN</span>
              <span className="block">TOUCH</span>
            </h1>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-0">
          <div className="w-full max-w-md">
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
                <div className="relative">
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
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

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
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
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
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

                <div className="relative">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
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

                <div className="flex justify-end pt-4 sm:pt-6">
                  <button
                    type="submit"
                    className="group flex items-center space-x-2 sm:space-x-3 text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg font-light">Send Message</span>
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