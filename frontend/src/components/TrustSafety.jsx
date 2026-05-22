import { safetyTips } from '../lib/demoData';

export default function TrustSafety() {
  return (
    <section className="py-20 bg-emerald-50/50" id="safety">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Trust & Safety</h2>
            <p className="mt-2 text-gray-600 max-w-prose">We prioritize accurate information and community well-being. Please avoid sharing unverified details and always contact local authorities first in emergencies.</p>
            <ul className="mt-6 space-y-3">
              {safetyTips.map((t, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-white text-xs" style={{background:'#009B3A'}}>✓</span>
                  <span className="text-gray-800">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Our Principles</h3>
            <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border p-4">
                <dt className="font-medium text-gray-900">Privacy first</dt>
                <dd className="text-gray-600">Handle sensitive details carefully and lawfully.</dd>
              </div>
              <div className="rounded-xl border p-4">
                <dt className="font-medium text-gray-900">Verified info</dt>
                <dd className="text-gray-600">We promote verified and cross-checked alerts.</dd>
              </div>
              <div className="rounded-xl border p-4">
                <dt className="font-medium text-gray-900">Community powered</dt>
                <dd className="text-gray-600">Jamaicans helping Jamaicans across 14 parishes.</dd>
              </div>
              <div className="rounded-xl border p-4">
                <dt className="font-medium text-gray-900">Always on</dt>
                <dd className="text-gray-600">Mobile-friendly access whenever you need it.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
