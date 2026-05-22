import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
            <p className="mt-4 text-gray-700">For inquiries, partnerships, or press, please email support@876alert.example or call 1-876-000-0000.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
