import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-emerald-50 to-white py-16 sm:py-24">
          <div className="container-premium">
            <div className="max-w-3xl">
              <span className="badge bg-white text-emerald-700 shadow-sm">About 876Alert</span>
              <h1 className="mt-5 text-5xl font-black tracking-tight text-gray-950">A safer Jamaica starts with faster verified information.</h1>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                876Alert is a Jamaica-inspired public safety platform designed to help communities, families, NGOs, and responders share missing-person reports and emergency updates with clarity and care.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                ['Community powered', 'Built around neighbourhood awareness, responsible sharing, and parish-level response.'],
                ['Privacy conscious', 'Sensitive reports should be handled carefully and shared only with verified context.'],
                ['Emergency ready', 'Designed for fast access on mobile devices when minutes matter most.'],
              ].map(([title, text]) => (
                <div key={title} className="card-premium rounded-3xl p-6">
                  <h2 className="text-xl font-black text-gray-950">{title}</h2>
                  <p className="mt-3 leading-7 text-gray-600">{text}</p>
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