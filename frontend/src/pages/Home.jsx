import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MissingPersonsPreview from '../components/MissingPersonsPreview';
import EmergencyAlertsSection from '../components/EmergencyAlertsSection';
import Stats from '../components/Stats';
import HowItWorks from '../components/HowItWorks';
import TrustSafety from '../components/TrustSafety';
import Testimonials from '../components/Testimonials';
import FinalCta from '../components/FinalCta';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <MissingPersonsPreview />
        <EmergencyAlertsSection />
        <HowItWorks />
        <TrustSafety />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}