const commandStats = [
  { label: 'Active incidents', value: '27', status: 'Live', tone: 'red' },
  { label: 'Verified reports', value: '142', status: '+18 today', tone: 'blue' },
  { label: 'Emergency level', value: 'L-3', status: 'Elevated', tone: 'amber' },
  { label: 'Online responders', value: '86', status: 'Available', tone: 'green' },
  { label: 'Parish coverage', value: '14/14', status: 'National', tone: 'blue' },
  { label: 'System status', value: 'Secure', status: 'Encrypted', tone: 'green' },
];

const incidents = [
  { type: 'Amber Alert', parish: 'St. Catherine', time: '02:41', severity: 'critical', status: 'Dispatch active', verified: 'Verified' },
  { type: 'Missing Person', parish: 'Kingston', time: '02:36', severity: 'critical', status: 'Search team assigned', verified: 'Verified' },
  { type: 'Road Incident', parish: 'St. Ann', time: '02:28', severity: 'warning', status: 'Traffic unit en route', verified: 'Pending review' },
  { type: 'Weather Emergency', parish: 'Portland', time: '02:17', severity: 'warning', status: 'Advisory drafted', verified: 'Verified' },
  { type: 'Suspicious Activity', parish: 'St. James', time: '02:09', severity: 'medium', status: 'Patrol notified', verified: 'Under review' },
  { type: 'Community Report', parish: 'Clarendon', time: '01:58', severity: 'low', status: 'Queued', verified: 'Pending review' },
];

const zones = [
  ['Kingston', 92, 'Critical'],
  ['St. Catherine', 86, 'High'],
  ['St. James', 68, 'Elevated'],
  ['St. Ann', 54, 'Moderate'],
  ['Portland', 49, 'Weather watch'],
  ['Manchester', 32, 'Stable'],
];

const broadcastTools = [
  'Create emergency alert',
  'Push parish alert',
  'Mark critical',
  'Send public advisory',
  'Amber alert toggle',
  'Flood warning',
  'Road closure notice',
];

const reviewQueue = [
  { reporter: 'Verified Community Liaison', parish: 'Kingston', severity: 'Critical', status: 'Pending verification', media: 3 },
  { reporter: 'Responder Unit 4', parish: 'St. Catherine', severity: 'High', status: 'Escalated', media: 2 },
  { reporter: 'Public Hotline Intake', parish: 'St. James', severity: 'Medium', status: 'Reviewed', media: 1 },
  { reporter: 'Agency Desk Review', parish: 'Clarendon', severity: 'Low', status: 'Archived', media: 0 },
];

const severityStyles = {
  critical: 'border-red-500/40 bg-red-500/10 text-red-200 shadow-[0_0_28px_rgba(239,68,68,0.12)]',
  warning: 'border-amber-400/40 bg-amber-400/10 text-amber-100 shadow-[0_0_28px_rgba(251,191,36,0.1)]',
  medium: 'border-blue-400/40 bg-blue-400/10 text-blue-100',
  low: 'border-slate-500/40 bg-slate-500/10 text-slate-200',
};

function toneClasses(tone) {
  if (tone === 'red') return 'from-red-500/18 to-red-950/20 text-red-200 ring-red-400/20';
  if (tone === 'amber') return 'from-amber-400/18 to-amber-950/20 text-amber-100 ring-amber-300/20';
  if (tone === 'green') return 'from-emerald-400/16 to-emerald-950/20 text-emerald-100 ring-emerald-300/20';
  return 'from-blue-400/18 to-blue-950/20 text-blue-100 ring-blue-300/20';
}

