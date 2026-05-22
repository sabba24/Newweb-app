import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="mt-4 text-gray-700">We respect your privacy. 876Alert collects only necessary information to operate the platform and improve public safety. We do not sell your data. For details on retention and access requests, contact our team.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
