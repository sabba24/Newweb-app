import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import { setAuthToken } from '../lib/api';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [hasToken, setHasToken] = useState(Boolean(localStorage.getItem('token')));

  function logout() {
    setAuthToken(null);
    setHasToken(false);
    setAccountOpen(false);
    setOpen(false);
  }

  const navClass = ({ isActive }) =>
    isActive ? 'text-emerald-700' : 'text-gray-700 hover:text-emerald-700';

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/78 backdrop-blur-xl">
      <div className="container-premium">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" aria-label="876Alert home">
            <img src={logo} alt="876Alert" className="h-10 w-auto" />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-bold md:flex">
            <a href="/#missing" className="text-gray-700 hover:text-emerald-700">Missing Persons</a>
            <a href="/#alerts" className="text-gray-700 hover:text-emerald-700">Alerts</a>
            <NavLink to="/safety-tips" className={navClass}>Safety Tips</NavLink>
            <NavLink to="/emergency-resources" className={navClass}>Resources</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="relative rounded-full border border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:text-emerald-700" aria-label="Notifications">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.17V11a6 6 0 10-12 0v3.17a2 2 0 01-.6 1.43L4 17h5m6 0a3 3 0 01-6 0m6 0H9" />
              </svg>
              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            {hasToken ? (
              <div className="relative">
                <button onClick={() => setAccountOpen((value) => !value)} className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-800">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-600 text-white">A</span>
                  Account
                </button>
                {accountOpen && (
                  <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl">
                    <Link to="/" onClick={() => setAccountOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-emerald-50">Dashboard</Link>
                    <Link to="/setup" onClick={() => setAccountOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-emerald-50">Setup status</Link>
                    <button onClick={logout} className="w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-red-600 hover:bg-red-50">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </>
            )}
          </div>

          <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-3 shadow-sm md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
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
          <div className="pb-5 md:hidden">
            <div className="glass-panel grid gap-2 rounded-3xl p-3 text-sm font-bold">
              <a href="/#missing" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 hover:bg-emerald-50">Missing Persons</a>
              <a href="/#alerts" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 hover:bg-emerald-50">Alerts</a>
              <NavLink to="/safety-tips" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 hover:bg-emerald-50">Safety Tips</NavLink>
              <NavLink to="/emergency-resources" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 hover:bg-emerald-50">Resources</NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 hover:bg-emerald-50">About</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 hover:bg-emerald-50">Contact</NavLink>
              <div className="grid grid-cols-2 gap-2 pt-2">
                {hasToken ? (
                  <button onClick={logout} className="btn btn-outline col-span-2">Logout</button>
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