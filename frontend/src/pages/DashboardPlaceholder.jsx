import DashboardShell from '../components/DashboardShell';
import AgencyRoutePanel from '../components/AgencyRoutePanel';

const content = {
  alerts: {
    title: 'My alerts',
    eyebrow: 'Alert center',
    body: 'Manage posted alerts, drafts, review status, and community response activity here.',
  },
  createAlert: {
    title: 'Create alert',
    eyebrow: 'New safety alert',
    body: 'Alert creation tools are being prepared. This area will support missing-person and emergency alert submissions.',
  },
  billing: {
    title: 'Billing & upgrades',
    eyebrow: 'Plans coming next',
    body: 'Plan upgrades, monthly billing, annual agency licenses, and invoices will appear here when payments are connected.',
  },
  businessAds: {
    title: 'Business ads',
    eyebrow: 'Business tools',
    body: 'Business advertising and sponsored promotion tools are coming next for paid business accounts.',
  },
  promotions: {
    title: 'Promotions',
    eyebrow: 'Sponsored visibility',
    body: 'Create and manage community safety promotions, business campaigns, and sponsored placements here soon.',
  },
  agencyLicense: {
    title: 'Agency license',
    eyebrow: 'Police / Agency',
    body: 'Monthly and annual agency license management will be available here for verified organizations.',
  },
  verifiedReports: {
    title: 'Verified reports',
    eyebrow: 'Agency workflow',
    body: 'Verified report review, approval workflows, and official agency tools will be prepared here.',
  },
};

const agencyTitles = {
  activeIncidents: ['Incident command queue', 'Active incidents'],
  verifiedReports: ['Verification command desk', 'Verified reports'],
  missingPersons: ['Missing-person response board', 'Missing persons'],
  emergencyBroadcasts: ['Public alert transmission center', 'Emergency broadcasts'],
  responders: ['Responder availability grid', 'Responders'],
  dispatchQueue: ['Dispatch operations queue', 'Dispatch queue'],
  surveillanceRequests: ['Surveillance and intelligence requests', 'Surveillance requests'],
  communityReports: ['Community intelligence intake', 'Community reports'],
  emergencyHotlines: ['Hotline monitoring panel', 'Emergency hotlines'],
  agencyLicense: ['Agency license command', 'Agency license'],
  billing: ['Agency billing readiness', 'Billing'],
  settings: ['Secure agency settings', 'Settings'],
};

export default function DashboardPlaceholder({ type }) {
  const isAgency = localStorage.getItem('account_type') === 'agency';

  if (isAgency) {
    const [title, eyebrow] = agencyTitles[type] || agencyTitles.activeIncidents;

    return (
      <DashboardShell title={title} eyebrow={eyebrow}>
        <AgencyRoutePanel type={type} />
      </DashboardShell>
    );
  }

  const page = content[type] || content.alerts;

  return (
    <DashboardShell title={page.title} eyebrow={page.eyebrow}>
      <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
        <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
          <span className="badge bg-yellow-50 text-yellow-800 ring-1 ring-yellow-100">Coming next</span>
          <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-950">{page.title}</h2>
          <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-slate-600">{page.body}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['Design ready', 'Backend safe', 'Billing not connected'].map((item) => (
              <div key={item} className="rounded-3xl bg-slate-50 p-4 text-center ring-1 ring-slate-100">
                <p className="text-sm font-black text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="rounded-[2rem] bg-emerald-950 p-6 text-white shadow-xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-yellow-300">Foundation</p>
          <h3 className="mt-3 text-2xl font-black">Prepared for the next phase</h3>
          <p className="mt-3 text-sm font-semibold leading-6 text-emerald-50/80">
            This screen is intentionally polished but not wired to payment or ad systems yet.
          </p>
        </aside>
      </div>
    </DashboardShell>
  );
}