import logo from '../assets/logo.svg';
import logoMark from '../assets/logo-mark.svg';

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="flex-1 bg-[linear-gradient(135deg,#ffffff_0%,#ecfdf5_58%,#fff7cc_100%)]">
      <div className="container-premium grid min-h-[calc(100vh-5rem)] gap-8 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <section className="hidden overflow-hidden rounded-[2rem] border border-white/70 bg-emerald-950 p-8 text-white shadow-2xl lg:block">
          <div className="relative min-h-[36rem]">
            <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_20%_20%,rgba(254,209,0,0.3),transparent_26rem),linear-gradient(135deg,#064e3b,#009B3A)]" />
            <div className="relative z-10 flex h-full min-h-[36rem] flex-col justify-between p-8">
              <img src={logoMark} alt="" className="h-16 w-16" />
              <div>
                <p className="badge w-fit bg-white/10 text-yellow-100 ring-1 ring-white/10">Secure community access</p>
                <h2 className="mt-5 max-w-md text-5xl font-black tracking-tight">Coordinate alerts with confidence.</h2>
                <p className="mt-4 max-w-md text-lg leading-8 text-emerald-50/85">
                  Sign in to access reporting tools, saved alerts, and trusted safety workflows for Jamaican communities.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['Verified', 'Fast', 'Private'].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/12 p-4 text-center font-black backdrop-blur">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-md">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="mb-7 text-center">
              <img src={logo} alt="876Alert" className="mx-auto h-10 w-auto" />
              <h1 className="mt-7 text-3xl font-black tracking-tight text-gray-950">{title}</h1>
              <p className="mt-2 text-gray-600">{subtitle}</p>
            </div>
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}