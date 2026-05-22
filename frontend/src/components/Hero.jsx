export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
            Unite to find the missing. Respond to emergencies. Together.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            876Alert is a community-powered platform for reporting and discovering missing persons and timely emergency alerts across Jamaica.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#missing" className="btn btn-primary">View Missing Persons</a>
            <a href="#alerts" className="btn btn-outline">See Latest Alerts</a>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl border bg-white p-6 shadow-xl">
            <div className="grid grid-cols-3 gap-3">
              {[0,1,2,3,4,5].map((i) => (
                <div key={i} className="aspect-square rounded-lg bg-emerald-50 border flex items-center justify-center">
                  <span className="text-emerald-700 font-semibold">876</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -z-10 -top-10 -left-10 w-32 h-32 rotate-12" style={{background: 'conic-gradient(from 45deg, #009B3A, #FED100, #000000, #FFFFFF)'}}></div>
        </div>
      </div>
    </section>
  );
}
