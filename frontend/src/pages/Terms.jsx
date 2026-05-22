import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  const sections = [
    ['Responsible use', 'Use 876Alert lawfully, respectfully, and only for accurate safety-related communication.'],
    ['No harmful content', 'Do not post false reports, harassment, private information without cause, or content that endangers others.'],
    ['Verification matters', 'Report sightings and emergency details accurately and avoid spreading rumours.'],
    ['Updates', 'These terms may be updated as the platform and public safety workflows evolve.'],
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-emerald-50 py-16 sm:py-24">
          <div className="container-premium max-w-4xl">
            <span className="badge bg-yellow-50 text-yellow-800">Terms & Conditions</span>
            <h1 className="mt-5 text-5xl font-black tracking-tight text-gray-950">Clear rules for a trusted public safety platform.</h1>
            <div className="mt-10 grid gap-4">
              {sections.map(([title, text]) => (
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