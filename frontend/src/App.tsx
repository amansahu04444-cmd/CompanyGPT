import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import FeatureGrid from './components/FeatureGrid';
import AutoReporter from './components/AutoReporter';
import HowItWorks from './components/HowItWorks';
import DashboardPreview from './components/DashboardPreview';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-buttermilk text-forest-green min-h-screen relative font-body selection:bg-sunshine-yellow selection:text-forest-green">
      {/* Dynamic Header container */}
      <Navbar />
      
      {/* Sequential premium sections */}
      <main>
        <Hero />
        <Marquee />
        <FeatureGrid />
        <AutoReporter />
        <HowItWorks />
        <DashboardPreview />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>

      {/* Corporate document Footer */}
      <Footer />
    </div>
  );
}

export default App;
