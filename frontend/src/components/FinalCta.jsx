import { Link } from 'react-router-dom';

export default function FinalCta() {
  return (
    <section className="bg-white pb-12 lg:pb-16">
      <div className="container-premium">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-300">Ready for community response</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Join the network helping Jamaica share safer, faster public alerts.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                Create an account to access trusted reporting tools and stay connected to emergency updates.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/register" className="btn btn-primary sm:w-auto">Register</Link>
              <Link to="/emergency-resources" className="btn bg-white text-slate-950 sm:w-auto">Emergency resources</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}