import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { emergencyResources } from '../lib/demoData';

export default function EmergencyResources() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 sm:py-24">
          <div className="container-premium">
            <div className="max-w-3xl">
              <span className="badge bg-red-50 text-red-700">Emergency Resources</span>
              <h1 className="mt-5 text-5xl font-black tracking-tight text-gray-950">Important contacts and response guidance.</h1>
              <p className="mt-5 text-lg leading-8 text-gray-600">Keep these contacts accessible and contact official emergency services first when there is immediate danger.</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {emergencyResources.map((resource) => (
                <a key={resource.label} href={resource.value.match(/^\d+$/) ? `tel:${resource.value}` : '#'} className="card-premium rounded-3xl p-6">
                  <div className="text-4xl font-black text-emerald-700">{resource.value}</div>
                  <h2 className="mt-4 text-xl font-black text-gray-950">{resource.label}</h2>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{resource.detail}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}