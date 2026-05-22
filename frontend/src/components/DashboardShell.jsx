import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { getAccountGroup, getAccountLabel, getStoredAccountType, setStoredAccountType } from '../lib/accountTypes';

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
    ['Campaigns', '/dashboard/campaigns'],
    ['Website Traffic CTA', '/dashboard/website-traffic'],
    ['Billing', '/dashboard/billing'],
    ['Upgrade', '/dashboard/billing'],
  ],
  agency: [
    ['Operations Center', '/dashboard'],
    ['Active Incidents', '/dashboard/active-incidents'],
    ['Verified Reports', '/dashboard/verified-reports'],
    ['Missing Persons', '/dashboard/missing-persons'],
    ['Emergency Broadcasts', '/dashboard/emergency-broadcasts'],
    ['Dispatch Queue', '/dashboard/dispatch-queue'],
    ['Responders', '/dashboard/responders'],
    ['Community Reports', '/dashboard/community-reports'],
    ['Agency License', '/dashboard/agency-license'],
    ['Billing', '/dashboard/billing'],
    ['Settings', '/dashboard/settings'],
  ],
};

function menuFor(accountType) {
  return menus[getAccountGroup(accountType)];
}

function DemoAccountSwitcher({ accountType, isAgency }) {
  return (
    <label className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-black uppercase tracking-wide ring-1 ${
      isAgency ? 'bg-slate-900 text-blue-100 ring-blue-300/20' : 'bg-white text-slate-600 ring-slate-200'
    }`}>
      Demo role
      <select
        value={accountType}
        onChange={(event) => setStoredAccountType(event.target.value)}
        className={`rounded-full border px-2 py-1 text-xs font-black normal-case outline-none ${
          isAgency ? 'border-slate-700 bg-slate-950 text-white' : 'border-slate-200 bg-slate-50 text-slate-900'
        }`}
      >
        <option value="personal_free">Personal Free</option>
        <option value="personal_pro">Personal Pro</option>
        <option value="business">Business Account</option>
        <option value="agency">Police / Agency</option>
      </select>
    </label>
  );
}

export default function DashboardShell({ title, eyebrow = 'Dashboard', children }) {
  const [accountType, setAccountType] = useState(getStoredAccountType());

  useEffect(() => {
    const syncAccountType = () => setAccountType(getStoredAccountType());

    window.addEventListener('storage', syncAccountType);
    window.addEventListener('account-type-change', syncAccountType);

    return () => {
      window.removeEventListener('storage', syncAccountType);
      window.removeEventListener('account-type-change', syncAccountType);
    };
  }, []);

  const accountLabel = getAccountLabel(accountType);
  const menu = menuFor(accountType);
  const isAgency = getAccountGroup(accountType) === 'agency';
  const displayTitle = isAgency && title.includes('Welcome') ? 'Agency Operations Center' : title;

  const navClass = ({ isActive }) =>
    isAgency
      ? `rounded-2xl px-4 py-3 text-sm font-black transition ${
          isActive
            ? 'bg-blue-500/18 text-blue-100 shadow-[0_0_24px_rgba(59,130,246,0.16)] ring-1 ring-blue-300/30'
            : 'text-slate-400 hover:bg-slate-800 hover:text-blue-100'
        }`
      : `rounded-2xl px-4 py-3 text-sm font-black transition ${
          isActive ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
        }`;

  if (isAgency) {
    return (
      <div className="min-h-screen bg-[#05070d] bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.12),transparent_32%)]">
        <div className="container-premium py-5">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-slate-800 bg-slate-950/92 p-4 shadow-[0_18px_70px_rgba(2,6,23,0.42)] backdrop-blur">
            <Link to="/" className="flex items-center gap-3">
              <span className="rounded-2xl bg-white p-2">
                <img src={logo} alt="876Alert" className="h-[38px] w-[150px] object-contain" />
              </span>
              <span className="hidden text-xs font-black uppercase tracking-[0.24em] text-blue-200 sm:block">Secure agency console</span>
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <DemoAccountSwitcher accountType={accountType} isAgency={isAgency} />
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-200">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
                Live system secure
              </span>
              <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-100">
                {accountLabel}
              </span>
              <Link to="/" className="btn btn-outline !min-h-10 !border-slate-700 !bg-slate-900 !px-4 !py-2 text-xs !text-slate-100">Back to site</Link>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[310px_1fr]">
            <aside className="rounded-[2rem] border border-slate-800 bg-slate-950 p-4 shadow-[0_24px_80px_rgba(2,6,23,0.38)] lg:sticky lg:top-5 lg:h-[calc(100vh-2.5rem)] lg:overflow-y-auto">
              <div className="rounded-3xl border border-blue-400/20 bg-[linear-gradient(135deg,#0b1729,#05070d)] p-5 text-white">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">Command access</p>
                <h2 className="mt-2 text-2xl font-black">Police / Agency</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-400">High-authority emergency response tools and verified report operations.</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <span className="rounded-2xl bg-red-500/10 px-3 py-2 text-center text-xs font-black text-red-200 ring-1 ring-red-300/20">L-3 Alert</span>
                  <span className="rounded-2xl bg-emerald-500/10 px-3 py-2 text-center text-xs font-black text-emerald-200 ring-1 ring-emerald-300/20">Licensed</span>
                </div>
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
              <div className="mb-5 rounded-[2rem] border border-slate-800 bg-slate-950/92 p-6 shadow-[0_20px_70px_rgba(2,6,23,0.3)] sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-300">{eyebrow}</p>
                <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">{displayTitle}</h1>
              </div>
              {typeof children === 'function' ? children({ accountType, accountLabel }) : children}
            </main>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#f8fafc_0%,#ecfdf5_55%,#fff8d7_100%)]">
      <div className="container-premium py-5">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] bg-white/90 p-4 shadow-sm ring-1 ring-slate-100 backdrop-blur">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="876Alert" className="h-[42px] w-[166px] object-contain" />
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <DemoAccountSwitcher accountType={accountType} isAgency={isAgency} />
            <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-100">
              {accountLabel}
            </span>
            <Link to="/" className="btn btn-outline !min-h-10 !px-4 !py-2 text-xs">Back to site</Link>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[2rem] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 lg:sticky lg:top-5 lg:h-[calc(100vh-2.5rem)] lg:overflow-y-auto">
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
              <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{displayTitle}</h1>
            </div>
            {typeof children === 'function' ? children({ accountType, accountLabel }) : children}
          </main>
        </div>
      </div>
    </div>
  );
}