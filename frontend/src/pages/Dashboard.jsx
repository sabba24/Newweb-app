import { Link } from 'react-router-dom';
import DashboardShell from '../components/DashboardShell';
import AgencyOperationsCenter from '../components/AgencyOperationsCenter';
import { getAccountGroup } from '../lib/accountTypes';
import { getMonthlyMissingAlertCount, getSavedBusinessAds, getSavedMissingAlerts } from '../lib/dashboardStorage';

const planLimits = {
  personal_free: { limit: 1, label: '1 free alert per month', paid: false },
  personal_pro: { limit: 10, label: 'Personal Pro paid alert access', paid: true },
  business: { limit: 20, label: 'Business paid alert and promotion access', paid: true },
};

function BusinessDashboard({ accountLabel }) {
  const missingAlerts = getSavedMissingAlerts();
  const businessAds = getSavedBusinessAds();
  const activeAds = businessAds.length;
  const stats = [
    ['Active Ads', activeAds, 'Campaigns submitted for review/payment', '📣'],
    ['Promotion Tools', 'Ready', 'Create banners, discounts, and CTAs', '🏷️'],
    ['Website Traffic CTA', 'Optional', 'Route visitors to web or phone actions', '🌐'],
    ['Plan Status', 'Business', 'Paid account tools prepared', '💼'],
  ];

  return (
    <div className="grid gap-5">
      <section className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-100">
        <div className="h-2 bg-gradient-to-r from-emerald-600 via-yellow-300 to-emerald-600" />
        <div className="grid gap-6 p-6 sm:p-8 xl:grid-cols-[1fr_380px] xl:items-center">
          <div>
            <span className="badge bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">{accountLabel}</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Business growth dashboard</h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-slate-600">
              Manage missing-person submissions, sponsored ads, promotion campaigns, billing readiness, and traffic-focused CTAs from one business workspace.
            </p>
          </div>
          <div className="rounded-3xl bg-emerald-950 p-6 text-white shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-yellow-300">Quick action</p>
            <h3 className="mt-2 text-2xl font-black">Launch a campaign</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-emerald-50/80">Create a business ad, upload a banner, and choose a phone, promotion, or website CTA.</p>
            <Link to="/dashboard/business-ads" className="btn mt-5 bg-white text-slate-950">Create Business Ad</Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(([label, value, detail, icon]) => (
          <article key={label} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-50 text-2xl ring-1 ring-yellow-100">{icon}</div>
            <p className="mt-5 text-3xl font-black text-slate-950">{value}</p>
            <p className="mt-1 font-black text-slate-800">{label}</p>
            <p className="mt-1 text-sm font-semibold leading-6 text-slate-500">{detail}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
          <h2 className="text-2xl font-black tracking-tight text-slate-950">Business tools</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ['Create Missing Person Alert', 'Submit a report for review', '/dashboard/create-alert'],
              ['My Missing Person Alerts', `${missingAlerts.length} submitted`, '/dashboard/my-missing-alerts'],
              ['Create Business Ad', 'Sponsored review/payment flow', '/dashboard/business-ads'],
              ['My Ads', `${businessAds.length} ad submissions`, '/dashboard/my-ads'],
              ['Promotions', 'Discount campaigns and offers', '/dashboard/promotions'],
              ['Billing', 'Payment placeholder ready', '/dashboard/billing'],
              ['Ad Performance', 'Campaign stats placeholder', '/dashboard/ad-performance'],
              ['Upgrade/Plan Status', 'Business plan summary', '/dashboard/plan-status'],
            ].map(([title, text, href]) => (
              <Link key={title} to={href} className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <p className="font-black text-slate-950">{title}</p>
                <p className="mt-1 text-sm font-semibold leading-6 text-slate-500">{text}</p>
              </Link>
            ))}
          </div>
        </div>

        <aside className="grid gap-5">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Account status</p>
            <h3 className="mt-3 text-2xl font-black text-slate-950">Business tools active</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Ad creation, promotion tools, and review/payment placeholders are ready.</p>
          </div>
          <div className="rounded-[2rem] bg-yellow-50 p-6 shadow-sm ring-1 ring-yellow-100">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-yellow-800">Campaign stats</p>
            <h3 className="mt-3 text-2xl font-black text-slate-950">{activeAds} active ad submissions</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-yellow-800">Analytics and paid placement reporting will connect in the next phase.</p>
          </div>
        </aside>
      </section>
    </div>
  );
}

