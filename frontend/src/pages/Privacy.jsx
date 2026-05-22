import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
  const sections = [
    ['Data minimization', '876Alert collects only necessary information to operate safety workflows, support reports, and improve public response.'],
    ['Sensitive reports', 'Missing-person details, photos, and contact information should be handled carefully and shared only for legitimate safety purposes.'],
    ['No data selling', 'We do not sell personal data. Platform information is intended for public safety, support, and operational improvements.'],
    ['Access requests', 'For data questions, corrections, or removal requests, contact our support team.'],
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 sm:py-24">
          <div className="container-premium max-w-4xl">
            <span className="badge bg-emerald-50 text-emerald-700">Privacy Policy</span>
            <h1 className="mt-5 text-5xl font-black tracking-tight text-gray-950">Privacy designed for sensitive community safety work.</h1>
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