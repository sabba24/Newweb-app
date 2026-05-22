const metrics = [
  { label: 'Active Incidents', value: '27', detail: '8 critical', icon: '📍', tone: 'red' },
  { label: 'Missing Persons', value: '18', detail: '5 priority', icon: '🧭', tone: 'amber' },
  { label: 'Verified Reports', value: '142', detail: '+18 today', icon: '✅', tone: 'blue' },
  { label: 'Emergency Broadcasts', value: '6', detail: '3 active', icon: '📡', tone: 'blue' },
  { label: 'Officers Online', value: '86', detail: '42 available', icon: '👮', tone: 'green' },
  { label: 'Active Patrol Units', value: '31', detail: '12 dispatched', icon: '🚓', tone: 'blue' },
  { label: 'Pending Verification', value: '43', detail: '12 escalated', icon: '🗂️', tone: 'amber' },
  { label: 'High Priority Alerts', value: '9', detail: 'Live response', icon: '🚨', tone: 'red' },
];

const incidents = [
  { type: 'Amber Alert', parish: 'St. Catherine', time: '02:41', severity: 'critical', status: 'Dispatch active', verified: 'Verified' },
  { type: 'Missing Person Priority', parish: 'Kingston', time: '02:36', severity: 'critical', status: 'Search team assigned', verified: 'Verified' },
  { type: 'Suspicious Activity', parish: 'St. James', time: '02:31', severity: 'high', status: 'Patrol notified', verified: 'Under review' },
  { type: 'Road Incident', parish: 'St. Ann', time: '02:28', severity: 'warning', status: 'Traffic unit en route', verified: 'Pending review' },
  { type: 'Weather Emergency', parish: 'Portland', time: '02:17', severity: 'warning', status: 'Advisory drafted', verified: 'Verified' },
];

const zones = [
  ['Kingston', 94, 'Critical'],
  ['St. Catherine', 88, 'High'],
  ['St. James', 72, 'Elevated'],
  ['St. Ann', 56, 'Moderate'],
  ['Portland', 51, 'Weather watch'],
  ['Manchester', 34, 'Stable'],
  ['Clarendon', 49, 'Active patrol'],
  ['Westmoreland', 28, 'Stable'],
];

const officers = [
  { name: 'Inspector Reid', badge: 'JA-2041', rank: 'Inspector', zone: 'Kingston Central', status: 'Active', shift: 'Day Watch', stats: '94%' },
  { name: 'Sgt. Campbell', badge: 'JA-1187', rank: 'Sergeant', zone: 'St. Catherine', status: 'Active', shift: 'Response', stats: '91%' },
  { name: 'Cpl. Morgan', badge: 'JA-3022', rank: 'Corporal', zone: 'St. James', status: 'On Call', shift: 'Night Watch', stats: '88%' },
  { name: 'Constable Blake', badge: 'JA-4470', rank: 'Constable', zone: 'Portland', status: 'Inactive', shift: 'Standby', stats: '82%' },
];

const dispatchItems = [
  ['Critical', 'Amber Alert follow-up', 'Unit K-12', '8 min'],
  ['High', 'Suspicious activity report', 'Patrol W-04', '14 min'],
  ['Warning', 'Road closure assistance', 'Traffic T-7', '19 min'],
];

const missingPersons = [
  ['Priority Alert', 'Aaliyah Brown', 'Kingston', 'Family contact verified', 'Escalated'],
  ['Public Report', 'Kevon Miller', 'Kingston', 'Evidence pending', 'Under review'],
  ['Verification Queue', 'Brianna Clarke', 'St. Mary', 'Last-seen mapping ready', 'Priority'],
];

const reports = [
  { reporter: 'Verified Community Liaison', contact: '876-222-0149', parish: 'Kingston', risk: 'Critical', status: 'Pending verification', media: 3 },
  { reporter: 'Responder Unit 4', contact: 'Agency channel', parish: 'St. Catherine', risk: 'High', status: 'Escalated', media: 2 },
  { reporter: 'Anonymous Public Tip', contact: 'Hidden', parish: 'St. James', risk: 'Medium', status: 'Verified', media: 1 },
  { reporter: 'Agency Desk Review', contact: 'Internal', parish: 'Clarendon', risk: 'Low', status: 'Rejected', media: 0 },
];

const broadcastTools = [
  'Amber Alert',
  'Parish Alert',
  'Flood Warning',
  'Curfew Notice',
  'Road Closure',
  'Wanted Suspect Alert',
  'Public Safety Advisory',
];

function toneClasses(tone) {
  if (tone === 'red') return 'border-red-100 bg-red-50 text-red-700';
  if (tone === 'amber') return 'border-amber-100 bg-amber-50 text-amber-800';
  if (tone === 'green') return 'border-emerald-100 bg-emerald-50 text-emerald-700';
  return 'border-blue-100 bg-blue-50 text-blue-700';
}

