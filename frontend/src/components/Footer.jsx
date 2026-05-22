import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Footer() {
  const [joined, setJoined] = useState(false);

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-premium py-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.72fr_0.72fr_0.9fr]">
          <section>
            <img src={logo} className="h-11 w-auto max-w-[184px]" alt="876Alert" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              Jamaica’s community-first missing persons and emergency alert platform for clearer reporting, faster sharing, and safer response.
            </p>
            <div className="mt-5 flex gap-2">
              {['f', 'x', 'ig'].map((item) => (
                <a key={item} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-xs font-black uppercase text-slate-600 transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700" aria-label={item}>
                  {item}
                </a>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-slate-950">Platform</h3>
            <nav className="mt-4 grid gap-3 text-sm font-bold text-slate-600">
              <a href="/#missing" className="hover:text-emerald-700">Missing Persons</a>
              <a href="/#alerts" className="hover:text-emerald-700">Emergency Alerts</a>
              <Link to="/safety-tips" className="hover:text-emerald-700">Safety Tips</Link>
              <Link to="/emergency-resources" className="hover:text-emerald-700">Emergency Resources</Link>
              <Link to="/setup" className="hover:text-emerald-700">Setup</Link>
            </nav>
          </section>

          <section>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-slate-950">Organization</h3>
            <nav className="mt-4 grid gap-3 text-sm font-bold text-slate-600">
              <Link to="/about" className="hover:text-emerald-700">About Us</Link>
              <Link to="/contact" className="hover:text-emerald-700">Contact</Link>
              <Link to="/privacy" className="hover:text-emerald-700">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-emerald-700">Terms & Conditions</Link>
            </nav>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-slate-950">Emergency contacts</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a href="tel:119" className="rounded-2xl bg-emerald-700 p-4 text-center text-white shadow-sm">
                <span className="block text-2xl font-black">119</span>
                <span className="text-xs font-bold text-emerald-50">Police</span>
              </a>
              <a href="tel:110" className="rounded-2xl bg-yellow-300 p-4 text-center text-slate-950 shadow-sm">
                <span className="block text-2xl font-black">110</span>
                <span className="text-xs font-bold">Fire / EMS</span>
              </a>
            </div>

            <form onSubmit={(event) => { event.preventDefault(); setJoined(true); }} className="mt-5">
              <label className="text-sm font-black text-slate-800">Get safety updates</label>
              <div className="mt-2 grid gap-2 sm:grid-cols-[1fr_auto] lg:grid-cols-1">
                <input className="input-premium !rounded-full !py-3" type="email" required placeholder="Email address" />
                <button className="btn btn-primary !min-h-11 !px-5">Join</button>
              </div>
              {joined && <p className="mt-2 text-sm font-bold text-emerald-700">Thanks — you’re on the update list.</p>}
            </form>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 876Alert. All rights reserved.</p>
          <p>Built for community safety across Jamaica.</p>
        </div>
      </div>
    </footer>
  );
}