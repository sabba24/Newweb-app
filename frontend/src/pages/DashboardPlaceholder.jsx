import DashboardShell from '../components/DashboardShell';
import AgencyRoutePanel from '../components/AgencyRoutePanel';
import MissingPersonAlertForm from '../components/MissingPersonAlertForm';
import BusinessAdForm from '../components/BusinessAdForm';
import DashboardReviewList from '../components/DashboardReviewList';
import { getAccountGroup, getStoredAccountType } from '../lib/accountTypes';

const content = {
  alerts: {
    title: 'My alerts',
    eyebrow: 'Alert center',
    body: 'Manage posted alerts, drafts, review status, and community response activity here.',
  },
  billing: {
    title: 'Billing & upgrades',
    eyebrow: 'Plans coming next',
    body: 'Plan upgrades, monthly billing, annual agency licenses, and invoices will appear here when payments are connected.',
  },
  promotions: {
    title: 'Promotions',
    eyebrow: 'Sponsored visibility',
    body: 'Create and manage community safety promotions, business campaigns, and sponsored placements here soon.',
  },
  campaigns: {
    title: 'Campaigns',
    eyebrow: 'Business campaigns',
    body: 'Campaign planning, sponsored public safety visibility, and performance summaries will appear here soon.',
  },
  websiteTraffic: {
    title: 'Website Traffic CTA',
    eyebrow: 'Business growth',
    body: 'Future website traffic call-to-action tools will help businesses route visitors from sponsored safety placements.',
  },
  adPerformance: {
    title: 'Ad Performance',
    eyebrow: 'Business analytics',
    body: 'Ad impressions, clicks, calls, conversions, and campaign performance will appear here when tracking is connected.',
  },
  planStatus: {
    title: 'Upgrade/Plan Status',
    eyebrow: 'Business plan',
    body: 'Business plan status, upgrade options, invoices, and payment history will appear here when billing is connected.',
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
  overview: ['Dashboard Overview', 'Operations Overview'],
  activeIncidents: ['Active Incidents', 'Incident Command'],
  verifiedReports: ['Verification Center', 'Verified Reports'],
  missingPersons: ['Missing Persons Unit', 'Missing Persons'],
  emergencyAlerts: ['Emergency Alerts', 'Alert Operations'],
  emergencyBroadcasts: ['Emergency Broadcasts', 'Broadcast Center'],
  responders: ['Officers & Staff', 'Personnel'],
  dispatchQueue: ['Dispatch & Response', 'Dispatch Queue'],
  departmentManagement: ['Department Management', 'Agency Administration'],
  patrolZones: ['Patrol Zones', 'Zone Coverage'],
  surveillanceRequests: ['Surveillance Requests', 'Investigations'],
  vehiclesUnits: ['Vehicles & Units', 'Fleet Operations'],
  evidenceMedia: ['Evidence / Media Files', 'Evidence Center'],
  wantedPersons: ['Wanted Persons', 'Wanted Alerts'],
  publicSafetyNotices: ['Public Safety Notices', 'Public Notices'],
  roadTrafficAlerts: ['Road & Traffic Alerts', 'Traffic Operations'],
  floodHurricaneWarnings: ['Flood / Hurricane Warnings', 'Weather Emergency'],
  emergencyHotlines: ['Hotline Management', 'Emergency Hotlines'],
  citizenComplaints: ['Citizen Complaints', 'Public Intake'],
  caseManagement: ['Case Management', 'Case Operations'],
  reportArchive: ['Report Archive', 'Archive'],
  analyticsStatistics: ['Analytics & Statistics', 'Analytics'],
  agencyLicense: ['License Management', 'Agency License'],
  billing: ['Agency Billing', 'Billing'],
  settings: ['Settings', 'System Settings'],
};

export default function DashboardPlaceholder({ type }) {
  const accountType = getStoredAccountType();
  const group = getAccountGroup(accountType);
  const isAgency = group === 'agency';

  if (isAgency) {
    const [title, eyebrow] = agencyTitles[type] || agencyTitles.overview;

    return (
      <DashboardShell title={title} eyebrow={eyebrow}>
        <AgencyRoutePanel type={type} />
      </DashboardShell>
    );
  }

  if (type === 'createAlert') {
    return (
      <DashboardShell title="Create Missing Person Alert" eyebrow="Missing person submission">
        <MissingPersonAlertForm accountType={accountType} />
      </DashboardShell>
    );
  }

  if (type === 'businessAds') {
    return (
      <DashboardShell title="Create Business Ad" eyebrow="Business promotion">
        <BusinessAdForm />
      </DashboardShell>
    );
  }

  if (type === 'myMissingAlerts') {
    return (
      <DashboardShell title="My Missing Person Alerts" eyebrow="Review queue">
        <DashboardReviewList type="missing" />
      </DashboardShell>
    );
  }

  if (type === 'myAds') {
    return (
      <DashboardShell title="My Ads" eyebrow="Business submissions">
        <DashboardReviewList type="ads" />
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