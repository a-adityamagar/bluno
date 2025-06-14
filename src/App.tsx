import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/Services';
import PricingSection from './components/Planning';
import FAQ from './components/Faq';
import Testimonial from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen font-['Inter',sans-serif] overflow-x-hidden">
     
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      <ServicesSection/>
      <FAQ/>
      <Testimonial/>
      <PricingSection/>
      <Footer/>
    </div>
  );
}

export default App;