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
            <p className="mt-4 text-gray-700">By using 876Alert, you agree to use the platform lawfully, refrain from posting harmful content, and comply with applicable laws. We may update these terms periodically.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
