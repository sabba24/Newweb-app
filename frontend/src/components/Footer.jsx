import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <img src={logo} className="h-8 w-auto" alt="876Alert"/>
          <p className="mt-4 text-sm text-gray-600 max-w-xs">876Alert is a Jamaica-first public safety platform enabling rapid response to missing persons and emergencies.</p>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-black/10 hover:bg-emerald-50 transition" aria-label="X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 3l18 18M21 3L3 21" stroke="#065F46" strokeWidth="2" strokeLinecap="round"/></svg>
            </a>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-black/10 hover:bg-emerald-50 transition" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.23-.01-.84-.01-1.65-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05 .9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.7.11 2.5.31 1.9-1.29 2.74-1.02 2.74-1.02 .55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.67.92.67 1.85 0 1.34-.01 2.41-.01 2.74 0 .26.18.57.69.47A10 10 0 0 0 12 2z" stroke="#065F46" strokeWidth="0.5"/></svg>
            </a>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-black/10 hover:bg-emerald-50 transition" aria-label="Globe">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#065F46" strokeWidth="2"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" stroke="#065F46" strokeWidth="2"/></svg>
            </a>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><Link to="/" className="hover:text-emerald-700">Home</Link></li>
            <li><Link to="/about" className="hover:text-emerald-700">About</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-700">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">Legal</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><Link to="/privacy" className="hover:text-emerald-700">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-emerald-700">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>support@876alert.example</li>
            <li>+1 (876) 000-0000</li>
            <li>Kingston, Jamaica</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-gray-600">© {new Date().getFullYear()} 876Alert. All rights reserved.</div>
      </div>
    </footer>
  );
}
