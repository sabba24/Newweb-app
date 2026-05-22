import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Setup() {
  const steps = [
    ['Environment', 'API base URL configured through VITE_API_BASE_URL', true],
    ['Backend API', 'Laravel routes remain wired for auth, alerts, and missing persons', true],
    ['Demo content', 'Frontend fallback demo profiles and alerts are ready', true],
    ['Database seed', 'Use the existing Laravel seeders when setting up backend data', false],
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-emerald-50 py-16 sm:py-24">
          <div className="container-premium max-w-5xl">
            <span className="badge bg-emerald-50 text-emerald-700">Setup experience</span>
            <h1 className="mt-5 text-5xl font-black tracking-tight text-gray-950">876Alert installation checklist</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              A polished setup view for checking frontend demo content, API wiring, environment readiness, and backend seed status without changing the existing architecture.
            </p>

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-2xl">
              <div className="h-3 bg-gradient-to-r from-emerald-600 via-yellow-300 to-emerald-600" />
              <div className="grid gap-4 p-6 sm:p-8">
                {steps.map(([title, detail, complete], index) => (
                  <div key={title} className="flex items-center gap-4 rounded-3xl border border-gray-100 bg-gray-50 p-5">
                    <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-black ${complete ? 'bg-emerald-600 text-white' : 'bg-yellow-300 text-gray-950'}`}>
                      {complete ? '✓' : index + 1}
                    </div>
                    <div>
                      <h2 className="font-black text-gray-950">{title}</h2>
                      <p className="text-sm leading-6 text-gray-600">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-emerald-950 p-6 text-white">
              <p className="font-black">Status</p>
              <p className="mt-2 text-emerald-50/80">The premium frontend demo experience is ready while preserving existing API calls, auth, routes, and backend configuration.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}