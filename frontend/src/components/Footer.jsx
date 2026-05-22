import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-3 items-center">
        <div className="flex items-center gap-3">
          <img src={logo} className="h-7 w-auto" alt="876Alert"/>
        </div>
        <div className="text-center text-sm text-gray-600 order-last sm:order-none">© {new Date().getFullYear()} 876Alert. All rights reserved.</div>
        <nav className="flex justify-end gap-4 text-sm">
          <Link to="/about" className="hover:text-emerald-600">About</Link>
          <Link to="/contact" className="hover:text-emerald-600">Contact</Link>
          <Link to="/privacy" className="hover:text-emerald-600">Privacy</Link>
          <Link to="/terms" className="hover:text-emerald-600">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
