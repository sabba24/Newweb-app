import logoMark from '../assets/logo-mark.svg';

export default function AuthShowcase({ mode = 'register' }) {
  const isRegister = mode === 'register';

  return (
    <aside className="relative order-2 overflow-hidden rounded-[2rem] bg-emerald-950 p-6 text-white shadow-2xl lg:order-1 lg:min-h-[720px] lg:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(254,209,0,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(0,155,58,0.42),transparent_38%)]" />
      <div className="absolute right-[-4rem] top-20 h-56 w-56 rounded-full bg-yellow-300/20 blur-3xl" />
      <div className="absolute bottom-[-5rem] left-[-5rem] h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-200 ring-1 ring-white/10">
            <img src={logoMark} alt="" className="h-7 w-7" />
            876Alert network
          </div>

          <h1 className="mt-8 max-w-xl text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">
            {isRegister ? 'Join Jamaica’s public safety alert network.' : 'Welcome back to Jamaica’s safety alert network.'}
          </h1>

          <p className="mt-5 max-w-lg text-base leading-8 text-emerald-50/82">
            {isRegister
              ? 'Create a trusted account for reporting, sponsoring, and responding to missing-person and emergency alerts across Jamaican communities.'
              : 'Sign in to manage trusted safety updates, monitor missing-person reports, and stay connected to urgent parish alerts.'}
          </p>

          <div className="mt-8 grid gap-3">
            {[
              'Verified community-first missing-person alerts',
              'Emergency contacts and parish-level safety updates',
              'Sponsored visibility for families and local businesses',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-yellow-300 text-xs font-black text-slate-950">✓</span>
                <p className="text-sm font-bold leading-6 text-emerald-50">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-[1.75rem] bg-white p-5 text-slate-950 shadow-xl">
          <div className="absolute right-4 top-4 rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">Trusted access</div>
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-600 text-2xl text-white">🛡️</div>
          <p className="mt-5 text-2xl font-black tracking-tight">14 parishes connected</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
            Account access helps keep safety reports organized, responsible, and easier for communities to act on.
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {[
              ['24/7', 'Alerts'],
              ['119', 'Police'],
              ['110', 'EMS'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-slate-50 p-3 text-center ring-1 ring-slate-100">
                <p className="text-lg font-black text-slate-950">{value}</p>
                <p className="text-[0.65rem] font-black uppercase tracking-wide text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="relative mt-6 rounded-2xl bg-red-500/12 p-4 text-xs font-semibold leading-6 text-red-50 ring-1 ring-red-200/20">
          Emergency disclaimer: if someone is in immediate danger, contact official emergency services first before submitting or managing online reports.
        </p>
      </div>
    </aside>
  );
}