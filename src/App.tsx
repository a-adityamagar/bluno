import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/Services';
import PricingSection from './components/Planning';

function App() {
  return (
    <div className="relative min-h-screen font-['Inter',sans-serif] overflow-x-hidden">
     
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      <ServicesSection/>
      <PricingSection/>
    </div>
  );
}

export default App;