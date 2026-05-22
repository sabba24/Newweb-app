import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Footer() {
  const [joined, setJoined] = useState(false);

  return (
    <footer className="border-t border-emerald-100 bg-white">
      <div className="container-premium py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <img src={logo} className="h-11 w-auto" alt="876Alert" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600">
              Jamaica’s community-first missing persons and emergency alert platform for faster, safer public response.
            </p>
            <div className="mt-6 flex gap-3">
              {['f', 'x', 'ig'].map((item) => (
                <a key={item} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 bg-white text-sm font-black text-gray-700 transition hover:-translate-y-1 hover:border-emerald-200 hover:text-emerald-700" aria-label={item}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-black text-gray-950">Platform</h3>
            <nav className="mt-4 grid gap-3 text-sm font-semibold text-gray-600">
              <a href="/#missing" className="hover:text-emerald-700">Missing Persons</a>
              <a href="/#alerts" className="hover:text-emerald-700">Emergency Alerts</a>
              <Link to="/safety-tips" className="hover:text-emerald-700">Safety Tips</Link>
              <Link to="/emergency-resources" className="hover:text-emerald-700">Emergency Resources</Link>
              <Link to="/setup" className="hover:text-emerald-700">Setup</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-black text-gray-950">Company</h3>
            <nav className="mt-4 grid gap-3 text-sm font-semibold text-gray-600">
              <Link to="/about" className="hover:text-emerald-700">About</Link>
              <Link to="/contact" className="hover:text-emerald-700">Contact</Link>
              <Link to="/privacy" className="hover:text-emerald-700">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-emerald-700">Terms & Conditions</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-black text-gray-950">Emergency contacts</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a href="tel:119" className="rounded-2xl bg-emerald-50 p-4 text-center">
                <span className="block text-2xl font-black text-emerald-700">119</span>
                <span className="text-xs font-bold text-gray-500">Police</span>
              </a>
              <a href="tel:110" className="rounded-2xl bg-yellow-50 p-4 text-center">
                <span className="block text-2xl font-black text-yellow-700">110</span>
                <span className="text-xs font-bold text-gray-500">Fire / EMS</span>
              </a>
            </div>

            <form onSubmit={(event) => { event.preventDefault(); setJoined(true); }} className="mt-5">
              <label className="text-sm font-bold text-gray-700">Get safety updates</label>
              <div className="mt-2 flex gap-2">
                <input className="input-premium !rounded-full !py-3" type="email" required placeholder="Email address" />
                <button className="btn btn-primary shrink-0 !px-5">Join</button>
              </div>
              {joined && <p className="mt-2 text-sm font-semibold text-emerald-700">Thanks — you’re on the update list.</p>}
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-gray-100 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 876Alert. All rights reserved.</p>
          <p>Built for community safety across Jamaica.</p>
        </div>
      </div>
    </footer>
  );
}