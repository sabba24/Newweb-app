import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { demoMissingPersons } from '../lib/demoData';

const statusStyles = {
  urgent: 'bg-red-50 text-red-700 ring-red-100',
  missing: 'bg-amber-50 text-amber-800 ring-amber-100',
  located: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
};

export default function MissingPersonDetail() {
  const { id } = useParams();
  const person = demoMissingPersons.find((item) => String(item.id) === id || item.slug === id);

  if (!person) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-1 py-16">
          <div className="container-premium max-w-3xl text-center">
            <span className="badge bg-red-50 text-red-700">Not found</span>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950">Missing-person report not found.</h1>
            <p className="mt-4 text-slate-600">The report may have been removed or the link may be incorrect.</p>
            <Link to="/#missing" className="btn btn-primary mt-8 sm:w-auto">Back to reports</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const shareText = encodeURIComponent(`Missing person report: ${person.name} - ${window.location.href}`);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="bg-[linear-gradient(135deg,#fff_0%,#f0fdf4_60%,#fff8d7_100%)] py-12 sm:py-16">
          <div className="container-premium">
            <Link to="/#missing" className="text-sm font-black text-emerald-700 hover:underline">← Back to missing persons</Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl ring-1 ring-slate-100">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <img src={person.photo_url} alt={person.name} className="aspect-[4/5] h-full w-full object-cover" />
                  <div className="absolute left-4 top-4">
                    <span className={`badge ring-1 ${statusStyles[person.status] || statusStyles.missing}`}>
                      {person.status}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  {person.priority && <span className="badge bg-red-50 text-red-700 ring-1 ring-red-100">Priority Alert</span>}
                  <span className="badge bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">Community Report</span>
                </div>

                <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-0.045em] text-slate-950 sm:text-5xl">
                  {person.name}
                </h1>
                <p className="mt-3 text-lg font-bold text-emerald-700">
                  {person.age} years · {person.parish}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Last seen</p>
                    <p className="mt-2 font-black text-slate-950">{person.last_seen_location}</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Missing date</p>
                    <p className="mt-2 font-black text-slate-950">{new Date(person.date_missing).toLocaleDateString()}</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Status</p>
                    <p className="mt-2 font-black capitalize text-slate-950">{person.status}</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Contact</p>
                    <p className="mt-2 font-black text-slate-950">{person.contact_number}</p>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <h2 className="text-xl font-black text-slate-950">Report details</h2>
                  <p className="mt-3 leading-7 text-slate-600">{person.description}</p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <a href={`tel:${person.contact_number}`} className="btn btn-primary">Call Contact</a>
                  <a href={person.report_tip_url} className="btn btn-outline">Report Tip</a>
                  <a href={`https://twitter.com/intent/tweet?text=${shareText}`} target="_blank" rel="noreferrer" className="btn btn-outline">Share</a>
                </div>

                <div className="mt-6 rounded-3xl bg-red-50 p-5 ring-1 ring-red-100">
                  <p className="font-black text-red-800">If this is an emergency, call 119 immediately.</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-red-700">Share only verified sightings and avoid approaching anyone in a way that may create danger.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}