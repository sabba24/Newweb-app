import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { safetyTips } from '../lib/demoData';

export default function SafetyTips() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-emerald-50 to-white py-16 sm:py-24">
          <div className="container-premium">
            <div className="mx-auto max-w-3xl text-center">
              <span className="badge bg-white text-emerald-700 shadow-sm">Safety Tips</span>
              <h1 className="mt-5 text-5xl font-black tracking-tight text-gray-950">Practical guidance for safer response.</h1>
              <p className="mt-5 text-lg leading-8 text-gray-600">Use these tips when sharing reports, assisting searches, or responding to emergency notices.</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {safetyTips.map((tip, index) => (
                <div key={tip} className="card-premium rounded-3xl p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-600 font-black text-white">{index + 1}</div>
                  <p className="mt-5 font-semibold leading-7 text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}