function severityClass(severity) {
  if (severity === 'critical') return 'bg-red-100 text-red-700 ring-red-200';
  if (severity === 'high') return 'bg-orange-100 text-orange-700 ring-orange-200';
  if (severity === 'warning') return 'bg-amber-100 text-amber-800 ring-amber-200';
  return 'bg-blue-100 text-blue-700 ring-blue-200';
}

function statusClass(status) {
  if (status === 'Active' || status === 'Verified') return 'bg-emerald-50 text-emerald-700 ring-emerald-100';
  if (status === 'Inactive' || status === 'Rejected') return 'bg-slate-100 text-slate-600 ring-slate-200';
  if (status === 'Escalated' || status === 'Priority') return 'bg-red-50 text-red-700 ring-red-100';
  return 'bg-amber-50 text-amber-800 ring-amber-100';
}

export default function AgencyOperationsCenter() {
  return (
    <div className="grid w-full gap-5 2xl:gap-6">
      <section className="w-full overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm">
        <div className="h-2 bg-gradient-to-r from-blue-800 via-blue-600 to-red-500" />
        <div className="grid gap-6 p-6 sm:p-8 2xl:grid-cols-[minmax(0,1fr)_520px] 2xl:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="badge bg-blue-50 text-blue-800 ring-1 ring-blue-100">Agency Account</span>
              <span className="badge bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">License Active</span>
              <span className="badge bg-red-50 text-red-700 ring-1 ring-red-100">Emergency Level 3</span>
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl">Agency Operations Center</h2>
            <p className="mt-3 max-w-5xl text-sm font-semibold leading-7 text-slate-600">
              Official public safety command system for emergency response, department management, missing persons, verified reports, patrol coverage, and parish-wide alerts.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ['Online officers', '86', 'emerald'],
              ['Active incidents', '27', 'red'],
              ['Parish coverage', '14/14', 'blue'],
              ['Current time', new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 'amber'],
            ].map(([label, value, tone]) => (
              <div key={label} className={`rounded-3xl border p-4 ${toneClasses(tone)}`}>
                <p className="text-xs font-black uppercase tracking-[0.16em] opacity-70">{label}</p>
                <p className="mt-1 text-2xl font-black text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid w-full gap-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-8">
        {metrics.map((metric) => (
          <article key={metric.label} className="group rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <div className={`grid h-12 w-12 place-items-center rounded-2xl border text-xl ${toneClasses(metric.tone)}`}>
                {metric.icon}
              </div>
              <span className={`rounded-full px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-wide ${toneClasses(metric.tone)}`}>
                Live
              </span>
            </div>
            <p className="mt-5 text-3xl font-black text-slate-950">{metric.value}</p>
            <p className="mt-1 font-black text-slate-800">{metric.label}</p>
            <p className="mt-1 text-sm font-semibold text-slate-500">{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="grid w-full gap-5 2xl:grid-cols-[minmax(0,1.1fr)_minmax(520px,0.9fr)]">
        <div className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">Live Incident Feed</p>
              <h3 className="mt-2 text-2xl font-black text-slate-950">Emergency operations stream</h3>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-black uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
              Live feed
            </span>
          </div>

          <div className="mt-5 grid gap-3">
            {incidents.map((incident) => (
              <article key={`${incident.type}-${incident.time}`} className="rounded-3xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-white hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className={`rounded-full px-3 py-1 text-[0.68rem] font-black uppercase tracking-wide ring-1 ${severityClass(incident.severity)}`}>
                      {incident.severity}
                    </span>
                    <h4 className="mt-3 text-lg font-black text-slate-950">{incident.type}</h4>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-slate-500">{incident.time} · {incident.parish}</p>
                  </div>
                  <div className="text-right text-xs font-bold text-slate-500">
                    <p>Response: <span className="text-slate-800">{incident.status}</span></p>
                    <p className="mt-1">Verification: <span className="text-blue-700">{incident.verified}</span></p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="rounded-full bg-blue-700 px-4 py-2 text-xs font-black text-white">Review</button>
                  <button className="rounded-full bg-red-600 px-4 py-2 text-xs font-black text-white">Escalate</button>
                  <button className="rounded-full bg-amber-300 px-4 py-2 text-xs font-black text-slate-950">Broadcast</button>
                  <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-black text-white">Dispatch</button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-blue-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">Operational Map / Parish Response Zones</p>
          <h3 className="mt-2 text-2xl font-black text-slate-950">Tactical deployment overview</h3>

          <div className="mt-5 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-slate-50 p-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {zones.map(([zone, level, status]) => (
                <div key={zone} className="rounded-2xl border border-white bg-white p-3 shadow-sm">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <p className="truncate text-xs font-black text-slate-800">{zone}</p>
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.65)]" />
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-700 via-amber-300 to-red-500" style={{ width: `${level}%` }} />
                  </div>
                  <p className="mt-2 text-[0.66rem] font-bold text-slate-500">{status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {['Patrol coverage active', '42 responders available', 'Emergency routing online'].map((item) => (
              <div key={item} className="rounded-2xl bg-blue-50 p-3 text-xs font-black text-blue-800 ring-1 ring-blue-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid w-full gap-5 2xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">Department Management</p>
          <h3 className="mt-2 text-2xl font-black text-slate-950">Jamaica Public Safety Division</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-2">
            {[
              ['Assigned parishes', 'Kingston, St. Andrew, St. Catherine'],
              ['Officer count', '146 active personnel'],
              ['Active units', '31 vehicles / response teams'],
              ['Shift scheduling', '3 live shifts configured'],
              ['Role management', 'Admin, Dispatcher, Verifier, Officer'],
              ['Station locations', '8 connected station desks'],
              ['Department notices', '2 urgent internal bulletins'],
              ['Emergency contacts', '119, 110, ODPEM linked'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">{label}</p>
                <p className="mt-2 text-sm font-black text-slate-900">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">Officers & Staff</p>
          <h3 className="mt-2 text-2xl font-black text-slate-950">Personnel management</h3>
          <div className="mt-5 grid gap-3">
            {officers.map((officer) => (
              <article key={officer.badge} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <span className={`badge ring-1 ${statusClass(officer.status)}`}>{officer.status}</span>
                      <span className="badge bg-blue-50 text-blue-700 ring-1 ring-blue-100">{officer.rank}</span>
                    </div>
                    <h4 className="mt-3 font-black text-slate-950">{officer.name}</h4>
                    <p className="mt-1 text-sm font-semibold text-slate-500">
                      Badge {officer.badge} · {officer.zone} · {officer.shift} · Performance {officer.stats}
                    </p>
                  </div>
                  <button className="rounded-full bg-white px-4 py-2 text-xs font-black text-blue-700 shadow-sm ring-1 ring-blue-100">Profile</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid w-full gap-5 xl:grid-cols-3">
        <div className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">Dispatch & Response</p>
          <h3 className="mt-2 text-2xl font-black text-slate-950">Active emergency queue</h3>
          <div className="mt-5 grid gap-3">
            {dispatchItems.map(([priority, incident, unit, eta]) => (
              <div key={incident} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                <div className="flex items-center justify-between gap-3">
                  <span className={`badge ring-1 ${priority === 'Critical' ? 'bg-red-50 text-red-700 ring-red-100' : priority === 'High' ? 'bg-amber-50 text-amber-800 ring-amber-100' : 'bg-blue-50 text-blue-700 ring-blue-100'}`}>{priority}</span>
                  <span className="text-xs font-black text-slate-500">ETA {eta}</span>
                </div>
                <p className="mt-3 font-black text-slate-950">{incident}</p>
                <p className="mt-1 text-sm font-semibold text-slate-500">{unit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">Missing Persons Unit</p>
          <h3 className="mt-2 text-2xl font-black text-slate-950">Priority case management</h3>
          <div className="mt-5 grid gap-3">
            {missingPersons.map(([type, name, parish, detail, status]) => (
              <div key={name} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                <div className="flex flex-wrap gap-2">
                  <span className="badge bg-red-50 text-red-700 ring-1 ring-red-100">{type}</span>
                  <span className={`badge ring-1 ${statusClass(status)}`}>{status}</span>
                </div>
                <p className="mt-3 font-black text-slate-950">{name}</p>
                <p className="mt-1 text-sm font-semibold text-slate-500">{parish} · {detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">Emergency Broadcast Tools</p>
          <h3 className="mt-2 text-2xl font-black text-slate-950">Quick public notices</h3>
          <div className="mt-5 grid gap-3">
            {broadcastTools.map((tool) => (
              <button key={tool} className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-left text-sm font-black text-blue-800 transition hover:bg-blue-700 hover:text-white">
                {tool}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">Community Reports</p>
            <h3 className="mt-2 text-2xl font-black text-slate-950">Professional verification queue</h3>
          </div>
          <div className="flex flex-wrap gap-2 text-[0.68rem] font-black uppercase tracking-wide">
            {['Pending', 'Verified', 'Rejected', 'Escalated'].map((status) => (
              <span key={status} className="rounded-full bg-slate-100 px-3 py-2 text-slate-600 ring-1 ring-slate-200">{status}</span>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-3 2xl:grid-cols-2">
          {reports.map((report) => (
            <article key={`${report.reporter}-${report.parish}`} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
              <div className="grid gap-4 lg:grid-cols-[1fr_130px]">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className={`badge ring-1 ${statusClass(report.status)}`}>{report.status}</span>
                    <span className="badge bg-red-50 text-red-700 ring-1 ring-red-100">{report.risk}</span>
                  </div>
                  <h4 className="mt-3 font-black text-slate-950">{report.reporter}</h4>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{report.parish} · {report.contact} · {report.media} media attachment{report.media === 1 ? '' : 's'}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-black text-white">Approve</button>
                    <button className="rounded-full bg-slate-800 px-4 py-2 text-xs font-black text-white">Reject</button>
                    <button className="rounded-full bg-amber-300 px-4 py-2 text-xs font-black text-slate-950">Escalate</button>
                  </div>
                </div>
                <div className="grid min-h-28 place-items-center rounded-2xl border border-dashed border-slate-300 bg-white text-center text-xs font-black uppercase tracking-wide text-slate-400">
                  Media
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}