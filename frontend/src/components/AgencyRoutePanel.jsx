const routeContent = {
  overview: ['Dashboard Overview', 'Operational summary for all agency command modules, active reports, staffing, and public safety response readiness.', ['8 live modules', '27 incidents', '86 officers']],
  activeIncidents: ['Active Incidents', 'Monitor live incidents, escalation level, dispatch assignments, response status, and parish-level impact.', ['27 active', '8 critical', '14 assigned']],
  verifiedReports: ['Verification Center', 'Review official reports that require confirmation, escalation, evidence inspection, or archival handling.', ['43 pending', '142 reviewed', '12 escalated']],
  missingPersons: ['Missing Persons Unit', 'Coordinate missing-person workflows, family contact, amber alert readiness, last-seen mapping, and case escalation.', ['18 active', '5 priority', '9 field teams']],
  emergencyAlerts: ['Emergency Alerts', 'Manage active alerts, critical warnings, parish advisories, and public safety notices awaiting broadcast.', ['9 critical', '6 active', '14 parishes']],
  emergencyBroadcasts: ['Emergency Broadcasts', 'Prepare public advisories, amber alerts, flood warnings, road closures, curfew notices, and suspect alerts.', ['6 drafts', '3 live', '14 parishes']],
  responders: ['Officers & Staff', 'Track online officers, response units, staff roles, shift schedules, and operational readiness by zone.', ['86 online', '42 available', '17 deployed']],
  dispatchQueue: ['Dispatch & Response', 'Prioritize incident dispatch, responder assignments, route planning, and escalation decisions.', ['31 queued', '19 routed', '7 urgent']],
  departmentManagement: ['Department Management', 'Manage agency details, assigned parishes, station locations, emergency contacts, notices, and unit assignments.', ['146 staff', '8 stations', '31 units']],
  patrolZones: ['Patrol Zones', 'Monitor zone coverage, hotspot indicators, route activity, patrol density, and response readiness.', ['14 zones', '8 hotspots', '31 patrols']],
  surveillanceRequests: ['Surveillance Requests', 'Coordinate CCTV review requests, public tips, location checks, and approved investigation support.', ['12 pending', '5 approved', '2 urgent']],
  vehiclesUnits: ['Vehicles & Units', 'Track vehicle readiness, unit assignments, maintenance status, dispatch availability, and response capacity.', ['31 units', '24 ready', '7 assigned']],
  evidenceMedia: ['Evidence / Media Files', 'Organize attached evidence, public media submissions, review status, and investigation support files.', ['68 files', '12 pending', '9 flagged']],
  wantedPersons: ['Wanted Persons', 'Manage suspect advisories, wanted-person alerts, verification, escalation, and public notice readiness.', ['11 active', '4 critical', '3 drafts']],
  publicSafetyNotices: ['Public Safety Notices', 'Prepare official notices, community advisories, event safety updates, and civic response guidance.', ['16 notices', '4 drafts', '2 urgent']],
  roadTrafficAlerts: ['Road & Traffic Alerts', 'Manage road closures, accident advisories, route warnings, and traffic unit response.', ['7 active', '3 closures', '5 units']],
  floodHurricaneWarnings: ['Flood / Hurricane Warnings', 'Coordinate weather alerts, flood advisories, hurricane notices, shelter guidance, and ODPEM messaging.', ['5 warnings', '2 critical', '14 monitored']],
  emergencyHotlines: ['Hotline Management', 'Monitor hotline intake, emergency call categories, escalation volume, and response recommendations.', ['119 police', '110 EMS', '211 child safety']],
  citizenComplaints: ['Citizen Complaints', 'Review public complaints, assigned handlers, status, response timing, and resolution history.', ['24 open', '9 assigned', '4 urgent']],
  caseManagement: ['Case Management', 'Manage active cases, ownership, evidence links, report timelines, and investigation milestones.', ['52 cases', '18 active', '7 escalated']],
  reportArchive: ['Report Archive', 'Search archived reports, closed cases, historical incidents, public advisories, and audit-ready records.', ['1,204 records', '86 closed', '42 flagged']],
  analyticsStatistics: ['Analytics & Statistics', 'Review incident trends, response performance, parish activity, report volume, and operational metrics.', ['14 parishes', '94% uptime', '18% increase']],
  agencyLicense: ['License Management', 'Manage monthly or annual agency license readiness, organization verification, permissions, and compliance checks.', ['Licensed', 'Annual active', 'Secure access']],
  billing: ['Agency Billing', 'Billing and agency licensing screens are prepared for the next phase. Payment processing is not connected yet.', ['Not connected', 'Monthly planned', 'Annual planned']],
  settings: ['Settings', 'Configure command center preferences, staff access, operational defaults, notification readiness, and security policies.', ['MFA ready', 'Roles planned', 'Audit ready']],
};

export default function AgencyRoutePanel({ type }) {
  const [title, body, stats] = routeContent[type] || routeContent.overview;

  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
      <section className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-800 ring-1 ring-blue-100">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.65)]" />
          Police Operations Module
        </div>
        <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-slate-600">{body}</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat} className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
              <p className="text-2xl font-black text-slate-950">{stat}</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-slate-400">Operational status</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-dashed border-blue-200 bg-blue-50/60 p-8 text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-800">Official module placeholder</p>
          <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-7 text-slate-600">
            This public safety management module is visually prepared while live agency workflows, permissions, and integrations remain disconnected.
          </p>
        </div>
      </section>

      <aside className="rounded-[2rem] border border-red-100 bg-white p-6 shadow-sm">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700">Authority notice</p>
        <h3 className="mt-3 text-2xl font-black text-slate-950">Verified agency use only</h3>
        <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
          These tools are designed for police departments, emergency agencies, dispatch teams, and licensed responders.
        </p>
        <div className="mt-5 grid gap-3">
          {['Role verification required', 'Audit-ready activity', 'Secure public safety workflow'].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-red-50 px-4 py-3 ring-1 ring-red-100">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.6)]" />
              <span className="text-sm font-black text-red-800">{item}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}