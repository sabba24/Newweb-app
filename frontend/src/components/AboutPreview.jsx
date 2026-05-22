export default function AboutPreview() {
  return (
    <section className="py-20 bg-white" id="about-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">About 876Alert</h2>
          <p className="mt-4 text-gray-700">876Alert is a Jamaica-first public safety platform. We connect communities, volunteers, and officials with timely information to improve outcomes in emergencies and missing person cases.</p>
          <p className="mt-3 text-gray-700">Built with privacy, trust, and accessibility in mind, our tools empower citizens to act quickly and responsibly.</p>
          <a href="/about" className="mt-6 inline-flex items-center gap-2 text-emerald-700 font-medium">Learn more<span aria-hidden>→</span></a>
        </div>
        <div className="rounded-2xl ring-1 ring-black/5 bg-gradient-to-br from-emerald-50 to-yellow-50 p-8">
          <ul className="grid sm:grid-cols-2 gap-4 text-sm">
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5"><span className="font-semibold text-gray-900">API-first</span><p className="text-gray-600">Modern Laravel backend with secure auth.</p></li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5"><span className="font-semibold text-gray-900">Community powered</span><p className="text-gray-600">Verified tips and alerts across parishes.</p></li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5"><span className="font-semibold text-gray-900">Mobile ready</span><p className="text-gray-600">Designed for quick access anywhere.</p></li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5"><span className="font-semibold text-gray-900">Privacy first</span><p className="text-gray-600">We minimise data and protect users.</p></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
