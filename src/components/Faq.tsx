import { useEffect, useRef } from "react";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I get started?",
      answer:
        "- Choose a plan that fits your business needs and complete payment upfront.\n- Fill out a short form to share your business details and vision.\n- Our team will handle the rest, keeping you updated throughout the process!",
    },
    {
      id: 2,
      question: "How long does it take to deliver results?",
      answer:
        "The first steps of your solution will be ready in 5 business days after receiving your project details. Depending on the plan, the full solution will be implemented within 10 business days.",
    },
    {
      id: 3,
      question: "Can I upgrade my plan later?",
      answer:
        "Absolutely! Everything changes, and we want to be flexible too. Please contact us at blunotech@gmail.com.",
    },
    {
      id: 4,
      question: "Do I need technical knowledge to use your solutions?",
      answer:
        "Not at all. All our solutions are designed to be user-friendly, with ongoing support to ensure a seamless experience for you and your team.",
    },
    {
      id: 5,
      question: "How do I provide details about my business and vision?",
      answer:
        "For most packages, we'll guide you through a short and user-friendly form. For custom plans, our team will work closely with you to collect all the necessary information about your business and goals.",
    },
    {
      id: 6,
      question: "Can I manage or edit the solution myself later?",
      answer:
        "No, our solution is hosted on our proprietary AI automation platform. If you cancel the service, the automation will be deactivated.",
    },
    {
      id: 7,
      question: "What if I'm not satisfied?",
      answer:
        "We are committed to delivering measurable results, including improving a key business metric to ensure the value of our solutions. However, due to the nature of our work, refunds are not available.",
    },
    {
      id: 8,
      question: "Why should I choose your agency?",
      answer:
        "We're faster, more affordable, and more efficient than hiring separate business analysts, developers, or using other platforms. Our expert-driven approach ensures your automation solutions are tailored to your specific business needs.",
    },
    {
      id: 9,
      question: "What kind of businesses benefit most from your services?",
      answer:
        "Choose a plan that fits your business needs and complete payment upfront. - Fill out a short form to share your business details and vision. - Our team will handle the rest, keeping you updated throughout the process!",
    },
  ];

  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      faqRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible =
            rect.top >= 0 && rect.top < window.innerHeight * 0.75;
          if (isVisible && !ref.classList.contains("animate")) {
            setTimeout(() => {
              ref.classList.add("animate");
            }, index * 200); // Stagger animation by 200ms
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
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
      className="relative min-h-screen bg-gradient-to-b from-blue-950 to-black  text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="faq"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full opacity-15 blur-2xl animate-pulse-slow delay-1000"></div>
      <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full opacity-30 blur-xl animate-pulse-slow delay-2000"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16 gap-8">
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight">
              FAQ
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
              Find answers to the most common questions about our AI automation
              and low-code solutions.
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

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              ref={(el) => {
                faqRefs.current[faq.id - 1] = el;
              }}
              className="
                md:col-span-1 md:row-span-1
                bg-gray-900/50 border border-gray-800 hover:border-gray-700 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer group backdrop-blur-sm opacity-0 translate-y-10
              "
            >
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-6 transition-all duration-300">
                <span className="text-xl font-bold">{faq.id}</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-white">
                  {faq.question}
                </h3>
                <p className="text-sm lg:text-base leading-relaxed text-gray-400 whitespace-pre-line">
                  {faq.answer}
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

export default FAQ;
