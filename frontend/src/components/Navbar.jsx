import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.svg';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase = 'nav-link text-sm font-medium text-gray-700 hover:text-emerald-700 transition-colors';

  return (
    <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="876Alert" className="h-7 w-auto"/>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={({isActive})=> isActive? `${linkBase} text-emerald-700` : linkBase}>Home</NavLink>
            <a href="#missing" className={linkBase}>Missing Persons</a>
            <a href="#alerts" className={linkBase}>Alerts</a>
            <NavLink to="/about" className={({isActive})=> isActive? `${linkBase} text-emerald-700` : linkBase}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive? `${linkBase} text-emerald-700` : linkBase}>Contact</NavLink>
          </nav>
          <div className="hidden lg:flex items-center gap-2">
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </div>
          <button className="lg:hidden inline-flex items-center justify-center rounded-md p-2 border border-gray-300" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
        {open && (
          <div className="lg:hidden pb-4">
            <div className="grid gap-3 text-sm">
              <NavLink to="/" onClick={()=>setOpen(false)} className={({isActive})=> isActive? 'text-emerald-700' : 'hover:text-emerald-600'}>Home</NavLink>
              <a href="#missing" onClick={()=>setOpen(false)} className="hover:text-emerald-600">Missing Persons</a>
              <a href="#alerts" onClick={()=>setOpen(false)} className="hover:text-emerald-600">Alerts</a>
              <NavLink to="/about" onClick={()=>setOpen(false)} className={({isActive})=> isActive? 'text-emerald-700' : 'hover:text-emerald-600'}>About</NavLink>
              <NavLink to="/contact" onClick={()=>setOpen(false)} className={({isActive})=> isActive? 'text-emerald-700' : 'hover:text-emerald-600'}>Contact</NavLink>
              <div className="flex gap-2 pt-2">
                <Link to="/login" onClick={()=>setOpen(false)} className="btn btn-outline w-full">Login</Link>
                <Link to="/register" onClick={()=>setOpen(false)} className="btn btn-primary w-full">Register</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
