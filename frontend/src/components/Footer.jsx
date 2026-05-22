import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Footer() {
  const [joined, setJoined] = useState(false);

  return (
    <footer className="w-full bg-emerald-950 text-white">
      <div className="container-premium py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(280px,1.25fr)_minmax(150px,0.55fr)_minmax(160px,0.55fr)_minmax(320px,0.9fr)] xl:gap-16">
          <section className="justify-self-start">
            <div className="w-fit rounded-2xl bg-white p-3">
              <img src={logo} className="h-[42px] w-[164px] object-contain" alt="876Alert" />
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-emerald-50/80">
              Jamaica’s community-first missing persons and emergency alert platform for faster reporting, clearer updates, and safer public response.
            </p>

            <div className="mt-6 flex gap-2">
              {['f', 'x', 'ig'].map((item) => (
                <a key={item} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xs font-black uppercase text-white transition hover:-translate-y-1 hover:bg-white/20" aria-label={item}>
                  {item}
                </a>
              ))}
            </div>
          </section>

          <section className="lg:justify-self-center">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-yellow-300">Platform</h3>
            <nav className="mt-4 grid gap-3 text-sm font-semibold text-emerald-50/80">
              <Link to="/" className="hover:text-white">Home</Link>
              <a href="/#missing" className="hover:text-white">Missing Persons</a>
              <a href="/#alerts" className="hover:text-white">Alerts</a>
              <Link to="/safety-tips" className="hover:text-white">Safety Tips</Link>
              <Link to="/emergency-resources" className="hover:text-white">Emergency Resources</Link>
            </nav>
          </section>

          <section className="lg:justify-self-center">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-yellow-300">Company</h3>
            <nav className="mt-4 grid gap-3 text-sm font-semibold text-emerald-50/80">
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
              <Link to="/setup" className="hover:text-white">Setup</Link>
            </nav>
          </section>

          <section className="w-full max-w-md justify-self-start rounded-3xl bg-white/10 p-5 ring-1 ring-white/10 backdrop-blur lg:justify-self-end">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-yellow-300">Emergency contacts</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a href="tel:119" className="rounded-2xl bg-white p-4 text-center text-slate-950">
                <span className="block text-2xl font-black">119</span>
                <span className="text-xs font-bold text-slate-500">Police</span>
              </a>
              <a href="tel:110" className="rounded-2xl bg-yellow-300 p-4 text-center text-slate-950">
                <span className="block text-2xl font-black">110</span>
                <span className="text-xs font-bold text-slate-600">Fire / EMS</span>
              </a>
            </div>

            <form onSubmit={(event) => { event.preventDefault(); setJoined(true); }} className="mt-5">
              <label className="text-sm font-black text-white">Get safety updates</label>
              <div className="mt-2 grid gap-2 sm:grid-cols-[1fr_auto] lg:grid-cols-1 xl:grid-cols-[1fr_auto]">
                <input className="input-premium !rounded-full !border-white/20 !bg-white !py-3 !text-slate-950" type="email" required placeholder="Email address" />
                <button className="btn btn-primary !min-h-11 !px-5">Join</button>
              </div>
              {joined && <p className="mt-2 text-sm font-bold text-yellow-200">Thanks — you’re on the update list.</p>}
            </form>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm font-semibold text-emerald-50/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 876Alert. All rights reserved.</p>
          <p>Built for community safety across Jamaica.</p>
        </div>
      </div>
    </footer>
  );
}