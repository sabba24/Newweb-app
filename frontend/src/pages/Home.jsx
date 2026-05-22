import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MissingPersonsPreview from '../components/MissingPersonsPreview';
import EmergencyAlertsSection from '../components/EmergencyAlertsSection';
import Stats from '../components/Stats';
import HowItWorks from '../components/HowItWorks';
import TrustSafety from '../components/TrustSafety';
import AboutPreview from '../components/AboutPreview';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <MissingPersonsPreview />
        <EmergencyAlertsSection />
        <HowItWorks />
        <TrustSafety />
        <AboutPreview />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
