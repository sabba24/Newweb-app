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
    `rounded-full px-4 py-2 text-sm font-extrabold transition ${
      isActive ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/92 shadow-[0_1px_22px_rgba(15,23,42,0.07)] backdrop-blur-xl">
      <div className="container-nav">
        <div className="flex min-h-[76px] items-center justify-between gap-6">
          <Link to="/" className="flex shrink-0 items-center" aria-label="876Alert home">
            <img src={logo} alt="876Alert" className="h-[46px] w-[178px] object-contain" />
          </Link>

          <div className="hidden flex-1 items-center justify-end gap-5 lg:flex">
            <nav className="flex items-center justify-end gap-1">
              <NavLink to="/" className={navClass}>Home</NavLink>
              <a href="/#missing" className="rounded-full px-4 py-2 text-sm font-extrabold text-slate-700 transition hover:bg-slate-50 hover:text-emerald-700">Missing Persons</a>
              <a href="/#alerts" className="rounded-full px-4 py-2 text-sm font-extrabold text-slate-700 transition hover:bg-slate-50 hover:text-emerald-700">Alerts</a>
              <NavLink to="/plans" className={navClass}>Plans</NavLink>
              <NavLink to="/about" className={navClass}>About</NavLink>
              <NavLink to="/contact" className={navClass}>Contact</NavLink>
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              {hasToken ? (
                <div className="relative">
                  <button onClick={() => setAccountOpen((value) => !value)} className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-black text-emerald-800 transition hover:bg-emerald-100">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-600 text-white">A</span>
                    Account
                  </button>
                  {accountOpen && (
                    <div className="absolute right-0 mt-3 w-56 rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-slate-100">
                      <Link to="/dashboard" onClick={() => setAccountOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-emerald-50">Dashboard</Link>
                      <Link to="/setup" onClick={() => setAccountOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-emerald-50">Setup status</Link>
                      <button onClick={logout} className="w-full rounded-xl px-4 py-3 text-left text-sm font-bold text-red-600 hover:bg-red-50">Logout</button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login" className="btn btn-outline !min-h-11 !px-5">Login</Link>
                  <Link to="/register" className="btn btn-primary !min-h-11 !px-5">Register</Link>
                </>
              )}
            </div>
          </div>

          <button className="grid h-11 w-11 place-items-center rounded-full bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
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
            <div className="rounded-3xl bg-white p-3 shadow-xl ring-1 ring-slate-100">
              <div className="grid gap-1 text-sm font-extrabold">
                <Link to="/" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-slate-700 hover:bg-emerald-50">Home</Link>
                <a href="/#missing" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-slate-700 hover:bg-emerald-50">Missing Persons</a>
                <a href="/#alerts" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-slate-700 hover:bg-emerald-50">Alerts</a>
                <Link to="/plans" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-slate-700 hover:bg-emerald-50">Plans</Link>
                <Link to="/about" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-slate-700 hover:bg-emerald-50">About</Link>
                <Link to="/contact" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-slate-700 hover:bg-emerald-50">Contact</Link>
              </div>

              <div className="mt-3 grid gap-2 border-t border-slate-100 pt-3 sm:grid-cols-2">
                {hasToken ? (
                  <>
                    <Link to="/dashboard" onClick={() => setOpen(false)} className="btn btn-primary">Dashboard</Link>
                    <button onClick={logout} className="btn btn-outline">Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setOpen(false)} className="btn btn-outline">Login</Link>
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