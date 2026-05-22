import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const accountLabels = {
  personal_free: 'Personal Free',
  personal_pro: 'Personal Pro',
  business: 'Business',
  agency: 'Police / Agency',
};

const menus = {
  personal: [
    ['Dashboard', '/dashboard'],
    ['Create Alert', '/dashboard/create-alert'],
    ['My Alerts', '/dashboard/alerts'],
    ['Tips', '/safety-tips'],
    ['Upgrade', '/dashboard/billing'],
  ],
  business: [
    ['Dashboard', '/dashboard'],
    ['Create Alert', '/dashboard/create-alert'],
    ['My Alerts', '/dashboard/alerts'],
    ['Business Ads', '/dashboard/business-ads'],
    ['Promotions', '/dashboard/promotions'],
    ['Billing', '/dashboard/billing'],
    ['Upgrade', '/dashboard/billing'],
  ],
  agency: [
    ['Dashboard', '/dashboard'],
    ['Alerts', '/dashboard/alerts'],
    ['Verified Reports', '/dashboard/verified-reports'],
    ['Agency License', '/dashboard/agency-license'],
    ['Billing', '/dashboard/billing'],
  ],
};

function menuFor(accountType) {
  if (accountType === 'business') return menus.business;
  if (accountType === 'agency') return menus.agency;
  return menus.personal;
}

export default function DashboardShell({ title, eyebrow = 'Dashboard', children }) {
  const accountType = localStorage.getItem('account_type') || 'personal_free';
  const accountLabel = accountLabels[accountType] || accountLabels.personal_free;
  const menu = menuFor(accountType);

  const navClass = ({ isActive }) =>
    `rounded-2xl px-4 py-3 text-sm font-black transition ${
      isActive ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
    }`;

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#f8fafc_0%,#ecfdf5_55%,#fff8d7_100%)]">
      <div className="container-premium py-5">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] bg-white/90 p-4 shadow-sm ring-1 ring-slate-100 backdrop-blur">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="876Alert" className="h-[42px] w-[166px] object-contain" />
          </Link>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-100">
              {accountLabel}
            </span>
            <Link to="/" className="btn btn-outline !min-h-10 !px-4 !py-2 text-xs">Back to site</Link>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[2rem] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 lg:sticky lg:top-5 lg:h-[calc(100vh-2.5rem)]">
            <div className="rounded-3xl bg-emerald-950 p-5 text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">Account</p>
              <h2 className="mt-2 text-2xl font-black">{accountLabel}</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-emerald-50/80">Manage safety alerts, usage, and plan access.</p>
            </div>

            <nav className="mt-4 grid gap-1">
              {menu.map(([label, href]) => (
                <NavLink key={`${label}-${href}`} to={href} end={href === '/dashboard'} className={navClass}>
                  {label}
                </NavLink>
              ))}
            </nav>
          </aside>

          <main className="min-w-0">
            <div className="mb-5 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">{eyebrow}</p>
              <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
            </div>
            {typeof children === 'function' ? children({ accountType, accountLabel }) : children}
          </main>
        </div>
      </div>
    </div>
  );
}