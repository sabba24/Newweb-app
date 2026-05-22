import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
            <div className="mt-6 space-y-6 text-gray-700">
              <section>
                <h2 className="text-lg font-semibold text-gray-900">Acceptance of Terms</h2>
                <p className="mt-2 text-sm">By accessing or using 876Alert, you agree to these Terms of Service and our Privacy Policy.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-gray-900">Use of Platform</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                  <li>Share information responsibly and lawfully</li>
                  <li>Do not post harmful, misleading, or abusive content</li>
                  <li>Respect privacy and applicable regulations</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-gray-900">Changes</h2>
                <p className="mt-2 text-sm">We may update these terms periodically. Material changes will be communicated through the platform.</p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
