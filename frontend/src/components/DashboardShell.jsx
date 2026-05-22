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
    ['Operations Center', '/dashboard', '🚨'],
    ['Dashboard Overview', '/dashboard/overview', '📊'],
    ['Missing Persons Unit', '/dashboard/missing-persons', '🧭'],
    ['Emergency Alerts', '/dashboard/emergency-alerts', '⚠️'],
    ['Active Incidents', '/dashboard/active-incidents', '📍'],
    ['Community Reports', '/dashboard/community-reports', '🗂️'],
    ['Verification Center', '/dashboard/verified-reports', '✅'],
    ['Dispatch & Response', '/dashboard/dispatch-queue', '🚓'],
    ['Officers & Staff', '/dashboard/responders', '👮'],
    ['Department Management', '/dashboard/department-management', '🏛️'],
    ['Patrol Zones', '/dashboard/patrol-zones', '🗺️'],
    ['Emergency Broadcasts', '/dashboard/emergency-broadcasts', '📡'],
    ['Surveillance Requests', '/dashboard/surveillance-requests', '🎥'],
    ['Vehicles & Units', '/dashboard/vehicles-units', '🚔'],
    ['Evidence / Media Files', '/dashboard/evidence-media', '📁'],
    ['Wanted Persons', '/dashboard/wanted-persons', '🔎'],
    ['Public Safety Notices', '/dashboard/public-safety-notices', '📢'],
    ['Road & Traffic Alerts', '/dashboard/road-traffic-alerts', '🚧'],
    ['Flood / Hurricane Warnings', '/dashboard/flood-hurricane-warnings', '🌧️'],
    ['Hotline Management', '/dashboard/emergency-hotlines', '☎️'],
    ['Citizen Complaints', '/dashboard/citizen-complaints', '📝'],
    ['Case Management', '/dashboard/case-management', '📌'],
    ['Report Archive', '/dashboard/report-archive', '🗄️'],
    ['Analytics & Statistics', '/dashboard/analytics-statistics', '📈'],
    ['Agency Billing', '/dashboard/billing', '💳'],
    ['License Management', '/dashboard/agency-license', '🛡️'],
    ['Settings', '/dashboard/settings', '⚙️'],
  ],
};

function menuFor(accountType) {
  return menus[getAccountGroup(accountType)];
}

function DemoAccountSwitcher({ accountType, isAgency }) {
  return (
    <label className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-black uppercase tracking-wide ring-1 ${
      isAgency ? 'bg-blue-50 text-blue-800 ring-blue-200' : 'bg-white text-slate-600 ring-slate-200'
    }`}>
      Demo role
      <select
        value={accountType}
        onChange={(event) => setStoredAccountType(event.target.value)}
        className={`rounded-full border px-2 py-1 text-xs font-black normal-case outline-none ${
          isAgency ? 'border-blue-200 bg-white text-blue-950' : 'border-slate-200 bg-slate-50 text-slate-900'
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

function AgencySidebar({ menu, navClass, open, onClose }) {
  return (
    <>
      {open && (
        <button
          className="fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-sm lg:hidden"
          aria-label="Close agency menu"
          onClick={onClose}
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-[310px] overflow-y-auto border-r border-blue-100 bg-white shadow-2xl transition-transform duration-200 lg:w-[320px] lg:translate-x-0 lg:shadow-[10px_0_40px_rgba(15,23,42,0.08)] ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="sticky top-0 z-10 border-b border-blue-100 bg-white/95 p-4 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="rounded-2xl bg-white p-2 ring-1 ring-blue-100">
              <img src={logo} alt="876Alert" className="h-[36px] w-[142px] object-contain" />
            </Link>
            <button className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 lg:hidden" onClick={onClose} aria-label="Close menu">
              ✕
            </button>
          </div>

          <div className="mt-4 rounded-3xl bg-gradient-to-br from-blue-700 to-blue-950 p-5 text-white shadow-lg">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-100">Command Access</p>
            <h2 className="mt-2 text-2xl font-black">Police / Agency</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-blue-50/85">Licensed public safety operations console.</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <span className="rounded-2xl bg-white/12 px-3 py-2 text-center text-xs font-black text-white ring-1 ring-white/15">Level 3</span>
              <span className="rounded-2xl bg-emerald-400/20 px-3 py-2 text-center text-xs font-black text-emerald-50 ring-1 ring-emerald-200/30">Online</span>
            </div>
          </div>
        </div>

        <nav className="grid gap-1 p-4">
          {menu.map(([label, href, icon]) => (
            <NavLink key={`${label}-${href}`} to={href} end={href === '/dashboard'} className={navClass} onClick={onClose}>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-50 text-base">{icon}</span>
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default function DashboardShell({ title, eyebrow = 'Dashboard', children }) {
  const [accountType, setAccountType] = useState(getStoredAccountType());
  const [agencyMenuOpen, setAgencyMenuOpen] = useState(false);

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
      ? `flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-black transition ${
          isActive
            ? 'bg-blue-700 text-white shadow-lg shadow-blue-700/20 [&_span:first-child]:bg-white/15'
            : 'text-slate-600 hover:bg-blue-50 hover:text-blue-800'
        }`
      : `rounded-2xl px-4 py-3 text-sm font-black transition ${
          isActive ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
        }`;

  if (isAgency) {
    return (
      <div className="min-h-screen w-full bg-[linear-gradient(135deg,#f8fafc_0%,#eff6ff_52%,#f8fafc_100%)]">
        <AgencySidebar menu={menu} navClass={navClass} open={agencyMenuOpen} onClose={() => setAgencyMenuOpen(false)} />

        <div className="min-w-0 lg:pl-[320px]">
          <div className="w-full px-3 py-4 sm:px-4 lg:px-5 xl:px-6 2xl:px-8">
            <div className="mb-5 flex w-full flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-blue-100 bg-white/94 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3">
                <button
                  className="grid h-11 w-11 place-items-center rounded-full bg-blue-700 text-white shadow-lg shadow-blue-700/20 lg:hidden"
                  onClick={() => setAgencyMenuOpen(true)}
                  aria-label="Open agency menu"
                >
                  ☰
                </button>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">876Alert Secure Agency Console</p>
                  <h1 className="text-xl font-black text-slate-950 sm:text-2xl">{displayTitle}</h1>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <DemoAccountSwitcher accountType={accountType} isAgency={isAgency} />
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-100">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.85)]" />
                  Live system
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-800 ring-1 ring-blue-100">
                  {accountLabel}
                </span>
                <button className="grid h-11 w-11 place-items-center rounded-full bg-white text-lg shadow-sm ring-1 ring-slate-200" aria-label="Notifications">
                  🔔
                </button>
                <Link to="/" className="btn btn-outline !min-h-10 !px-4 !py-2 text-xs">Back to site</Link>
              </div>
            </div>

            <main className="min-w-0">
              <div className="mb-5 w-full rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">{eyebrow}</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{displayTitle}</h2>
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