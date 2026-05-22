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

  return (
    <div className="grid gap-5">
      <section className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
          <span className="badge bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">{accountLabel}</span>
          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">Business dashboard</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
            Create missing-person alerts, sponsored ads, promotions, and manage paid business visibility tools.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ['Create Missing Person Alert', 'Submit a report for review', '/dashboard/create-alert'],
              ['My Missing Person Alerts', `${missingAlerts.length} submitted`, '/dashboard/my-missing-alerts'],
              ['Create Business Ad', 'Sponsored review/payment flow', '/dashboard/business-ads'],
              ['My Ads', `${businessAds.length} ad submissions`, '/dashboard/my-ads'],
              ['Promotions', 'Manage business promos', '/dashboard/promotions'],
              ['Billing', 'Payment readiness', '/dashboard/billing'],
              ['Ad Performance', 'Analytics placeholder', '/dashboard/ad-performance'],
              ['Upgrade/Plan Status', 'Business plan active', '/dashboard/plan-status'],
            ].map(([title, text, href]) => (
              <Link key={title} to={href} className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <p className="font-black text-slate-950">{title}</p>
                <p className="mt-1 text-sm font-semibold leading-6 text-slate-500">{text}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-emerald-950 p-6 text-white shadow-xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-yellow-300">Business growth</p>
          <h2 className="mt-3 text-2xl font-black">Paid account active</h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-emerald-50/80">
            Missing-person submissions and ad promotions are ready for review/payment workflows.
          </p>
          <Link to="/dashboard/business-ads" className="btn mt-5 bg-white text-slate-950">Create ad</Link>
        </div>
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
      <section className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="badge bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">{accountLabel}</span>
              <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">Missing-person alert usage</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{plan.label}</p>
            </div>
            <Link to="/dashboard/create-alert" className={`btn sm:w-auto ${freeLimitReached ? 'btn-outline' : 'btn-primary'}`}>
              Create Missing Person Alert
            </Link>
          </div>

          <div className="mt-7">
            <div className="mb-2 flex justify-between text-sm font-black text-slate-700">
              <span>{used} of {plan.limit} alerts used</span>
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
              <Link to="/dashboard/billing" className="btn btn-primary mt-4 sm:w-auto">Upgrade to Personal Pro</Link>
            </div>
          )}
        </div>

        <div className="rounded-[2rem] bg-emerald-950 p-6 text-white shadow-xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-yellow-300">Plan access</p>
          <h2 className="mt-3 text-2xl font-black">{accountType === 'personal_pro' ? 'Paid account active' : '1 free alert per month'}</h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-emerald-50/80">
            {accountType === 'personal_pro'
              ? 'Your paid personal dashboard supports expanded missing-person alert submissions.'
              : 'Use your free monthly missing-person alert or upgrade for more submissions.'}
          </p>
          <Link to="/dashboard/billing" className="btn mt-5 bg-white text-slate-950">Compare plans</Link>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        <Link to="/dashboard/my-missing-alerts" className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
          <h2 className="text-xl font-black text-slate-950">My Missing Person Alerts</h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">Review submitted alerts, approval status, and queued reports.</p>
        </Link>

        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-xl font-black text-slate-950">Notifications</h2>
          <div className="mt-5 grid gap-3">
            {[
              'Missing-person alerts are submitted for review before public display.',
              'Upload clear photos and verified contact information.',
              'Use official emergency numbers first if someone is in immediate danger.',
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-3xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <p className="text-sm font-bold leading-6 text-emerald-900">{item}</p>
              </div>
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