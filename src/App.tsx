// src/App.tsx
import { BrowserRouter as Router } from 'react-router-dom';
import RegionProvider from './context/regionContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/Services';
import PricingSection from './components/Planning';
import FAQ from './components/Faq';
import Testimonial from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/Contactform';

function App() {
  return (
    <RegionProvider>
      <Router>
        <div className="relative min-h-screen font-['Inter',sans-serif] overflow-x-hidden">
          {/* Navigation */}
          <Navigation />
          
          {/* Hero Section */}
          <HeroSection />
          <ServicesSection />
          <PricingSection />
          <FAQ />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      </Router>
    </RegionProvider>
  );
}

export default App;