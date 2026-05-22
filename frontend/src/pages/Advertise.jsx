import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Advertise() {
  const options = [
    ['Priority missing-person placement', 'Families and sponsors can boost urgent missing-person alerts for high-visibility placement in the hero carousel.'],
    ['Local business sponsored ads', 'Businesses can advertise safety products, transport, community services, and emergency support offers.'],
    ['Parish-level visibility', 'Sponsored placements can highlight specific parish locations and call-to-action links.'],
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="bg-[linear-gradient(135deg,#ffffff_0%,#ecfdf5_58%,#fff8d7_100%)] py-16 sm:py-24">
          <div className="container-premium">
            <div className="mx-auto max-w-3xl text-center">
              <span className="badge bg-yellow-100 text-yellow-900 ring-1 ring-yellow-200">Advertise with 876Alert</span>
              <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-0.045em] text-slate-950 sm:text-6xl">
                Sponsor trusted community visibility.
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                876Alert supports paid priority missing-person placement and local sponsored ads for businesses that serve Jamaican communities.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/contact" className="btn btn-primary sm:w-auto">Contact 876Alert</Link>
                <a href="tel:8760000000" className="btn btn-outline sm:w-auto">Call Now</a>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {options.map(([title, text]) => (
                <article key={title} className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-100">
                  <h2 className="text-xl font-black text-slate-950">{title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] bg-emerald-950 p-6 text-white shadow-2xl sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-300">Sponsored carousel</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">High-visibility placement for alerts and businesses.</h2>
              <p className="mt-3 max-w-3xl leading-7 text-emerald-50/80">
                Sponsored cards rotate in the top hero area while remaining clearly labeled as paid placements.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}