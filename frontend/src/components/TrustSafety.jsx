import { safetyTips } from '../lib/demoData';

export default function TrustSafety() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white py-16 sm:py-24" id="safety">
      <div className="container-premium">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="badge bg-white text-emerald-700 shadow-sm">Trust & safety</span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">Verified information saves time and protects families.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              876Alert is designed around careful sharing, privacy-conscious reporting, and practical public safety guidance.
            </p>
          </div>

          <div className="grid gap-4">
            {safetyTips.slice(0, 6).map((tip, index) => (
              <div key={tip} className="card-premium flex gap-4 rounded-3xl p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-600 font-black text-white">{index + 1}</div>
                <p className="self-center font-semibold leading-7 text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}