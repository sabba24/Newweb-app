const routeContent = {
  activeIncidents: {
    eyebrow: 'Active incidents',
    title: 'Incident command queue',
    body: 'Monitor active emergency events, responder assignments, escalation level, and parish impact from a secure operational queue.',
    stats: ['27 active', '8 critical', '14 assigned'],
  },
  verifiedReports: {
    eyebrow: 'Verified reports',
    title: 'Verification command desk',
    body: 'Review reports that require official confirmation, escalation, media inspection, or archival handling.',
    stats: ['43 pending', '142 reviewed', '12 escalated'],
  },
  missingPersons: {
    eyebrow: 'Missing persons',
    title: 'Missing-person response board',
    body: 'Coordinate urgent missing-person workflows, amber alert readiness, parish search coverage, and family support follow-up.',
    stats: ['18 active', '5 priority', '9 field teams'],
  },
  emergencyBroadcasts: {
    eyebrow: 'Emergency broadcasts',
    title: 'Public alert transmission center',
    body: 'Prepare parish-level public advisories, emergency broadcasts, amber alerts, flood warnings, and road closure notices.',
    stats: ['6 drafts', '3 live', '14 parishes'],
  },
  responders: {
    eyebrow: 'Responders',
    title: 'Responder availability grid',
    body: 'Track online officers, response units, emergency agency personnel, and deployment readiness by region.',
    stats: ['86 online', '42 available', '17 deployed'],
  },
  dispatchQueue: {
    eyebrow: 'Dispatch queue',
    title: 'Dispatch operations queue',
    body: 'Prioritize incident dispatch, route assignments, field response timing, and multi-agency coordination.',
    stats: ['31 queued', '19 routed', '7 urgent'],
  },
  communityReports: {
    eyebrow: 'Community reports',
    title: 'Community intelligence intake',
    body: 'Review community submissions, suspicious activity reports, tip quality, and verification history.',
    stats: ['74 today', '28 verified', '11 duplicates'],
  },
  agencyLicense: {
    eyebrow: 'Agency license',
    title: 'Agency license command',
    body: 'Manage monthly or annual agency license readiness, verified organization status, access permissions, and compliance checks.',
    stats: ['Licensed', 'Annual ready', 'Secure access'],
  },
  billing: {
    eyebrow: 'Billing',
    title: 'Agency billing readiness',
    body: 'Billing and agency licensing screens are prepared for the next phase. Payment processing is not connected yet.',
    stats: ['Not connected', 'Monthly planned', 'Annual planned'],
  },
  settings: {
    eyebrow: 'Settings',
    title: 'Secure agency settings',
    body: 'Configure command center preferences, staff access, operational defaults, and notification readiness.',
    stats: ['MFA ready', 'Roles planned', 'Audit ready'],
  },
};

export default function AgencyRoutePanel({ type }) {
  const page = routeContent[type] || routeContent.activeIncidents;

  return (
    <div className="grid gap-5 text-slate-100 xl:grid-cols-[1fr_360px]">
      <section className="rounded-[2rem] border border-blue-400/20 bg-[linear-gradient(135deg,#08111f_0%,#111827_58%,#05070d_100%)] p-6 shadow-[0_28px_80px_rgba(2,6,23,0.36)] sm:p-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-100">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />
          {page.eyebrow}
        </div>
        <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">{page.title}</h2>
        <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-slate-300">{page.body}</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {page.stats.map((stat) => (
            <div key={stat} className="rounded-3xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-2xl font-black text-white">{stat}</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Operational status</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-dashed border-slate-600 bg-slate-950/80 p-8 text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-200">Command module coming next</p>
          <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-7 text-slate-400">
            This secure operations module is visually prepared while live agency workflows, permissions, and payment licensing remain disconnected.
          </p>
        </div>
      </section>

      <aside className="rounded-[2rem] border border-red-400/20 bg-red-500/10 p-6 shadow-[0_20px_60px_rgba(127,29,29,0.16)]">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-red-200">Secure advisory</p>
        <h3 className="mt-3 text-2xl font-black text-white">Authority-only tools</h3>
        <p className="mt-3 text-sm font-semibold leading-7 text-red-50/80">
          These screens are intended for verified police departments, emergency agencies, and licensed responders.
        </p>
        <div className="mt-5 grid gap-3">
          {['Encrypted access channel', 'Role verification required', 'Audit log ready'].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-black/20 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 shadow-[0_0_16px_rgba(248,113,113,0.85)]" />
              <span className="text-sm font-black text-red-50">{item}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}