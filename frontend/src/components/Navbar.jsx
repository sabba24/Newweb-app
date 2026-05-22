import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { setAuthToken } from '../lib/api';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [hasToken, setHasToken] = useState(Boolean(localStorage.getItem('token')));

  useEffect(() => {
    const syncToken = () => setHasToken(Boolean(localStorage.getItem('token')));
    window.addEventListener('storage', syncToken);
    return () => window.removeEventListener('storage', syncToken);
  }, []);

  function logout() {
    setAuthToken(null);
    setHasToken(false);
    setAccountOpen(false);
    setOpen(false);
  }

  const navClass = ({ isActive }) =>
    `rounded-full px-3 py-2 transition ${isActive ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl">
      <div className="container-premium">
        <div className="flex h-18 min-h-18 items-center justify-between gap-4 py-3">
          <Link to="/" className="flex shrink-0 items-center" aria-label="876Alert home">
            <img src={logo} alt="876Alert" className="h-11 w-auto max-w-[184px]" />
          </Link>

          <nav className="hidden items-center gap-1 text-sm font-extrabold lg:flex">
            <a href="/#missing" className="rounded-full px-3 py-2 text-slate-700 transition hover:bg-slate-50 hover:text-emerald-700">Missing Persons</a>
            <a href="/#alerts" className="rounded-full px-3 py-2 text-slate-700 transition hover:bg-slate-50 hover:text-emerald-700">Alerts</a>
            <NavLink to="/safety-tips" className={navClass}>Safety Tips</NavLink>
            <NavLink to="/emergency-resources" className={navClass}>Resources</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <button className="relative grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-emerald-700" aria-label="Notifications">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.17V11a6 6 0 10-12 0v3.17a2 2 0 01-.6 1.43L4 17h5m6 0a3 3 0 01-6 0m6 0H9" />
              </svg>
              <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            {hasToken ? (
              <div className="relative">
                <button onClick={() => setAccountOpen((value) => !value)} className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm font-black text-emerald-800 transition hover:bg-emerald-100">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-600 text-white">A</span>
                  Account
                </button>
                {accountOpen && (
                  <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl">
                    <Link to="/" onClick={() => setAccountOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-emerald-50">Dashboard</Link>
                    <Link to="/setup" onClick={() => setAccountOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-emerald-50">Setup status</Link>
                    <button onClick={logout} className="w-full rounded-xl px-4 py-3 text-left text-sm font-bold text-red-600 hover:bg-red-50">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline !min-h-11 !px-4">Sign In</Link>
                <Link to="/register" className="btn btn-primary !min-h-11 !px-4">Register</Link>
              </>
            )}
          </div>

          <button className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="pb-4 lg:hidden">
            <div className="grid gap-1 rounded-3xl border border-slate-200 bg-white p-3 text-sm font-extrabold shadow-xl">
              <a href="/#missing" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-slate-700 hover:bg-emerald-50">Missing Persons</a>
              <a href="/#alerts" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-slate-700 hover:bg-emerald-50">Alerts</a>
              <NavLink to="/safety-tips" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-slate-700 hover:bg-emerald-50">Safety Tips</NavLink>
              <NavLink to="/emergency-resources" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-slate-700 hover:bg-emerald-50">Resources</NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-slate-700 hover:bg-emerald-50">About</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-slate-700 hover:bg-emerald-50">Contact</NavLink>
              <div className="grid gap-2 border-t border-slate-100 pt-3 sm:grid-cols-2">
                {hasToken ? (
                  <button onClick={logout} className="btn btn-outline sm:col-span-2">Logout</button>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setOpen(false)} className="btn btn-outline">Sign In</Link>
                    <Link to="/register" onClick={() => setOpen(false)} className="btn btn-primary">Register</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}