export default function AgencyOperationsCenter() {
  return (
    <div className="grid gap-5 text-slate-100">
      <section className="relative overflow-hidden rounded-[2rem] border border-blue-400/20 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_34%),linear-gradient(135deg,#08111f_0%,#101827_55%,#05070d_100%)] p-6 shadow-[0_30px_90px_rgba(2,6,23,0.42)] sm:p-8">
        <div className="absolute right-6 top-6 hidden h-24 w-24 rounded-full border border-blue-300/20 bg-blue-400/10 blur-xl lg:block" />
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-100">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
              Live secure command channel
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl">Agency Operations Center</h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-slate-300">
              Tactical command overview for verified incidents, emergency broadcasts, responder deployment, and parish-level activity monitoring.
            </p>
          </div>

          <div className="rounded-3xl border border-red-400/30 bg-red-500/10 p-4 text-right shadow-[0_0_32px_rgba(239,68,68,0.12)]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-200">Emergency level</p>
            <p className="mt-1 text-4xl font-black text-white">L-3</p>
            <p className="text-sm font-bold text-red-100">Elevated readiness</p>
          </div>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
          {commandStats.map((item) => (
            <div key={item.label} className={`rounded-3xl bg-gradient-to-br p-4 ring-1 ${toneClasses(item.tone)}`}>
              <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
              <p className="mt-2 text-2xl font-black text-white">{item.value}</p>
              <p className="mt-1 text-xs font-black">{item.status}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_0.86fr]">
        <div className="rounded-[2rem] border border-slate-700/70 bg-slate-950 p-5 shadow-[0_24px_70px_rgba(2,6,23,0.35)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">Live incident feed</p>
              <h3 className="mt-2 text-2xl font-black text-white">Real-time verified activity</h3>
            </div>
            <span className="rounded-full bg-emerald-400/10 px-3 py-2 text-xs font-black uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-300/20">
              Streaming
            </span>
          </div>

          <div className="mt-5 max-h-[430px] space-y-3 overflow-hidden pr-1">
            {incidents.map((incident) => (
              <article key={`${incident.type}-${incident.time}`} className={`rounded-3xl border p-4 ${severityStyles[incident.severity]}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] opacity-80">{incident.time} · {incident.parish}</p>
                    <h4 className="mt-1 text-lg font-black text-white">{incident.type}</h4>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[0.68rem] font-black uppercase tracking-wide">
                    {incident.severity}
                  </span>
                </div>
                <div className="mt-3 grid gap-2 text-xs font-bold sm:grid-cols-2">
                  <p className="rounded-2xl bg-black/18 px-3 py-2">Response: {incident.status}</p>
                  <p className="rounded-2xl bg-black/18 px-3 py-2">Verification: {incident.verified}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-blue-400/20 bg-[#07111f] p-5 shadow-[0_24px_70px_rgba(2,6,23,0.28)]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">Tactical response map</p>
            <h3 className="mt-2 text-2xl font-black text-white">Response zones</h3>

            <div className="mt-5 rounded-3xl border border-slate-700 bg-slate-900/80 p-4">
              <div className="grid grid-cols-3 gap-2">
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

          <div className="rounded-[2rem] border border-amber-300/20 bg-amber-400/10 p-5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-200">Deployment overview</p>
            <div className="mt-4 grid gap-3">
              {['Northern Corridor: 12 units', 'Metro Kingston: 24 units', 'Western Response: 17 units'].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl bg-black/20 px-4 py-3">
                  <span className="text-sm font-black text-white">{item}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.86fr_1fr]">
        <div className="rounded-[2rem] border border-slate-700 bg-slate-950 p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">Alert control center</p>
          <h3 className="mt-2 text-2xl font-black text-white">Emergency broadcast tools</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {broadcastTools.map((tool) => (
              <button key={tool} className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-4 text-left text-sm font-black text-slate-100 transition hover:border-blue-300/50 hover:bg-blue-500/10 hover:text-blue-100">
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-700 bg-slate-950 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">Verified reports</p>
              <h3 className="mt-2 text-2xl font-black text-white">Professional review queue</h3>
            </div>
            <div className="flex flex-wrap gap-2 text-[0.68rem] font-black uppercase tracking-wide">
              {['Pending', 'Reviewed', 'Escalated', 'Archived'].map((status) => (
                <span key={status} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-slate-300">{status}</span>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {reviewQueue.map((report) => (
              <article key={`${report.reporter}-${report.parish}`} className="rounded-3xl border border-slate-700 bg-slate-900 p-4">
                <div className="grid gap-4 lg:grid-cols-[1fr_130px]">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge bg-blue-400/10 text-blue-100 ring-1 ring-blue-300/20">{report.status}</span>
                      <span className="badge bg-red-400/10 text-red-100 ring-1 ring-red-300/20">{report.severity}</span>
                    </div>
                    <h4 className="mt-3 font-black text-white">{report.reporter}</h4>
                    <p className="mt-1 text-sm font-semibold text-slate-400">{report.parish} · {report.media} media attachment{report.media === 1 ? '' : 's'}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-black text-white">Approve</button>
                      <button className="rounded-full bg-amber-400 px-4 py-2 text-xs font-black text-slate-950">Escalate</button>
                      <button className="rounded-full bg-slate-800 px-4 py-2 text-xs font-black text-slate-200 ring-1 ring-slate-700">Archive</button>
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