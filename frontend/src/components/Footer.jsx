import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <img src={logo} className="h-8 w-auto" alt="876Alert"/>
          <p className="mt-4 text-sm text-gray-600 max-w-xs">876Alert is a Jamaica-first public safety platform enabling rapid response to missing persons and emergencies.</p>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-gray-600">© {new Date().getFullYear()} 876Alert. All rights reserved.</div>
      </div>
    </footer>
  );
}
