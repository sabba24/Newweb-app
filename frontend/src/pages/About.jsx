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
            <p className="mt-4 text-gray-700">876Alert is a public safety platform designed for Jamaica. Our mission is to help communities act quickly during emergencies and missing person cases by making timely, verified information accessible.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
                <h2 className="font-semibold text-gray-900">What we do</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Share verified emergency alerts</li>
                  <li>Provide tools to report missing persons</li>
                  <li>Connect communities across the 14 parishes</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
                <h2 className="font-semibold text-gray-900">Our principles</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Privacy and data minimisation</li>
                  <li>Accuracy and responsible sharing</li>
                  <li>Accessibility and reliability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
