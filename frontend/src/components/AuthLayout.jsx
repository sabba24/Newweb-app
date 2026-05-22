import logo from '../assets/logo.svg';
import logoMark from '../assets/logo-mark.svg';

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="flex-1 bg-[linear-gradient(135deg,#ffffff_0%,#ecfdf5_58%,#fff7cc_100%)]">
      <div className="container-premium grid min-h-[calc(100vh-5rem)] items-center gap-8 py-10 lg:grid-cols-[0.96fr_1.04fr]">
        <section className="hidden overflow-hidden rounded-[2rem] bg-emerald-950 p-8 text-white shadow-2xl lg:block">
          <div className="relative min-h-[34rem]">
            <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_20%_20%,rgba(254,209,0,0.3),transparent_24rem),linear-gradient(135deg,#064e3b,#009B3A)]" />
            <div className="relative z-10 flex h-full min-h-[34rem] flex-col justify-between p-8">
              <img src={logoMark} alt="" className="h-16 w-16" />
              <div>
                <p className="badge w-fit bg-white/10 text-yellow-100 ring-1 ring-white/10">Secure access</p>
                <h2 className="mt-5 max-w-md text-5xl font-black tracking-tight">Trusted safety access for your community.</h2>
                <p className="mt-4 max-w-md text-lg leading-8 text-emerald-50/85">
                  Sign in to monitor alerts, manage submissions, and access the 876Alert public safety experience.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['Verified', 'Responsive', 'Secure'].map((item) => (
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
              <h1 className="mt-7 text-3xl font-black tracking-tight text-slate-950">{title}</h1>
              <p className="mt-2 text-slate-600">{subtitle}</p>
            </div>
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}