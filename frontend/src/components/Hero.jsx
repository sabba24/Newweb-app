import logoMark from '../assets/logo-mark.svg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0" style={{background: 'linear-gradient(180deg, #ffffff 0%, #F0FDF4 100%)'}} />
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-20" style={{background: 'radial-gradient(circle, #009B3A 0%, transparent 60%)'}} />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-20" style={{background: 'radial-gradient(circle, #FED100 0%, transparent 60%)'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium" style={{borderColor:'#009B3A', color:'#065F46'}}>
            <img src={logoMark} alt="" className="h-5 w-5"/> Jamaica Public Safety Platform
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
            Unite to find the missing. Respond to emergencies. Together.
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            876Alert empowers communities across Jamaica to act quickly with verified alerts and public reports — because every minute matters.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#missing" className="btn btn-primary">Browse Missing Persons</a>
            <a href="#alerts" className="btn btn-outline">See Latest Alerts</a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <dt className="text-sm text-gray-500">Reports</dt>
              <dd className="mt-1 text-2xl font-bold text-gray-900">1,200+</dd>
            </div>
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <dt className="text-sm text-gray-500">Communities</dt>
              <dd className="mt-1 text-2xl font-bold text-gray-900">14 Parishes</dd>
            </div>
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <dt className="text-sm text-gray-500">Recoveries</dt>
              <dd className="mt-1 text-2xl font-bold text-gray-900">300+</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="rounded-2xl border bg-white p-6 shadow-xl">
            <div className="grid grid-cols-3 gap-3">
              {[0,1,2,3,4,5].map((i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden border">
                  <div className="w-full h-full" style={{background: i%3===0? `url('/src/assets/person1.svg')` : i%3===1? `url('/src/assets/person2.svg')` : `url('/src/assets/person3.svg')`, backgroundSize:'cover', backgroundPosition:'center'}} />
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
