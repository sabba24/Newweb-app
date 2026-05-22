import { Link } from 'react-router-dom';
import DashboardShell from '../components/DashboardShell';

const planLimits = {
  personal_free: { used: 1, limit: 1, label: '1 free alert per month' },
  personal_pro: { used: 3, limit: 10, label: 'More alerts with Pro' },
  business: { used: 4, limit: 20, label: 'Business alert and promo access' },
  agency: { used: 12, limit: 100, label: 'Licensed agency usage' },
};

export default function Dashboard() {
  return (
    <DashboardShell title="Welcome to your 876Alert dashboard">
      {({ accountType, accountLabel }) => {
        const plan = planLimits[accountType] || planLimits.personal_free;
        const usagePercent = Math.min(100, Math.round((plan.used / plan.limit) * 100));
        const freeLimitReached = accountType === 'personal_free' && plan.used >= plan.limit;

        return (
          <div className="grid gap-5">
            <section className="grid gap-5 xl:grid-cols-[1fr_360px]">
              <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="badge bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">{accountLabel}</span>
                    <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">Monthly alert usage</h2>
                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{plan.label}</p>
                  </div>
                  <Link to="/dashboard/create-alert" className={`btn sm:w-auto ${freeLimitReached ? 'btn-outline' : 'btn-primary'}`}>
                    Create Alert
                  </Link>
                </div>

                <div className="mt-7">
                  <div className="mb-2 flex justify-between text-sm font-black text-slate-700">
                    <span>{plan.used} of {plan.limit} alerts used</span>
                    <span>{usagePercent}%</span>
                  </div>
                  <div className="h-4 overflow-hidden rounded-full bg-slate-100">
                    <div className={`h-full rounded-full ${freeLimitReached ? 'bg-yellow-300' : 'bg-emerald-600'}`} style={{ width: `${usagePercent}%` }} />
                  </div>
                </div>

                {freeLimitReached && (
                  <div className="mt-6 rounded-3xl bg-yellow-50 p-5 ring-1 ring-yellow-100">
                    <p className="font-black text-yellow-900">You’ve reached your free monthly alert limit.</p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-yellow-800">Upgrade to Personal Pro to post more alerts when billing is enabled.</p>
                    <Link to="/dashboard/billing" className="btn btn-primary mt-4 sm:w-auto">View upgrade options</Link>
                  </div>
                )}
              </div>

              <div className="rounded-[2rem] bg-emerald-950 p-6 text-white shadow-xl">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-yellow-300">Upgrade plan</p>
                <h2 className="mt-3 text-2xl font-black">Unlock more alert tools</h2>
                <p className="mt-3 text-sm font-semibold leading-6 text-emerald-50/80">
                  Paid plans for Pro, Business, and Agency accounts are prepared for future billing integration.
                </p>
                <Link to="/dashboard/billing" className="btn mt-5 bg-white text-slate-950">Compare plans</Link>
              </div>
            </section>

            <section className="grid gap-5 xl:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-xl font-black text-slate-950">My alerts</h2>
                  <Link to="/dashboard/alerts" className="text-sm font-black text-emerald-700 hover:underline">View all</Link>
                </div>
                <div className="mt-5 grid gap-3">
                  {[
                    ['Community Search Notice', 'Draft', 'Kingston'],
                    ['Road Safety Update', 'Pending review', 'St. Catherine'],
                    ['Missing-person tip request', 'Published', 'St. James'],
                  ].map(([title, status, parish]) => (
                    <article key={title} className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-100">
                      <p className="font-black text-slate-950">{title}</p>
                      <p className="mt-1 text-sm font-semibold text-slate-500">{parish} · {status}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h2 className="text-xl font-black text-slate-950">Notifications</h2>
                <div className="mt-5 grid gap-3">
                  {[
                    'Your dashboard foundation is ready.',
                    'Billing and license management are coming next.',
                    'Remember to verify details before posting alerts.',
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
      }}
    </DashboardShell>
  );
}