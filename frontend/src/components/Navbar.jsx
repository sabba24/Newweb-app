import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full" style={{ background: 'linear-gradient(135deg, #009B3A, #FED100)' }} />
          <span className="text-xl font-bold tracking-tight"><span className="text-[color:var(--jamaica-black)]">876</span><span className="text-[color:var(--jamaica-green)]">Alert</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#missing" className="hover:text-[color:var(--jamaica-green)]">Missing Persons</a>
          <a href="#alerts" className="hover:text-[color:var(--jamaica-green)]">Alerts</a>
          <a href="#about" className="hover:text-[color:var(--jamaica-green)]">About</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login" className="btn btn-outline">Login</Link>
          <Link to="/register" className="btn btn-primary">Register</Link>
        </div>
      </div>
    </header>
  );
}
