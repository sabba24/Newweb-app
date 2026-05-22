const metrics = [
  { label: 'Active Incidents', value: '27', detail: '8 critical', tone: 'red' },
  { label: 'Verified Reports', value: '142', detail: '+18 today', tone: 'blue' },
  { label: 'Pending Verification', value: '43', detail: '12 escalated', tone: 'amber' },
  { label: 'Missing Persons', value: '18', detail: '5 priority', tone: 'red' },
  { label: 'Critical Alerts', value: '9', detail: 'Live response', tone: 'red' },
  { label: 'Public Broadcasts', value: '6', detail: '3 active', tone: 'amber' },
  { label: 'Officers Online', value: '86', detail: '42 available', tone: 'green' },
  { label: 'Parish Coverage', value: '14/14', detail: 'National', tone: 'blue' },
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

const tools = [
  'Create Emergency Broadcast',
  'Push Parish Alert',
  'Amber Alert',
  'Flood Warning',
  'Road Closure',
  'Wanted/Suspect Advisory',
  'Missing Person Priority Alert',
];

const reports = [
  { reporter: 'Verified Community Liaison', contact: '876-222-0149', parish: 'Kingston', risk: 'Critical', status: 'Pending verification', media: 3 },
  { reporter: 'Responder Unit 4', contact: 'Agency channel', parish: 'St. Catherine', risk: 'High', status: 'Escalated', media: 2 },
  { reporter: 'Public Hotline Intake', contact: '119 intake', parish: 'St. James', risk: 'Medium', status: 'Reviewed', media: 1 },
  { reporter: 'Agency Desk Review', contact: 'Internal', parish: 'Clarendon', risk: 'Low', status: 'Archived', media: 0 },
];

function metricTone(tone) {
  if (tone === 'red') return 'border-red-400/20 bg-red-500/10 text-red-100 shadow-[0_0_26px_rgba(239,68,68,0.12)]';
  if (tone === 'amber') return 'border-amber-300/20 bg-amber-400/10 text-amber-100 shadow-[0_0_26px_rgba(251,191,36,0.1)]';
  if (tone === 'green') return 'border-emerald-300/20 bg-emerald-400/10 text-emerald-100 shadow-[0_0_26px_rgba(52,211,153,0.1)]';
  return 'border-blue-300/20 bg-blue-400/10 text-blue-100 shadow-[0_0_26px_rgba(59,130,246,0.12)]';
}

function severityClass(severity) {
  if (severity === 'critical') return 'bg-red-500/15 text-red-100 ring-red-300/30';
  if (severity === 'high') return 'bg-orange-500/15 text-orange-100 ring-orange-300/30';
  if (severity === 'warning') return 'bg-amber-400/15 text-amber-100 ring-amber-300/30';
  return 'bg-blue-400/15 text-blue-100 ring-blue-300/30';
}

export default function AgencyOperationsCenter() {
  return (
    <div className="grid gap-5 text-slate-100">
      <section className="relative overflow-hidden rounded-[2rem] border border-blue-400/20 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.24),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.14),transparent_30%),linear-gradient(135deg,#07111f_0%,#111827_58%,#05070d_100%)] p-6 shadow-[0_34px_100px_rgba(2,6,23,0.46)] sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-100">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.95)]" />
              Encrypted command channel
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl">Agency Operations Center</h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-slate-300">
              Tactical emergency-response console for verified incidents, dispatch visibility, public broadcasts, and parish-level command operations.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-blue-300/20 bg-blue-400/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">License status</p>
              <p className="mt-1 text-2xl font-black text-white">Active</p>
              <p className="text-xs font-bold text-blue-100">Annual agency license</p>
            </div>
            <div className="rounded-3xl border border-red-400/30 bg-red-500/10 p-4 shadow-[0_0_32px_rgba(239,68,68,0.14)]">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-200">Emergency status</p>
              <p className="mt-1 text-2xl font-black text-white">Level 3</p>
              <p className="text-xs font-bold text-red-100">Elevated readiness</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-xs font-black uppercase tracking-wide">
          <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-emerald-200">86 active units online</span>
          <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-blue-100">Last sync: 02:44:18</span>
          <span className="rounded-full border border-amber-300/20 bg-amber-400/10 px-4 py-2 text-amber-100">14 parishes monitored</span>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <article key={metric.label} className={`rounded-3xl border p-5 ${metricTone(metric.tone)}`}>
            <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
            <p className="mt-2 text-3xl font-black text-white">{metric.value}</p>
            <p className="mt-1 text-xs font-black">{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[2rem] border border-slate-700/80 bg-slate-950 p-5 shadow-[0_24px_70px_rgba(2,6,23,0.38)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">Live incident feed</p>
              <h3 className="mt-2 text-2xl font-black text-white">Tactical operations stream</h3>
            </div>
            <span className="rounded-full bg-emerald-400/10 px-3 py-2 text-xs font-black uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-300/20">
              Live
            </span>
          </div>

          <div className="mt-5 max-h-[520px] space-y-3 overflow-hidden pr-1">
            {incidents.map((incident) => (
              <article key={`${incident.type}-${incident.time}`} className="rounded-3xl border border-slate-700 bg-slate-900 p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className={`rounded-full px-3 py-1 text-[0.68rem] font-black uppercase tracking-wide ring-1 ${severityClass(incident.severity)}`}>
                      {incident.severity}
                    </span>
                    <h4 className="mt-3 text-lg font-black text-white">{incident.type}</h4>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-slate-400">{incident.time} · {incident.parish}</p>
                  </div>
                  <div className="text-right text-xs font-bold text-slate-400">
                    <p>Response: <span className="text-slate-200">{incident.status}</span></p>
                    <p className="mt-1">Verification: <span className="text-blue-200">{incident.verified}</span></p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="rounded-full bg-blue-500 px-4 py-2 text-xs font-black text-white">Review</button>
                  <button className="rounded-full bg-red-500 px-4 py-2 text-xs font-black text-white">Escalate</button>
                  <button className="rounded-full bg-amber-400 px-4 py-2 text-xs font-black text-slate-950">Broadcast</button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-blue-400/20 bg-[#07111f] p-5 shadow-[0_24px_70px_rgba(2,6,23,0.3)]">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">Operational Map / Parish Response Zones</p>
          <h3 className="mt-2 text-2xl font-black text-white">Deployment overview</h3>

          <div className="mt-5 rounded-3xl border border-slate-700 bg-slate-900/80 p-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {zones.map(([zone, level, status]) => (
                <div key={zone} className="rounded-2xl border border-slate-700 bg-slate-950 p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <p className="truncate text-xs font-black text-slate-200">{zone}</p>
                    <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)]" />
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-amber-300 to-red-500" style={{ width: `${level}%` }} />
                  </div>
                  <p className="mt-2 text-[0.66rem] font-bold text-slate-400">{status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {['Emergency routing active', '42 responders available', '8 dispatch units ready'].map((item) => (
              <div key={item} className="rounded-2xl bg-blue-400/10 p-3 text-xs font-black text-blue-100 ring-1 ring-blue-300/10">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.78fr_1fr]">
        <div className="rounded-[2rem] border border-slate-700 bg-slate-950 p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">Dispatch / Broadcast Panel</p>
          <h3 className="mt-2 text-2xl font-black text-white">Emergency tools</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {tools.map((tool) => (
              <button key={tool} className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-4 text-left text-sm font-black text-slate-100 transition hover:border-blue-300/50 hover:bg-blue-500/10 hover:text-blue-100">
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-700 bg-slate-950 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">Verification queue</p>
              <h3 className="mt-2 text-2xl font-black text-white">Community reports under review</h3>
            </div>
            <div className="flex flex-wrap gap-2 text-[0.68rem] font-black uppercase tracking-wide">
              {['Pending', 'Reviewed', 'Escalated', 'Archived'].map((status) => (
                <span key={status} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-slate-300">{status}</span>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {reports.map((report) => (
              <article key={`${report.reporter}-${report.parish}`} className="rounded-3xl border border-slate-700 bg-slate-900 p-4">
                <div className="grid gap-4 lg:grid-cols-[1fr_130px]">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge bg-blue-400/10 text-blue-100 ring-1 ring-blue-300/20">{report.status}</span>
                      <span className="badge bg-red-400/10 text-red-100 ring-1 ring-red-300/20">{report.risk}</span>
                    </div>
                    <h4 className="mt-3 font-black text-white">{report.reporter}</h4>
                    <p className="mt-1 text-sm font-semibold text-slate-400">{report.parish} · {report.contact} · {report.media} media attachment{report.media === 1 ? '' : 's'}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-black text-white">Approve</button>
                      <button className="rounded-full bg-slate-800 px-4 py-2 text-xs font-black text-slate-200 ring-1 ring-slate-700">Reject</button>
                      <button className="rounded-full bg-amber-400 px-4 py-2 text-xs font-black text-slate-950">Escalate</button>
                    </div>
                  </div>
                  <div className="grid min-h-28 place-items-center rounded-2xl border border-dashed border-slate-600 bg-slate-950 text-center text-xs font-black uppercase tracking-wide text-slate-500">
                    Media
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}