function PersonalDashboard({ accountType, accountLabel }) {
  const plan = planLimits[accountType] || planLimits.personal_free;
  const used = getMonthlyMissingAlertCount();
  const usagePercent = Math.min(100, Math.round((used / plan.limit) * 100));
  const freeLimitReached = accountType === 'personal_free' && used >= plan.limit;

  return (
    <div className="grid gap-5">
      <section className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-100">
        <div className="h-2 bg-gradient-to-r from-emerald-600 via-yellow-300 to-emerald-600" />
        <div className="grid gap-6 p-6 sm:p-8 xl:grid-cols-[1fr_360px] xl:items-center">
          <div>
            <span className="badge bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">{accountLabel}</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Community safety dashboard</h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-slate-600">
              Create missing-person alerts, track your monthly usage, review submitted reports, and access practical safety guidance.
            </p>
          </div>
          <Link to="/dashboard/create-alert" className={`btn sm:w-auto ${freeLimitReached ? 'btn-outline' : 'btn-primary'}`}>
            Create Missing Person Alert
          </Link>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-slate-950">1 free alert/month usage</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{plan.label}</p>
            </div>
            <span className="badge bg-yellow-50 text-yellow-800 ring-1 ring-yellow-100">{used} of {plan.limit} used</span>
          </div>

          <div className="mt-7">
            <div className="mb-2 flex justify-between text-sm font-black text-slate-700">
              <span>Monthly usage meter</span>
              <span>{usagePercent}%</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-slate-100">
              <div className={`h-full rounded-full ${freeLimitReached ? 'bg-yellow-300' : 'bg-emerald-600'}`} style={{ width: `${usagePercent}%` }} />
            </div>
          </div>

          {freeLimitReached && (
            <div className="mt-6 rounded-3xl bg-yellow-50 p-5 ring-1 ring-yellow-100">
              <p className="font-black text-yellow-900">You’ve reached your free monthly alert limit.</p>
              <p className="mt-1 text-sm font-semibold leading-6 text-yellow-800">Upgrade to Personal Pro to post more missing-person alerts.</p>
              <Link to="/plans" className="btn btn-primary mt-4 sm:w-auto">Upgrade to Personal Pro</Link>
            </div>
          )}
        </div>

        <aside className="rounded-[2rem] bg-emerald-950 p-6 text-white shadow-xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-yellow-300">Personal Pro</p>
          <h2 className="mt-3 text-2xl font-black">Need more alerts?</h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-emerald-50/80">
            Personal Pro adds more alert capacity, more images, priority support, and analytics.
          </p>
          <Link to="/plans" className="btn mt-5 bg-white text-slate-950">View plans</Link>
        </aside>
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        <Link to="/dashboard/my-missing-alerts" className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-2xl ring-1 ring-emerald-100">📌</div>
          <h2 className="mt-5 text-xl font-black text-slate-950">My alerts</h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">Review submitted alerts, approval status, and queued reports.</p>
        </Link>

        <Link to="/safety-tips" className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-50 text-2xl ring-1 ring-yellow-100">🛟</div>
          <h2 className="mt-5 text-xl font-black text-slate-950">Safety tips</h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">Learn safer reporting, sharing, and response practices.</p>
        </Link>

        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-2xl ring-1 ring-blue-100">🔔</div>
          <h2 className="mt-5 text-xl font-black text-slate-950">Notifications</h2>
          <div className="mt-4 grid gap-3">
            {[
              'Reports are reviewed before public display.',
              'Upload clear photos and contact details.',
              'Call 119 first if someone is in immediate danger.',
            ].map((item) => (
              <p key={item} className="rounded-2xl bg-slate-50 p-3 text-sm font-bold leading-6 text-slate-700 ring-1 ring-slate-100">{item}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Dashboard() {
  return (
    <DashboardShell title="Welcome to your 876Alert dashboard">
      {({ accountType, accountLabel }) => {
        const group = getAccountGroup(accountType);

        if (group === 'agency') {
          return <AgencyOperationsCenter />;
        }

        if (group === 'business') {
          return <BusinessDashboard accountLabel={accountLabel} />;
        }

        return <PersonalDashboard accountType={accountType} accountLabel={accountLabel} />;
      }}
    </DashboardShell>
  );
}