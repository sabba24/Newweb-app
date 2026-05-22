import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.svg';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="876Alert" className="h-8 w-auto"/>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#missing" className="hover:text-emerald-600">Missing Persons</a>
            <a href="#alerts" className="hover:text-emerald-600">Alerts</a>
            <NavLink to="/about" className={({isActive})=> isActive? 'text-emerald-700' : 'hover:text-emerald-600'}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive? 'text-emerald-700' : 'hover:text-emerald-600'}>Contact</NavLink>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </div>
          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 border border-gray-300" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-3 text-sm">
              <a href="#missing" className="hover:text-emerald-600">Missing Persons</a>
              <a href="#alerts" className="hover:text-emerald-600">Alerts</a>
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
