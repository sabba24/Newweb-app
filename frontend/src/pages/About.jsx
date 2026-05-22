import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">About 876Alert</h1>
            <p className="mt-4 text-gray-700">876Alert is a Jamaica-inspired public safety platform helping communities respond quickly to missing persons and emergency events. We partner with volunteers and local organisations to make information more accessible and actionable.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
