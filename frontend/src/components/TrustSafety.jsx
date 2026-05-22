import { safetyTips } from '../lib/demoData';

export default function TrustSafety() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white section-padding" id="safety">
      <div className="container-premium">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="section-eyebrow bg-white">Trust & safety</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">Verified information protects families.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              876Alert is designed around careful sharing, privacy-conscious reporting, and practical public safety guidance.
            </p>
          </div>

          <div className="grid gap-3">
            {safetyTips.slice(0, 6).map((tip, index) => (
              <div key={tip} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-600 text-sm font-black text-white">{index + 1}</div>
                <p className="self-center text-sm font-bold leading-6 text-slate-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}